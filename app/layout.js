import "./globals.css";

export const metadata = {
  title: "Nike",
  description: "Nike Website Clone with TailwindCSS and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
