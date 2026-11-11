export default function LoginPage() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "#080d19",
      color: "white",
      fontFamily: "Arial",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <h1>MOHAMMED AI</h1>
      <h2>ربط حساب TikTok</h2>
      <p style={{color:"#aab4c8"}}>
        اربط حسابك لإدارة المحتوى ونشر الفيديوهات.
      </p>

      <button style={{
        background: "#fe2c55",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "16px 28px",
        fontSize: "17px"
      }}>
        تسجيل الدخول باستخدام TikTok
      </button>

      <p style={{color:"#64748b", marginTop:"30px"}}>
        Mohammed AI Studio © 2026
      </p>
    </main>
  );
}
