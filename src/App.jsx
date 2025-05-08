import { GlobalStykes } from "./globalstyles/globalstyles";
import { ContactSection } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import LandingPage from "./pages/hero";
import { Portfolio } from "./pages/portifolio";
import { Servicing } from "./pages/servicing";
import { WhatsappButton } from "./pages/whatsappButton";
import { AboutSection } from "./pages/aboutUs";

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
