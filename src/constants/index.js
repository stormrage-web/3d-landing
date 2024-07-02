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
} from "../assets";

export const navLinks = [
  {
    id: "wishes",
    title: "Wishes",
  },
  {
    id: "gift",
    title: "Gift",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Побольше активностей",
    company_name: "И не только бесплатных :')",
    // icon: starbucks,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Ты участвуешь в такоом количестве активностей, это восхищает и мотивирует заниматься тем же!",
      "Желаю продолжать в том же духе, и получать с этого еще больше плюшек",
    ],
  },
  {
    title: "Продуктивного отдыха",
    company_name: "И не стесняйся обращаться за помощью в этом!",
    // icon: tesla,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Получая столько нового опыта, ты тратишь очень много сил. Организму непременно надо давать расслабиться, чтобы он не отвергал еще больше свежей инфы",
      "А как это лучше сделать? Процедуры, прогулки, хобби и другие ништячки. Вот и их я тебе желаю побольше:)",
    ],
  },
  {
    title: "Легкости в обучении",
    company_name: "Ведь учиться можно бесконечно, а значит делать это надо в кайф!",
    // icon: shopify,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Помимо понимающих преподавателей, хочу пожелать тебе, чтобы от твоего настоящего обучения тебя не отвлекали всякие саундизайны..",
      "А все, что не отсносится к твоей специальности, помогало тебе отвлекаться и весело проводить время",
    ],
  },
  {
    title: "Любви к себе",
    company_name: "Ведь от других её уже достаточно;)",
    // icon: shopify,
    iconBg: "#E6DEDD",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Прислушивайся к себе, делай что тебе хочется, а всех, кто пытается этому помешать, ждет уже знакомый заговор",
    ],
  },
  {
    title: "Проф. развития",
    company_name: "Бесплатно наработалась, пора и все деньги мира забирать!",
    // icon: meta,
    iconBg: "#383E56",
    // date: "Jan 2023 - Present",
    points: [
      "Понятно, что сфера разнообразна, со всем надо определиться, узнать специфику и тд.",
      "Но самое главное, что позволит тебе работать в лучших условиях, у тебя уже есть.",
      "Настойчивость и трудолюбие - вот, что приведет тебя к безусловному счастью за счет самореализации.",
      "А ниже будет то, что тебе еще немного поможет<3",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
