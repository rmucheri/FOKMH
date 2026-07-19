# Event posters

Posters shown on the site's **/events** page are served from this folder. There
is no backend — to publish a poster you add the image file here and list it in
`events.json`, then commit and redeploy the site.

## How to add a poster

1. Add the image file to this folder (`public/events/`). Use a web-friendly
   format: `.jpg`, `.png`, `.webp`, `.gif`, or `.svg`. Keep it reasonably sized
   (ideally under ~1 MB) so the page loads fast.

2. Add an entry to `events.json`. The file is a JSON array; each poster is an
   object:

   ```json
   [
     {
       "title": "Charity Gala Dinner",
       "date": "2026-09-20",
       "image": "charity-gala.jpg",
       "description": "An evening in support of Karanda Mission Hospital."
     }
   ]
   ```

   Fields:
   - `title` (required) — the event name shown on the card.
   - `image` (required) — the file name exactly as saved in this folder.
   - `date` (optional) — `YYYY-MM-DD`; shown formatted on the card.
   - `description` (optional) — short blurb shown under the title.

3. Save, commit both the image and the updated `events.json`, and redeploy.
   The new poster appears on the /events page.

## Tips

- The newest events look best listed first (the page shows them in file order).
- Remove a poster by deleting its entry from `events.json` (and optionally the
  image file), then redeploy.
- You can prepare the JSON entry quickly using the "Preview a poster" helper on
  the /events page — it generates the exact snippet to paste here.
