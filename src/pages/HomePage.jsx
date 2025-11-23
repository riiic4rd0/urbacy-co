import { useNavigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Packages from '../components/sections/Packages';
import About from '../components/sections/About';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Hero onNavigate={navigate} />
      <Services />
      <Packages />
      <About />
    </main>
  );
};

export default HomePage;