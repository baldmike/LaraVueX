<template>
    <div class="container">
        <navbar></navbar>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Main App</div>

                    <div class="card-body">
                        <h1>Hello World.</h1>
                    </div>
                </div>
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
        }
    }
</script>
