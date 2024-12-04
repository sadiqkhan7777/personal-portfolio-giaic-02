import Link from 'next/link';  // Import Link from next/link

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
        {/* Header */}
        <header className="gradient-bg py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link href="/" className="hover:underline"> {/* Replaced <a> with <Link> */}
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline"> {/* Replaced <a> with <Link> */}
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline"> {/* Replaced <a> with <Link> */}
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* Main Content */}
        <main className="container mx-auto py-12">{children}</main>
        {/* Footer */}
        <footer className="gradient-bg text-center py-4 text-sm">
          © 2024 My Portfolio. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
