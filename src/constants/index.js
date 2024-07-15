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
		title: "Web-developer",
		company_name: "Freelance",
		icon: starbucks,
		iconBg: "#383E56",
		date: "Nov 2017 - September 2020",
		points: [
			"Верстка макетов с HTML5, CSS3, JS (ES5, ES6)",
			"SEO, PageSpeed Optimisation, Gulp. Познакомился с Gulp и webpack которые использую и до настоящего момента. Занимался SEO оптимизацией верстки, а также оптимизацией скорости загрузки страниц комплексным подходом (работа с изображениями, скриптами, CDN, кэширование на стороне клиента). Работал со сложными css-анимациями.",
			"JavaScript, TypeScript, PHP. Работа с CMS Wordpress (разработка шаблонов на заказ) и верстка",
			"React, TypeScript, Redux. Разработка на фреймворке React. Все заказы, взятые в этот период были так или иначе связаны с ним. Сделал несколько SPA, и один действительно крупный проект с огромным и разнообразным функционалом (разделение пользовательских зон, чат, работа с медиа, своя webpack сборка, CI/CD).\n",
		],
	},
	{
		title: "Junior Frontend (Angular)",
		company_name: "И не только бесплатных :')",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Ты участвуешь в такоом количестве активностей, это восхищает и мотивирует заниматься тем же!",
			"Желаю продолжать в том же духе, и получать с этого еще больше плюшек",
		],
	},
	{
		title: "Продуктивного отдыха",
		company_name: "И не стесняйся обращаться за помощью в этом!",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Получая столько нового опыта, ты тратишь очень много сил. Организму непременно надо давать расслабиться, чтобы он не отвергал еще больше свежей инфы",
			"А как это лучше сделать? Процедуры, прогулки, хобби и другие ништячки. Вот и их я тебе желаю побольше:)",
		],
	},
	{
		title: "Легкости в обучении",
		company_name: "Ведь учиться можно бесконечно, а значит делать это надо в кайф!",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Помимо понимающих преподавателей, хочу пожелать тебе, чтобы от твоего настоящего обучения тебя не отвлекали всякие саундизайны..",
			"А все, что не отсносится к твоей специальности, помогало тебе отвлекаться и весело проводить время",
		],
	},
	{
		title: "Любви к себе",
		company_name: "Ведь от других её уже достаточно;)",
		icon: shopify,
		iconBg: "#E6DEDD",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Прислушивайся к себе, делай что тебе хочется, а всех, кто пытается этому помешать, ждет уже знакомый заговор",
		],
	},
	{
		title: "Проф. развития",
		company_name: "Бесплатно наработалась, пора и все деньги мира забирать!",
		icon: meta,
		iconBg: "#383E56",
		date: "Jan 2023 - Present",
		points: [
			"Понятно, что сфера разнообразна, со всем надо определиться, узнать специфику и тд.",
			"Но самое главное, что позволит тебе работать в лучших условиях, у тебя уже есть.",
			"Настойчивость и трудолюбие - вот, что приведет тебя к безусловному счастью за счет самореализации.",
			"А ниже будет то, что тебе еще немного поможет<3",
		],
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

export { services, technologies, experiences, projects };
