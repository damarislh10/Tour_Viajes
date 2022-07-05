import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Articles } from "../components/Articles";
import { listArticlesAsync } from "../redux/actions/actionArticles";
import { Link } from "react-router-dom";

export const ToursContainer = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listArticlesAsync());
  }, []);

  return (
    <Container fluid>
      <Row>
        {articles.map((tour) => (
          <Col key={tour.id}>
            <Link className="link-card" to={`/article/${tour.id}`}>
              <Articles tour={tour} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
