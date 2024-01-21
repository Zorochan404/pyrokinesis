export const siteURL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL as string || 'http://localhost:3002'
);
export const siteOrigin = siteURL.origin;
