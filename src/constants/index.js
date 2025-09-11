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
    title: "Short Film",
    icon: sf,
    iconBg: "#383E56",
    date: "May 2025",
    points: [
      "Created and animated the short film Aathirai, a 2D story-driven project released on YouTube, aimed at delivering an emotional narrative through visual storytelling.",
      "Handled key aspects of 2D animation production, including character motion, scene transitions, and storytelling flow to engage viewers.",
      "Successfully translated a scripted concept into an animated format, enhancing audience understanding and emotional impact through thoughtful design and animation.",
    ],
  },
  {
    title: "Freelance",
    icon: fl,
    iconBg: "#383E56",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Creating immersive 3D animations and visually appealing edits for YouTube videos, enhancing storytelling and audience engagement.",
      "Delivering end-to-end production, including animation design, video editing, sound integration, and post-production polishing, to meet high-quality standards.",
      "Collaborating with clients to bring their creative visions to life, ensuring timely delivery and aligning projects with their branding and audience expectations.",
    ],
  },
  {
    title: "College Club Media Team",
    icon: csda,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - March 2025",
    points: [
      "Handling the creation of promo videos, event celebration videos, and engaging content to showcase club activities and achievements.",
      "Developing 3D animations and motion graphic animations to visually enhance promotional materials and event highlights.",
      "Collaborating with team members to conceptualize, plan, and execute media projects aligned with the club's goals and vision.",
      "Managing editing and post-production tasks to deliver high-quality videos that effectively capture the essence of club events and initiatives.",
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
