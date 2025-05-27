
# Payload CMS Form Builder – Frame Tech Backend Evaluation

This project demonstrates a working implementation of a **Payload CMS** deployed to **Vercel** with **Supabase Postgres** as the database provider. It includes a form builder integration using Payload's official plugin and allows submissions through both the admin UI and REST API.

---

## Live Site

- **Admin Panel (Payload CMS)**: [https://payload-mocha-three.vercel.app/admin](https://payload-mocha-three.vercel.app/admin)

---

## 🗄️ Database Provider

- **Supabase PostgreSQL**
- Connected via environment variable `DATABASE_URL` in Vercel

---

## Setup & Implementation Steps

### 1. Payload CMS Setup
- Bootstrapped a Payload project with `create-payload-app`
- Installed necessary dependencies
- Added environment variables:
  ```env
  DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db>
  PAYLOAD_SECRET=<your-secret>
  ```
- Deployed to **Vercel**

### 2. Form Builder Plugin
- Installed the official Payload plugin:
  ```bash
  npm install @payloadcms/plugin-form-builder
  ```
- Registered the plugin in `payload.config.ts`:
  ```ts
  import formBuilderPlugin from '@payloadcms/plugin-form-builder';

  export default buildConfig({
    plugins: [formBuilderPlugin()],
    // ...
  });
  ```

### 3. Created a Contact Form
- Fields:
  - Full Name (Text)
  - Email Address (Email)
  - Message (Textarea)
- Enabled confirmation message after submission

### 4. Tested Form Functionality
- Accessed Admin Panel at `/admin`
- Created and previewed forms
- Submitted form data via Admin UI and Postman

---

## API Endpoints

### Fetch Form

```http
GET /api/forms
```

**Response Sample:**
```json
{
  "docs": [
    {
      "id": 2,
      "title": "Contact Us",
      "fields": [...]
    }
  ]
}
```

---

### Submit Form

```http
POST /api/form-submissions
Content-Type: application/json
```

**Sample Request Body:**
```json
{
  "form": 2,
  "submissionData": {
    "fullName": "John Doe",
    "email": "john@example.com",
    "message": "Hi, I’m interested in your services."
  }
}
```

**Sample Response:**
```json
{
  "message": "Form Submission successfully created."
}
```

---

## Authentication & Permissions

- Admin Panel access is protected with Payload's default user login system
- Form fetch and submission endpoints are **publicly accessible**
- Submission data is only visible in the admin panel

---

## Multi-Tenant

Multi-tenant functionality was **not implemented** in this scope.

---

## 📹 Loom Video

Watch the demo: [🔗 Loom Link Here](https://www.loom.com/share/521766130d374b8cbd88852664fa7a85?sid=a207b711-15a7-418c-99d3-5987d514d8ce)

---

