import React from 'react'
import SearchBar from './components/SearchBar'
import HomePage from './components/HomePage'

import Translator from './components/Translator'
import Image from './components/Image'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App = () => {

  return (
  <BrowserRouter>
   <div >
      <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/Translator" component={Translator} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
   
  );
}

export default App;
