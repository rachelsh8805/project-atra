import produce from 'immer'
import createReducer from './utilReducer'


const initialState = {
    products:[{ id: 1, name: "בלונים צבעוניים", price: 25, amount: 1,chooze:false,img:img1 },
        { name: 2, status: ""},
       
        choozenProducts: []
       
   
}
const basket = {
    addProduct(state, action) {
        console.log("addProduct")
        if (!(state.choozenProducts.find(item => item.id === action.payload.id)))
            state.choozenProducts.push(action.payload);
    },
    addAmount(state, action) {
        console.log("addamount")
        const index = state.choozenProducts.findIndex(p => p.id == action.payload);
        state.choozenProducts[index].amount++;
        },
        reduceAmount(state, action) {
        console.log("reduce")
        const index = state.choozenProducts.findIndex(p => p.id == action.payload);
        if (state.choozenProducts[index].amount > 0)
            state.choozenProducts[index].amount--;
        },
    removeFromBasket(state, action) {
        console.log("remove")
        const index = state.choozenProducts.findIndex(p => p.id == action.payload);
        state.choozenProducts = state.choozenProducts.filter(element => element.id !== action.payload);
         state.choozenProducts.splice(index, 1);
    },
}

export default produce((state, action) => createReducer(state, action, basket), initialState)


