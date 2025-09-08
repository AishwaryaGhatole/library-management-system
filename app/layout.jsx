import { Geist } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Library Management System",
  description:
    "A web-based Library Management System that helps manage books, users, and borrowing records efficiently. Features include adding/removing books, tracking issued and returned books, and generating reports for easy library administration.",
  icons: {
    icon: "/book-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
