import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainBody from "./Components/MainBody";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainBody/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
