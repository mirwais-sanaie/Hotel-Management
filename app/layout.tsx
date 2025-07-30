import Header from "./_components/Header";
import "./_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Hotel Management",
    default: "Welcome / Hotel Management",
  },
  description: "A simple hotel management system built with Next.js and React.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-gray-200 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
