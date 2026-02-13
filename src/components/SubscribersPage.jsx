import { useState } from "react"

function SubscribersPage() {
  const [subscribers, setSubscribers] = useState([
    { id: 1, name: "Ahmed Ali", email: "ahmed@email.com", phone: "0501234567", product: "Netflix", status: "active", joinDate: "2024-01-15" },
    { id: 2, name: "Sara Mohammed", email: "sara@email.com", phone: "0559876543", product: "Apple TV", status: "active", joinDate: "2024-02-20" },
    { id: 3, name: "Khalid Omar", email: "khalid@email.com", phone: "0541112233", product: "Disney+", status: "inactive", joinDate: "2023-11-10" },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingSubscriber, setEditingSubscriber] = useState(null)
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", product: "", status: "active",
  })

  const openAddForm = () => {
    setEditingSubscriber(null)
    setFormData({ name: "", email: "", phone: "", product: "", status: "active" })
    setShowForm(true)
  }

  const openEditForm = (subscriber) => {
    setEditingSubscriber(subscriber.id)
    setFormData({
      name: subscriber.name, email: subscriber.email, phone: subscriber.phone,
      plan: subscriber.product, status: subscriber.status,
    })
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingSubscriber(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    if (editingSubscriber) {
      setSubscribers(subscribers.map((s) => s.id === editingSubscriber ? { ...s, ...formData } : s))
    } else {
      const newSubscriber = {
        id: subscribers.length + 1,
        ...formData,
        joinDate: new Date().toISOString().split("T")[0],
      }
      setSubscribers([...subscribers, newSubscriber])
    }
    closeForm()
  }

  const deleteSubscriber = (id) => {
    setSubscribers(subscribers.filter((s) => s.id !== id))
  }

  return (
    <>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editingSubscriber ? "Edit Subscriber" : "Add Subscriber"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>product</label>
                <select name="product" value={formData.product} onChange={handleChange}>
                  <option value="">Select Product</option>
                  <option value="Netflix">Netflix</option>
                  <option value="Disney+">Disney+</option>
                  <option value="Apple TV">Apple TV</option>
                  <option value="HBO Max">HBO Max</option>
                  <option value="Fasel Plus">Fasel Plus</option>
                  <option value="Shahid">Shahid</option>
                  <option value="Amazon Prime">Amazon Prime</option>
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <button type="submit" className="btn-add">{editingSubscriber ? "Update" : "Add"}</button>
                <button type="button" className="btn-cancel" onClick={closeForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="page-header">
        <h2>Subscribers</h2>
        <button className="btn-add" onClick={openAddForm}>+ Add Subscriber</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Product</th>
            <th>Status</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.id}</td>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.phone}</td>
              <td>{subscriber.product}</td>
              <td>
                <span className={subscriber.status === "active" ? "badge active" : "badge inactive"}>
                  {subscriber.status === "active" ? "Active" : "Inactive"}
                </span>
              </td>
              <td>{subscriber.joinDate}</td>
              <td>
                <button className="btn-edit" onClick={() => openEditForm(subscriber)}>Edit</button>
                <button className="btn-delete" onClick={() => deleteSubscriber(subscriber.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SubscribersPage;
