import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './Container/Navbar';
import Contact from './Container/Contact';
import Feedback from './Container/Feedback';
import MainHome from './Container/MainHome';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Switch>
     <Route exact path="/" component={Home}  />
     <Route path="/contact" component={Contact} />
     <Route path="/feedback" component={Feedback} />
     </Switch>
    </BrowserRouter>
  );
}
const Home = () =>{
  return(
      <div>
          <MainHome />
      </div>
  )
}


export default App;
