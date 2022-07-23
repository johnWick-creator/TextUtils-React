import Form from "./Form";
import Navbar from "./Navbar";
import { useState } from "react"
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {

    // use for change color when change mode
    const [mode,setMode] = useState({
        navbar : '',
        textcolor : '',
        title : ''
    })

    function changeMode(){
        if(mode.navbar === 'light'){
            setMode({
                navbar : 'dark',
                textcolor : 'text-light',
                title : 'DarkMode'
            })
        }
        else { setMode({
                navbar : 'light',
                textcolor : 'text-dark',
                title : 'LightMode'
        }) }
    }


    return <div >

     <Router>
        <Navbar title={'TextUtils' + mode.title} model={mode} main={changeMode}   />
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<Form />}/>
        </Routes>
    </Router>



    </div>;
}




