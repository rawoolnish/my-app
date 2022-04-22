
import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Textform from "./components/Textform";
import Alert from "./components/alert";
import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
    const [mode, setMode] = useState('light');

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }


    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'rgb(13 61 108)';
            showAlert(" Dark mode is Enable", "success :")
            document.title = 'myworld-Dark mode'
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert(" Light mode is Enable", "success :")
            document.title = 'myworld-light mode'
        }
    }



    return (<>
        <Navbar mode={mode} toggleMode={toggleMode} About="About Us" title="MyWorld" />
        <Alert alert={alert} />
        <Textform heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />
    </>
        // <Router>
        //     <Navbar mode={mode} toggleMode={toggleMode} About="About Us" title="MyWorld" />
        //     {/* <Navbar title="myWorld" About="About Us" /> */}
        //     <Alert alert={alert} />
        //     <Routes>
        //         <Route path="/" element={<Textform heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />} />
        //         <Route path="about" element={<About />} />
        //     </Routes>
        // </Router>
    );
}

export default App;

