<template lang='pug'>
    div#about
        Header
        p {{'help'}} 
        a(href='')
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

<style type="text/css">
    
</style>