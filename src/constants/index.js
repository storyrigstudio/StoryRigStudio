import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unreal,
  blender,
  davinci,
  aftereffect,
  pp,
  pt,
  ps,
  ai,
  ue,
  csda,
  fl,
  gfxlogo,
  model,
  animation,
  vfx,
  edit,
  thumbnail1,
  youtube,
  led,
  thumbnail0,
  thumbnail,
  thumbnail3,
  sf,
  thumbnail4,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Film & Animation",
    icon: animation,
  },
  {
    title: "Visual Effects",
    icon: vfx,
  },
  {
    title: "Virtual Production",
    icon: led,
  },
  {
    title: "Game Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ue",
    icon: ue,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "pt",
    icon: pt,
  },
  {
    name: "aftereffect",
    icon: aftereffect,
  },
  {
    name: "davinci",
    icon: davinci,
  },
  {
    name: "pp",
    icon: pp,
  },

  {
    name: "ps",
    icon: ps,
  },
  {
    name: "ai",
    icon: ai,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const experiences = [
  {
    title: "Kaykee Digital Solution – Video Editor & Animator",
    icon: edit,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Creating impactful videos and animations for YouTube, Instagram, and ad campaigns.",
      "Managing end-to-end production including editing, sound, and post-production.",
      "Delivering creative visual stories that boost brand communication and audience engagement.",
    ],
  },
  {
    title: "Short Film",
    icon: sf,
    iconBg: "#383E56",
    date: "May 2025",
    points: [
      "Created and animated Aathirai, a 2D short film released on YouTube, focused on emotional storytelling.",
      "Handled character motion, scene transitions, and overall storytelling flow for audience engagement.",
      "Translated a scripted concept into animation, enhancing emotional impact through visual design.",
    ],
  },
  {
    title: "Freelance",
    icon: fl,
    iconBg: "#383E56",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Creating immersive 3D animations and engaging video edits for YouTube to enhance storytelling and audience connection.",
      "Managing end-to-end production, including animation, editing, sound, and post-production for high-quality results.",
      "Collaborating with clients to bring creative visions to life, ensuring timely delivery aligned with branding and audience needs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Island Environment with Unreal Engine 5.5",
    // description:
    //   "Created a realistic 3D model of our department block using Blender and Unreal Engine, featuring accurate layouts, detailed textures, and interactive hotspots. Optimized for VR and web platforms to provide an engaging and immersive exploration experience.",
    tags: [
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
      {
        name: "Unreal Engine 5",
        color: "green-text-gradient",
      },
      
    ],
    image: thumbnail1,
    source_code_link: "https://youtu.be/GFBCzQBu5x8?si=f4pPYs1P3ZnPoZ9V",
  },
  {
    name: "The Lord Ganesha in 3D Cave Environment with Unreal Engine 5.5",
    // description:
    //   "Created a realistic 3D model of our department block using Blender and Unreal Engine, featuring accurate layouts, detailed textures, and interactive hotspots. Optimized for VR and web platforms to provide an engaging and immersive exploration experience.",
    tags: [
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
      {
        name: "Unreal Engine 5",
        color: "green-text-gradient",
      },
      
    ],
    image: thumbnail0,
    source_code_link: "https://youtu.be/3LgJpp9kmz8?si=L4jOR0H8R72_KTIc",
  },
  {
    name: "Blender 4.4 CGI Airplane Animation",
    // description:
    //   "Created a realistic 3D model of our department block using Blender and Unreal Engine, featuring accurate layouts, detailed textures, and interactive hotspots. Optimized for VR and web platforms to provide an engaging and immersive exploration experience.",
    tags: [
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
      {
        name: "Davinci Resolve",
        color: "green-text-gradient",
      },
      
    ],
    image: thumbnail3,
    source_code_link: "https://youtu.be/P6q2SZ8of5k?si=KAPnJ2JNy7iSM1fb",
  },
  {
    name: "Mustang GT in CGI Made Entirely in Blender 4.4!",
    // description:
    //   "Created a realistic 3D model of our department block using Blender and Unreal Engine, featuring accurate layouts, detailed textures, and interactive hotspots. Optimized for VR and web platforms to provide an engaging and immersive exploration experience.",
    tags: [
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
      {
        name: "Unreal Engine",
        color: "green-text-gradient",
      },
      
    ],
    image: thumbnail,
    source_code_link: "https://youtu.be/afrmrC4tAkg?si=k3PyZFgm8R9bUc3B",
  },  
];

export { services, technologies, experiences, testimonials, projects };
