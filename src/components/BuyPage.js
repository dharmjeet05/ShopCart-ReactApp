import React, { useState, useEffect } from "react";
import axios from "axios";

import { random, commerce, datatype } from "faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "563492ad6f91700001000001f935747de6b34695ab06ff1639a3370e";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: datatype.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
