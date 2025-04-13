const Servicos = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Soluções completas para o seu agronegócio
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Contabilidade Rural",
                description: "Serviços contábeis especializados para produtores rurais e empresas do agronegócio."
              },
              {
                title: "Gestão Financeira",
                description: "Controle financeiro completo, incluindo fluxo de caixa e análise de custos."
              },
              {
                title: "Planejamento Tributário",
                description: "Otimização fiscal e tributária específica para o setor agrícola."
              },
              {
                title: "Consultoria Especializada",
                description: "Assessoria personalizada para tomada de decisões estratégicas."
              },
              {
                title: "Análise de Viabilidade",
                description: "Estudos de viabilidade econômica para projetos agrícolas."
              },
              {
                title: "Relatórios Gerenciais",
                description: "Relatórios detalhados para acompanhamento do desempenho do seu negócio."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;