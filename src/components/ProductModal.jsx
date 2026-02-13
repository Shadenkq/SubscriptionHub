function ProductModal({ showForm, editingProduct, formData, handleInputChange, handleSubmit, closeForm }) {
  if (!showForm) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input type="number" name="duration" value={formData.duration} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="active" value={formData.active} onChange={handleInputChange}>
              <option value="true">Active</option>
              <option value="false">Out Of Stock</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
            <button type="submit" className="btn-add">{editingProduct ? "Update" : "Add"}</button>
            <button type="button" className="btn-cancel" onClick={closeForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductModal;
