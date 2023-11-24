<template>
  <div class="leftSideBarComponent">
    <div class="leftSideBarComponent__listsContainer">
      <div
        class="leftSideBarComponent__listsContainer_mainList"
        v-for="(list, id) in this.$store.state.listsArray"
        :key="id"
      >
        <button
          class="leftSideBarComponent__listsContainer_mainList-button"
          @click="toggleList(list)"
        >
          <span>></span>
          <input
            type="checkbox"
            :checked="checkAllItems(list)"
            @click="toggleItems(list)"
            :class="{ inputWithDot: checkboxWithDot(list) }"
            :key="id"
          />
          <span> list {{ id + 1 }}</span>
        </button>
        <ul
          class="leftSideBarComponent__listsContainer_mainList-list"
          v-for="(item, index) in list.items"
          :key="index"
        >
          <li v-if="list === selectedList">
            <div class="left-block">
              <input
                type="checkbox"
                id="name"
                name="name"
                v-model="item.checked"
              />
              Item {{ item.id }}
            </div>
            <div class="right-block">
              <input
                type="number"
                min="0"
                id="numberPick"
                v-model="item.countSquare"
              />
              <input
                type="color"
                id="colorPick"
                v-model="item.color"
                @input="updateColor"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftSideBarComponent",
  data() {
    return {
      selectedList: null,
    };
  },
  computed: {
    checkboxWithDot() {
      return (list) => {
         if (list.items.every((item) => item.checked === true)) {
          return false;
        }else if(list.items.some((item) => item.checked === true)){
            return true
        }
      };
    },
  },
  methods: {
    toggleList(list) {
      this.selectedList = list;
    },
    toggleItems(list) {
        const allChecked = list.items.every((item) => item.checked);
      list.items.forEach((item) => {
        item.checked = !allChecked;
      });
    },
    checkAllItems(list) {
      return list.items.every((item) => item.checked);
    },
  },
};
</script>

<style scoped>
.leftSideBarComponent__listsContainer_mainList-button {
  display: flex;
  margin-right: 10px;
  font-size: 20px;
  border: none;
  background: none;
  align-items: center;
}
.inputWithDot {
  position: relative;
}
.inputWithDot[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
}

.leftSideBarComponent__listsContainer_mainList-list li {
  display: flex;
  margin-top: 5px;
  list-style-type: none;
  text-align: center;
  justify-content: space-between;
}

.left-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-block input {
  width: 30px;
  height: 30px;
  border: none;
  background: none;
}

.leftSideBarComponent {
  width: 35%;
  height: auto;
  margin: 25px;
  padding: 15px;
  border: solid 1px grey;
}

.leftSideBarComponent__listsContainer_mainList {
  margin-bottom: 15px;
}

.leftSideBarComponent__listsContainer_mainList-list {
  margin-left: 50px;
}

.leftSideBarComponent__listsContainer_mainList-button span {
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
}

.leftSideBarComponent__listsContainer_mainList-button-active {
  transform: rotate(90deg);
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
}

.leftSideBarComponent__listsContainer_mainList-list input {
  margin-inline: 5px;
}
</style>

