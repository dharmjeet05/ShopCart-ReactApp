import React from "react";

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt={item.productName} />
              </Col>
              <Col className="text-left">
                <div className="text-primary mb-3">
                  {item.productName}
                  <span className="ms-3">Price :- {item.productPrice}</span>
                </div>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* IF Everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your Amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Pay Here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is Empty</h1>
      )}
    </Container>
  );
};

export default Cart;
