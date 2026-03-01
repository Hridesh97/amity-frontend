// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Services from '../pages/Services';
// import WebDevelopment from '../pages/services/WebDevelopment';
// import MobileApps from '../pages/services/MobileApps';
// import UiUxDesign from '../pages/services/UiUxDesign';
// import DigitalMarketing from '../pages/services/DigitalMarketing';
// import Portfolio from '../pages/Portfolio';
// import Blog from '../pages/Blog';
// import Contact from '../pages/Contact';
// import Careers from '../pages/Careers';
// import NotFound from '../pages/NotFound';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
      
//       <Route path="/services" element={<Services />} />
      
//       <Route path="/services/web-development" element={<WebDevelopment />} />
//       <Route path="/services/mobile-apps" element={<MobileApps />} />
//       <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
//       <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      
//       <Route path="/portfolio" element={<Portfolio />} />
//       <Route path="/blog" element={<Blog />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/careers" element={<Careers />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
// Import main services page
import Services from '../pages/Services';
// Import individual service pages
import WebDevelopment from '../pages/services/WebDevelopment';
import MobileApps from '../pages/services/MobileApps';
import UiUxDesign from '../pages/services/UiUxDesign';
import DigitalMarketing from '../pages/services/DigitalMarketing';
import WebVulnerability from '../pages/services/WebVulnerability';
import NetworkVulnerability from '../pages/services/NetworkVulnerability';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Main Services Page */}
      <Route path="/services" element={<Services />} />
      
      {/* Individual Service Pages */}
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/mobile-apps" element={<MobileApps />} />
      <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/web-vulnerability" element={<WebVulnerability />} />
      <Route path="/services/network-vulnerability" element={<NetworkVulnerability />} />
      
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;