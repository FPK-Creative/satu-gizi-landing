import { SITE_URL } from '../consts';

export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Satu Gizi',
		url: SITE_URL,
		logo: `${SITE_URL}/favicon/favicon.svg`,
		description:
			'Platform gratis untuk pengelola SPPG MBG: perencanaan menu, analisis nilai gizi, RAB otomatis, dan kalkulator klinis untuk ahli gizi.',
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			availableLanguage: ['Indonesian'],
		},
	};
}

export function websiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Satu Gizi',
		url: SITE_URL,
	};
}

export function softwareAppSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Satu Gizi',
		applicationCategory: 'HealthApplication',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'IDR',
		},
	};
}

interface FAQItem {
	question: string;
	answer: string;
}

export function faqSchema(items: FAQItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

interface ArticleProps {
	title: string;
	description: string;
	url: string;
	publishedTime: string;
	modifiedTime?: string;
	author?: string;
	image?: string;
}

export function articleSchema(props: ArticleProps) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: props.title,
		description: props.description,
		url: props.url,
		datePublished: props.publishedTime,
		...(props.modifiedTime && { dateModified: props.modifiedTime }),
		author: {
			'@type': 'Organization',
			name: props.author || 'Tim Satu Gizi',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Satu Gizi',
			logo: {
				'@type': 'ImageObject',
				url: `${SITE_URL}/favicon/favicon.svg`,
			},
		},
		...(props.image && {
			image: {
				'@type': 'ImageObject',
				url: props.image,
			},
		}),
	};
}

interface BreadcrumbItem {
	name: string;
	url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}
