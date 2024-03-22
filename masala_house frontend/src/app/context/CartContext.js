"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function CartContext({children}) {
    const [cart,setCart] = useState({});

    useEffect(()=>{
        try{
            if(localStorage.getItem("cart")){
                setCart(JSON.parse(localStorage.getItem("cart")));
            }
        }catch(e){
            console.log(e);
            saveCart({});
        }
    },[setCart])

    const saveCart=(myCart)=>{
        localStorage.setItem("cart",JSON.stringify(myCart));
    }

    //Adding item to cart
    const addToCart=(itemCode,name,price,qty,packOf)=>{
        let newCart = {...cart};
        if(itemCode in cart){
           
            newCart[itemCode].qty = newCart[itemCode].qty + qty;
        }else{
            newCart[itemCode] = {name,price,qty,packOf};
        }
        setCart(newCart);
        saveCart(newCart);
        
        
    }
    //Clearing the cart
    const clearCart=()=>{
        setCart({});
        saveCart({});
    }
    // Remove item from cart
    const removeItem=(itemCode)=>{
        const newCart = {...cart};  
        if(itemCode in cart){
            newCart[itemCode].qty = newCart[itemCode].qty-1;
        }
        if(cart[itemCode].qty<=0){
            delete newCart[itemCode];
        }
        setCart(newCart);
        saveCart(newCart);
        
    }
    //Add item to cart
    const addItem=(itemCode)=>{    
        const newCart = {...cart};  
        newCart[itemCode].qty = newCart[itemCode].qty+1;
        setCart(newCart);
        saveCart(newCart);
    }
   
  return (
    <AppContext.Provider value={{cart,addToCart,removeItem,clearCart,addItem}}>
            {children}
        </AppContext.Provider>
  )
}


export function useAppContext(){
    return useContext(AppContext);
} 

