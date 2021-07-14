export default {
    A_addtocart({commit,state},data) {   
        //check
        const index = state.listCart.findIndex(function(cart){
            return cart.product.id === data.product.id;
        });
        if(index === -1){
            commit('M_addtocart', data)

        }else{
            let quantity = data.quantity;
            commit('M_changquantity',{quantity,index})
        }
    },
    A_deletetocart({commit},data) {   
        commit('M_deleteCart',data)
    },
    A_updateQuantity({commit,state},{objProduct,quantity}){
        const index = state.listCart.findIndex(function(cart){
            return cart.product.id === objProduct.product.id;
        });
        if(index != -1){
            let data = {
                index,
                quantity,
                isReplace: true
            }
            commit('M_changquantity',data)
        }

    }
}