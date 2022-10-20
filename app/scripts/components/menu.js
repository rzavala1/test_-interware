/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useContext, useState } from 'react';
import UserContext from "../context/UserContext";
import requests from '../hooks/requests';


function Menu() {

  const [showingSearch, setShowingSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const ctx = useContext(UserContext);
  const { results, setResults } = ctx;


  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  const showSearchContainer = (e) => {
    e.preventDefault();
    setResults(undefined);
    setSearchInput("");
    setShowingSearch(!showingSearch);
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  const onSearch = (e) => {
    setSearchInput(e.target.value)
    requests.search(e.target.value,(data)=>{
      console.info(data)
      setResults(data);
    });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>Coding Test</h1>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT'S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a href="#" onClick={(e) => showSearchContainer(e)}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <div
        className={
          (showingSearch ? 'showing ' : '') + 'search-container'
        }
      >
        <input type="text" onChange={(e) => onSearch(e)} value={searchInput}/>
        <a href="#" onClick={(e) => showSearchContainer(e)}>
          <i className="material-icons close">close</i>
        </a>
      </div>
    </header>
  );
}

// Export out the React Component
export default Menu;
