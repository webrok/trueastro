// app/dashboard/page.js
export default function DashboardPage() {
    return (
      <div className="dashboard-home">
        <h1>Dashboard</h1>
        <p>Welcome to your personal dashboard.</p>
        
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>Your Horoscope</h3>
            <p>Today's cosmic energy suggests a focus on communication.</p>
          </div>
          
          <div className="widget">
            <h3>Recent Activity</h3>
            <ul>
              <li>Profile updated</li>
              <li>Saved horoscope reading</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }