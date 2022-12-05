<template>
    <h2 class="text-4xl font-semibold my-5">{{title}}</h2>
</template>

<script>
    export default {
        name: 'ProjectTitle',
        props: {
            title: String
        }
    }
</script>