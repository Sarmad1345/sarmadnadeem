# 🚀 Quick Setup Summary

This is a quick reference guide. For detailed instructions, see `CONTACT_FORM_SETUP_GUIDE.md`.

---

## ✅ What I've Done (Code Changes)

1. ✅ Installed EmailJS package (`@emailjs/browser`)
2. ✅ Updated `GetInTouch.jsx` component with EmailJS + Google Sheets integration
3. ✅ Created Google Apps Script template (`google-apps-script.js`)
4. ✅ Created environment variables template (`.env.example`)
5. ✅ Updated `.gitignore` to exclude `.env` files
6. ✅ Created comprehensive setup guide (`CONTACT_FORM_SETUP_GUIDE.md`)

---

## 📝 What You Need to Do (Step-by-Step)

### Step 1: Install Dependencies

```bash
npm install
```

This will install the `@emailjs/browser` package.

---

### Step 2: Set Up Google Sheets

1. **Create Google Sheet:**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create new blank sheet
   - Name it: "Portfolio Contact Form Submissions"

2. **Add Headers (Row 1):**
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Message`

3. **Share Sheet:**
   - Click "Share" → "Change to anyone with the link"
   - Set to "Viewer"
   - Copy the Sheet URL (you'll need it later)

---

### Step 3: Set Up Google Apps Script

1. **Open Apps Script:**
   - In your Google Sheet: Extensions → Apps Script

2. **Add Script:**
   - Delete default code
   - Copy code from `google-apps-script.js` file
   - Paste into Apps Script editor
   - Save (name it "Contact Form Handler")

3. **Deploy as Web App:**
   - Click "Deploy" → "New deployment"
   - Click gear icon → Select "Web app"
   - Settings:
     - Execute as: "Me"
     - Who has access: "Anyone"
   - Click "Deploy"
   - **Authorize** when prompted
   - **Copy the Web App URL** ← This is your `VITE_GOOGLE_SCRIPT_URL`!

---

### Step 4: Set Up EmailJS

1. **Create Account:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up (free)

2. **Add Email Service:**
   - Go to "Email Services" → "Add New Service"
   - Choose "Gmail" → Connect account
   - **Copy Service ID** (e.g., `service_xxxxx`)

3. **Create Email Template:**
   - Go to "Email Templates" → "Create New Template"
   - Name: `contact_form`
   - Subject: `New Contact Form Submission - Portfolio`
   - Content:
     ```
     You received a new message from your portfolio contact form!
     
     Name: {{name}}
     Email: {{email}}
     Message: {{message}}
     
     ---
     This message was sent from your portfolio website.
     ```
   - **Copy Template ID** (e.g., `template_xxxxx`)

4. **Get Public Key:**
   - Go to "Account" → "General"
   - **Copy Public Key**

---

### Step 5: Create `.env` File

1. **Create `.env` file** in project root (copy from `.env.example`)

2. **Fill in your values:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

3. **Replace all placeholders** with your actual values from Steps 3 & 4

---

### Step 6: Test It!

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Test the form:**
   - Fill out the contact form
   - Click "Send"
   - Check your email inbox
   - Check your Google Sheet

3. **Verify:**
   - ✅ Email received in inbox
   - ✅ New row added to Google Sheet

---

## 🎯 Quick Checklist

- [ ] `npm install` completed
- [ ] Google Sheet created with headers
- [ ] Google Apps Script deployed (URL copied)
- [ ] EmailJS account created
- [ ] EmailJS service connected (Service ID copied)
- [ ] EmailJS template created (Template ID copied)
- [ ] EmailJS public key copied
- [ ] `.env` file created with all values
- [ ] Test submission works (email + sheet)

---

## 🆘 Common Issues

**"Missing environment variables" error:**
- Check that `.env` file exists in project root
- Verify all variable names start with `VITE_`
- Restart dev server after changing `.env`

**Email not received:**
- Check spam folder
- Verify EmailJS service is connected
- Check EmailJS dashboard for logs

**Data not saving to Sheets:**
- Verify Google Apps Script is deployed
- Check that Web App URL is correct
- Verify sheet sharing settings

---

## 📚 Full Documentation

For detailed instructions with screenshots and troubleshooting, see:
- **`CONTACT_FORM_SETUP_GUIDE.md`** - Complete step-by-step guide

---

**Ready to go! 🎉**


