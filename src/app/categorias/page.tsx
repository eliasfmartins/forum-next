"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
	{
		name: "Games",
		posts: [
			{ title: "Lançamento do PS6", date: "25 Fev 2025", summary: "O PS6 promete gráficos incríveis e nova jogabilidade." },
			{ title: "Melhores jogos de 2024", date: "20 Fev 2025", summary: "Lista com os games mais jogados do ano passado." },
			{ title: "Xbox vs PlayStation", date: "15 Fev 2025", summary: "Qual console leva a melhor em 2025?" }
		]
	},
	{
		name: "Tecnologia",
		posts: [
			{ title: "iPhone 16 Pro Max", date: "10 Fev 2025", summary: "O novo iPhone chega com câmera de 200MP e IA avançada." },
			{ title: "Tesla lança novo carro", date: "05 Fev 2025", summary: "O novo modelo elétrico da Tesla quebra recordes de autonomia." },
			{ title: "Google IA revoluciona buscas", date: "01 Fev 2025", summary: "Novo algoritmo de IA melhora resultados de pesquisa." }
		]
	},
	{
		name: "Vagas",
		posts: [
			{ title: "Remoto: Desenvolvedor React", date: "02 Fev 2025", summary: "Empresa busca dev React com experiência em Next.js." },
			{ title: "Designer UI/UX", date: "28 Jan 2025", summary: "Startup de tecnologia procura designer para novo app." },
			{ title: "Freelance Backend", date: "22 Jan 2025", summary: "Trabalho remoto para devs com Node.js e PostgreSQL." }
		]
	},
	{
		name: "Eletrônicos",
		posts: [
			{ title: "Novo MacBook Pro", date: "18 Fev 2025", summary: "Apple lança MacBook com processador M4 e tela OLED." },
			{ title: "Samsung Galaxy S25", date: "12 Fev 2025", summary: "Smartphone traz inovações na câmera e desempenho." },
			{ title: "Sony lança TV 16K", date: "05 Fev 2025", summary: "Nova TV Sony revoluciona o mercado com resolução ultra-realista." }
		]
	},
	{
		name: "Diversos",
		posts: [
			{ title: "Festival de música 2025", date: "30 Jan 2025", summary: "Grandes artistas confirmados para o evento." },
			{ title: "Melhores livros do ano", date: "25 Jan 2025", summary: "Confira os livros mais vendidos e recomendados." },
			{ title: "Viagem para Marte", date: "20 Jan 2025", summary: "Projeto espacial avança para levar humanos a Marte." }
		]
	}
];

export default function CategoriesList() {
	const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

	const toggleCategory = (category: string) => {
		setExpandedCategory(expandedCategory === category ? null : category);
	};

	return (
		<div className="w-full max-w-[90%] md:max-w-2xl mx-auto flex flex-col flex-1 mt-28">

			{categories.map((category) => (
				<div key={category.name} className="mb-4 border border-gray-700 rounded-lg bg-gray-900">
					<button
						className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-300 hover:bg-gray-800 transition-all duration-300 rounded-lg"
						onClick={() => toggleCategory(category.name)}
					>
						<span>{category.name}</span>
						{expandedCategory === category.name ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
					</button>

					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={expandedCategory === category.name ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="p-4 space-y-3 bg-gray-800 rounded-b-lg">
							{category.posts.map((post, index) => (
								<div key={index} className="p-3 bg-gray-700 rounded-lg shadow-md">
									<h3 className="text-md font-semibold text-green-400">{post.title}</h3>
									<p className="text-xs text-gray-400">{post.date}</p>
									<p className="text-sm text-gray-300 mt-1">{post.summary}</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			))}
		</div>
	);
}
