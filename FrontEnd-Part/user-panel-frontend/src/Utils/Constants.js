export const saveToLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// get keys from local storage
export const getFromLS = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return false;
  }
};
export const cat = [
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
    title: "Chicken",
    path: "/chicken",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
    title: "Fish & Seafood",
    path: "/fish",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
    title: "Mutton",
    path: "/mutton",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    title: "Ready to cook",
    path: "/readytocook",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    title: "Prawns",
    path: "/prawns",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
    title: "Cold Cuts",
    path: "/coldcuts",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
    title: "Spreads",
    path: "/spreads",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    title: "Eggs",
    path: "/eggs",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    title: "Biryani & Kebab",
    path: "/biryani&kebab",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
    title: "Plant Based Meat",
    path: "/plantbasedmeat",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png",
    title: "Meat Masala",
    path: "/meatmasala",
  },
];

export const bestcat=[
  {
    "product_id": "9lc7t99g0lbsxzux3",
    "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/32ea2726-26c8-a807-13d3-5589c3ba795f/original/ChickenLC.jpg",
    "cta_text": "Only the Safest Chicken!",
    "product_name": "Chicken Curry Cut - Large Pieces",
    "item_desc": "Fresh Nakhre for tender bone-in & boneless chicken cuts",
    "net_weight": "500gms",
    "rupee": "₹179",
    "price": "₹189",
    "offer_discount": "5% OFF",
    "add_to_cart": "Add To Cart",
    "scooter_src": "https://www.licious.in/img/rebranding/express_delivery.svg",
    "message": "Today",
    "message_2": "6 PM - 9 PM",
    "rupee_3": ""
    },
    {
      "product_id": "9lc7t99g0lbsxzuxt",
      "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/97361400-adf8-0e54-c4ee-7409642b972e/original/new_sausages-01.jpg",
      "cta_text": "How To Cook",
      "product_name": "Classic Chicken Breakfast Sausage",
      "item_desc": "Juicy, meaty Classic Chicken Sausages",
      "net_weight": "Pieces: 4",
      "rupee": "₹275",
      "price": "",
      "offer_discount": "",
      "add_to_cart": "Add To Cart",
      "scooter_src": "https://www.licious.in/img/rebranding/express_delivery.svg",
      "message": "Today",
      "message_2": "6 PM - 9 PM",
      "rupee_3": "₹275"
      },
      {
        "product_id": "9lc7t9coklbpd4xrp",
        "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1e6494c4-87e7-ec8a-e8d4-f65a871db14d/original/WhatsApp_Image_2022-06-08_at_3.29.42_PM.jpeg",
        "cta_text": "Licious Health & Safety Protocols - Mutton",
        "product_name": "Goat Shoulder Curry Cut",
        "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of goat meat from the shoulders of goat.",
        "net_weight": "500gms",
        "rupee": "₹649",
        "price": "₹709",
        "offer_discount": "8% OFF",
        "add_to_cart": "Add To Cart",
        "message": "Tomorrow",
        "message_2": "6 AM - 9 AM",
        "rupee_3": ""
        },
        {
          "product_id": "9lc7t9coklbpd4xrx",
          "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a44670fd-cdb5-30d3-9326-ccd6ab1c5471/original/WhatsApp_Image_2022-06-08_at_4.19.42_PM.jpeg",
          "cta_text": "The Safest Mutton in Town",
          "product_name": "less",
          "item_desc": "Tender, boneless, evenly-cut chunks of velvety, lean lamb meat taken from the hind leg.",
          "net_weight": "450gms",
          "rupee": "₹915",
          "price": "",
          "offer_discount": "",
          "add_to_cart": "",
          "message": "Out of Stock",
          "message_2": "",
          "rupee_3": "₹915"
          },
          {
            "product_id": "9lc7t97iwlbpdk5ab",
            "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/797ea63c-7d48-cc91-7359-95db47064685/original/WhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg",
            "cta_text": "DeLicious easy recipes for meaty meals!",
            "product_name": "Freshwater/ White Prawns/ Jhinga (Medium) - Cleaned & Deveined",
            "item_desc": "Freshwater prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
            "net_weight": "250gms",
            "rupee": "₹386",
            "offer_discount": "10% OFF",
            "message": "Tomorrow",
            "gross_weight": ""
            },
            {
              "product_id": "9lc7t97iwlbpdk5aj",
              "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_123kq19agfk/18/prod_display_image/1632811974.4061--2021-09-2812:22:54--1818",
              "cta_text": "DeLicious easy recipes for meaty meals!",
              "product_name": "Flower Shrimp/ Jhinga (Medium) - Cleaned & Deveined",
              "item_desc": "Juicy & delicious, perfect for pakoras and pan-fried dishes",
              "net_weight": "250gms",
              "rupee": "₹369",
              "offer_discount": "",
              "message": "Out of Stock",
              "gross_weight": ""
              }
]

export const shopcat = [
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
    title: "Chicken",
    path: "/Chicken",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
    title: "Fish & Seafood",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
    title: "Mutton",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    title: "Ready to cook",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    title: "Prawns",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
    title: "Cold Cuts",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
    title: "Spreads",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    title: "Eggs",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    title: "Biryani & Kebab",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
    title: "Plant Based Meat",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png",
    title: "Meat Masala",
  },
];