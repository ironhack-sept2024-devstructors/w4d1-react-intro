import ReactPlayer from 'react-player/youtube';

import Header from "./components/Header";
import MyFirstComponent from "./components/MyFirstComponent";
import Main from "./components/Main";
import Footer from "./components/Footer";
import User from "./components/User";

import './App.css'



function App() {


  return (
    <>


      <Header title="React Intro" />

      {/* <MyFirstComponent /> */}

      <User userName="Alice" favDrink="water" age={30} />
      <User userName="Bob" favDrink="coffee" age={40} />
      <User userName="Charlie" favDrink="tea" age={50} />

      <hr />

      <Main />

      <hr />
      
      <ReactPlayer url="https://www.youtube.com/watch?v=EvtMTV9mMSc" playing={false} volume={0.1} />


      <Footer>
        <p>devstructors, 2024</p>
      </Footer>
      
    </>
  )
}

export default App
