"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function CartContext({children}) {
    const [cart,setCart] = useState({});
    const [subTotal,setSubTotal] = useState(0);

    useEffect(()=>{
        try{
            if(localStorage.getItem("cart")){
                setCart(JSON.parse(localStorage.getItem("cart")));
                saveCart(JSON.parse(localStorage.getItem("cart")));
            }
        }catch(e){
            console.log(e);
            saveCart({});
        }
    },[])

    const saveCart=(myCart)=>{
        localStorage.setItem("cart",JSON.stringify(myCart));
        let sTotal = 0;
        let keys = Object.keys(myCart);
        for(let i=0; i<keys.length; i++){
            sTotal+=myCart[keys[i]].qty*myCart[keys[i]].price;
        }
        setSubTotal(sTotal);
    }

    //Adding item to cart
    const addToCart=(itemCode,name,price,qty,packOf)=>{
        let newCart = {...cart};
        if(itemCode in cart){
            newCart[itemCode].qty = newCart[itemCode].qty + qty;
            const sTotal = subTotal+qty*price;
            setSubTotal(sTotal);
        }else{
            newCart[itemCode] = {name,price,qty,packOf};
            const sTotal = subTotal+qty*price;
            setSubTotal(sTotal);
        }
        setCart(newCart);
        saveCart(newCart);
        
        
    }
    //Clearing the cart
    const clearCart=()=>{
        setSubTotal(0);
        setCart({});
        saveCart({});
    }
    // Remove item from cart
    const removeItem=(itemCode)=>{
        const newCart = {...cart};  
        if(itemCode in cart){
            newCart[itemCode].qty = newCart[itemCode].qty-1;
            const sTotal = subTotal-newCart[itemCode].price;
            setSubTotal(sTotal);
        }
        if(cart[itemCode].qty<=0){
            const sTotal = subTotal-newCart[itemCode].price;
            delete newCart[itemCode];
            setSubTotal(sTotal);
        }
        setCart(newCart);
        saveCart(newCart);
        
    }
    //Remove Item from cart
    const removeItemFromCart=(itemCode)=>{
        const newCart = {...cart};  
        const sTotal = subTotal-newCart[itemCode].qty*newCart[itemCode].price;
            setSubTotal(sTotal);
        delete newCart[itemCode];
        
        setCart(newCart);
        saveCart(newCart);
    }
    //Add item to cart
    const addItem=(itemCode)=>{    
        const newCart = {...cart};  
        const sTotal = subTotal+newCart[itemCode].price;
            setSubTotal(sTotal);
        newCart[itemCode].qty = newCart[itemCode].qty+1;
        setCart(newCart);
        saveCart(newCart);
    }
   
  return (
    <AppContext.Provider value={{cart,addToCart,removeItem,clearCart,addItem,removeItemFromCart,subTotal}}>
            {children}
        </AppContext.Provider>
  )
}


export function useAppContext(){
    return useContext(AppContext);
} 

