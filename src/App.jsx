import { BrowserRouter } from "react-router-dom";

import { Experience, Hero, Navbar, StarsCanvas } from "./components";
import Gift from "./components/Gift.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/*<About />*/}
        <Experience />
        {/*<Tech />*/}
        {/*<Works />*/}
        {/*<Feedbacks />*/}
        <div className='relative z-0'>
          <Gift />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
