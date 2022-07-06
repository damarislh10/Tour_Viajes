import React, { useEffect } from "react";
import {  Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Articles } from "../components/Articles";
import { listArticlesAsync } from "../redux/actions/actionArticles";
import { Link } from "react-router-dom";

export const ToursContainer = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listArticlesAsync());
  }, [dispatch]);

  return (
    <Container fluid className="container-product">
      <div className="card-columns">
          {articles.map((tour) => (
              <Link key={tour.id} className="link-card" to={`/article/${tour.id}`}>
                <Articles tour={tour} />
              </Link>
          ))}
      </div>
    </Container>
  );
};
