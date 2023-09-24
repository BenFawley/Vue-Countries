<script setup>

import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@vue/apollo-composable';

import Error from '../components/Error.vue';
import Loading from '../components/Loading.vue';
import { GET_COUNTRY_BY_ALPHA3CODE } from '../graphql/queries'

const country = ref({
    alpha3Code: "",
    name: "",
});

const route = useRoute();


const { loading, error, onResult } = useQuery(GET_COUNTRY_BY_ALPHA3CODE, {alpha3Code: route.params.id});

    onResult((response)=>{
        if(response.data){
            country.value = response.data.countries.edges[0].node;
        }
    })

</script>

<template>
    <Loading v-if="loading"/>

    <Error v-else-if="error" />

    <div v-else>
        <p>Country 3 letter code: {{ route.params.id }}</p>
        <p>Name: {{ country.name }}</p>
        <p>Capital: {{ country.capital ? country.capital : "No capital city" }}</p>
        <p>Population: {{ country.population }}</p>
        <!-- <p>Name: {{ route.params.country.result.value.countries.edges[0].node.name }}</p>-->

    </div>
   
</template>

<style scoped>

</style>