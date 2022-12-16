
import React from 'react';
import TableProducers from './tables/TableProducers.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
var apiUrl = `https://localhost:7138/`;

class PageProducers extends React.Component
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
  
  addProducer = (e) => {
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
    fetch(apiUrl + 'producer', requestOptions);
  }

  render(){
    return (
      <div className="Page Producers">
        <h3>Producers</h3>
        <TableProducers/>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Name" >
              <Form.Control type="text" placeholder="Enter name" onChange={this.handleChangeName}/>
            </FloatingLabel>
          </Form.Group>
          <Button onClick={this.addProducer}>Add</Button>
        </Form>
      </div>
    );
  }
}

export default PageProducers;
