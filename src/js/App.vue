<template>
    <div>
        <transition name="fade">
            <div v-if="loading" style="position: absolute; width: 100%; height: 100%; z-index: 5; background: #fff">
                <h3 class="text-center mt-5 pt-5">Loading...</h3>
            </div>
        </transition>
        <div>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import MainPage from './pages/MainPage';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import store from './store/';

    export default {
        store,
        components: {
            MainPage,
            Header,
            Footer
        },
        computed: {
            loading: function() {
                return this.$store.state.loading;
            }
        },
        beforeMount() {
            this.$store.dispatch(`initStore`);
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>