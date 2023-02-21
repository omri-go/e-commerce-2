import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsAsync, selectProducts } from "./prodsSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCategories } from "../Categories/CategoriesSlice";
import { buy } from "../cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "../../models/Product";
const Products = () => {
  const params: any = useParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts || []);
  const cats = useAppSelector(selectCategories || []);
  const [catName, setcatName] = useState("");
  const notify = (desc: string) => toast(`u bought ${desc}!`);
  useEffect(() => {
    console.log(params.cId);
  }, [params.cId]);

  const getProds = async () => {
    await dispatch(productsAsync(params.cId || -1));
  };
  useEffect(() => {
    getProds();
    const temp = cats.filter((cat) => cat.id === Number(params.catId));
    if (temp.length > 0) {
      setcatName(temp[0].description);
    }
  }, [params.cId]);
  // const buy = () => {};
  const two = (prod: Product) => {
    dispatch(buy(prod));
    notify(prod.description);
  };
  return (
    <div style={{ padding: "10%" }}>
      <h1>{catName} </h1>
      {products.map((prod, i) => (
        <div key={i}>
          <button onClick={() => two(prod)}>BUY</button>
          {prod.description}
        </div>
      ))}
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

export default Products;
