# Admin Panel — Notes & Manual Verification

This document lists the new admin pages and API routes added to manage Suggestions, File Requests, and Tributes.

## Admin pages
- `/admin/messages` — View and manage contact suggestions (mark read, edit, delete).
- `/admin/file-requests` — View file requests, change status (approve/reject), edit title, delete.
- `/admin/tributes` — View tributes, approve, edit message, delete.

## API routes
- `GET /api/contact-messages` — list suggestions
- `PUT /api/contact-messages/:id` — update fields (e.g., `{ is_read: true }` or `{ message: '...' }`)
- `DELETE /api/contact-messages/:id` — delete a suggestion

- `GET /api/file-requests` — list file requests
- `PUT /api/file-requests/:id` — update fields (e.g., `{ status: 'approved' }`)
- `DELETE /api/file-requests/:id` — delete a request

- `GET /api/tributes` — list tributes
- `PUT /api/tributes/:id` — update fields (e.g., `{ is_approved: true }` or `{ message: '...' }`)
- `DELETE /api/tributes/:id` — delete a tribute

## Manual test steps
1. Start the dev server: `npm run dev`.
2. Sign in to admin area (use existing login flow) and open `/admin`.
3. Click the new tiles: `Suggestions`, `File Requests`, `Tributes`.
4. For each page:
   - Click Refresh to load current items.
   - Try Edit (prompts appear) and confirm fields update.
   - Try Approve / Mark as read / Status change and confirm success toast.
   - Try Delete and confirm the item is removed.
5. Verify the public-facing pages (if any) reflect approved changes.

## Notes
- All admin actions revalidate path `/` using server action to ensure fresh content.
- If you want stricter access controls, add server-side authentication checks in the API routes (they currently rely on the admin layout guard for frontend access). 

If you'd like, I can now run a quick local smoke test or add automated tests for these endpoints. Let me know which you'd prefer.