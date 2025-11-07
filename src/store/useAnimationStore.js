import { create } from 'zustand';

/**
 * Animation Store - Manages which sections are in view for animations
 */
export const useAnimationStore = create((set) => ({
  // Track which sections have been animated (to prevent re-animation)
  animatedSections: new Set(),

  // Check if section is animated
  isSectionAnimated: (sectionId) => {
    const state = useAnimationStore.getState();
    return state.animatedSections.has(sectionId);
  },

  // Mark section as animated
  markSectionAnimated: (sectionId) =>
    set((state) => {
      const newSet = new Set(state.animatedSections);
      newSet.add(sectionId);
      return { animatedSections: newSet };
    }),

  // Reset all animations (useful for testing)
  resetAnimations: () => set({ animatedSections: new Set() }),

  // Individual section visibility states
  sectionVisibility: {},
  setSectionVisibility: (sectionId, isVisible) =>
    set((state) => ({
      sectionVisibility: {
        ...state.sectionVisibility,
        [sectionId]: isVisible,
      },
    })),
}));

