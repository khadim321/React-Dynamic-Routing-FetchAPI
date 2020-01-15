import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

function Content(){
    return(
        <div>
            <App/>
        </div>       
    )
}

ReactDOM.render(<Content/>,document.getElementById("root"));