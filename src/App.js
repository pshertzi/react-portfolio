import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav";

import Footer from "./components/footer";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    {
      name: "Welcome",
      description: `Welcome to my Portfolio! I am a Full Stack web developer with a backgound in Business Managment. Ive recently earned a certificate in full stack development from the
      Vanderbilt University Coding Boot Camp. Skilled in JavaScript, HTML, CSS, React.js, MySQL, NoSQL, responsive web design, Node, Express.`,
    },
    {
      name: "Portfolio",
      description: "List of past Projects",
    },
    { name: "Summary", description: "Past expereince" },
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
                <About></About>
              </>
            )}
          </main>
        </div>
      </Router>
    </section>
  );
}

export default App;
