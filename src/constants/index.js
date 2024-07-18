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
	sber,
	rosatom,
	freelance,
	tinkoff,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "welcome",
		title: "Welcome",
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
		icon: freelance,
		iconBg: "#E6DEDD",
		date: "Nov 2017 - Sep 2020",
		points: [
			"Верстка макетов с HTML5, CSS3, JS (ES5, ES6)",
			"SEO, PageSpeed Optimisation, Gulp. Познакомился с Gulp и webpack которые использую и до настоящего момента. Занимался SEO оптимизацией верстки, а также оптимизацией скорости загрузки страниц комплексным подходом (работа с изображениями, скриптами, CDN, кэширование на стороне клиента). Работал со сложными css-анимациями.",
			"JavaScript, TypeScript, PHP. Работа с CMS Wordpress (разработка шаблонов на заказ) и верстка",
			"React, TypeScript, Redux. Разработка на фреймворке React. Все заказы, взятые в этот период были так или иначе связаны с ним. Сделал несколько SPA, и один действительно крупный проект с огромным и разнообразным функционалом (разделение пользовательских зон, чат, работа с медиа, своя webpack сборка, CI/CD).\n",
		],
	},
	{
		title: "Junior Frontend developer (Angular, RxJs)",
		company_name: "Tinkoff",
		icon: tinkoff,
		iconBg: "#E6DEDD",
		date: "July 2022 - Aug 2022",
		points: [
			"Основные компетенции: Angular, Typescript, RxJS.",
			"Разработка платформенного интерфейса. Для верстки шаблонов использовался UI kit под названием Taiga UI. Для реализации работы с событиями и асинхронным кодом использовался RxJs. Во всем проекте использовались реактивные формы.",
		],
	},
	{
		title: "Middle Frontend developer (React, Redux)",
		company_name: "Sber",
		icon: sber,
		iconBg: "#E6DEDD",
		date: "Oct 2022 - June 2023",
		points: [
			"Работа над b2b продуктами Сбера",
			"Стек: React, Redux, Typescript, Jest",
			"Разработка новых и рефакторинг старых страниц и компонентов в приложении.",
			"Написание unit тестов на Jest + react testing library.",
			"Работа с CI/CD Jenkins.",
			"Работа с микрофронтовой архитектурой.",
			"Код ревью младших разработчиков.",
			"Также дополнительно в команде взял на себя роль скрам-менеджера (помогаю проводить планирования и обзоры спринтов, ретро-сессию, помогаю в формировании бэклога).",
		],
	},
	{
		title: "Middle+ Frontend developer (React, MobX)",
		company_name: "Greenatom (RosAtom)",
		icon: rosatom,
		iconBg: "#E6DEDD",
		date: "July 2023 - Now",
		points: [
			"Стек: React, MobX, TypeScript, Jest, Vite;",
			"Проектирование и реализация нового функционала (UI, бизнеслогика);",
			"Развитие и поддержание отраслевой системы электронного документооборота, с учетом требований к производительности и надежности высоконагруженной системы;",
			"Участие во внутренних проектах по развитию инструментов поддержки разработки, тех.поддержки и др;",
			"Участие в проектах с привлечением подрядных организаций, взаимодействие с техническими представителями компаний-подрядчиков по разрабатываемым ими решениям;",
			"Взаимодействовать со смежными подразделениями (аналитики, тестировщики, инженеры инфраструктуры (AS, СУБД), специалисты 3й линии ТП и ИБ и др.).",
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
