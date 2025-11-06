import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SkillSet from './components/SkillSet';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black m-0 p-0">
      <Header />
      <AboutMe />
      <SkillSet />
      <Services />
      <ClientReviews />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
