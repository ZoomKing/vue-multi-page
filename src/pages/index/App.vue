<template lang='pug'>
  div#app
    a(href='about.html') {{'to about'}}
    <el-button size="small">评论</el-button>
    //- a(href='help.html') {{'to help'}}
    <router-view/>
</template>

<script>
import api from './api.js'
import { mapState,mapMutations} from 'vuex';
export default {
  name: 'App',
  created(){
    this.getData();
  },
  computed:{
  },
  methods:{
      async getData(){
        const wip = await api.getDate({
          url:'/h5/ads/query',
          params:{
              positionId:2,
              pageSize:1,
              currentPage:1
          }
        });
        this.pageCount = wip.value.pageCount;
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
