
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  const cookies = request.headers.get("Cookie") || "";
  const stateCookie = cookies
    .split(";")
    .map(item => item.trim())
    .find(item => item.startsWith("tt_oauth_state="))
    ?.split("=")[1];

  const headers = {
    "Content-Type": "text/html; charset=UTF-8",
    "Cache-Control": "no-store",
    "Set-Cookie": "tt_oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0"
  };

  const page = (message, status = 200) =>
    new Response(
      `<!doctype html><html lang="ar"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:Arial;text-align:center;padding:40px"><h2>Mohammed AI Studio</h2><p>${message}</p><a href="/login/">العودة إلى الموقع</a></body></html>`,
      { status, headers }
    );

  if (error) {
    return page("لم تكتمل الموافقة على تسجيل الدخول إلى TikTok.");
  }

  if (!code || !returnedState || !stateCookie || returnedState !== stateCookie) {
    return page("تعذر التحقق من طلب تسجيل الدخول. حاول مرة أخرى.", 400);
  }

  if (!env.TIKTOK_CLIENT_KEY || !env.TIKTOK_CLIENT_SECRET) {
    return page("إعدادات TikTok غير مكتملة على الخادم.", 500);
  }

  const redirectUri = new URL("/api/callback", request.url).toString();

  const form = new URLSearchParams({
    client_key: env.TIKTOK_CLIENT_KEY,
    client_secret: env.TIKTOK_CLIENT_SECRET,
    code,
    grant_type: "authorization_code",
    redirect_uri: redirectUri
  });

  try {
    const tokenResponse = await fetch(
      "https://open.tiktokapis.com/v2/oauth/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: form.toString()
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      return page("لم ينجح تبادل رمز التفويض مع TikTok.", 502);
    }

    const profileResponse = await fetch(
      "https://open.tiktokapis.com/v2/user/info/?fields=open_id,display_name,avatar_url",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`
        }
      }
    );

    const profileData = await profileResponse.json();

    if (!profileResponse.ok || !profileData.data?.user) {
      return page("تم تسجيل الدخول، لكن تعذر جلب معلومات الحساب.", 502);
    }

    const displayName = String(
      profileData.data.user.display_name || "حساب TikTok"
    ).replace(/[&<>"']/g, "");

    return page(`تم الاتصال بنجاح بحساب TikTok: ${displayName}`);
  } catch {
    return page("حدث خطأ أثناء الاتصال بخدمات TikTok.", 502);
  }
}
