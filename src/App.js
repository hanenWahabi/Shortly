import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Description } from "./components/Description";
import { SearchBar } from "./components/SearchBar";
import { Statistic } from "./components/Statistic";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <SearchBar />
      <Statistic />
      <Footer />
    </div>
  );
}

export default App;
