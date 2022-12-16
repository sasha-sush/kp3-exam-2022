
import React from 'react';
import TablePurchases from './tables/TablePurchases.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
var apiUrl = `https://localhost:7138/`;

class PagePurchases extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      customerId:1,
      count:1,
      productId:1
    }
  }

  handleChangeCustomer = (e) => {
    this.setState({ customerId : e.target.value});
  }
  handleChangeCount = (e) => {
    this.setState({ count : e.target.value});
  }
  handleChangeProduct = (e) => {
    this.setState({ productId : e.target.value});
  }
  
  addPurchase = (e) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        productId: 0,
        customerId: this.state.customerId,
        count: this.state.count,
        productId: this.state.productId
      })
    };
    fetch(apiUrl + 'purchase', requestOptions);
  }

  render(){
    return (
      <div className="Page Purchases">
        <h3>Purchases</h3>
        <TablePurchases/>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Customer Id" >
              <Form.Control type="number" placeholder="Enter name" onChange={this.handleChangeCustomer}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Count" >
              <Form.Control type="number" placeholder="Enter name" onChange={this.handleChangeCount}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Product" >
              <Form.Control type="number" placeholder="Enter name" onChange={this.handleChangeProduct}/>
            </FloatingLabel>
          </Form.Group>
          <Button onClick={this.addPurchase}>Add</Button>
        </Form>
      </div>
    );
  }
}

export default PagePurchases;
