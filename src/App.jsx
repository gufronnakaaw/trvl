import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import Login from './components/pages/Login'

export default function App() {
    return (
        <BrowserRouter>
            
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>

        </BrowserRouter>
    )
}
