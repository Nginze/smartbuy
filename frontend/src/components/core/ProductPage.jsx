import React, { useEffect, useState } from "react";
import StylishNav from "./Navbar";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();

  const url = "https://fakestoreapi.com/products/" + id;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getAllProducts = () => {
      axios.get(url).then(res => {
        const product = res.data;
        setProduct(product);
      });

      console.log(product);
    };
    getAllProducts();
  }, []);
  return (
    <>
      <StylishNav />
      <div className="py-6 bg-[#f5f7f8] ">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-lg lg:max-w-4xl">
          <div className=" w-[100%] mt-4 justify-center lg:block lg:w-1/2 bg-cover background ">
            <img
              className="w-[80%] h-[80%] mx-auto mt-4 max-h-64 object-contain"
              src={product?.image}
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Price: ${product?.price}
            </h2>
            <p className="text-xl text-gray-600 text-center">
              New Denim Backpack
            </p>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#1565C0"
                    d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                  />
                  <path
                    fill="#FFF"
                    d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                  />
                  <path
                    fill="#FFC107"
                    d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Pay with Credit Card
              </h1>
            </a>

            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <img
                  width={"80px"}
                  src="https://www.logo.wine/a/logo/MTN_Group/MTN_Group-Logo.wine.svg"
                />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Pay with Mobile Money
              </h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              ></a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Description
              </label>
              <h3 className="font-md text-gray-600 text-lg text-wrap ">
                {product?.description}
              </h3>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Quantity
              </label>
              <h3 className="font-md text-gray-600 text-lg ">
                12 currently In-stock
              </h3>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Rating
              </label>
              <h3 className="font-md text-gray-600 text-lg ">
                <Rating name="read-only" value={4.5} readOnly />
              </h3>
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Checkout
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="#" className="text-xs text-gray-500 uppercase">
                Terms and conditions
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
