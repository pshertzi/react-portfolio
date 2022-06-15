import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    {
      name: "me",
      description: `Hello and Welcome to my Portfolio. Click on the images for a more informartion about the item clicked. My github and Linkden page can be acessed via the footer. I hope you enjoy!`,
    },
    {
      name: "Portfolio",
      description: "List of past Projects",
    },
    { name: "Skills", description: "Past expereince" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <section>
      <Router>
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
                <Footer></Footer>
              </>
            ) : (
              <>
                <Home></Home>
              </>
            )}
          </main>
        </div>
      </Router>
    </section>
  );
}

export default App;
