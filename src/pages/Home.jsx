import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import Product from "../components/product/Product";
import apiClient from "../axios/apiClient";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFail,
} from "../redux/products/productSlice";

function Home() {
  // const [products, setProducts] = useState([]);

  const { list, error, loading } = useSelector((steta) => steta.products);
  const dispatch = useDispatch();

  async function getProducts() {
    dispatch(fetchProductsStart());
    try {
      const res = await apiClient.get("/products");

      console.log(res);
      dispatch(fetchProductsSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchProductsFail(error.message));
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Banner />
      <div className="products">
        {list?.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
