<template>
  <div class="app">
      <leftSideBarComponentLV/>
    <div>
      <rightSideBarComponentLV/>
    </div>
  </div>
</template>

<script>
import { store } from './store';
import leftSideBarComponentLV from './components/lightVersion/leftSideBarComponentLV.vue'
import rightSideBarComponentLV from './components/lightVersion/rightSideBarComponentLV.vue'
export default {
  name: 'App',
  store,
  components: {
    leftSideBarComponentLV,
    rightSideBarComponentLV
  },
  data() {
    return {
    
  }
},
mounted(){
  this.$store.commit('fillRandomValues');
}
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.app {
  display: flex;
}
</style>
