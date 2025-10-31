import type { Metadata } from "next";
import { outfitSans, noticiaText, noticiaTextBold } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notes App",
  description: "Add edit and delete notes",
};
// <a href="https://www.flaticon.com/free-icons/post-it" title="Post it icons">Post it icons created by Saepul Nahwan - Flaticon</a> -- Include this link in the footer of your app for the proper attribution.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} ${noticiaText} ${noticiaTextBold} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
