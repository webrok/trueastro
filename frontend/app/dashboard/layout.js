// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
    return (
      <div className="dashboard-layout">
        <header className="dashboard-header">
          <div className="container">
            <div className="logo">TrueAstro Dashboard</div>
            <div className="user-menu">
              <span>Welcome, User</span>
              <a href="/auth/logout">Logout</a>
            </div>
          </div>
        </header>
        
        <div className="dashboard-container">
          <aside className="dashboard-sidebar">
            <nav>
              <ul>
                <li><a href="/dashboard">Dashboard Home</a></li>
                <li><a href="/dashboard/profile">Profile</a></li>
                <li><a href="/dashboard/settings">Settings</a></li>
                <li><a href="/">Back to Site</a></li>
              </ul>
            </nav>
          </aside>
          
          <main className="dashboard-content">
            {children}
          </main>
        </div>
      </div>
    );
  }