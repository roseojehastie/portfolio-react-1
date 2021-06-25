
import Header from "./partials/Header" 
import Footer from "./partials/Footer"
import  "./styles/global.css"
import {BrowserRouter,Route,Switch}from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Switch>
       <Route exact path="/"> 
         <h1>hello world!</h1>
       </Route>
       <Route path="/about"> 
         <h1>About me!</h1>
       </Route>
       <Route path="/case study"> 
         <h1>Case study!</h1>
       </Route>
       <Route path="/contact"> 
         <h1>Contact</h1>
       </Route> 
       <Route path="/blog"> 
         <h1>Blog</h1>
       </Route>
     </Switch>
     <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
