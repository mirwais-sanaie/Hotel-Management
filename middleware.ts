import { auth } from "@/app/_lib/auth";

export const middleware = auth;

//for authorization
export const config = {
  matcher: ["/account", "/cabins"],
};
