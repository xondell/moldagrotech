import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://moldagrotech.md"),
  title: "MoldAgroTech",
  description: "Agricultural technology from Moldova.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = (await headers()).get("x-moldagrotech-locale") || "ro";
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
