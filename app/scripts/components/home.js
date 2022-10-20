/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useContext } from 'react';
import Results from './Results';
import UserContext from "../context/UserContext";

function Home() {

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */

  const ctx = useContext(UserContext);
  const { results, setResults } = ctx;


  return (
    <section id="home">
      {results &&
        <div className="content">
          <hr></hr>
          <div className="title_search">Resultados de la búsqueda</div>
          <hr></hr>
          <Results />
        </div>}

    </section>
  );

}

// Export out the React Component
export default Home;
