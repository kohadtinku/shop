// export const sortMenu = [
//     {
//         id: 1,
//         title: "Latest",
//     },
//     {
//         id: 2,
//         title: "Featured",
//     },
//     {
//         id: 3,
//         title: "Top Rated",
//     },
//     {
//         id: 4,
//         title: "Price(Lowest First)",
//     },
//     {
//         id: 5,
//         title: "Price(Highest First)"
//     },
// ];

// export const sortQualityMenu = [
//     {
//         id: 1,
//         title: "Price(Lowest First)",
//     },
//     {
//         id: 2,
//         title: "Price(Highest First)"
//     },
// ];

// export const brandsMenu = [
//     {
//         id: 1,
//         label: "JBL",
//         checked: false,
//     },
//     {
//         id: 2,
//         label: "BoAt",
//         checked: false,
//     },
//     {
//         id: 3,
//         label: "Sony",
//         checked: false,
//     },
// ];

// const priceMenu = [
//     {
//         id: 1,
//         label: "Under 5000",
//         checked: false,
//     },
//     {
//         id: 2,
//         label: "10000-15000",
//         checked: false,
//     },
//     {
//         id: 3,
//         label: "15000-20000",
//         checked: false,
//     },
//     {
//         id: 4,
//         label: "20000-25000",
//         checked: false,
//     },
//     {
//         id: 5,
//         label: "25000 and above",
//         checked: false,
//     },
// ];

//  export const categoryMenu = [
//     {
//         id: 1,
//         label: "TV",
//         images: [
//             "/assets/tv.png",
//         ],
//         checked: false,
//     },
//     {
//         id: 2,
//         label: "Headphones",
//         images: [
//             "/assets/headphone.png",
//         ],
//         checked: false,
//     },
//     {
//         id: 3,
//         label: "Mobile",
//         images: [
//             "/assets/phone.png",
//         ],
//         checked: false,
//     },
//     {
//         id: 4,
//         label: "Laptop",

//         checked: false,
//     },
//     {
//         id: 5,
//         label: "Mobile Accesories",

//         checked: false,
//     },
//     {
//         id: 6,
//         label: "Earbuds",

//         checked: false,
//     },
//     {
//         id: 7,
//         label: "Earphones",

//         checked: false,
//     },
//     {
//         id: 8,
//         label: "Neckbands",

//         checked: false,
//     },
// ];

// export default priceMenu

export const sortMenu = [
  {
    id: 1,
    title: "Latest",
  },
  {
    id: 2,
    title: "Featured",
  },
  {
    id: 3,
    title: "Top Rated",
  },
  {
    id: 4,
    title: "Price(Lowest First)",
  },
  {
    id: 5,
    title: "Price(Highest First)",
  },
];

export const sortQualityMenu = [
  {
    id: 1,
    title: "Low - High",
  },
  {
    id: 2,
    title: "High - Low",
  },
];

export const brandsMenu = [
  {
    id: 1,
    label: "JBL",
    checked: false,
  },
  {
    id: 2,
    label: "BoAt",
    checked: false,
  },
  {
    id: 3,
    label: "Sony",
    checked: false,
  },
];

export const priceMenu = [
  {
    id: 1,
    label: "Under 5000",
    checked: false,
    range: [0, 5000],
  },
  {
    id: 2,
    label: "10000-15000",
    checked: false,
    range: [10000, 15000],
  },
  {
    id: 3,
    label: "15000-20000",
    checked: false,
    range: [15000, 20000],
  },
  {
    id: 4,
    label: "20000-25000",
    checked: false,
    range: [20000, 25000],
  },
  {
    id: 5,
    label: "25000 and above",
    checked: false,
    range: [25000, 500000],
  },
];

export const categoryMenu = [
  {
    id: 1,
    label: "TV",
    images: ["/assets/tv.png"],
    checked: false,
  },
  {
    id: 2,
    label: "Headphones",
    images: ["/assets/headphone.png"],
    checked: false,
  },
  {
    id: 3,
    label: "Mobile",
    images: ["/assets/phone.png"],
    checked: false,
  },
  {
    id: 4,
    label: "Laptop",

    checked: false,
  },
  {
    id: 5,
    label: "Mobile Accesories",

    checked: false,
  },
  {
    id: 6,
    label: "Earbuds",

    checked: false,
  },
  {
    id: 7,
    label: "Earphones",

    checked: false,
  },
  {
    id: 8,
    label: "Neckbands",

    checked: false,
  },
];

export default priceMenu;
