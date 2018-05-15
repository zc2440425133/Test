<template>
  <div id="header">
      <a id="logo" href="/">
        <img src="../assets/logo.png">
        <span>Vue.js</span>
      </a>
      <ul id="nav">
        <li class="searchbar">
            <input type="text" id="search-query-nav" v-model="search">
            <ul class="searchresult" v-for="item in searchData ">  
                <li><span @click="go">{{item.name}} </span></li>  
            </ul>  
        </li>
        <Topbar :model="model" v-for="model in list" ></Topbar>
      </ul>
      <!-- <Topbar :model="list"></Topbar> -->
  </div>
</template>

<style lang="scss" scoped>
</style>

</<script>
var menuData = [
    {
        'name':'学习',
        'url':'',
        'child':[{
            'name':'教程',
            'url':'./content/course'
        },
        {
            'name':'API',
            'url':'./content/API'
        },
        {
            'name':'风格指南',
            'url':'./content/style'
        },
        {
            'name':'示例',
            'url':'./content/example'
        }]
    },{
        'name':'生态系统',
        'url':'',
        'child':[{
            'name':'论坛专区',
            'url':'./content/discuss'
        },
        {
            'name':'聊天室',
            'url':'./content/chat'
        }]
    },{
        'name':'团队',
        'url':''
    },{
        'name':'支持Vue',
        'url':'',
        'child':[{
            'name':'一次性赞助',
            'url':'./oncesupport'
        },
        {
            'name':'周期性赞助',
            'url':'./cyclesupport'
        },
        {
            'name':'T恤商店',
            'url':'./Tshirt'
        }]
    },{
        'name':'多语言',
        'url':'',
        'child':[{
            'name':'中文',
            'url':'./chinese'
        },
        {
            'name':'英文',
            'url':'./english'
        }]
    },{
        'name':'参与翻译',
        'url':''
    }
]

import Topbar from './Topbar'
import '../css/header.scss'

export default {
    name: 'Header',
    data(){
        return{
            search:'',
            list: menuData
        }
    },
    components:{
        Topbar
    },
    computed:{
        searchData: function() {  
            var search = this.search;
            if (search) {
                return this.list.filter(function(product) {
                    return Object.keys(product).some(function(key) {
                        return String(product[key]).toLowerCase().indexOf(search) > -1
                    })
                })
                return this.list;  
            }
        }  
    },
    methods:{
        go() {
          this.$router.push({ path: this.model.url});
        }
    }
}
</script>

