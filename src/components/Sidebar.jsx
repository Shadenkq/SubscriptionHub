import React from "react";
import { useTheme } from "../context/ThemeContext";
import { t } from "../data/translations";

function Sidebar({ activePage, onPageChange, onLogout }) {
  const theme = useTheme();
  const language = theme?.language || "en";

  const navItems = [
    { id: "dashboard", labelKey: "dashboard" },
    { id: "products", labelKey: "subscriptions" },
    { id: "orders", labelKey: "orders" },
    { id: "users", labelKey: "subscribers" },
    { id: "search", labelKey: "search" },
    { id: "settings", labelKey: "settings" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="brand">{t("mainPage", language)}</h2>

      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activePage === item.id ? "nav-item active" : "nav-item"}
              onClick={() => onPageChange(item.id)}
            >
              {t(item.labelKey, language)}
            </li>
          ))}

          <li className="nav-item">
            <button className="logout-btn" onClick={onLogout}>
              {t("logout", language)}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
