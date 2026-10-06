
import React from "react";
import Navbar from "../src/assets/componnes/Navbar.jsx";
import Footer from "../src/assets/componnes/Footer.jsx";
import Packages from "../src/assets/componnes/Package.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
        <Packages 
          name="Frontend React.js"
          price="12,999"
          info="Frontend Dev Plan"
          fe1="Learn HTML"
          fe2="Learn CSS"
          fe3="Learn JavaScript"
          fe4="Learn React.js"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;