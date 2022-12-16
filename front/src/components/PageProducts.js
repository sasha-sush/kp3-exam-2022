
import React from 'react';
import TableProducts from './tables/TableProducts.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
var apiUrl = `https://localhost:7138/`;

class PageProducts extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price: '',
      producerId: 1
    }
  }

  handleChangeName = (e) => {
    this.setState({ name : e.target.value});
  }
  
  handleChangePrice = (e) => {
    this.setState({ price : e.target.value});
  }
  
  handleChangeProducerId = (e) => {
    this.setState({ producerId : e.target.value});
  }
  
  addProduct = (e) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        productId: 0,
        name: this.state.name,
        price: this.state.price,
        producerId: this.state.producerId
      })
    };
    fetch(apiUrl + 'product', requestOptions);
  }

  render(){
    return (
      <div className="Page Products">
        <h3>Products</h3>
        <TableProducts/>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Name" >
              <Form.Control type="text" placeholder="Enter name" onChange={this.handleChangeName}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Price">
              <Form.Control type="numer" placeholder="Enter price" onChange={this.handleChangePrice}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Producer Id">
              <Form.Control type="numer" placeholder="Enter price" onChange={this.handleChangeProducerId}/>
            </FloatingLabel>
          </Form.Group>
          <Button onClick={this.addProduct}>Add</Button>
        </Form>
      </div>
    );
  }
}

export default PageProducts;
