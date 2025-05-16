import { AboutSection } from "../aboutUs";
import { LandingPage} from "../hero"
import { Servicing } from "../servicing";
import { Portfolio } from "../portifolio";
import { ContactSection } from "../contact";
import { Footer } from "../footer";
import { WhatsappButton } from "../whatsappButton";

export function MainPage() {
  return (
    <>
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