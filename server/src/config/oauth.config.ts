import { OAuth2Client } from "google-auth-library";

const redirectUri = `http://localhost:${process.env.PORT}/api/oauth/callback`;
export const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENTID,
  process.env.GOOGLE_CLIENT_SECRET,
  redirectUri
);