<template>
  <div class="leftSideBarComponent">
    <div class="leftSideBarComponent__listsContainer">
      <div class="leftSideBarComponent__listsContainer_mainList" v-for="(list, id) in numberOfLists" :key="id">
        <button class="leftSideBarComponent__listsContainer_mainList-button" @click="toggleList(list)">
          <span>></span>
          <input 
          type="checkbox" 
          v-model="allChecked" 
          @click="takeAll(list)"/>
          <span> list {{ list }}</span>
        </button>
        <ul class="leftSideBarComponent__listsContainer_mainList-list" v-for="(item, index) in numberOfItems" :key="index">
          <li  v-if="list === selectedList">
            <div class="left-block">
              <input type="checkbox" id="name" name="name" v-model="checkedItems[index]"/>
              Item {{ item }}
            </div>
            <div class="right-block">
              <input type="number" id="numberPick" v-model="countSquares"/>
              <input type="color" id="colorPick" v-model="selectedColor"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftSideBarComponent',
  data() {
    return {
      numberOfLists: 5,
      numberOfItems: 7,
      checkedItems: [],
      countSquares: 0,
      selectedList: null,
      selectedColor: null
    }
  },
  computed: {
    allChecked() {
      const result = this.checkedItems.length > 0 && this.checkedItems.every((item) => item);
      return result;
    },
  },
  methods: {
    toggleList(list) {
        this.selectedList = list;
    },
    takeAll() {
      if(this.allChecked === true){
        this.checkedItems = Array(7).fill(false)
      }else{
        this.checkedItems = Array(7).fill(true);
      }
    },
  }
}
</script>

<style scoped>
.leftSideBarComponent__listsContainer_mainList-list li {
  display: flex;
  margin-top: 5px;
  list-style-type: none;
  text-align: center;
  justify-content: space-between;
}
.left-block{
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-block{
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-block input{
  width: 30px;
  height: 30px;
  border: none;
  background: none;
}

.leftSideBarComponent {
  width: 30%;
  height: 100%;
  margin: 25px;
  padding: 15px;
  border: solid 1px grey;
}

.leftSideBarComponent__listsContainer_mainList {
  margin-bottom: 15px;
}

.leftSideBarComponent__listsContainer_mainList-button {
  display: inline-block;
  margin-right: 10px;
  width: fit-content;
  font-size: 20px;
  border: none;
  background: none;
}

.leftSideBarComponent__listsContainer_mainList-list {
  margin-left: 50px;
}

.leftSideBarComponent__listsContainer_mainList-button span {
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
}

.leftSideBarComponent__listsContainer_mainList-button-active{
  transform: rotate(90deg);
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;

}



.leftSideBarComponent__listsContainer_mainList-list input {
  margin-inline: 5px;
}
</style>
