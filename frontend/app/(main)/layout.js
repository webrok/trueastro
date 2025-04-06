import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import HeaderNotice from "../component/header/HeaderNotice";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <HeaderNotice />
      <Header />
      
      <main className="content-container">
        {children}
      </main>
      
      <Footer />
      
    </div>
  );
}