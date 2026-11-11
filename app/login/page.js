
export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#080d18",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        MOHAMMED AI
      </h1>

      <h2 style={{ fontSize: "23px" }}>
        ربط حساب TikTok
      </h2>

      <p style={{ color: "#b8c1d1", lineHeight: "1.8" }}>
        اربط حسابك لإدارة المحتوى والفيديوهات.
      </p>

      <a
        href="/api/oauth"
        style={{
          display: "inline-block",
          background: "#fe2c55",
          color: "white",
          padding: "16px 28px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          marginTop: "20px"
        }}
      >
        تسجيل الدخول باستخدام TikTok
      </a>

      <p style={{ marginTop: "50px", color: "#777" }}>
        Mohammed AI Studio © 2026
      </p>
    </main>
  );
}
