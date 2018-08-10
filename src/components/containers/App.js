import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import Container from './Container'

const App = () => (
  <Fragment>
    <Header />
    <Container />
    <Footer />
  </Fragment>
)

export default App;
