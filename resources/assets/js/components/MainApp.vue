<template>
    <div class="container-fluid">
        <navbar></navbar>
        <div class="row justify-content-center">
            <div class="col-md">
                <!-- <component v-bind:is="component"></component> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'

    export default {
        name: "main-app",
        components: {
            Navbar,
        },
        // props: ['component']
    }
</script>
