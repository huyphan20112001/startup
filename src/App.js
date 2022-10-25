import "./App.css";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="wrapper" id="wrapper">
        <Home />
        <Features />
      </div>
    </div>
  );
}

export default App;
