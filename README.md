## Webflow → ClickUp Middleware (Webflow Cloud)

This project is a small Next.js middleware app (deployed on Webflow Cloud) that receives Webflow form submission webhooks and creates tasks in ClickUp.

### How it works

- Webflow sends a `form_submission` webhook to this app
- The handler extracts form fields and creates a task in ClickUp using your list ID
- Route lives under a base path: `basePath: /clickup-handler`

### Webhook endpoint

- POST `https://<your-domain>/clickup-handler/api/wf-form`
  - Example for local dev: `http://localhost:3000/clickup-handler/api/wf-form`
  - Note: The URL does not include the file name `route.ts`.

### Required environment variables

- `CLICKUP_API_TOKEN`: Your ClickUp personal token (Authorization header to ClickUp API)
- `CLICKUP_LIST_ID`: The target ClickUp list ID where tasks will be created
- Optional: `WEBFLOW_WEBHOOK_SECRET` to enable signature verification (used in production only)

You must configure these in your Webflow Cloud environment. For local development, export them in your shell before running the dev server.

### Creating the Webflow webhook (v2)

Create a webhook targeting your custom domain:

```
POST https://api.webflow.com/v2/sites/{SITE_ID}/webhooks
Authorization: Bearer <WEBFLOW_TOKEN>
Content-Type: application/json

{
  "triggerType": "form_submission",
  "url": "https://<your-domain>/clickup-handler/api/wf-form",
  "filter": { "name": "<optional form name>" }
}
```

### Local development

1. Install and run dev server

```bash
npm install
npm run dev
```

2. Test the endpoint locally

```bash
curl -X POST http://localhost:3000/clickup-handler/api/wf-form \
  -H "Content-Type: application/json" \
  -d '{
    "triggerType":"form_submission",
    "payload":{
      "name":"Contact",
      "siteId":"example-site",
      "data":{ "Name":"Alice", "Email":"alice@example.com", "Message":"Hello" },
      "schema":[],
      "submittedAt":"2023-01-01T00:00:00.000Z",
      "id":"1",
      "formId":"f1",
      "formElementId":"fe1"
    }
  }'
```

### Deploying to Webflow Cloud

- Deploy with [`webflow cloud deploy`](https://developers.webflow.com/webflow-cloud/environment)
- In Webflow Cloud, set the environment variables listed above
- Point your Webflow webhook to your live domain at `/clickup-handler/api/wf-form`

### Notes

- A 405 response on GET is expected; the webhook route only implements POST.
- The handler will verify signatures in production if `WEBFLOW_WEBHOOK_SECRET` is set.
