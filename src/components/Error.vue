<script setup>
defineProps({
    message: String
}
)
</script>

<template>
    <!-- use computed value? -->
    <p class="error">{{ message ? message : "Oops something went wrong!"}}</p>
</template>

<style scoped>
    .error{
        text-align: center;
        margin-top: 15px;
    }
</style>