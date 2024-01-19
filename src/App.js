import Home from './Home/Home';
import SplitPage from './SpltRoom/SplitPage';
// import Login from './LoginSignUp/Login';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layout/Layout';
import { useState } from 'react';

function App() {
  const [triptitle, setTriptitle] = useState([
    {id:1, tripname: 'Banaras'},
  ])
  const TripHeading = (tripname) =>{
    const newHeading =  {
      id : Date.now(),
      tripname : tripname,
    };
    setTriptitle(...triptitle, newHeading)
  };

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home changeHeading={TripHeading} />}/>
        {/* <Route path='/LoginPage' element={<Login/>}/> */}
        <Route path='/SplitSection' element={ triptitle.map((title) =>(<SplitPage key={title.id} tripname={title.tripname} />))
          }/>
      </Route>
      {/* <Route path='/LoginPage' element={<Login/>}/> */}
    </Routes>

    
    </BrowserRouter>
    </>
  );
}

export default App;
