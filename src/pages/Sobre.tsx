const Sobre = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Sobre a B2Agro
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Sua parceira em gestão contábil agrícola
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="prose prose-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h3>
              <p className="text-gray-600">
                Fundada em 2020, a B2Agro nasceu da necessidade de oferecer soluções contábeis especializadas para o setor agrícola. 
                Nossa equipe de profissionais altamente qualificados combina experiência em contabilidade com profundo conhecimento do agronegócio.
              </p>
              <p className="text-gray-600 mt-4">
                Ao longo dos anos, desenvolvemos metodologias próprias e implementamos tecnologias inovadoras para atender às necessidades 
                específicas dos produtores rurais e empresas do agronegócio.
              </p>
            </div>

            <div className="prose prose-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Proporcionar excelência em gestão contábil e financeira para o agronegócio, contribuindo para o crescimento 
                sustentável de nossos clientes através de soluções inovadoras e personalizadas.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Nossos Valores</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Comprometimento com o cliente</li>
                <li>Excelência técnica</li>
                <li>Inovação constante</li>
                <li>Ética e transparência</li>
                <li>Sustentabilidade</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nossa Equipe</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Bruno Vinícius",
                  role: "C.E.O",
                  description: "Mais de 15 anos de experiência em contabilidade agrícola."
                },
                {
                  name: "Gabriela",
                  role: "Contadora Chefe",
                  description: "Especialista em tributação rural e gestão financeira."
                },
                {
                  name: "Matheus",
                  role: "Consultor Técnico",
                  description: "Expertise em análise de viabilidade e planejamento estratégico."
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;