# 📧 EmailJS Template Setup - Complete Guide

Step-by-step guide to create your email template in EmailJS.

---

## 🎯 What You're Creating

An email template that will be sent to you whenever someone submits your contact form.

---

## ⚠️ IMPORTANT: First Step!

**Before you see the form, you need to:**

1. You're currently on the **Template Selection** screen (showing pre-made templates)
2. Look for a blue button that says **"Create Template"** (usually bottom right)
3. **Click "Create Template"** button
4. This will take you to the **actual form** where you fill in Template Name, Service, etc.

**If you're already on the form screen, skip to the next section!**

---

## 📋 Step-by-Step: Filling Out the Template Form

### Step 1: Template Name

**Field:** `Template Name` (usually at the top)

**What to enter:**
```
contact_form
```

**Note:** This is just an internal name. You can use any name you want, but `contact_form` is recommended.

---

### Step 2: Service

**Field:** `Service` (dropdown menu)

**What to select:**
- Choose the Gmail service you created earlier
- It should show something like: `gmail` or `service_gmail_xxxxx`
- If you haven't created a service yet, go back and create one first!

---

### Step 3: To Email

**Field:** `To Email` or `To`

**What to enter:**
```
sarmadnadeem3445@gmail.com
```

**Important:** 
- This is YOUR email address where you want to receive form submissions
- Make sure it's the same email you connected to EmailJS

---

### Step 4: From Name (Optional)

**Field:** `From Name` (optional field)

**What to enter (optional):**
```
Portfolio Contact Form
```

**Or leave it blank** - it will use your Gmail name by default.

---

### Step 5: From Email

**Field:** `From Email` or `From`

**What to enter:**
```
sarmadnadeem3445@gmail.com
```

**Note:** This is usually auto-filled with your connected Gmail address. You can leave it as is.

---

### Step 6: Reply To (Optional)

**Field:** `Reply To` (optional)

**What to enter:**
```
{{email}}
```

**Why:** This allows you to reply directly to the person who submitted the form!
- `{{email}}` will be replaced with the visitor's email address
- When you reply, it will go to them, not back to yourself

**Or leave it blank** if you don't need this feature.

---

### Step 7: Subject

**Field:** `Subject`

**What to enter:**
```
New Contact Form Submission - Portfolio
```

**Or you can make it dynamic:**
```
New Message from {{name}} - Portfolio
```

This will show the visitor's name in the subject line!

**Example result:** "New Message from John Doe - Portfolio"

---

### Step 8: Content (The Main Part!)

**Field:** `Content` or `Message` (usually a large text box)

**What to enter (copy this exactly):**

```
You received a new message from your portfolio contact form!

Name: {{name}}
Email: {{email}}
Message: {{message}}

---
This message was sent from your portfolio website.
```

**Important Notes:**
- The `{{name}}`, `{{email}}`, and `{{message}}` are **variables**
- They will be replaced with actual form data when someone submits
- Make sure to use **double curly braces** `{{ }}`
- The variable names must match exactly: `name`, `email`, `message`

---

## 📝 Complete Template Example

Here's what your complete template should look like:

```
Template Name: contact_form
Service: gmail (or your service name)
To Email: sarmadnadeem3445@gmail.com
From Name: Portfolio Contact Form
From Email: sarmadnadeem3445@gmail.com
Reply To: {{email}}
Subject: New Contact Form Submission - Portfolio

Content:
You received a new message from your portfolio contact form!

Name: {{name}}
Email: {{email}}
Message: {{message}}

---
This message was sent from your portfolio website.
```

---

## 🎨 Template Formatting Options

### Plain Text (Recommended for Start)

Just use the text format shown above. Simple and works everywhere.

### HTML Format (Advanced)

If you want fancy formatting, you can use HTML:

```html
<h2>New Contact Form Submission</h2>
<p>You received a new message from your portfolio contact form!</p>

<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This message was sent from your portfolio website.</em></p>
```

**To use HTML:**
- Look for a toggle or checkbox that says "HTML" or "Use HTML"
- Enable it, then paste the HTML code above

---

## 🔍 Understanding Variables

### What are `{{name}}`, `{{email}}`, `{{message}}`?

These are **placeholders** that get replaced with real data:

| Variable | What It Becomes |
|----------|----------------|
| `{{name}}` | The visitor's name (e.g., "John Doe") |
| `{{email}}` | The visitor's email (e.g., "john@example.com") |
| `{{message}}` | The visitor's message (e.g., "I need a Flutter app...") |

### Example Email You'll Receive

**Subject:** New Contact Form Submission - Portfolio

**Body:**
```
You received a new message from your portfolio contact form!

Name: John Doe
Email: john@example.com
Message: I'm interested in your Flutter development services. Can we discuss a project?

---
This message was sent from your portfolio website.
```

---

## ✅ Field-by-Field Checklist

Go through each field and fill it like this:

- [ ] **Template Name:** `contact_form`
- [ ] **Service:** Select your Gmail service
- [ ] **To Email:** `sarmadnadeem3445@gmail.com`
- [ ] **From Name:** `Portfolio Contact Form` (optional)
- [ ] **From Email:** `sarmadnadeem3445@gmail.com` (usually auto-filled)
- [ ] **Reply To:** `{{email}}` (optional, but recommended)
- [ ] **Subject:** `New Contact Form Submission - Portfolio`
- [ ] **Content:** Copy the template content above with `{{name}}`, `{{email}}`, `{{message}}`

---

## 🚨 Common Mistakes to Avoid

### ❌ Wrong Variable Names

**Don't use:**
- `{name}` (single braces)
- `{{Name}}` (capital N - case sensitive!)
- `{{user_name}}` (wrong name)
- `{{email_address}}` (wrong name)

**✅ Use exactly:**
- `{{name}}`
- `{{email}}`
- `{{message}}`

### ❌ Missing Variables

Make sure all three variables are in your template:
- `{{name}}`
- `{{email}}`
- `{{message}}`

### ❌ Wrong Email Address

Double-check:
- To Email is YOUR email (where you want to receive messages)
- From Email matches your connected Gmail

---

## 🎯 Quick Copy-Paste Template

Copy this entire block and paste it into the Content field:

```
You received a new message from your portfolio contact form!

Name: {{name}}
Email: {{email}}
Message: {{message}}

---
This message was sent from your portfolio website.
```

---

## 💾 After Filling Out

1. **Click "Save"** or "Create Template"
2. **Note the Template ID** - You'll see something like `template_xxxxx`
3. **Copy this Template ID** - You need it for your `.env` file!

---

## 🔄 Testing Your Template

After saving, you can test it:

1. Look for a "Test" or "Send Test" button
2. Fill in test values:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test
3. Click "Send Test"
4. Check your email inbox!

---

## 📸 Visual Guide (What You Should See)

```
┌─────────────────────────────────────────┐
│ EmailJS Template Editor                 │
├─────────────────────────────────────────┤
│ Template Name: [contact_form        ]   │
│ Service:        [gmail ▼            ]   │
│                                         │
│ To Email:       [sarmadnadeem3445@...] │
│ From Name:      [Portfolio Contact...] │
│ From Email:     [sarmadnadeem3445@...] │
│ Reply To:       [{{email}}          ]  │
│ Subject:        [New Contact Form...]  │
│                                         │
│ Content:                                 │
│ ┌─────────────────────────────────────┐ │
│ │ You received a new message...       │ │
│ │                                      │ │
│ │ Name: {{name}}                      │ │
│ │ Email: {{email}}                    │ │
│ │ Message: {{message}}                │ │
│ │                                      │ │
│ │ ---                                  │ │
│ │ This message was sent from...        │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Save] [Cancel] [Test]                  │
└─────────────────────────────────────────┘
```

---

## 🆘 Still Confused?

### Question: "I don't see all these fields"

**Answer:** Some fields might be optional or hidden. Focus on:
1. Template Name
2. Service
3. To Email
4. Subject
5. Content

These are the essential ones!

### Question: "What if I want to add more fields?"

**Answer:** You can add more variables! For example:
- `{{phone}}` - if you add a phone field
- `{{company}}` - if you add a company field

Just make sure the variable names match what you send from your form.

### Question: "Can I change the email format later?"

**Answer:** Yes! You can edit the template anytime. Changes take effect immediately.

---

## ✅ Final Checklist

Before saving, make sure:

- [ ] Template Name is filled
- [ ] Service is selected (your Gmail service)
- [ ] To Email is YOUR email address
- [ ] Subject line is clear
- [ ] Content includes all three variables: `{{name}}`, `{{email}}`, `{{message}}`
- [ ] Variables use double curly braces `{{ }}`
- [ ] Variable names are lowercase and match exactly

---

## 🎉 Next Steps

After saving:

1. ✅ Copy the Template ID (looks like `template_xxxxx`)
2. ✅ Add it to your `.env` file as `VITE_EMAILJS_TEMPLATE_ID`
3. ✅ Test the form to make sure emails are received!

---

**You've got this! The template is just telling EmailJS what email to send you when someone fills out your form.** 📧✨

