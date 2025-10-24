import Hero from './componets/Hero';
import Benefits from './componets/Benefits';
import Testimonials from './componets/Testimonials';
import WhatYouGet from './componets/WhatYouGet';
import FinalCallToAction from './componets/FinalCallToAction';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Benefits />
      <Testimonials />
      <WhatYouGet />
      <FinalCallToAction />
    </div>
  );
}

export default App;