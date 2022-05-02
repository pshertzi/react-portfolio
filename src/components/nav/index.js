import React from "react";

function Nav() {
    function portfolioSelected(name) {
        console.log(`${name} clicked`)
      }

    const portfolios = [
        {
          name: "commercial",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];
    


    return (
      <header>
          <nav>
                <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {portfolios.map((portfolio) => (
                    <li
                        className="mx-1"
                        key={portfolio.name}
                    >
                        <span onClick={portfolioSelected} >
                        {portfolio.name}
                        </span>
                    </li>
                ))}
                </ul>
            </nav>
      </header>
    );
  }

export default Nav;