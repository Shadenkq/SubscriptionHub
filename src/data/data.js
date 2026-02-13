import NetflixImg from "../assets/Netflix.png";
import AppleTvImg from "../assets/AppleTv.png";
import AmazonPrimeImg from "../assets/AmazonPrime.png";
import DisneyImg from "../assets/Disney+.png";
import HBOMaxImg from "../assets/HBOMax.png";
import ShahidImg from "../assets/Shahid.png";
import FaselImg from "../assets/Fasel+.png";



export const productsData = [{
        id: 1,
        name: "Netflix",
        category: "both",
        price: 50,
        stock: 10,
        active: true,
        durationMonths: 1,
        image: NetflixImg,
    },
    {
        id: 2,
        name: "Apple TV+",
        category: "both",
        price: 45,
        stock: 15,
        active: false,
        durationMonths: 3,
        image: AppleTvImg,
    },
    {
        id: 3,
        name: "Amazon Prime Video",
        category: "series",
        price: 40,
        stock: 22,
        active: true,
        durationMonths: 6,
        image: AmazonPrimeImg,
    },
    {
        id: 4,
        name: "Disney+",
        category: "movies",
        price: 55,
        stock: 12,
        active: true,
        durationMonths: 1,
        image: DisneyImg,
    },
    {
        id: 5,
        name: "HBO Max",
        category: "movies",
        price: 60,
        stock: 8,
        active: false,
        durationMonths: 3,
        image: HBOMaxImg,
    },
    {
        id: 6,
        name: "Shahid",
        category: "series",
        price: 35,
        stock: 18,
        active: true,
        durationMonths: 6,
        image: ShahidImg,
    },
    {
        id: 7,
        name: "Fasel Plus",
        category: "both",
        price: 25,
        stock: 30,
        active: true,
        durationMonths: 1,
        image: FaselImg,
    },
];

export const ordersData = [{
        id: 1,
        productId: 1, // Netflix
        quantity: 2,
        active: true,
    },
    {
        id: 2,
        productId: 3, // Amazon Prime 
        quantity: 1,
        active: true,
    },
    {
        id: 3,
        productId: 2, // Apple TV
        quantity: 3,
        active: false,
    },
    {
        id: 4,
        productId: 5, // HBO 
        quantity: 1,
        active: true,
    },
    {
        id: 5,
        productId: 4, // Disney+
        quantity: 4,
        active: true,
    },
    {
        id: 6,
        productId: 6, // Shahid
        quantity: 2,
        active: false,
    },
    {
        id: 7,
        productId: 7, // Fasel Plus
        quantity: 5,
        active: true,
    },
];

export const productsOrder = [{
        id: "ORD-001",
        subscriberName: "Sara Mohammed",
        email: "saram@gmail.com",
        date: "2026-01-29",
        status: "completed",
        items: [{
            subscriptionProduct: "Netflix",
            subscriptionDuration: 1,
            price: 50,
        }, ],
    },

    {
        id: "ORD-002",
        subscriberName: "Ahmed Ali",
        email: "ahmed@gmail.com",
        date: "2026-01-28",
        status: "completed",
        items: [{
            subscriptionProduct: "Apple TV+",
            subscriptionDuration: 3,
            price: 45,
        }, ],
    },

    {
        id: "ORD-003",
        subscriberName: "Lina Hassan",
        email: "lina@gmail.com",
        date: "2026-01-27",
        status: "pending",
        items: [{
            subscriptionProduct: "Disney+",
            subscriptionDuration: 1,
            price: 55,
        }, ],
    }, {
        id: "ORD-004",
        subscriberName: "Mona Saleh",
        email: "mona@gmail.com",
        date: "2026-01-26",
        status: "completed",
        items: [{
            subscriptionProduct: "Amazon Prime Video",
            subscriptionDuration: 6,
            price: 40,
        }, ],


    }, {
        id: "ORD-005",
        subscriberName: "Fahad Alharbi",
        email: "fahad@gmail.com",
        date: "2026-01-25",
        status: "cancelled",
        items: [{
            subscriptionProduct: "HBO Max",
            subscriptionDuration: 3,
            price: 60,
        }, ],
    },

    {
        id: "ORD-006",
        subscriberName: "Noor Abdullah",
        email: "noor@gmail.com",
        date: "2026-02-4",
        status: "completed",
        items: [{
            subscriptionProduct: "Shahid",
            subscriptionDuration: 6,
            price: 35,
        }, ],
    },

    {
        id: "ORD-007",
        subscriberName: "Khalid Omar",
        email: "khalid@gmail.com",
        date: "2026-01-23",
        status: "pending",
        items: [{
            subscriptionProduct: "Fasel Plus",
            subscriptionDuration: 1,
            price: 25,
        }, ],
    },

    {
        id: "ORD-008",
        subscriberName: "Reem Nasser",
        email: "reem@gmail.com",
        date: "2026-01-22",
        status: "completed",
        items: [{
            subscriptionProduct: "Netflix",
            subscriptionDuration: 3,
            price: 150,
        }, ],
    },

]