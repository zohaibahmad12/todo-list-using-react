import React, { useState } from "react";

import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import "./styles.css";


function App() {


    return (

        <div className="wrapper">

            <Header />
            <TodoContainer />

        </div>
    )
}

export default App;