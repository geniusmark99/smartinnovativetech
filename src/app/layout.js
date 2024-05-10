import LocalFont from "next/font/local";
import "./globals.css";

const Poppins = LocalFont({
  src: '../fonts/Poppins/Poppins-Medium.ttf',
  display: 'swap',
});

export const metadata = {
  title: "Smart Innovative Tech",
  description: "Making Life better with Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Poppins.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
