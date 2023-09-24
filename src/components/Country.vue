<script setup>

defineProps({
    id: String,
    name: String,
    capital: String,

})

</script>

<template>
    
    <li class="country">
        <RouterLink :to="{name: 'countries', params: {id}}">
            <h3 class="country-title">{{ name }}</h3>
            <p>{{  capital ? capital : "No Capital" }}</p>
        </RouterLink>
    </li>
</template>

<style scoped>

li{
    list-style: none;
}

.country{
    border: 1px solid #d6d6d6;
    padding: 20px;
    margin-bottom: 20px;
    width: 49%;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

}
.country-title{
    font-weight: 600;
}

@media screen and (max-width: 768px) {
    .country{
        width: 100%;
    }
}
</style>