<template>
    <li class="menu">
        <h3 v-if="model.type === 'title'">{{model.name}}</h3>
        <a v-if="model.type === 'subtitle'" @click="toggle" :class="open?'clicked':''">{{model.name}}</a>
        <!-- <span v-if="model.type === 'link'"  :class="open?'clicked':''" @click="go">{{model.name}} </span> -->
        <router-link v-if="model.type === 'link'" @click="toggle" :class="open?'clicked':''" :to="{path: model.url}">{{model.name}}</router-link>
        <ul class="menu-sub" v-show="open" v-if="isFolder">
            <Menu v-for="child in model.child" :model="child"></Menu>
        </ul>
    </li>
</template>
<script>
import '../css/menu.scss'

export default {
  name: 'Menu',
  props: {
      model: {
          type: Object,
          default: {}
      }
  },
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
  methods: {
      toggle: function(){
          if(this.isFolder){
              this.open = !this.open;
          }
      },
      go() {
          this.$router.push({ path: this.model.url});
      }
  }
}
</script>

<style lang="scss" scoped>
</style>

