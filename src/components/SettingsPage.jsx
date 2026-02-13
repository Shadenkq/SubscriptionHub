import { useState, useEffect } from "react"
import { t } from "../data/translations"

function SettingsPage({ language, setLanguage }) {
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("")
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
    localStorage.setItem("darkMode", String(darkMode))
  }, [darkMode])

  const handleChangePassword = () => {
    setMessage("")
    const savedPassword = localStorage.getItem("userPassword") || "123456"

    if (currentPassword !== savedPassword) {
      setMessage(t("passwordIncorrect", language))
      setMessageType("error")
      return
    }
    if (newPassword.length < 6) {
      setMessage(t("passwordTooShort", language))
      setMessageType("error")
      return
    }
    if (newPassword !== confirmPassword) {
      setMessage(t("passwordMismatch", language))
      setMessageType("error")
      return
    }

    localStorage.setItem("userPassword", newPassword)
    setMessage(t("passwordChanged", language))
    setMessageType("success")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setTimeout(() => {
      setShowPasswordModal(false)
      setMessage("")
    }, 1500)
  }

  const closeModal = () => {
    setShowPasswordModal(false)
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setMessage("")
  }

  return (
    <div className="settings-page">
      <h2>{t("settings", language)}</h2>

      <div className="settings-section">
        <h3>{t("appearance", language)}</h3>
        <div className="setting-item">
          <span className="setting-label">{t("darkMode", language)}</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <span className="setting-label">{t("language", language)}</span>
          <button className="settings-btn" style={{ width: "auto", marginBottom: 0, padding: "8px 16px" }} onClick={() => {
            const next = language === "en" ? "ar" : "en"
            localStorage.setItem("language", next)
            document.documentElement.dir = next === "ar" ? "rtl" : "ltr"
            setLanguage(next)
          }}>
            {language === "en" ? "English" : "العربية"}
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h3>{t("account", language)}</h3>
        <button className="settings-btn" onClick={() => setShowPasswordModal(true)}>
          {t("changePassword", language)}
        </button>
        <button className="settings-btn danger">{t("deleteAccount", language)}</button>
      </div>

      {showPasswordModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{t("changePassword", language)}</h3>

            <div className="form-group">
              <label>{t("currentPassword", language)}</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder={t("enterCurrentPassword", language)}
              />
            </div>

            <div className="form-group">
              <label>{t("newPassword", language)}</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={t("enterNewPassword", language)}
              />
            </div>

            <div className="form-group">
              <label>{t("confirmPassword", language)}</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t("confirmNewPassword", language)}
              />
            </div>

            {message && (
              <div className={`form-message ${messageType}`}>
                {message}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <button type="button" className="btn-add" onClick={handleChangePassword}>
                {t("save", language)}
              </button>
              <button type="button" className="btn-cancel" onClick={closeModal}>
                {t("cancel", language)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SettingsPage
