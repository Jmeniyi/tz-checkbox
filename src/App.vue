<template>
  <div class="app">
      <leftSideBarComponentLV :lists="lists" />
    <div>
      <rightSideBarComponentLV :lists="lists" />
    </div>
  </div>
</template>

<script>
//import leftSideBarComponentSV from './components/supremeVersion/leftSideBarComponentSV.vue'
//import rightSideBarComponentSV from './components/supremeVersion/rightSideBarComponentSV.vue'
import leftSideBarComponentLV from './components/lightVersion/leftSideBarComponentLV.vue'
import rightSideBarComponentLV from './components/lightVersion/rightSideBarComponentLV.vue'
export default {
  name: 'App',
  components: {
    leftSideBarComponentLV,
    rightSideBarComponentLV
  },
  data() {
    return {
      lists: [
        {
          items: [
            { id: 1, checked: false, countSquare: 0, color: '' },
            { id: 2, checked: false, countSquare: 0, color: '' },
            { id: 3, checked: false, countSquare: 0, color: '' },
            { id: 4, checked: false, countSquare: 0, color: '' },
            { id: 5, checked: false, countSquare: 0, color: '' }
          ]
        },
        {
          items: [
            { id: 1, checked: false, countSquare: 0, color: '' },
            { id: 2, checked: false, countSquare: 0, color: '' },
            { id: 3, checked: false, countSquare: 0, color: '' },
            { id: 4, checked: false, countSquare: 0, color: '' },
            { id: 5, checked: false, countSquare: 0, color: '' }
          ]
        },
        {
          items: [
            { id: 1, checked: false, countSquare: 0, color: '' },
            { id: 2, checked: false, countSquare: 0, color: '' },
            { id: 3, checked: false, countSquare: 0, color: '' },
            { id: 4, checked: false, countSquare: 0, color: '' },
            { id: 5, checked: false, countSquare: 0, color: '' }
          ]
        },
        {
          items: [
            { id: 1, checked: false, countSquare: 0, color: '' },
            { id: 2, checked: false, countSquare: 0, color: '' },
            { id: 3, checked: false, countSquare: 0, color: '' },
            { id: 4, checked: false, countSquare: 0, color: '' },
            { id: 5, checked: false, countSquare: 0, color: '' }
          ]
        },
        {
          items: [
            { id: 1, checked: false, countSquare: 0, color: '' },
            { id: 2, checked: false, countSquare: 0, color: '' },
            { id: 3, checked: false, countSquare: 0, color: '' },
            { id: 4, checked: false, countSquare: 0, color: '' },
            { id: 5, checked: false, countSquare: 0, color: '' }
          ]
        }
      ]
    };
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
