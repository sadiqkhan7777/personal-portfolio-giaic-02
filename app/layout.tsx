import './globals.css';

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
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
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
