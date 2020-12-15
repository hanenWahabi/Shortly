import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { SearchBar } from "./components/SearchBar";
import { Statistic } from "./components/Statistic";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <SearchBar />
      <Statistic />
      <Footer />
    </div>
  );
}

export default App;
