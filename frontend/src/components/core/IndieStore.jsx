import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios  from "axios";
import { useEffect } from "react";
import AllStores from "./AllStores";
import SimpleCard from "../utils/SimpleCard";
import StylishNav from "./Navbar";

const IndieStore = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getAllProducts =  () => {
            axios.get('https://fakestoreapi.com/products/category/electronics')
            .then(res => {
                const products = res.data;
                setProducts(products)
            })
    
            console.log(products)
        }
        getAllProducts()
    }, [])


    return ( 
        <>
        <StylishNav />
        <section className="bg-[#f5f7f8]">

            <br></br>
            {/* <AllStores /> */}
            <Box sx={{ flexGrow: 1, width:"80vw", mx:"auto", mb:7 }}>
                <h3 className="text-2xl text-center font-semibold font-inter text-red-600 pb-4">Welcome to Jack's Store🎉</h3>
                <h3 className="text-2xl font-semibold font-inter text-gray-600 pb-4">Electronics</h3>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map((product, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <SimpleCard 
                            id = {product.id}
                            key={product.id} title={product.title}
                            desc={product.description} price={product.price}
                            img={product.image}
                         />
                    </Grid>
                    ))}
                </Grid>
            </Box>

    </section>
        </>
     ); 
}
 
export default IndieStore;