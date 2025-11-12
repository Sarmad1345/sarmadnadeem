# 📧 How to Edit the Existing "Contact Us" Template

You're seeing a **pre-made template** that EmailJS created for you. You can use this template and just modify it!

---

## ✅ Option 1: Edit the Existing Template (EASIEST!)

### Step 1: Go to "Content" Tab

1. You're currently on the **"Settings"** tab (second image)
2. Click on the **"Content"** tab (first image shows this)
3. This is where you'll edit the email content

### Step 2: Edit the Content

On the **"Content"** tab:

1. **Click "Edit Content"** button (you'll see this on the right side)
2. You'll see the email template editor
3. **Replace everything** with this:

```
You received a new message from your portfolio contact form!

Name: {{name}}
Email: {{email}}
Message: {{message}}

---
This message was sent from your portfolio website.
```

4. **Click "Save"** in the editor

### Step 3: Edit the Subject

On the **"Content"** tab, find the **"Subject"** field:

1. It currently says: `Contact Us: {{title}}`
2. **Change it to:** `New Contact Form Submission - Portfolio`

### Step 4: Check the Right Panel (Email Settings)

On the **"Content"** tab, look at the **right side panel**:

1. **To Email:** Should show `sarmadnadeem3445@gmail.com` ✅ (already filled!)
2. **From Name:** Change from `{{name}}` to `Portfolio Contact Form`
3. **From Email:** Should be your email (check the checkbox if needed)
4. **Reply To:** Should show `{{email}}` ✅ (already correct!)

### Step 5: Go to "Settings" Tab

1. Click the **"Settings"** tab (where you are in the second image)
2. Find the **"Name"** field (this is your Template Name)
3. **Change it from "Contact Us" to:** `contact_form`
4. **Copy the Template ID** - it shows `template_x61b9n8` (or similar)
   - This is what you need for your `.env` file!

### Step 6: Find the Service

The **Service** is already set! Here's how to check:

1. Look at the **top of the page** (in the header area)
2. You might see the service name somewhere
3. **OR** - The service is already connected to this template
4. **You don't need to change it** - it's already set to your Gmail service!

### Step 7: Save Everything

1. Click the blue **"Save"** button (top right corner)
2. You're done! ✅

---

## 🎯 Quick Checklist for Editing Existing Template

**On "Content" Tab:**
- [ ] Click "Edit Content" button
- [ ] Replace content with the template I provided above
- [ ] Change Subject to: `New Contact Form Submission - Portfolio`
- [ ] Check To Email: `sarmadnadeem3445@gmail.com`
- [ ] Change From Name to: `Portfolio Contact Form`
- [ ] Verify Reply To: `{{email}}`

**On "Settings" Tab:**
- [ ] Change Name from "Contact Us" to: `contact_form`
- [ ] Copy the Template ID (e.g., `template_x61b9n8`)
- [ ] Click "Save" button

---

## 🔍 Where is the "Service" Field?

**Good news:** The Service is already set! 

When EmailJS creates a pre-made template, it automatically connects it to your default email service (Gmail). You don't need to set it again.

**To verify the service is correct:**
1. The template is already working
2. It's connected to your Gmail account
3. You can test it using the "Test It" button (top right)

---

## ✅ Option 2: Create a Brand New Template (If You Prefer)

If you want to create a completely new template from scratch:

### Step 1: Go Back to Templates List

1. Look for a **back arrow** or **"Templates"** link (usually top left)
2. Click it to go back to the templates list

### Step 2: Create New Template

1. Look for a **"+"** button or **"New Template"** button
2. Click it
3. You'll see a form to create a new template
4. Fill in:
   - **Template Name:** `contact_form`
   - **Service:** Select your Gmail service (from dropdown)
   - **To Email:** `sarmadnadeem3445@gmail.com`
   - **Subject:** `New Contact Form Submission - Portfolio`
   - **Content:** Paste the template content
5. Click "Save"

---

## 🎯 My Recommendation

**Use Option 1 (Edit Existing Template)** because:
- ✅ It's faster and easier
- ✅ The Service is already connected
- ✅ To Email is already set
- ✅ You just need to change the content and name

---

## 📝 What You Need to Do Right Now

**On the "Content" Tab (First Image):**

1. Click **"Edit Content"** button
2. Delete the existing content
3. Paste this:

```
You received a new message from your portfolio contact form!

Name: {{name}}
Email: {{email}}
Message: {{message}}

---
This message was sent from your portfolio website.
```

4. Change **Subject** from `Contact Us: {{title}}` to: `New Contact Form Submission - Portfolio`
5. In the right panel, change **From Name** from `{{name}}` to: `Portfolio Contact Form`

**On the "Settings" Tab (Second Image):**

1. Change **Name** from "Contact Us" to: `contact_form`
2. **Copy the Template ID** (shows `template_x61b9n8` or similar)
3. Click **"Save"** button (top right)

**That's it!** The Service is already set, so you don't need to worry about it.

---

## 🆘 Still Confused?

**The Service field is hidden because:**
- It's already set when the template was created
- You can't change it when editing
- It's already connected to your Gmail service ✅

**You only need to:**
1. Edit the content (on Content tab)
2. Change the name (on Settings tab)
3. Copy the Template ID
4. Save!

---

**You're almost done! Just edit the existing template and you're good to go!** 🎉

