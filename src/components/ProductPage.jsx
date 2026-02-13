import { useState } from "react"
import ProductModal from "./ProductModal"

const categoryLabel = (cat) => {
  if (cat === "movie" || cat === "movies") return "Movies"
  if (cat === "tv" || cat === "series") return "Series"
  return "Movies & Series"
}

function ProductPage({ products, setProducts }) {
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    duration: "",
    active: "",
  })

  const openAddForm = () => {
    setEditingProduct(null)
    setFormData({ name: "", category: "", price: "", duration: "", active: "true" })
    setShowForm(true)
  }

  const openEditForm = (product) => {
    setEditingProduct(product.id)
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      duration: product.duration,
      active: product.active,
    })
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.category) return
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct
            ? {
                ...p,
                name: formData.name,
                category: formData.category,
                price: formData.price,
                duration: formData.duration,
                active: String(formData.active) === "true",
              }
            : p
        )
      )
    } else {
      const newProduct = {
        id: products.length + 1,
        name: formData.name,
        category: formData.category,
        price: formData.price,
        duration: formData.duration,
        active: String(formData.active) === "true",
      }
      setProducts([...products, newProduct])
    }
    closeForm()
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id))
  }

  return (
    <>
      <ProductModal
        showForm={showForm}
        editingProduct={editingProduct}
        formData={formData}
        handleInputChange={handleChange}
        handleSubmit={handleSubmit}
        closeForm={closeForm}
      />
      <div className="page-header">
        <h2>Subscriptions</h2>
        <button className="btn-add" onClick={openAddForm}>+ Add Product</button>
      </div>
      <div className="product-cards-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-card-img">
              {item.image && <img src={item.image} alt={item.name} />}
              <span className={item.active ? "badge active" : "badge inactive"}>
                {item.active ? "Active" : "Out Of Stock"}
              </span>
            </div>
            <div className="product-card-body">
              <span className="product-card-category">{categoryLabel(item.category)}</span>
              <h3 className="product-card-name">{item.name}</h3>
              <div className="product-card-info">
                <span>Price: {item.price} SAR</span>
                <span>Duration: {item.durationMonths || item.duration} month{(item.durationMonths || item.duration) > 1 ? "s" : ""}</span>
              </div>
              <div className="product-card-actions">
                <button className="btn-edit" onClick={() => openEditForm(item)}>Edit</button>
                <button className="btn-delete" onClick={() => deleteProduct(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductPage;
