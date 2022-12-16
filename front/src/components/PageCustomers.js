
import React from 'react';
import TableCustomers from './tables/TableCustomers.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
var apiUrl = `https://localhost:7138/`;

class PageCustomers extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email : ''
    }
  }

  handleChangeName = (e) => {
    console.log(e.target.value);
    this.setState({ name : e.target.value});
  }
  
  handleChangeEmail = (e) => {
    this.setState({ email : e.target.value});
  }
  
  addCustomer = (e) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        customerId: 0,
        name: this.state.name,
        email: this.state.email
      })
    };
    fetch(apiUrl + 'customer', requestOptions);
  }

  render(){
    return (
      <div className="Page Customers">
        <h3>Customers</h3>
        <TableCustomers/>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Name" >
              <Form.Control type="text" placeholder="Enter name" onChange={this.handleChangeName}/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
          <FloatingLabel label="Email">
              <Form.Control type="text" placeholder="Enter email" onChange={this.handleChangeEmail}/>
            </FloatingLabel>
          </Form.Group>
          <Button onClick={this.addCustomer}>Add</Button>
        </Form>
      </div>
    );
  }
}

export default PageCustomers;
