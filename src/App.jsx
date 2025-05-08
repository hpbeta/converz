import { GlobalStykes } from "./globalstyles/globalstyles";
import { AboutSection } from "./pages/AboutUs";
import { ContactSection } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import LandingPage from "./pages/hero";
import { Portfolio } from "./pages/portifolio";
import { Servicing } from "./pages/servicing";
import { WhatsappButton } from "./pages/whatsappButton";

function App() {
  return (
    <>
      <GlobalStykes />
      <LandingPage />
      <Servicing />
      <AboutSection />
      <Portfolio />
      <ContactSection />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
