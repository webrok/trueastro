// app/auth/layout.js
export default function AuthLayout({ children }) {
    return (
      <div className="auth-layout">
        <div className="auth-container">
          <div className="auth-logo">
            <a href="/">TrueAstro</a>
          </div>
          
          <main className="auth-content">
            {children}
          </main>
          
          <div className="auth-footer">
            <p>&copy; {new Date().getFullYear()} TrueAstro</p>
          </div>
        </div>
      </div>
    );
  }