import type { Metadata } from "next";
import "./globals.css";
import { APP_NAME, APP_SLOGAN, APP_DESCRIPTION } from "@/lib/constants";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/shared/Footer";
import { Main } from "@/components/shared/Navbar/Main";
import { ClientThemeProvider } from "@/components/shared/ClientThemeProvider";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: "https://maluda-nft-marketplace.vercel.app",
    siteName: APP_NAME,
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${APP_NAME} Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ["/assets/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased theme-blue`}>
        <ClientThemeProvider>
          <Main />
          {children}
          <Toaster richColors />
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
