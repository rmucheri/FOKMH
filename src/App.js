import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Causes from "./pages/Causes";
import Board from "./components/Board";
import CEO from "./pages/CEO";
import CampaignPage from "./components/CampaignPage";
import Events from "./pages/Events";

/**
 * Catch-all fallback for unavailable routes (Requirement 7.5).
 * Surfaces a message that the requested destination was unavailable and
 * navigates the Visitor to the fundraising campaign page.
 */
function NotFoundRedirect() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/fundraising", {
        replace: true,
        state: { fromUnavailable: true },
      });
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      role="alert"
      className="mx-auto flex min-h-[40vh] max-w-xl flex-col items-center justify-center gap-4 px-4 py-16 text-center"
    >
      <p className="text-lg font-semibold text-gray-800">
        The page you requested was unavailable.
      </p>
      <p className="text-gray-600">
        Redirecting you to our fundraising campaign…
      </p>
      <Link
        to="/fundraising"
        className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-teal px-6 py-2 font-medium text-white hover:bg-brand-teal-dark focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        Go to the fundraising campaign now
      </Link>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/board" element={<Board />} />
          <Route path="/ceo" element={<CEO />} />
          <Route path="/fundraising" element={<CampaignPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
