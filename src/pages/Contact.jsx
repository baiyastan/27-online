import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCocktailStart,
  getCocktailSuccess,
  getCocktailError,
} from "../redux/contact/contactSlice";
import axios from "axios";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

function Contact() {
  const { list, loading, error } = useSelector((state) => state.cocktail);
  const distpach = useDispatch();

  async function getCocktail() {
    distpach(getCocktailStart());
    try {
      const res = await axios.get(API);
      distpach(getCocktailSuccess(res.data.drinks));
      console.log(res);
    } catch (error) {
      console.log(error);
      distpach(getCocktailError("error not found cocktail"));
    }
  }
  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div>
      <div>
        {list.map((item) => (
          <div>
            <img src={item.strDrinkThumb} alt="" />
            <h4>{item.strDrink}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
