import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * UI Store - Manages UI-related state (theme, menu, scroll, etc.)
 */
export const useUIStore = create(
  persist(
    (set) => ({
      // Theme state
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),

      // Menu state
      isMenuOpen: false,
      setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

      // Scroll state
      scrolled: false,
      setScrolled: (scrolled) => set({ scrolled }),

      // Loading states
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'ui-storage', // localStorage key
      partialize: (state) => ({ theme: state.theme }), // Only persist theme
    }
  )
);

