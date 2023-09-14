import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import "./globalStyles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="layout">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
