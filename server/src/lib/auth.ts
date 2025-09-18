import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/db.js";
import { schema } from "../db/schema.js";
import { sessionSchema } from "better-auth/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  trustedOrigins: [
    "https://vishwakarma.onrender.com",
    "https://admin-vishwakarma-unsquare.netlify.app",
    "https://vishwakarma-unsquare.netlify.app",
  ],
  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  advanced: {
    useSecureCookies: true,
    cookies: {
      sessionStorage: {
        attributes: {
          sameSite: "None",
          secure: true,
          httpOnly: true,
          partitioned: true,
        },
      },
      sessionSchema: {
        attributes: {
          sameSite: "None",
          secure: true,
          httpOnly: true,
          partitioned: true,
        },
      },
    },
    defaultCookieAttributes: {
      sameSite: "None",
      secure: true,
      partitioned: true,
      httpOnly: true,
    },
  },
});
