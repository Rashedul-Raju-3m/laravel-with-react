import React from 'react';
import ReactDOM from 'react-dom';
import Test from "./Test";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, HashRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import Accordion from "./Accordion";


function App() {
    const handelInput = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Routes>
                    <Route path='/' element={<Accordion/>}/>
                    <Route path='/register' element={<Test/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}
