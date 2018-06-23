<template>
    <div>
        <List v-if="authStatus"/>
        <Welcome v-else/>
    </div>
</template>

<script>
    import Welcome from '../components/Welcome';
    import List from '../components/List';

    export default {
        components: {
            Welcome,
            List
        },
        computed: {
            authStatus: function() {
                return this.$store.state.authStatus;
            }
        }
    }
</script>