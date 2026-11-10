export default function Home() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "#080d19",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "30px 20px"
    }}>
      <header style={{
        maxWidth: "1000px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2>MOHAMMED AI</h2>
        <span style={{color:"#38bdf8"}}>الاستوديو الذكي</span>
      </header>

      <section style={{
        maxWidth: "1000px",
        margin: "90px auto",
        textAlign: "center"
      }}>
        <p style={{color:"#38bdf8"}}>YOUR AI CREATIVE STUDIO</p>
        <h1 style={{fontSize:"42px"}}>
          اصنع محتواك بقوة الذكاء الاصطناعي
        </h1>
        <p style={{color:"#aab4c8", lineHeight:"2"}}>
          منصتك الذكية لإنشاء الفيديوهات وإدارة المحتوى
          وربط حسابات التواصل الاجتماعي من مكان واحد.
        </p>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"18px",
          marginTop:"50px"
        }}>
          {[
            ["🎬","إنشاء الفيديوهات","حوّل أفكارك إلى محتوى مرئي"],
            ["🤖","المساعد الذكي","خطط واكتب محتواك بالذكاء الاصطناعي"],
            ["📱","إدارة TikTok","إدارة محتوى حسابك ونشر الفيديوهات"],
            ["📊","لوحة التحكم","تابع مشاريعك ومحتواك"]
          ].map((item) => (
            <div key={item[1]} style={{
              background:"#131d30",
              padding:"28px",
              borderRadius:"16px",
              border:"1px solid #26344d"
            }}>
              <div style={{fontSize:"32px"}}>{item[0]}</div>
              <h3>{item[1]}</h3>
              <p style={{color:"#aab4c8"}}>{item[2]}</p>
            </div>
          ))}
        </div>
        <p style={{color:"#64748b",marginTop:"70px"}}>
          Mohammed AI Studio © 2026
        </p>
      </section>
    </main>
  );
}
