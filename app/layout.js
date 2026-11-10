export const metadata = {
  title: "Mohammed AI Studio",
  description: "منصة محمد الذكية لإنشاء وإدارة المحتوى بالذكاء الاصطناعي"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
