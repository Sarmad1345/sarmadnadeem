import { create } from 'zustand';

/**
 * Navigation Store - Manages active section and navigation state
 */
export const useNavigationStore = create((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),

  // Navigation items - Updated to match actual sections
  navItems: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolios', label: 'Portfolios', href: '#portfolios' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],

  // Scroll to section
  scrollToSection: (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      set({ activeSection: sectionId });
    }
  },
}));

