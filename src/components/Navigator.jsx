import React from "react";
import logo from "../assets/logo.png"

export default function Navigator () {
    
    
    
    return (
        <div className="navigator w-full flex items-center justify-start pl-16 rounded-b-3xl">
            <a href="https://substantiveresearch.com/" target="blank">
                <img className="h-24 w-32" src={logo} alt="Logo"></img>
            </a>
        </div>
    )
}