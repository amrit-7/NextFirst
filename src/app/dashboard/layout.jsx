export const metadata = {
  title: "Dashboard",
  description: "Generated by Next",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <div>
        <nav>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </nav>
      </div>
      <body>{children}</body>
      <footer>
        <p>footer</p>
      </footer>
    </html>
  );
}
