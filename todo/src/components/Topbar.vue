<template>
    <li class="nav-dropdown-container">
        <a :href="model.url">{{model.name}}</a>
        <ul v-if="isFolder" class="nav-dropdown">
            <Topbar v-for="child in model.child" :model="child"></Topbar>
        </ul>
    </li>
    <!-- <ul v-if="isFolder" id="nav">
        <li v-for="item in model">
            <a v-if='isFolder'>{{item.name}}</a>
            <a v-if='!isFolder' :href="item.url">{{item.name}}</a>
            <Topbar :model="item.child"></Topbar>
        </li>
    </ul> -->
</template>
<script>
import '../css/topbar.scss'

export default {
  name: 'Topbar',
  props:['model'],
  components:{},
  data: function(){
      return{
          open:false
      }
  },
  computed: {
            isFolder(){
                return this.model.child && this.model.child.length
            }
        },
  methods:{
      toggle: function(){
          if(this.isFolder){
              this.open = !this.open;
          }
      }
  }
}
</script>

<style lang="scss" scoped>
</style>

