import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SimpleCard from "../../../components/utils/SimpleCard";

const ProductFeed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = () => {
      axios.get("https://fakestoreapi.com/products/category/electronics").then(res => {
        const products = res.data;
        setProducts(products);
      });

      console.log(products);
    };
    getAllProducts();
  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1, width: "80vw", mx: "auto", mb: 7 }}>
        <h3 className="text-2xl font-semibold font-inter text-gray-600 pb-4">
          Electronics
        </h3>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <SimpleCard
                id={product.id}
                key={product.id}
                title={product.title}
                desc={product.description}
                price={product.price}
                img={product.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductFeed;
