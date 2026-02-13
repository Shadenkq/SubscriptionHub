import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MainContent from "../components/MainContent"
import { productsData } from "../data/data"
import { t } from "../data/translations"

function DashboardLayouts({ setIsLoggedIn }) {
  const [activePage, setActivePage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en")

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products")
    return savedProducts ? JSON.parse(savedProducts) : productsData
  })

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate("/login")
  }

  return (
    <div className="Layout">
      <aside className={`sidebar ${sidebarOpen ? "" : "sidebar-hidden"}`}>
        <div className="brand">{t("mainPage", language)}</div>
        <nav>
          <ul className="nav-list">
            <li><button onClick={() => setActivePage("dashboard")} className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}>{t("dashboard", language)}</button></li>
            <li><button onClick={() => setActivePage("products")} className={`nav-item ${activePage === "products" ? "active" : ""}`}>{t("subscriptions", language)}</button></li>
            <li><button onClick={() => setActivePage("orders")} className={`nav-item ${activePage === "orders" ? "active" : ""}`}>{t("orders", language)}</button></li>
            <li><button onClick={() => setActivePage("users")} className={`nav-item ${activePage === "users" ? "active" : ""}`}>{t("subscribers", language)}</button></li>
            <li><button onClick={() => setActivePage("search")} className={`nav-item ${activePage === "search" ? "active" : ""}`}>{t("search", language)}</button></li>
            <li><button onClick={() => setActivePage("settings")} className={`nav-item ${activePage === "settings" ? "active" : ""}`}>{t("settings", language)}</button></li>
          </ul>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>{t("logout", language)}</button>
      </aside>

      <div className="main-area">
        <header className="header">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
          <div className="header-content">
            <span>{t("welcomeBack", language)}</span>
          </div>
        </header>

        <MainContent
          activePage={activePage}
          products={products}
          setProducts={setProducts}
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </div>
  )
}

export default DashboardLayouts
