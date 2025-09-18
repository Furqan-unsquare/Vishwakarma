import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: "https://vishwakarma.onrender.com",
});

export default authClient;
