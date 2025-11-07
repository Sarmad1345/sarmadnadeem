import { create } from 'zustand';

/**
 * Form Store - Manages form state across the application
 */
export const useFormStore = create((set) => ({
  // Contact form state
  contactForm: {
    name: '',
    email: '',
    message: '',
  },

  // Form validation errors
  formErrors: {},

  // Form submission state
  isSubmitting: false,
  submitSuccess: false,
  submitError: null,

  // Update contact form field
  updateContactField: (field, value) =>
    set((state) => ({
      contactForm: {
        ...state.contactForm,
        [field]: value,
      },
      formErrors: {
        ...state.formErrors,
        [field]: null, // Clear error when user types
      },
    })),

  // Reset contact form
  resetContactForm: () =>
    set({
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
      formErrors: {},
      submitSuccess: false,
      submitError: null,
    }),

  // Set form errors
  setFormErrors: (errors) => set({ formErrors: errors }),

  // Set submitting state
  setSubmitting: (isSubmitting) => set({ isSubmitting }),

  // Set submit success
  setSubmitSuccess: (success) => set({ submitSuccess: success }),

  // Set submit error
  setSubmitError: (error) => set({ submitError: error }),
}));

