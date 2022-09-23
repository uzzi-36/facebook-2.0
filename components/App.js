import './App.css';
import Header from './components/nav';
// import LeftBar from './components/left-bar';
// import Imgs from './components/story';
// import RightBar from './components/right-bar';
// import Content from './components/post';
import { useState } from 'react';


function App() {
  //Muhammad saad
  const [themeMode, setThemeMode] = useState("dark");
  const toggleThemeMode = () => {
    if (themeMode === "dark") {
      setThemeMode("light");
    }
    else {
      setThemeMode("dark");
    }
  };
  return (
    <div className={`App ${themeMode === "dark" ? "dark" : "light"}`}>

      <Header toggleThemeMode={toggleThemeMode} s={themeMode} />
      <div className='body'>
        {/* <LeftBar /> */}

        <div className='bsb-2p'>

          <div className='bsb-2'>
            {/* <Imgs/> */}
            {/* { <Content /> } */}
          </div>

        </div>

        {/* <RightBar /> */}

      </div>

    </div>
  );
}

export default App;