import React from "react";
import ReactDOM from "react-dom";

function Navbar(){
    return(
            <h1>Navbar</h1>
    );
}
function App(){
    return(
        <div>
            <Navbar/>
            <h1>First App!</h1>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
