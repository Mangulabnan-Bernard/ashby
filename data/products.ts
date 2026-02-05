export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  tags: string[]
  description: string
}

export const products: Product[] = [
  // Bracelet Making
  {
    id: "bracelet-1",
    name: "Friendship Bracelet Set",
    category: "Bracelet Making",
    price: 150,
    image: "/images/bracelet/friendship-set.svg",
    tags: ["#braceletmaking", "#friendship", "#colorful"],
    description: "A beautiful set of handmade friendship bracelets perfect for sharing with your best friends."
  },
  {
    id: "bracelet-2",
    name: "Beaded Charm Bracelet",
    category: "Bracelet Making",
    price: 200,
    image: "/images/bracelet/beaded-charm.svg",
    tags: ["#braceletmaking", "#charms", "#beads"],
    description: "Elegant beaded bracelet with cute charms that add personality to your wrist."
  },
  {
    id: "bracelet-3",
    name: "Pastel Rainbow Bracelet",
    category: "Bracelet Making",
    price: 180,
    image: "/images/bracelet/pastel-rainbow.svg",
    tags: ["#braceletmaking", "#pastel", "#rainbow"],
    description: "Soft pastel colors woven together to create a dreamy rainbow effect."
  },
  
  // Hair Clips
  {
    id: "hairclip-1",
    name: "Flower Hair Clip Set",
    category: "Hair Clips",
    price: 120,
    image: "/images/hairclip/flower-set.svg",
    tags: ["#hairclip", "#flowers", "#cute"],
    description: "Adorable flower-shaped hair clips that add a touch of nature to your hairstyle."
  },
  {
    id: "hairclip-2",
    name: "Pearl Bobby Pins",
    category: "Hair Clips",
    price: 100,
    image: "/images/hairclip/pearl-bobby.svg",
    tags: ["#hairclip", "#pearls", "#elegant"],
    description: "Classic bobby pins adorned with tiny pearls for an elegant look."
  },
  {
    id: "hairclip-3",
    name: "Heart Claw Clips",
    category: "Hair Clips",
    price: 130,
    image: "/images/hairclip/heart-claw.svg",
    tags: ["#hairclip", "#hearts", "#trendy"],
    description: "Trendy claw clips shaped like hearts, perfect for securing your hair in style."
  },
  
  // Keychains
  {
    id: "keychain-1",
    name: "Acrylic Charm Keychain",
    category: "Keychains",
    price: 80,
    image: "/images/keychain/acrylic-charm.svg",
    tags: ["#keychain", "#acrylic", "#customizable"],
    description: "Customizable acrylic charm keychain with your choice of design and colors."
  },
  {
    id: "keychain-2",
    name: "Tassel Keychain",
    category: "Keychains",
    price: 90,
    image: "/images/keychain/tassel.svg",
    tags: ["#keychain", "#tassel", "#boho"],
    description: "Bohemian-style tassel keychain that adds flair to your keys or bag."
  },
  {
    id: "keychain-3",
    name: "Mini Plush Keychain",
    category: "Keychains",
    price: 110,
    image: "/images/keychain/plush.svg",
    tags: ["#keychain", "#plush", "#cute"],
    description: "Tiny plush keychain that's soft to touch and absolutely adorable."
  },
  
  // Lanyards
  {
    id: "lanyard-1",
    name: "Student ID Lanyard",
    category: "Lanyards",
    price: 150,
    image: "/images/lanyard/student-id.svg",
    tags: ["#lanyards", "#school", "#id"],
    description: "Stylish lanyard perfect for holding student IDs or access cards."
  },
  {
    id: "lanyard-2",
    name: "Phone Charm Lanyard",
    category: "Lanyards",
    price: 180,
    image: "/images/lanyard/phone-charm.svg",
    tags: ["#lanyards", "#phone", "#accessory"],
    description: "Multi-functional lanyard that doubles as a phone charm and wrist strap."
  },
  {
    id: "lanyard-3",
    name: "Badge Holder Lanyard",
    category: "Lanyards",
    price: 160,
    image: "/images/lanyard/badge-holder.svg",
    tags: ["#lanyards", "#badge", "#professional"],
    description: "Professional lanyard with built-in badge holder for events and work."
  },
  
  // For School Purposes
  {
    id: "school-1",
    name: "Pencil Case with Charms",
    category: "For School Purposes",
    price: 250,
    image: "/images/school/pencil-case.svg",
    tags: ["#ForSchoolPurposes", "#stationery", "#charms"],
    description: "Cute pencil case decorated with handmade charms to make studying more fun."
  },
  {
    id: "school-2",
    name: "Bookmarks with Tassels",
    category: "For School Purposes",
    price: 60,
    image: "/images/school/bookmarks.svg",
    tags: ["#ForSchoolPurposes", "#reading", "#tassels"],
    description: "Handcrafted bookmarks with colorful tassels to mark your favorite pages."
  },
  {
    id: "school-3",
    name: "Notebook Cover Set",
    category: "For School Purposes",
    price: 200,
    image: "/images/school/notebook-cover.svg",
    tags: ["#ForSchoolPurposes", "#notebook", "#personalized"],
    description: "Personalized notebook covers that make your notes stand out in class."
  }
]

export const categories = [
  "Bracelet Making",
  "Hair Clips", 
  "Keychains",
  "Lanyards",
  "For School Purposes"
]
