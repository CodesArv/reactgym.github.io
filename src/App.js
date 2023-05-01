import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'animate.css';

import Navigation from "./Header";
import Slider from "./Section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Lastsection  from "./Section8";

function App() {
  return (
    <div>
      <Navigation />
      <Slider />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Lastsection/>
    </div>
  );
}

export default App;
