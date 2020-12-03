
import React, { createContext, useState } from 'react';
import dslr from '../assets/dslr.jpg';
import microphone from '../assets/microphone.jpg';
import teadybear from '../assets/teadybear.jpg';
import iphone from '../assets/iphone.jpg';
import headphone from '../assets/headphone.jpg';

export const ProductsContext = createContext();

const ProductsContextProvider=(props)=>{
const [products]=useState([

{id:1,name:'DSLR', price:35000,image:dslr,status:'hot'},
{id:2,name:'MICROPHONE', price:35000,image:microphone,status:'hot'},
{id:3,name:'TEADYBEAR' , price:35000,image:teadybear,status:'New'},
{id:4,name:'IPHONE' ,price:35000,image:iphone,status:'hot'},
{id:5,name:'HEADPHONE', price:35000,image:headphone,status:'New'},
]);
return(
    <ProductsContextProvider value={{products:[...products]}}>
    {props.children}
    </ProductsContextProvider>
)
}
export default ProductsContextProvider;