<template>
  <div class="rightSideBarComponentLV">
    <div class="rightSideBarComponentLV__containerLists" v-for="(list, id) in lists" :key="id">
      <div class="rightSideBarComponentLV__containerLists-head" @click="toggleList(list)">
        <span> list {{ id + 1 }}</span>
        <button @click="sortOrShuffle(id)">
          {{ buttonText }}
        </button>
      </div>
      <div v-if="list === selectedList">
        <div v-if="showShuffleList">
          <div class="arrayShuffle" v-for="(item, index) in shuffleArray(list)" :key="index"
            :style="{ backgroundColor: item.color }">
          </div>
        </div>
        <div v-else>
          <div v-for="(item, index) in filteredItems(selectedList).sort((a, b) => a.countSquare - b.countSquare)"
            :key="index">
            <ul>
              <li class="arraySorted" v-for="(square, squareIndex) in item.countSquare" :key="squareIndex"
                :style="{ backgroundColor: item.color }">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: "rightSideBarComponentLV",
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      buttonText: 'Перемешать',
      selectedList: null,
      showShuffleList: false,
      buttonDisabled:true
    };
  },
  computed: {
    filteredItems() {
      return (list) => {
        return (list.items ?? [])
          .filter((item) => item.checked === true)
      };
    },
    shuffleArray() {
      return (list) => {
        const filteredArray = this.filteredItems(list);
        if (this.showShuffleList) {
          return this.shuffle(
            filteredArray
              .map((item) => Array.from({ length: item.countSquare }, () => item))
              .flat()
          );
      }
    }
    },
  },
  methods: {
    sortOrShuffle() {
      this.showShuffleList = !this.showShuffleList;
      if (this.showShuffleList) {
        this.buttonText = 'Сортировать';
      } else {
        this.buttonText = 'Перемешать';
      }
    },
    toggleList(list) {
      this.selectedList = list;
    },
    shuffle(array) {
      let currentIndex = array.length;
      let temporaryValue, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
},

})
</script>

<style scoped>
.rightSideBarComponentLV {
  width: 35%;
  height: auto;
  margin: 25px;
  padding: 15px;
  border: solid 1px grey;
  position: absolute;
  right: 0;
}

.rightSideBarComponentLV__containerLists {
  margin-bottom: 15px;
  border: solid 1px grey;
  padding: 10px;
  list-style-type: none;
  justify-content: space-between;
  background-color: azure;
}

.rightSideBarComponentLV__containerLists-head {
  display: flex;
  justify-content: space-between;
}

.rightSideBarComponentLV__containerLists-head span {
  display: inline-block;
  margin-right: 10px;
  width: fit-content;
  font-size: 20px;
  border: none;
  background: none;
}

.rightSideBarComponentLV__containerLists-head button {
  display: inline-block;
  background-color: rgb(0, 145, 255);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
}

.arrayShuffle {
  height: 15px;
  width: 15px;
  display: inline-block;
  margin-right: 5px;
}

.arraySorted {
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-right: 5px;
}
</style>