import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin, FaArrowLeft } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog posts data with unique content for each post
  const blogPosts = {
    1: {
      title: 'Estratégias de Gestão Financeira para Pequenos Produtores',
      content: `
        <p>A gestão financeira é um dos pilares fundamentais para o sucesso de qualquer empreendimento rural. Para pequenos produtores, em particular, uma gestão financeira eficiente pode ser a diferença entre o crescimento sustentável e dificuldades operacionais.</p>

        <h2>1. Planejamento Financeiro</h2>
        <p>O primeiro passo para uma gestão financeira eficiente é estabelecer um planejamento detalhado. Isso inclui:</p>
        <ul>
          <li>Orçamento anual detalhado</li>
          <li>Previsão de fluxo de caixa</li>
          <li>Metas financeiras claras</li>
          <li>Reserva para emergências</li>
        </ul>

        <h2>2. Controle de Custos</h2>
        <p>Manter um controle rigoroso dos custos é essencial. Algumas estratégias incluem:</p>
        <ul>
          <li>Registro detalhado de todas as despesas</li>
          <li>Análise regular dos gastos</li>
          <li>Identificação de oportunidades de redução de custos</li>
          <li>Negociação com fornecedores</li>
        </ul>

        <h2>3. Gestão de Investimentos</h2>
        <p>Investir de forma inteligente é crucial para o crescimento do negócio:</p>
        <ul>
          <li>Avaliação cuidadosa de novos investimentos</li>
          <li>Priorização de investimentos essenciais</li>
          <li>Análise de retorno sobre investimento (ROI)</li>
          <li>Diversificação de investimentos</li>
        </ul>
      `,
      author: 'Maria Santos',
      date: '15 de Maio, 2025',
      category: 'Finanças',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    2: {
      title: 'Tecnologias Emergentes no Agronegócio',
      content: `
        <p>O setor agrícola está passando por uma revolução tecnológica sem precedentes. As tecnologias emergentes estão transformando a maneira como produzimos alimentos e gerenciamos as propriedades rurais.</p>

        <h2>1. Agricultura de Precisão</h2>
        <p>A agricultura de precisão está revolucionando o campo:</p>
        <ul>
          <li>Uso de drones para monitoramento de culturas</li>
          <li>Sensores IoT para análise do solo</li>
          <li>GPS e mapeamento digital</li>
          <li>Sistemas automatizados de irrigação</li>
        </ul>

        <h2>2. Inteligência Artificial</h2>
        <p>A IA está trazendo novas possibilidades:</p>
        <ul>
          <li>Previsão de safras</li>
          <li>Detecção precoce de pragas</li>
          <li>Otimização do uso de recursos</li>
          <li>Análise de dados em tempo real</li>
        </ul>

        <h2>3. Biotecnologia</h2>
        <p>Avanços em biotecnologia estão melhorando a produção:</p>
        <ul>
          <li>Desenvolvimento de sementes resistentes</li>
          <li>Melhoramento genético</li>
          <li>Controle biológico de pragas</li>
          <li>Sustentabilidade ambiental</li>
        </ul>
      `,
      author: 'João Silva',
      date: '3 de Maio, 2025',
      category: 'Tecnologia',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    3: {
      title: 'Planejamento Tributário para Produtores Rurais',
      content: `
        <p>O planejamento tributário é fundamental para maximizar os resultados financeiros da atividade rural. Compreender e aplicar corretamente as estratégias fiscais pode resultar em economia significativa.</p>

        <h2>1. Fundamentos do Planejamento Tributário</h2>
        <p>Aspectos essenciais a considerar:</p>
        <ul>
          <li>Escolha do regime tributário adequado</li>
          <li>Documentação fiscal correta</li>
          <li>Aproveitamento de benefícios fiscais</li>
          <li>Calendário tributário</li>
        </ul>

        <h2>2. Benefícios Fiscais</h2>
        <p>Principais benefícios disponíveis:</p>
        <ul>
          <li>Isenções específicas para o setor rural</li>
          <li>Créditos tributários</li>
          <li>Compensações fiscais</li>
          <li>Incentivos regionais</li>
        </ul>

        <h2>3. Gestão Tributária</h2>
        <p>Práticas recomendadas:</p>
        <ul>
          <li>Manutenção de registros adequados</li>
          <li>Planejamento de investimentos</li>
          <li>Análise de impactos tributários</li>
          <li>Consultoria especializada</li>
        </ul>
      `,
      author: 'Ana Oliveira',
      date: '28 de Abril, 2025',
      category: 'Tributação',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    4: {
      title: 'Sustentabilidade e Rentabilidade: Um Equilíbrio Possível',
      content: `
        <p>A busca pelo equilíbrio entre sustentabilidade e rentabilidade é um dos principais desafios do agronegócio moderno. Cada vez mais, produtores rurais estão descobrindo que práticas sustentáveis podem não apenas beneficiar o meio ambiente, mas também aumentar a lucratividade de suas operações.</p>

        <h2>1. Práticas Sustentáveis Rentáveis</h2>
        <p>Diversas práticas sustentáveis podem melhorar a rentabilidade:</p>
        <ul>
          <li>Rotação de culturas para melhor aproveitamento do solo</li>
          <li>Sistemas de irrigação eficientes</li>
          <li>Manejo integrado de pragas</li>
          <li>Uso de energia renovável</li>
        </ul>

        <h2>2. Certificações e Mercados Premium</h2>
        <p>Benefícios das certificações ambientais:</p>
        <ul>
          <li>Acesso a mercados diferenciados</li>
          <li>Preços premium para produtos certificados</li>
          <li>Reconhecimento internacional</li>
          <li>Vantagem competitiva</li>
        </ul>

        <h2>3. Economia Circular na Agricultura</h2>
        <p>Implementação de práticas circulares:</p>
        <ul>
          <li>Aproveitamento de resíduos agrícolas</li>
          <li>Compostagem e produção de biofertilizantes</li>
          <li>Sistemas agroflorestais</li>
          <li>Redução do desperdício</li>
        </ul>
      `,
      author: 'Carlos Mendes',
      date: '15 de Abril, 2025',
      category: 'Sustentabilidade',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    5: {
      title: 'Gestão de Riscos na Agricultura',
      content: `
        <p>A gestão de riscos é fundamental para o sucesso a longo prazo na agricultura. Compreender e mitigar diferentes tipos de riscos pode fazer a diferença entre o sucesso e o fracasso de uma operação agrícola.</p>

        <h2>1. Tipos de Riscos Agrícolas</h2>
        <p>Principais riscos a serem considerados:</p>
        <ul>
          <li>Riscos climáticos e ambientais</li>
          <li>Riscos de mercado e preços</li>
          <li>Riscos operacionais</li>
          <li>Riscos financeiros</li>
        </ul>

        <h2>2. Estratégias de Mitigação</h2>
        <p>Ferramentas e estratégias disponíveis:</p>
        <ul>
          <li>Seguros agrícolas</li>
          <li>Diversificação de culturas</li>
          <li>Hedging e contratos futuros</li>
          <li>Tecnologias de monitoramento</li>
        </ul>

        <h2>3. Planejamento de Contingência</h2>
        <p>Elementos essenciais do plano:</p>
        <ul>
          <li>Análise de cenários</li>
          <li>Reservas financeiras</li>
          <li>Planos de ação emergencial</li>
          <li>Parcerias estratégicas</li>
        </ul>
      `,
      author: 'Fernanda Costa',
      date: '5 de Abril, 2025',
      category: 'Gestão',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    6: {
      title: 'Análise de Mercado: Tendências para o Próximo Ano',
      content: `
        <p>Uma análise aprofundada das tendências de mercado é essencial para o planejamento estratégico no agronegócio. Compreender as direções do mercado permite tomar decisões mais informadas e aproveitar oportunidades emergentes.</p>

        <h2>1. Tendências Globais</h2>
        <p>Principais tendências do mercado global:</p>
        <ul>
          <li>Demanda crescente por alimentos orgânicos</li>
          <li>Novos mercados consumidores</li>
          <li>Mudanças nas preferências dos consumidores</li>
          <li>Impactos das mudanças climáticas</li>
        </ul>

        <h2>2. Oportunidades de Mercado</h2>
        <p>Setores com potencial de crescimento:</p>
        <ul>
          <li>Agricultura de precisão</li>
          <li>Produtos sustentáveis</li>
          <li>Mercado de carbono</li>
          <li>Bioenergia</li>
        </ul>

        <h2>3. Desafios e Adaptações</h2>
        <p>Preparação para mudanças:</p>
        <ul>
          <li>Adaptação tecnológica</li>
          <li>Regulamentações ambientais</li>
          <li>Competição internacional</li>
          <li>Gestão de custos</li>
        </ul>
      `,
      author: 'Roberto Alves',
      date: '28 de Março, 2025',
      category: 'Mercado',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  };

  const post = blogPosts[Number(id) as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Post não encontrado</h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
            Voltar para o Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Voltar para o Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <FaCalendarAlt className="mr-2" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <FaUser className="mr-2" />
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} de leitura</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              <FaTag className="mr-1" />
              {post.category}
            </span>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Compartilhe este artigo
          </h3>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <FaFacebook className="mr-2" />
              Facebook
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
              <FaTwitter className="mr-2" />
              Twitter
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;