import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArticlesAsync } from "../redux/actions/actionArticles";

export const ToursContainer = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listArticlesAsync());
  }, []);
  return (
    <div>
      {articles.map((sale) => (
        <h2>{sale.nombre}</h2>
      ))}
    </div>
  );
};
