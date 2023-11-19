<template>
    <div class="leftSideBarComponent">
        <div class="leftSideBarComponent__listsContainer">
            <div class="leftSideBarComponent__listsContainer_mainList" v-for="(list, id) in lists" :key="id">
                <button class="leftSideBarComponent__listsContainer_mainList-button" @click="toggleList(list)">
                    <span>></span>
                    <input type="checkbox" :checked="checkAllItems(list)" @click="toggleItems(list)" />
                    <span> list {{ id + 1 }}</span>
                </button>
                <ul class="leftSideBarComponent__listsContainer_mainList-list" v-for="(item, index) in list.items"
                    :key="index">
                    <li v-if="list === selectedList">
                        <div class="left-block">
                            <input type="checkbox" id="name" name="name" v-model="item.checked" />
                            Item {{ item.id }}
                        </div>
                        <div class="right-block">
                            <input type="number" min=0 id="numberPick" v-model="item.countSquare" />
                            <input type="color" id="colorPick" v-model="item.color" @input="updateColor" />
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
    props: {
        lists: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedList: null,
        }
    },
    mounted() {
        this.lists.forEach(list => {
            list.items.forEach(item => {
                item.countSquare = Math.floor(Math.random() * 15) + 1;
                item.color = this.getRandomColor();
            });
        });

    },
    methods: {
        toggleList(list) {
            this.selectedList = list;
        },
        toggleItems(list) {
            const allChecked = list.items.every(item => item.checked);
            list.items.forEach(item => {
                item.checked = !allChecked;
            });
        },
        checkAllItems(list) {
            return list.items.every(item => item.checked);
        },
        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
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

