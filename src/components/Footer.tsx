export const Footer = () => {
	return (
		<footer className="bg-[#1E293B] py-6 text-center text-[#F1F5F9]" >
			<p>© 2025 FórumTech - Todos os direitos reservados.</p>
			<div className="mt-3 flex justify-center space-x-6">
				<a href="/sobre" className="hover:text-[#22C55E] transition-all">Sobre</a>
				<a href="/contato" className="hover:text-[#22C55E] transition-all">Contato</a>
				<a href="/privacidade" className="hover:text-[#22C55E] transition-all">Política de Privacidade</a>
			</div>
		</footer >
	)
}