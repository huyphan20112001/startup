import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import Questions from "./components/Questions/Questions";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="wrapper" id="wrapper">
        <Home />
        <Features />
        <Testimonial />
        <Payment />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
