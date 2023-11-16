<template>
    <div class="rightSideBarComponentLV">
        <div class="rightSideBarComponentLV__listsContainer">
            <div class="rightSideBarComponentLV__listsContainer_mainList" v-for="(list, id) in lists" :key="id"
                @click="toggleList(list)">
                <span> list {{ id + 1 }}</span>
                <button>ц</button>
                <ul class="rightSideBarComponentLV__listsContainer_mainList-list" v-for="(item, index) in list.items"
                    :key="index">
                    <li v-if="list === selectedList">
                        <div 
                        v-for="(square, id) in item.countSquare" 
                        :key="id" 
                         v-if="item.checked"
                        class="rightSideBarComponentLV__listsContainer_mainList-list-square"
                        :style="{ backgroundColor: item.color === '' ? 'black' : item.color }">
                        </div>
                    </li>
                </ul>
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
            selectedList: null,
        };
    },
    computed: {

    },
    methods: {
        toggleList(list) {
            this.selectedList = list;
        },
    }
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

.rightSideBarComponentLV__listsContainer_mainList {
    margin-bottom: 15px;
    border: solid 1px grey;
    padding: 10px;
    background-color: antiquewhite;
    list-style-type: none;
}
.rightSideBarComponentLV__listsContainer_mainList  li {
    list-style-type: none;
}
.rightSideBarComponentLV__listsContainer_mainList span {
    display: inline-block;
    margin-right: 10px;
    width: fit-content;
    font-size: 20px;
    border: none;
    background: none;
}

.rightSideBarComponentLV__listsContainer_mainList-list-square {
    height: 15px;
    width: 15px;
    display: inline-block;
    margin-right: 5px;
}
</style>