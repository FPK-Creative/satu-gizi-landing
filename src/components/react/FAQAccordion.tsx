import { useState } from 'react';

interface FAQItem {
	question: string;
	answer: string;
}

interface Props {
	items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="divide-y divide-[#ECF0F1]">
			{items.map((item, index) => (
				<div key={index}>
					<button
						onClick={() => toggle(index)}
						className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
						aria-expanded={openIndex === index}
					>
						<span className="text-sm sm:text-base font-medium text-[#2C3E50] pr-4 group-hover:text-[#2D7A3E] transition-colors">
							{item.question}
						</span>
						<span className="shrink-0 w-6 h-6 flex items-center justify-center text-[#7F8C8D]">
							{openIndex === index ? (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
								</svg>
							) : (
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
								</svg>
							)}
						</span>
					</button>
					<div
						className={`overflow-hidden transition-all duration-300 ${
							openIndex === index ? 'max-h-96 pb-4 sm:pb-5' : 'max-h-0'
						}`}
					>
						<p className="text-sm text-[#7F8C8D] leading-relaxed">
							{item.answer}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
