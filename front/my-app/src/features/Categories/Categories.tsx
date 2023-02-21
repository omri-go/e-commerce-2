import React, { useEffect, useState } from "react";
import {
  useLocation,
  NavLink,
  Link,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { categoriesAsync, selectCategories } from "./CategoriesSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Cart from "../cart/Cart";


const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories || []);
  const [cats, setcats] = useState(categories);
  const getCats = async () => {
    await dispatch(categoriesAsync());
  };
  useEffect(() => {
    getCats();
  }, []);
  const QueryNavLink = (to: any, ...props: any) => {
    // console.log(to);
    // console.log(props);
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ backgroundColor: "gray", padding: "10%" }}>
        {categories.map((cat, i) => (
          <div key={i}>
            <br />
            <Link to={"/categories/" + cat.id} key={i}>
              {cat.description}
            </Link>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "wheat", padding: "10%" }}>
        <Outlet></Outlet>
      </div>
      <div style={{ backgroundColor: "whitesmoke", padding: "10%" }}>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Categories;
