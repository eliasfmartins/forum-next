import { Robo } from "@/components/robo";

export default function Home() {
	return (
		<div className="bg-[#0F172A] flex-1 flex flex-col">
			<div className="w-[500px] mx-auto  mt-28 rounded-[25px] overflow-hidden">

				<Robo />
			</div>

			<main className="flex-1 flex flex-col items-center justify-center text-center px-6">
				<h1 className="text-4xl md:text-6xl font-bold text-[#F1F5F9] mb-4">
					Bem-vindo ao FórumTech
				</h1>
				<p className="text-lg text-[#64748B] max-w-2xl">
					Um espaço para desenvolvedores trocarem ideias, resolverem dúvidas e compartilharem conhecimento sobre tecnologia.
				</p>

				<div className="mt-6 flex space-x-4">
					<a
						href="/discussoes"
						className="px-6 py-3 bg-[#22C55E] text-[#0F172A] font-semibold rounded-lg hover:bg-[#16A34A] transition-all duration-300"
					>
						Explorar Discussões
					</a>
					<a
						href="/signup"
						className="px-6 py-3 border border-[#64748B] text-[#F1F5F9] rounded-lg hover:bg-[#1E293B] transition-all duration-300"
					>
						Criar Conta
					</a>
				</div>
			</main>
		</div>
	);
}
