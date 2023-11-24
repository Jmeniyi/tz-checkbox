import { createStore } from 'vuex'

export default createStore({
  state: {
    listsArray: [
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
  },
  getters: {
  },
  mutations: {
    fillRandomValues: (state) => {
      const letters = '0123456789ABCDEF';
      state.listsArray.forEach((list) => {
        list.items.forEach((item) => {
          item.countSquare = Math.floor(Math.random() * 25);
          item.color = '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
        });
      });
    },
  },
  actions: {
    
  }
})
