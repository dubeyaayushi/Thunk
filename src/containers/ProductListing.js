/*import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProducts } from "../Redux/Actions/ProductActions";
import ProductComponents from './ProductComponents';
 
const ProductListing = () =>  {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setProducts(response.data));
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
  return (
   <div className='ui grid container'>
    <ProductComponents/>
   </div>
  )
}

export default ProductListing;
*/
// ProductListing.js
import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//import { setProducts } from "../redux/actions/productsActions";
import { setProducts } from "../Redux/actions/ProductsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;





