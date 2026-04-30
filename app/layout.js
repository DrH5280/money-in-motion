export const metadata = {
  title: "Money in Motion",
  description: "A practical accounting course for entrepreneurs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#F5F0E8" }}>
        {children}
      </body>
    </html>
  );
}
