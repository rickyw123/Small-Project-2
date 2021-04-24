import React from 'react'
import  MainPage  from './page/mainpage'
import allProduct from './page/allproduct'
import storepage from './page/storepage'
import cart from './page/Cart';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

//exact setiap ketemu routing ke path yg sesuai maka tampilin
// component yang berkaitan dengan nama component

function App() {
  return (
    // path'/' berarti ke localhost:3000 atau domain yang kita buat
      <Router>
     <Switch>
       <Route component={ MainPage } path='/' exact />
       <Route component={ allProduct } path='/productlist' exact />
       <Route component={ storepage } path='/product/:id' exact />
       <Route component={ cart } path='/cart' exact />
        
     </Switch>
   </Router>
   )
}
export default App;
