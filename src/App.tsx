
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Journals from "@/pages/Journals";
import Authors from "@/pages/Authors";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Help from "@/pages/Help";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/journals" element={<Layout><Journals /></Layout>} />
          <Route path="/authors" element={<Layout><Authors /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/help" element={<Layout><Help /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
