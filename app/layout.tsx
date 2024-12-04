import Link from 'next/link';
import './globals.css';  // Correctly import your global CSS

export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="gradient-bg py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto py-12">{children}</main>
        <footer className="gradient-bg text-center py-4 text-sm">
          © 2024 My Portfolio. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
