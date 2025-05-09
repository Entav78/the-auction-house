import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Listings from '@/pages/Listings';
import Profile from '@/pages/Profile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
