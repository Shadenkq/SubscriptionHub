const translations = {
    en: {
        // Sidebar & Layout
        mainPage: "Main Page",
        dashboard: "Dashboard",
        subscriptions: "Subscriptions",
        orders: "Orders",
        subscribers: "Subscribers",
        search: "Search",
        settings: "Settings",
        logout: "Logout",
        welcomeBack: "Welcome back!",

        // Dashboard
        subscriptionHub: "Subscription Hub",
        totalProducts: "Total Products",
        totalOrders: "Total Orders",
        totalRevenue: "Total Revenue",

        // Order Status
        orderStatus: "Order Status",
        completed: "Completed",
        pending: "Pending",
        cancelled: "Cancelled",

        // Orders Page
        addOrder: "Add Order",
        orderId: "Order ID",
        subscriber: "Subscriber",
        items: "Items",
        total: "Total",
        date: "Date",
        status: "Status",
        view: "View",
        actions: "Actions",
        delete: "Delete",
        itemsCount: "items",

        // Products Page
        addProduct: "+ Add Product",
        editProduct: "Edit Product",
        price: "Price",
        duration: "Duration",
        month: "month",
        months: "months",
        active: "Active",
        inactive: "Inactive",
        outOfStock: "Out Of Stock",
        name: "Name",
        category: "Category",
        movies: "Movies",
        series: "Series",
        moviesAndSeries: "Movies & Series",
        edit: "Edit",
        update: "Update",
        add: "Add",
        cancel: "Cancel",

        // Subscribers Page
        addSubscriber: "+ Add Subscriber",
        editSubscriber: "Edit Subscriber",
        id: "ID",
        email: "Email",
        phone: "Phone",
        plan: "Plan",
        joinDate: "Join Date",
        selectPlan: "Select Plan",
        basic: "Basic",
        premium: "Premium",
        vip: "VIP",

        // Search Page
        searchMovies: "Search Movies & Series",
        searchPlaceholder: "Search for movies or series...",
        noResults: "No results found",

        // Settings Page
        appearance: "Appearance",
        darkMode: "Dark Mode",
        language: "Language",
        account: "Account",
        changePassword: "Change Password",
        deleteAccount: "Delete Account",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm New Password",
        enterCurrentPassword: "Enter current password",
        enterNewPassword: "Enter new password",
        confirmNewPassword: "Confirm new password",
        save: "Save",
        passwordIncorrect: "Current password is incorrect",
        passwordTooShort: "New password must be at least 6 characters",
        passwordMismatch: "New passwords do not match",
        passwordChanged: "Password changed successfully!",

        // Top Products
        topProducts: "Top Products",
    },
    ar: {
        // Sidebar & Layout
        mainPage: "الصفحة الرئيسية",
        dashboard: "لوحة التحكم",
        subscriptions: "الاشتراكات",
        orders: "الطلبات",
        subscribers: "المشتركين",
        search: "البحث",
        settings: "الإعدادات",
        logout: "تسجيل الخروج",
        welcomeBack: "!مرحباً بعودتك",

        // Dashboard
        subscriptionHub: "مركز الاشتراكات",
        totalProducts: "إجمالي المنتجات",
        totalOrders: "إجمالي الطلبات",
        totalRevenue: "إجمالي الإيرادات",

        // Order Status
        orderStatus: "حالة الطلبات",
        completed: "مكتمل",
        pending: "قيد الانتظار",
        cancelled: "ملغي",

        // Orders Page
        addOrder: "إضافة طلب",
        orderId: "رقم الطلب",
        subscriber: "المشترك",
        items: "العناصر",
        total: "المجموع",
        date: "التاريخ",
        status: "الحالة",
        view: "عرض",
        actions: "إجراءات",
        delete: "حذف",
        itemsCount: "عناصر",

        // Products Page
        addProduct: "+ إضافة منتج",
        editProduct: "تعديل المنتج",
        price: "السعر",
        duration: "المدة",
        month: "شهر",
        months: "أشهر",
        active: "نشط",
        inactive: "غير نشط",
        outOfStock: "غير متوفر",
        name: "الاسم",
        category: "الفئة",
        movies: "أفلام",
        series: "مسلسلات",
        moviesAndSeries: "أفلام ومسلسلات",
        edit: "تعديل",
        update: "تحديث",
        add: "إضافة",
        cancel: "إلغاء",

        // Subscribers Page
        addSubscriber: "+ إضافة مشترك",
        editSubscriber: "تعديل المشترك",
        id: "الرقم",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        plan: "الخطة",
        joinDate: "تاريخ الانضمام",
        selectPlan: "اختر خطة",
        basic: "أساسي",
        premium: "مميز",
        vip: "VIP",

        // Search Page
        searchMovies: "البحث عن أفلام ومسلسلات",
        searchPlaceholder: "ابحث عن أفلام أو مسلسلات...",
        noResults: "لا توجد نتائج",

        // Settings Page
        appearance: "المظهر",
        darkMode: "الوضع الداكن",
        language: "اللغة",
        account: "الحساب",
        changePassword: "تغيير كلمة المرور",
        deleteAccount: "حذف الحساب",
        currentPassword: "كلمة المرور الحالية",
        newPassword: "كلمة المرور الجديدة",
        confirmPassword: "تأكيد كلمة المرور الجديدة",
        enterCurrentPassword: "أدخل كلمة المرور الحالية",
        enterNewPassword: "أدخل كلمة المرور الجديدة",
        confirmNewPassword: "تأكيد كلمة المرور الجديدة",
        save: "حفظ",
        passwordIncorrect: "كلمة المرور الحالية غير صحيحة",
        passwordTooShort: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
        passwordMismatch: "كلمات المرور الجديدة غير متطابقة",
        passwordChanged: "!تم تغيير كلمة المرور بنجاح",

        // Top Products
        topProducts: "أفضل المنتجات",
    },
}

export function t(key, lang) {
    lang = lang || "en";
    var dict = translations[lang] || translations.en;
    return (dict && dict[key]) || key;
}


export default translations;