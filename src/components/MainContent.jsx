import { t } from "../data/translations"
import StatCard from "./StatCard"
import ProductPage from "./ProductPage"
import OrdersPage from "./OrdersPage"
import MovieSeriesApi from "./MovieSeriesApi"
import SubscribersPage from "./SubscribersPage"
import TopProducts from "./TopProducts"
import SettingsPage from "./SettingsPage"
import { productsOrder } from "../data/data"
import OrderStatus from "./OrderStatus"

function MainContent({ activePage, products, setProducts, language, setLanguage }) {
  const totalProduct = products.length
  const totalOrders = productsOrder.length

  const revenue = productsOrder.reduce((total, order) => {
    if (!order.items || !Array.isArray(order.items)) return total
    const orderTotal = order.items.reduce((sum, item) => {
      const price = Number(item.price) || 0
      return sum + price
    }, 0)
    return total + orderTotal
  }, 0)

  const renderPage = () => {
    switch (activePage) {
      case "products":
        return <ProductPage products={products} setProducts={setProducts} />
      case "orders":
        return <OrdersPage />
      case "users":
        return <SubscribersPage />
      case "search":
        return <MovieSeriesApi />
      case "settings":
        return <SettingsPage language={language} setLanguage={setLanguage} />
      default:
        return (
          <>
            <h2>{t("subscriptionHub", language)}</h2>
            <div className="card-grid">
              <StatCard title={t("totalProducts", language)} value={totalProduct} />
              <StatCard title={t("totalOrders", language)} value={totalOrders} />
              <StatCard title={t("totalRevenue", language)} value={`$${revenue.toFixed(2)}`} />
            </div>
            <OrderStatus orders={productsOrder} />
            <TopProducts />
          </>
        )
    }
  }

  return (
    <main className="main-content">
      {renderPage()}
    </main>
  )
}

export default MainContent
