import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import MenuItems from "./components/menu/MenuItems";
import About from "./components/about/About";
import Services from "./components/services-page/Services";
import Products from "./components/products";
import Footer from "./components/about/Footer";

function App() {
  // const [element, setElement] = useState(null);
  // let ref = createRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.intersectionRatio === 1) {
  //         console.log(entry);
  //         console.log("It is here");
  //       }
  //     },
  //     { threshold: 1.0, root: null, rootMargin: "0px" }
  //   );
  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  // });

  return (
    <div className="App">
      <Header />
      <MenuItems />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
