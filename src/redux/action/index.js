
//for Add Item to Cart
export const addCart = (Product) => {
    return{
        type : "ADDITEM",
        payload : Product 

    }
}

//for Delete Item to Cart
export const delCart = (Product) => {
    return{
        type : "DELITEM",
        payload : Product 

    }
}