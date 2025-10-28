import Hero from './componets/Hero';
import Benefits from './componets/Benefits';
import Testimonials from './componets/Testimonials';
import WhatYouGet from './componets/WhatYouGet';
import FinalCallToAction from './componets/FinalCallToAction';
import Pricing from './componets/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Benefits />
      <Testimonials />
      <Pricing />
      <WhatYouGet />
      <WhatYouGet />
      <FinalCallToAction />
    </div>
  );
}

export default App;