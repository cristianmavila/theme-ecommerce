import { DrupalClient } from "next-drupal"


export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL as string,
  {
    frontPage: "/home",
    previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID as string,
      clientSecret: process.env.DRUPAL_CLIENT_SECRET as string,
    },
  }
)
