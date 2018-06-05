<template lang='pug'>
  div
    vhead
    vindex
    vfoot
    a(href='./about.html')
      span  {{'go to about'}}
    div(@click='changeName') {{pageCount}}
	
</template>

<script>
import { mapState,mapMutations} from 'vuex';
import vhead from '../../components/common/Head'
import vfoot from '../../components/common/Foot'
import vindex from '../../components/index/Index'
import api from './api.js'
export default {
  data(){
    return {
      pageCount:1
    }
  },
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vhead,
      vfoot,
      vindex
    },
    computed:{
       ...mapState(['indexModule'])
    },
    methods:{
      ...mapMutations(['changeMyName']),
      changeName(){
        this.changeMyName('guoyang')
      },
      async getData(){
        const wip = await api.getDate({
          url:'/h5/ads/query',
          params:{
              positionId:2,
              pageSize:1,
              currentPage:1
          }
        });
        console.log(wip)
        this.pageCount = wip.value.pageCount;
      }
    },
    created () {
      this.getData();
    }

}
</script>

<style lang='scss' scoped>
@import 'src/style/index.scss';
  a{
    color: $bgColor;
    display: flex;
    span{
      color: #333;
    }
  }
</style>
