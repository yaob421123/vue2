<template>
    <div id="app">
        <vHeader></vHeader>
        <router-view></router-view>
        <vFooter></vFooter>
    </div>
</template>

<script>

import vHeader from './components/common/header'
import vFooter from './components/common/footer'

export default {
    components: {
        vHeader,
        vFooter
    },
    data () {
        return {

        }
    },
    created () {

    },
    methods: {

    }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
