# 📧 EmailJS Template Creation - Step-by-Step Visual Guide

## 🎯 Current Screen: Template Selection

You're currently seeing a screen with pre-made templates like:
- Contact Us
- Auto-Reply
- Welcome
- etc.

**This is NOT the form yet!** You need to click a button to get to the actual form.

---

## ✅ Step 1: Click "Create Template" Button

**What to do:**
1. Look at the **bottom right** of the screen
2. You'll see a blue button that says **"Create Template"** (with a checkmark icon)
3. **Click this button**

**What happens:**
- The template selection screen will close
- You'll be taken to the **actual template creation form**
- This is where you'll fill in Template Name, Service, To Email, etc.

---

## 📝 Step 2: The Template Creation Form

After clicking "Create Template", you'll see a **NEW screen** with form fields. This is where you fill everything in!

### What You'll See on the Next Screen:

The form will have these fields (in order, usually from top to bottom):

```
┌─────────────────────────────────────────┐
│ Create New Template                     │
├─────────────────────────────────────────┤
│                                         │
│ Template Name: [________________]       │ ← Fill this
│                                         │
│ Service:        [Dropdown ▼]           │ ← Select your Gmail service
│                                         │
│ To Email:       [________________]       │ ← Your email
│                                         │
│ From Name:      [________________]      │ ← Optional
│                                         │
│ From Email:     [________________]      │ ← Usually auto-filled
│                                         │
│ Reply To:       [________________]      │ ← Optional
│                                         │
│ Subject:        [________________]      │ ← Email subject
│                                         │
│ Content:                                 │
│ ┌─────────────────────────────────────┐ │
│ │                                     │ │ ← Big text box
│ │                                     │ │   Paste your template
│ │                                     │ │   content here
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Cancel]                    [Save]      │
└─────────────────────────────────────────┘
```

---

## 📋 Step 3: Fill Out Each Field

Once you're on the form screen, fill it out like this:

### Field 1: Template Name
**Location:** Usually at the very top
**What to enter:**
```
contact_form
```

### Field 2: Service
**Location:** Below Template Name (dropdown menu)
**What to do:**
- Click the dropdown
- Select your Gmail service (the one you created earlier)
- It might show as "gmail" or "service_gmail_xxxxx"

### Field 3: To Email
**Location:** Below Service
**What to enter:**
```
sarmadnadeem3445@gmail.com
```
(This is YOUR email where you want to receive messages)

### Field 4: From Name (Optional)
**Location:** Below To Email
**What to enter (optional):**
```
Portfolio Contact Form
```
Or leave it blank

### Field 5: From Email
**Location:** Below From Name
**What to enter:**
```
sarmadnadeem3445@gmail.com
```
(Usually this is already filled in automatically)

### Field 6: Reply To (Optional)
**Location:** Below From Email
**What to enter (optional):**
```
{{email}}
```
This allows you to reply directly to the person who submitted the form!

### Field 7: Subject
**Location:** Below Reply To
**What to enter:**
```
New Contact Form Submission - Portfolio
```

### Field 8: Content (The Big One!)
**Location:** Large text box, usually at the bottom
**What to enter:** Copy and paste this EXACTLY:

```
You received a new message from your portfolio contact form!

Name: {{name}}
Email: {{email}}
Message: {{message}}

---
This message was sent from your portfolio website.
```

**Important:** 
- Make sure to use `{{name}}`, `{{email}}`, `{{message}}` with double curly braces
- These are variables that will be replaced with actual form data

---

## 🎯 Quick Action Steps

**Right now, on the screen you're seeing:**

1. ✅ Look for the blue **"Create Template"** button (bottom right)
2. ✅ Click it
3. ✅ You'll see a NEW form with all the fields listed above
4. ✅ Fill in each field as shown
5. ✅ Click "Save" at the bottom

---

## 🔍 If You Don't See "Create Template" Button

Sometimes the interface is slightly different. Look for:

- **"New Template"** button
- **"Create"** button
- **"Add Template"** button
- A **"+"** icon or **plus sign**
- Any button that says "Create" or "New"

---

## 📸 What the Next Screen Looks Like

After clicking "Create Template", you should see something like:

**Option A: Simple Form View**
- All fields in a vertical list
- Template Name at top
- Service dropdown
- To Email field
- Subject field
- Big content box at bottom

**Option B: Tabbed View**
- Some fields in tabs like "Basic", "Content", "Advanced"
- Look for tabs at the top
- Click through tabs to fill all fields

**Option C: Side-by-Side View**
- Fields on the left
- Preview on the right
- Fill fields on the left side

---

## ✅ Checklist: What to Do Now

**On Current Screen (Template Selection):**
- [ ] Find "Create Template" button (blue, bottom right)
- [ ] Click it

**On Next Screen (Template Form):**
- [ ] Fill in Template Name: `contact_form`
- [ ] Select Service: Your Gmail service
- [ ] Fill in To Email: `sarmadnadeem3445@gmail.com`
- [ ] Fill in Subject: `New Contact Form Submission - Portfolio`
- [ ] Paste content with `{{name}}`, `{{email}}`, `{{message}}`
- [ ] Click "Save"

---

## 🆘 Still Can't Find the Form?

### If you see tabs or sections:

1. **Look for tabs** like "Basic", "Settings", "Content"
2. **Click through each tab** to find all fields
3. **Template Name** is usually in "Basic" or "Settings"
4. **Content** is usually in "Content" or "Message" tab

### If the form looks different:

1. **Template Name** might be at the very top
2. **Service** is usually a dropdown
3. **To Email** is a text input field
4. **Subject** is a text input field
5. **Content** is the largest field (big text box)

---

## 💡 Pro Tip

If you're still confused:
1. Take a screenshot of the form you see
2. Look for ANY field that says "Name", "Email", or "Template"
3. Start filling those out
4. The most important fields are:
   - Template Name
   - Service (dropdown)
   - To Email
   - Subject
   - Content (the big text box)

---

## 🎉 After You Fill It Out

1. Click **"Save"** button (usually at bottom right)
2. You'll see a success message
3. **Copy the Template ID** - it will show something like `template_xxxxx`
4. Add this to your `.env` file!

---

**Next Step: Click "Create Template" button on your current screen, then you'll see the form!** 🚀

