import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}
