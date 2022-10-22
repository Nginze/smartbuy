import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SimpleCard from "../utils/SimpleCard";
import { dummyStores } from "../../dummy_stores/data";
import StylishNav from "./Navbar";

const AllStores = () => {

    const [stores, setStores] = useState(dummyStores)

    console.log(stores[0].name)

    return ( 
        <>
        <StylishNav />
        <section className="bg-[#f5f7f8]">
            <br></br>
            <Box sx={{ flexGrow: 1, width:"80vw", mx:"auto", mb:7 }}>
                <h3 className="text-2xl font-semibold font-inter text-gray-600 pb-4">All Student Stores</h3>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {stores.map((store, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <SimpleCard 
                            key={index} title={store.name}
                            desc={store.desc} price={store.rating}
                            img={store.banner}
                         />
                    </Grid>
                    ))}
                </Grid>
            </Box>

    </section>
        </>
     ); 
}
 
export default AllStores;