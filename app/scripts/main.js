/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';

import UserState from "./context/UserState";


/**
 * We can start our initial App here in the main.js file
 */
function App() {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
     return (
        <div className="App">
            <UserState>
                <Menu />
                <Home />
            </UserState>
        </div>
    );

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
