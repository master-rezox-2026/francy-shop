# Francy China Item Online Shop

A responsive, image-led online storefront adapted from the supplied HTML/CSS/JavaScript project. It keeps the existing Supabase-powered listing, user authentication and admin panel flow, with Netlify-friendly static hosting.

## Included
- `index.html` — storefront, product listing, search, filters, item details and buyer/seller flows
- `admin.html` — Supabase-authenticated admin panel
- `config.js` — Supabase project URL and public publishable key
- `i18n.js` — English / Sinhala / Tamil translations
- `site-settings.js` — admin-managed branding/settings loader
- `_headers` — Netlify security/cache headers
- `settings-test.html` — diagnostic page for site settings

## Deploy to Netlify
1. Unzip this folder.
2. In Netlify, choose **Add new site → Deploy manually** and upload the unzipped folder (or connect its Git repository).
3. Set the publish directory to the project root; no build command is required.
4. Open the deployed site and test sign-in, product loading, search, and the admin page.

## Supabase setup
`config.js` is already configured to the Supabase project represented in the supplied files. In Supabase, confirm that the project contains the expected `ads`, `profiles`, and `site_settings` tables, storage bucket/policies for product images, and the authentication/RLS policies used by the original app. The admin page also calls `is_site_admin()` and expects the admin SQL/policies from your existing setup. If this is a new Supabase project, create and configure those tables, storage policies, and admin RPC before deploying.

Only use a public/publishable key in `config.js`. Never place a `service_role` or secret key in browser code. Keep admin access restricted through Supabase Auth and row-level security.

## Product categories
The storefront categories are `Imported`, `Clothes`, `Beauty`, `Accessories`, and `Shoes`. When adding products through the admin/listing form, use these exact category values so the filters match. Existing rows using other category names may need updating in Supabase.

## Images and product claims
Category banner photos load from Unsplash over HTTPS. Replace them with your own licensed product photos for a fully branded shop. For creams/skincare, list ingredients, expiry dates and importer details accurately; avoid unverified medical or whitening claims.

## Notes
- This is a static front end; Netlify hosts the files and Supabase provides authentication/database/storage.
- The supplied project does not include the original SQL setup files, so database policies cannot be verified from this ZIP alone.
