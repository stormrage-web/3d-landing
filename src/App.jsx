import { BrowserRouter } from "react-router-dom";

import { Experience, Hero, Navbar, StarsCanvas, Works } from "./components";
import Welcome from "./components/Welcome.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Welcome />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
