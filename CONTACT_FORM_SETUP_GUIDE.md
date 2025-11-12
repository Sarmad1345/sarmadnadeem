# 📧 Contact Form Setup Guide: EmailJS + Google Sheets

Complete step-by-step guide to set up your contact form with EmailJS (email notifications) and Google Sheets (data storage).

---

## 🎯 What This Setup Does

When a visitor submits your contact form:

1. ✅ **EmailJS** sends you an email notification instantly
2. ✅ **Google Sheets** saves the submission automatically
3. ✅ You get both email + spreadsheet storage

---

## 📋 Table of Contents

1. [Part 1: Google Sheets Setup](#part-1-google-sheets-setup)
2. [Part 2: Google Apps Script Setup](#part-2-google-apps-script-setup)
3. [Part 3: EmailJS Setup](#part-3-emailjs-setup)
4. [Part 4: Environment Variables](#part-4-environment-variables)
5. [Part 5: Testing](#part-5-testing)
6. [Troubleshooting](#troubleshooting)

---

## Part 1: Google Sheets Setup

### Step 1.1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name it: **"Portfolio Contact Form Submissions"** (or any name you prefer)

### Step 1.2: Set Up Column Headers

In Row 1, add these column headers (one per cell):

| A             | B        | C         | D           |
| ------------- | -------- | --------- | ----------- |
| **Timestamp** | **Name** | **Email** | **Message** |

**Important:** Make sure these are in Row 1, columns A, B, C, D exactly as shown.

### Step 1.3: Format the Header Row (Optional)

1. Select Row 1 (click the "1" on the left)
2. Make it **Bold** (Ctrl+B or Cmd+B)
3. Add background color (optional): Light gray or any color you like

### Step 1.4: Share the Sheet (Important!)

1. Click the **"Share"** button (top right)
2. Click **"Change to anyone with the link"**
3. Set permission to **"Viewer"** (not Editor)
4. Click **"Done"**
5. **Copy the Sheet URL** - you'll need this later!

**Note:** The Google Apps Script will handle writing to the sheet, so viewers can't edit it directly.

---

## Part 2: Google Apps Script Setup

### Step 2.1: Open Google Apps Script

1. In your Google Sheet, click **"Extensions"** → **"Apps Script"**
2. A new tab opens with the Apps Script editor

### Step 2.2: Replace the Default Code

1. Delete all existing code in the editor
2. Copy the code from `google-apps-script.js` file (provided in this project)
3. Paste it into the Apps Script editor

### Step 2.3: Save the Script

1. Click **"Save"** (💾 icon) or press `Ctrl+S` / `Cmd+S`
2. Name your project: **"Contact Form Handler"** (or any name)

### Step 2.4: Deploy as Web App

1. Click **"Deploy"** → **"New deployment"**
2. Click the gear icon ⚙️ next to **"Select type"**
3. Choose **"Web app"**
4. Fill in the deployment settings:
   - **Description:** "Contact Form Web App v1"
   - **Execute as:** "Me" (your email)
   - **Who has access:** "Anyone" (important!)
5. Click **"Deploy"**
6. **Authorize access:**
   - Click **"Authorize access"**
   - Choose your Google account
   - **⚠️ IMPORTANT: You'll see a warning abo ut "unverified app"** - This is normal for personal scripts!
   - Click **"Advanced"** (at the bottom of the warning screen)
   - Click **"Go to Contact Form Handler (unsafe)"** (or similar link)
   - Click **"Allow"** to grant permissions
   - **Note:** This warning appears because the app isn't verified by Google, but since it's YOUR script for YOUR sheet, it's safe to proceed.
7. **Copy the Web App URL** - This is your `GOOGLE_SCRIPT_URL`!

**Important:** Save this URL somewhere safe. It looks like:

```
https://script.google.com/macros/s/AKfycby.../exec
```

---

## Part 3: EmailJS Setup

### Step 3.1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Sign up with Google, GitHub, or email
4. Verify your email if required

### Step 3.2: Add Email Service

1. Go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Click **"Connect Account"**
5. Authorize EmailJS to access your Gmail
6. Click **"Create Service"**
7. **Note the Service ID** (e.g., `service_xxxxx`) - you'll need this!

### Step 3.3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Fill in the template form:

   **Template Name:** `contact_form`

   **Service:** Select your Gmail service (from Step 3.2)

   **To Email:** `sarmadnadeem3445@gmail.com` (your email)

   **From Name:** `Portfolio Contact Form` (optional)

   **From Email:** `sarmadnadeem3445@gmail.com` (usually auto-filled)

   **Reply To:** `{{email}}` (optional - allows you to reply to the visitor)

   **Subject:** `New Contact Form Submission - Portfolio`

   **Content:** (paste this in the content/body field)

   ```
   You received a new message from your portfolio contact form!

   Name: {{name}}
   Email: {{email}}
   Message: {{message}}

   ---
   This message was sent from your portfolio website.
   ```

4. **Important:**
   - Use the exact variable names: `{{name}}`, `{{email}}`, `{{message}}`
   - Variables must use double curly braces: `{{ }}`
   - Variable names are case-sensitive (lowercase)
5. Click **"Save"**
6. **Note the Template ID** (e.g., `template_xxxxx`) - you'll need this!

**📖 Need detailed help?** See `EMAILJS_TEMPLATE_SETUP_GUIDE.md` for a complete field-by-field guide with examples!

### Step 3.4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"**
3. **Copy the Public Key** - you'll need this!

---

## Part 4: Environment Variables

### Step 4.1: Create `.env` File

1. In your project root folder, create a file named `.env`
2. Copy the content from `.env.example` (provided in this project)
3. Fill in your actual values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
```

### Step 4.2: Get Your Values

- **VITE_EMAILJS_SERVICE_ID:** From Step 3.2 (Service ID)
- **VITE_EMAILJS_TEMPLATE_ID:** From Step 3.3 (Template ID)
- **VITE_EMAILJS_PUBLIC_KEY:** From Step 3.4 (Public Key)
- **VITE_GOOGLE_SCRIPT_URL:** From Step 2.4 (Web App URL)

### Step 4.3: Important Notes

- ✅ Never commit `.env` to Git (it's already in `.gitignore`)
- ✅ The `.env` file is for local development
- ✅ For production, add these variables to your hosting platform (Vercel, Netlify, etc.)

---

## Part 5: Testing

### Step 5.1: Start Your Development Server

```bash
npm run dev
```

### Step 5.2: Test the Form

1. Open your website in the browser
2. Navigate to the contact form
3. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click **"Send"**

### Step 5.3: Verify EmailJS

1. Check your email inbox (sarmadnadeem3445@gmail.com)
2. You should receive an email with the form data
3. If not received, check spam folder

### Step 5.4: Verify Google Sheets

1. Open your Google Sheet
2. You should see a new row with:
   - Timestamp (current date/time)
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message

### Step 5.5: Test Multiple Submissions

Submit the form 2-3 more times to ensure:

- ✅ Each submission creates a new row
- ✅ Each submission sends an email
- ✅ Timestamps are correct

---

## 🚀 Production Deployment

### For Vercel:

1. Go to your project settings
2. Navigate to **"Environment Variables"**
3. Add all four variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_GOOGLE_SCRIPT_URL`
4. Redeploy your site

### For Netlify:

1. Go to **"Site settings"** → **"Environment variables"**
2. Add all four variables
3. Redeploy your site

### For Other Platforms:

Add the environment variables in your hosting platform's settings.

---

## 🔧 Troubleshooting

### Problem: Email not received

**Solutions:**

1. Check spam folder
2. Verify EmailJS service is connected correctly
3. Check browser console for errors
4. Verify template variables match: `{{name}}`, `{{email}}`, `{{message}}`
5. Check EmailJS dashboard for logs

### Problem: Data not saving to Google Sheets

**Solutions:**

1. Verify Google Apps Script is deployed correctly
2. Check that Web App URL is correct in `.env`
3. Verify sheet sharing settings (should be "Anyone with link" as Viewer)
4. Check Apps Script execution logs:
   - In Apps Script editor → "Executions" (left sidebar)
   - Look for errors

### Problem: "CORS error" in browser console

**Solutions:**

1. Make sure Google Apps Script deployment has "Anyone" access
2. Redeploy the Apps Script if you changed access settings
3. Clear browser cache

### Problem: Form shows error message

**Solutions:**

1. Check browser console (F12) for detailed errors
2. Verify all environment variables are set correctly
3. Check that EmailJS service and template IDs are correct
4. Verify Google Script URL is accessible

### Problem: Environment variables not working

**Solutions:**

1. Make sure variable names start with `VITE_` (required for Vite)
2. Restart your dev server after changing `.env`
3. Check that `.env` file is in the project root
4. Verify no typos in variable names

---

## 📊 What You'll Receive

### Email Format:

```
Subject: New Contact Form Submission - Portfolio

You received a new message from your portfolio contact form!

Name: John Doe
Email: john@example.com
Message: I'm interested in your Flutter development services...

---
This message was sent from your portfolio website.
```

### Google Sheet Format:

| Timestamp           | Name     | Email            | Message              |
| ------------------- | -------- | ---------------- | -------------------- |
| 2024-01-15 10:30:15 | John Doe | john@example.com | I'm interested in... |

---

## ✅ Checklist

Before going live, make sure:

- [ ] Google Sheet created with correct column headers
- [ ] Google Apps Script deployed and URL copied
- [ ] EmailJS account created
- [ ] EmailJS service connected (Gmail)
- [ ] EmailJS template created with correct variables
- [ ] All environment variables added to `.env`
- [ ] Test submission works (email received)
- [ ] Test submission works (data in Google Sheet)
- [ ] Environment variables added to production hosting platform

---

## 🆘 Need Help?

If you encounter issues:

1. Check the Troubleshooting section above
2. Check browser console for errors (F12)
3. Check EmailJS dashboard for email logs
4. Check Google Apps Script execution logs

---

## 📝 Notes

- **EmailJS Free Tier:** 200 emails/month (perfect for portfolio)
- **Google Sheets:** Unlimited rows (free)
- **Google Apps Script:** Free, unlimited executions
- All services are free for portfolio use!

---

**Setup completed! 🎉 Your contact form is now fully functional.**
