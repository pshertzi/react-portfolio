import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/home";
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

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
