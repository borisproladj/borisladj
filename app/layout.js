import { Oswald } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ['latin']
});

export const metadata = {
  title: "Boris Ladyjensky Portfolio",
  description: "Made by Boris with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/profile.webp" />
        {/* Add other head elements here as needed */}
      </Head>
      <body>
        <div className={oswald.className}>{children}</div>
      </body>
    </html>
  );
}
