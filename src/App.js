import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/home";
import Contact from "./components/contact";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description: "List of past Projects",
    },
    { name: "Skills", description: "Past expereince" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <About></About>
        )}
      </main>
    </div>
  );
}

export default App;
