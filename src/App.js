import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import product from "./Components/Product"
import { Card, Container } from "react-bootstrap";
import Name from "./Components/Name ";
import Image from "./Components/Image";
import Description from "./Components/Description";
import Price from "./Components/Price";

const firstName = "Ines"; 
const App = () => {
  console.log(product)
  return (

    <Container className="mt-4">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>
          <Name name={product.name} />
        </Card.Title>
        <Card.Text>
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Text>
      </Card.Body>
    </Card>
    <div className="mt-4">
      <h5>Hello, {firstName ? firstName : "there"}!</h5>
      {firstName && <Image image={product.image} />}
    </div>
  </Container>
  )
  }
 export default App;
  
  