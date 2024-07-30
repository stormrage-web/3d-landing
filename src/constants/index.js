import {
	web,
	sber,
	rosatom,
	freelance,
	tinkoff,
	ildanDev, air, spotify,
} from "../assets";

export const navLinks = [
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
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
		name: "ildan-dev",
		description:
			"Simple React SPA with custom animation rendering with canvas. Includes Jest tests, 2 UI themes, i18n translation, CI/CD deploy and testing.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "jest",
				color: "orange-text-gradient",
			},
			{
				name: "i18n",
				color: "gray-text-gradient",
			},
			{
				name: "ci/cd",
				color: "green-text-gradient",
			},
		],
		image: ildanDev,
		source_code_link: "https://github.com/stormrage-web/ildan-dev",
	},
	{
		name: "Aeroflot helper",
		description:
			"Web application for analyzing airfare prices. The project was written for a hackathon and took 3rd place. Working with big data, drawing various graphs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "green-text-gradient",
			},
			{
				name: "recharts",
				color: "pink-text-gradient",
			},
		],
		image: air,
		source_code_link: "https://github.com/",
	},
	{
		name: "Spotify clone",
		description:
			"Simple clone of Spotify web-interface with original API. Required to login to work with it.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "hooks",
				color: "green-text-gradient",
			},
		],
		image: spotify,
		source_code_link: "https://github.com/",
	},
];

export { experiences, projects };
