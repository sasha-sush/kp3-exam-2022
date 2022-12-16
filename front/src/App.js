//import logo from './logo.svg';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import PageCustomers from './components/PageCustomers.js';
import PageProducts from './components/PageProducts.js';
import PageProducers from './components/PageProducers.js';
import PagePurchases from './components/PagePurchases.js';

export default function App()
{
    //const navigate = useNavigate();

    return (
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Furniture DB</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Customers">Customers</Nav.Link>
              <Nav.Link href="/Products">Products</Nav.Link>
              <Nav.Link href="/Producers">Producers</Nav.Link>
              <Nav.Link href="/Purchases">Purchases</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route exact path="/Customers" element={<PageCustomers />}/>
            <Route exact path="/Products" element={<PageProducts />}/>
            <Route exact path="/Producers" element={<PageProducers />}/>
            <Route exact path="/Purchases" element={<PagePurchases />}/>
          </Routes>
        </div>
      </div>
    );
}

