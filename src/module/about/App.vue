<template lang='pug'>
	<div>
      vhead
      vabout
      vfoot
      a(href='./index.html') {{'go to index'}}
      div {{indexModule.name}}
  </div>
</template>

<script>
import { mapState,mapMutations} from 'vuex';
import vhead from '../../components/common/Head'
import vfoot from '../../components/common/Foot'
import vabout from '../../components/about/About'
export default {
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vhead,
      vfoot,
      vabout
    },
  computed:{
    ...mapState(['indexModule'])
  }
}
</script>

<style>

</style>
