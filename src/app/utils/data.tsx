export const homeNav = [
  { label: "AirPod", link: "/airpod" },
  { label: "Smart Watch", link: "/smart-watch" },
  { label: "Drone", link: "/drone" },
  { label: "BackPack", link: "/backpack" },
];

export const shopLinks = [
  { label: "Shop Grid", href: "shop-grid-3-column" },
  { label: "Shop Grid 4 Column", href: "shop-grid-4-column" },
  { label: "Shop Grid Left Sidebar", href: "shop-grid-left-sidebar" },
  { label: "Shop Grid Right Sidebar", href: "shop-grid-right-sidebar" },
];

export const shopListLinks = [
  { label: "Shop List", href: "shop-list" },
  { label: "Shop List Left Sidebar", href: "shop-list-left-sidebar" },
  { label: "Shop List Right Sidebar", href: "shop-list-right-sidebar" },
];

export const productTypesLinks = [
  { label: "Shop Single", href: "single-product" },
  { label: "Shop Variable", href: "single-product-configurable" },
  { label: "Shop Affiliate", href: "single-product-affiliate" },
  { label: "Shop Group", href: "single-product-group" },
];

export const pagesLinks = [
  { label: "About Page", href: "about" },
  { label: "Cart Page", href: "cart" },
  { label: "Checkout Page", href: "checkout" },
  { label: "Compare Page", href: "compare" },
  { label: "Login & Register Page", href: "login-register" },
  { label: "Account Page", href: "account" },
  { label: "Wishlist Page", href: "whishlist" },
  { label: "Frequently Asked Questions", href: "faq" },
  { label: "Error 404", href: "404" },
];

export const blogLinks = [
  { label: "Blog Grid 3 Column", href: "blog-grid-3-column" },
  { label: "Blog Grid 2 Column", href: "blog-grid-2-column" },
  { label: "Blog Grid Left Sidebar", href: "blog-grid-left-sidebar" },
  { label: "Blog Grid Right Sidebar", href: "blog-grid-right-sidebar" },
  { label: "Blog List", href: "blog-list" },
  { label: "Blog List Left Sidebar", href: "blog-list-left-sidebar" },
  { label: "Blog List Right Sidebar", href: "blog-list-right-sidebar" },
  { label: "Blog Details", href: "blog-details" },
];

export const products = [
  {
    id: 1,
    image: "/product1.webp",
    sold: 90,
    description: "this is product 1",
    available: 100,
    name: "Product 1",
    price: 110.0,
    weight: 500,
    discountedPrice: 130.0,
    colors: 3,
    variations: [
      { 
        type: "variety", 
        options: [
          { value: "hp", image: "/product1-sm.webp" },
          { value: "box", image: "/product2-sm.webp" },
          { value: "case", image: "/product4-sm.webp" },
          { value: "case", image: "/product5-sm.webp" },
        ]
      },
    ],
  },
  {
    image: "/product2.webp",
    sold: 10,
    id: 2,
    available: 50,
    description: "this is product 2",
    name: "Product 2",
    price: 110.0,
    weight: 300,
    colors: 3,
    discountedPrice: 130.0,
    variations: [
      { 
        type: "variety", 
        options: [
          { value: "hp", image: "/product1-sm.webp" },
          { value: "box", image: "/product2-sm.webp" },
          { value: "case", image: "/product3-sm.webp" },

        ]
      },
    ],
  },
  {
    image: "/product3.webp",
    sold: 25,
    id: 3,
    available: 50,
    name: "Product 3",
    description: "this is product 3",
    price: 110.0,
    weight: 300,
    colors: 3,
    discountedPrice: 130.0,
    variations: [
      { 
        type: "variety", 
        options: [
          { value: "hp", image: "/product1-sm.webp" },
          { value: "box", image: "/product2-sm.webp" },
          { value: "case", image: "/product3-sm.webp" },
          { value: "case", image: "/product4-sm.webp" },
          { value: "case", image: "/product5-sm.webp" },
        ]
      },
    ],
  },
  {
    image: "/product4.webp",
    sold: 23,
    id: 4,
    available: 50,
    description: "this is product 4",
    name: "Product 4",
    price: 110.0,
    weight: 300,
    colors: 3,
    discountedPrice: 130.0,
    variations: [
      { 
        type: "variety", 
        options: [
          { value: "hp", image: "/product1-sm.webp" },
          { value: "box", image: "/product2-sm.webp" },
          { value: "case", image: "/product3-sm.webp" },
          { value: "case", image: "/product4-sm.webp" },
          { value: "case", image: "/product5-sm.webp" },
        ]
      },
    ],
  },
  {
    image: "/product5.webp",
    sold: 42,
    available: 50,
    name: "Product 5",
    description: "this is product 5",
    price: 110.0,
    weight: 300,
    colors: 3,
    id: 5,
    discountedPrice: 130.0,
    variations: [
      { 
        type: "variety", 
        options: [
          { value: "hp", image: "/product1-sm.webp" },
          { value: "box", image: "/product2-sm.webp" },
          { value: "case", image: "/product3-sm.webp" },
          { value: "case", image: "/product4-sm.webp" },
          { value: "case", image: "/product5-sm.webp" },
        ]
      },
    ],
  },
  // more products...
];

export const blogs = [
  {
    id: 1,
    title: "Blog Title 1",
    date: "2023-01-01",
    comments: 10,
    description: "This is a short description of the blog post.",
    imageUrl: "/blog1.webp",
  },
  {
    id: 2,
    title: "Blog Title 2",
    date: "2023-01-01",
    comments: 10,
    description: "This is a short description of the blog post.",
    imageUrl: "/blog2.webp",
  },
  {
    id: 3,
    title: "Blog Title 3",
    date: "2023-01-01",
    comments: 10,
    description: "This is a short description of the blog post.",
    imageUrl: "/blog3.webp",
  },
  {
    id: 4,
    title: "Blog Title 4",
    date: "2023-01-01",
    comments: 10,
    description: "This is a short description of the blog post.",
    imageUrl: "/blog4.webp",
  },
  // Add more blog objects here...
];
