export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {year} <span>Mohammed Saif</span>. All rights reserved.
          </p>
          <p className="footer-tag">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
