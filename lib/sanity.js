import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.local.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  token: process.env.local.SANITY_TOKEN,
  useCdn: false,
});
