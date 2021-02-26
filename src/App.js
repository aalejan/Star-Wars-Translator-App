import React from 'react'
import HomePage from './components/HomePage'
import Translator from './components/Translator'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App = () => {

  return (
  <BrowserRouter>
   <div >
      <Switch>
          <Route path="/Star-Wars-Translator-App" component={HomePage} exact={true} />
          <Route path="/Translator" component={Translator} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
   
  );
}

export default App;
