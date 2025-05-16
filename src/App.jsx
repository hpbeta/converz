import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStykes } from "./globalstyles/globalstyles";
import { MainPage } from "./pages/MainPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";

function App() {
  return (
    <>
      <GlobalStykes />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;