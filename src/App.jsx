import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStykes } from "./globalstyles/globalstyles";
import { PrivacyPolicy } from "./pages/privacyPolicy";
import { TermsOfUse } from "./pages/termsOfUse";
import { MainPage } from "./pages/mainPage/index"

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