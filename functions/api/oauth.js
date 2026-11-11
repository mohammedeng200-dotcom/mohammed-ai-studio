
export async function onRequestGet({ request, env }) {
  const clientKey = env.TIKTOK_CLIENT_KEY;

  if (!clientKey) {
    return new Response("TikTok configuration is missing", {
      status: 500
    });
  }

  const stateBytes = new Uint8Array(32);
  crypto.getRandomValues(stateBytes);

  const state = Array.from(stateBytes)
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `tt_oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`
  );

  const redirectUri = new URL("/api/callback", request.url).toString();

  const authUrl = new URL(
    "https://www.tiktok.com/v2/auth/authorize/"
  );

  authUrl.searchParams.set("client_key", clientKey);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "user.info.basic");
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("state", state);

  headers.set("Location", authUrl.toString());

  return new Response(null, {
    status: 302,
    headers
  });
}
