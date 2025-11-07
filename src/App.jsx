import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load components for code splitting
const AboutMe = lazy(() => import('./components/AboutMe'));
const SkillSet = lazy(() => import('./components/SkillSet'));
const Services = lazy(() => import('./components/Services'));
const WorkShowcase = lazy(() => import('./components/WorkShowcase'));
const ClientReviews = lazy(() => import('./components/ClientReviews'));
const GetInTouch = lazy(() => import('./components/GetInTouch'));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="bg-black m-0 p-0 w-full max-w-full overflow-x-hidden">
      <Header />
      <Suspense fallback={<SectionLoader />}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SkillSet />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WorkShowcase />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ClientReviews />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <GetInTouch />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
