export default {
    M_addtocart(state,data){
        state.listCart.push(data);
    },
    M_changquantity(state,{quantity,index,isReplace = false}){
        if(isReplace == false){
            state.listCart[index].quantity += quantity;

        }else{
            state.listCart[index].quantity = quantity;

        }
    },
    M_deleteCart(state,data){
        let newListCart = state.listCart.filter(item => {
            return item.product.id !== data.id
        });
        state.listCart = newListCart;
    }
}