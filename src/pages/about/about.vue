<template lang='pug'>
    div#about
        Header
        a(href='about.html') {{'to about1'}}
        a(href='help.html') {{'to help'}}
        Footer
</template>

<script>
import Header from '@/components/about/header'
import Footer from '@/components/about/footer'
export default {
    name:'about',
    computed:{
    },
    mounted(){
        console.log()
    },
    components:{
        Footer,Header
    }
}
</script>

<style type="text/css" scoped>
    a {
        display: block;
    }
</style>