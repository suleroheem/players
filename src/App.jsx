import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Players from "./shared-component/playerscard";
import Header from './shared-component/header'; 

const App =() => {
return(
    <BrowserRouter>
    <Header/>
       <Routes>
         <Route path="/" element = {<Players />} />
       </Routes>
    </BrowserRouter>
)

}


export default App
