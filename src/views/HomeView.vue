<script setup>

import { ref, watch } from 'vue';
import { useQuery, useLazyQuery } from '@vue/apollo-composable';

import Country from '../components/Country.vue';
import Error from '../components/Error.vue';
import Loading from '../components/Loading.vue';
import { ALL_COUNTRIES_QUERY, SEARCHED_COUNTRY_QUERY } from '../graphql/queries';

const countries = ref([]);
const searchValue = ref("");
const offset = ref(0);

const { loading, error, onResult } = useQuery(ALL_COUNTRIES_QUERY, {
  offset,
});

onResult((response) => {
  if(response.data){
    countries.value = response.data.countries.edges;
  }
});

  //A bit of a hacky way to have 2 queries in the same component using aliases - probably need to put into a function/abstract away.
  const { loading: searchLoading, load, error: searchError, onResult: onSearchResult } = useLazyQuery(SEARCHED_COUNTRY_QUERY, {
      //may need to sanitize user input in real application
      searchValue: searchValue,
    });

  onSearchResult((response)=>{
    if(response.data){
      countries.value = response.data.countries.edges;
  }
  });

// ideal situation would use a debounced value to prevent a request being sent everytime the user types
watch(searchValue, ()=>{
    if(searchValue.value.length > 0){
      load();
    }
});

const handlePrevPage = () => {
  offset.value -= 20;
}
const handleNextPage = () => {
  offset.value+=20;
}

</script>

<template>
<main class="main-content">
    <div class="title-wrapper">
      <div>
        <h1 class="title">Countries of the World</h1>
        <p class="subtitle">Select a country below to find out more.</p>
      </div>
      <input class="search" placeholder="Search for a country..." type="text" v-model="searchValue">
  </div>

  <Loading v-if="loading || searchLoading"/>

  <Error v-else-if="error || searchError" />

    <div v-else>
      <div v-if="countries.length > 0">
        <ul  class="countries-wrapper">
          <!-- could refactor to just pass country object as prop -->
          <Country v-for="country in countries" :key="country.node.alpha3Code" :name="country.node.name" :capital="country.node.capital" :id="country.node.alpha3Code" />
        </ul>
        <div v-if="countries.length > 0  && searchValue.length < 1" class="pagination">
          <button :disabled="offset < 1" @click="handlePrevPage">Previous Page</button>
          <button @click="handleNextPage">Next Page</button>
        </div>
      </div>
      <Error v-else message="Sorry no countries found! Please try again."/>
    </div>
  </main>
</template>

<style scoped>
.search{
  padding: 5px;
  min-width: 250px;
}
.main-content{
  max-width: 1700px;
  margin: auto;
  padding: 2rem;
}

.title{
  font-weight:600;
}
.subtitle{
  margin-bottom: 40px;
}
.title-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.countries-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2%;
  padding: 0;
}
.pagination{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .title-wrapper{
  flex-direction: column;
}
.search{
  width: 100%;
  margin-bottom: 20px;
}
.subtitle{
  margin-bottom: 20px;
}
}
</style>
