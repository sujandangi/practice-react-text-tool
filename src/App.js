import {useState, useEffect} from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

function App() {
  const theme1 = {
    navbarBg: "#1C0C5B",
    pageBg: "#3D2C8D",
    textAreaBg: "#916BBF",
    textColor: "white",
  };
  const theme2 = {
    navbarBg: "#142850",
    pageBg: "#27496D",
    textAreaBg: "#0C7B93",
    textColor: "white",
  };
  const theme3 = {
    navbarBg: "#082032",
    pageBg: "#2C394B",
    textAreaBg: "#334756",
    textColor: "white",
  };
  const theme4 = {
    navbarBg: "lightgrey",
    pageBg: "white",
    textAreaBg: "white",
    textColor: "black",
  };

  let prevTheme = JSON.parse(window.localStorage.getItem("darkMode"))

  const [darkMode, setDarkMode] = useState(prevTheme);
  // console.log(darkMode);
  const setTheme = (theme) => {
    setDarkMode(theme);
  };

  //set the value of current theme to local storage to persist darkMode on page reload
  useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
    console.log("set to localstorage: ", darkMode)
  }, [darkMode]);

 

  document.body.style.backgroundColor = darkMode.pageBg;
  document.body.style.color = darkMode.textColor;
  return (
    <div id="home">
      <div className="container d-flex-col">
        <Navbar
          title="TextTool"
          darkMode={darkMode}
          setTheme={setTheme}
          theme1={theme1}
          theme2={theme2}
          theme3={theme3}
          theme4={theme4}
        />

        <Textarea darkMode={darkMode} />
        <About />
      </div>
    </div>
  );
}

export default App;
