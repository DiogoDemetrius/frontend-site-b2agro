import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Estratégias de Gestão Financeira para Pequenos Produtores',
      excerpt: 'Descubra como pequenos produtores podem otimizar suas finanças e aumentar a lucratividade com estratégias simples e eficazes.',
      author: 'Maria Santos',
      date: '15 de Maio, 2025',
      category: 'Finanças',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Tecnologias Emergentes no Agronegócio',
      excerpt: 'Conheça as principais inovações tecnológicas que estão transformando o setor agrícola e como implementá-las em sua propriedade.',
      author: 'João Silva',
      date: '3 de Maio, 2025',
      category: 'Tecnologia',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Planejamento Tributário para Produtores Rurais',
      excerpt: 'Aprenda como estruturar seu planejamento tributário de forma eficiente e legal, reduzindo a carga fiscal de sua atividade rural.',
      author: 'Ana Oliveira',
      date: '28 de Abril, 2025',
      category: 'Tributação',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Sustentabilidade e Rentabilidade: Um Equilíbrio Possível',
      excerpt: 'Como práticas sustentáveis podem aumentar a rentabilidade de sua propriedade rural a médio e longo prazo.',
      author: 'Carlos Mendes',
      date: '15 de Abril, 2025',
      category: 'Sustentabilidade',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Gestão de Riscos na Agricultura',
      excerpt: 'Estratégias para identificar, avaliar e mitigar riscos em operações agrícolas, protegendo seu patrimônio e investimentos.',
      author: 'Fernanda Costa',
      date: '5 de Abril, 2025',
      category: 'Gestão',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Análise de Mercado: Tendências para o Próximo Ano',
      excerpt: 'Um panorama completo das tendências de mercado para os principais produtos agrícolas no próximo ano.',
      author: 'Roberto Alves',
      date: '28 de Março, 2025',
      category: 'Mercado',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Categories for the sidebar
  const categories = [
    { name: 'Finanças', count: 12 },
    { name: 'Tecnologia', count: 8 },
    { name: 'Tributação', count: 6 },
    { name: 'Sustentabilidade', count: 5 },
    { name: 'Gestão', count: 10 },
    { name: 'Mercado', count: 7 }
  ];

  // Recent posts for the sidebar
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog B2Agro
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Insights, dicas e novidades sobre contabilidade e gestão no agronegócio
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Main content - Blog posts */}
          <div className="lg:w-2/3 lg:pr-8">
            <div className="grid gap-10 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <FaUser className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary-600">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                        <FaTag className="mr-1" />
                        {post.category}
                      </span>
                      <Link to={`/blog/${post.id}`} className="text-primary-600 hover:text-primary-800 font-medium">
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categorias</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name} className="flex justify-between items-center">
                    <Link to={`/blog/category/${category.name.toLowerCase()}`} className="text-gray-600 hover:text-primary-600">
                      {category.name}
                    </Link>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Posts Recentes</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex space-x-4">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="text-sm font-medium">
                        <Link to={`/blog/${post.id}`} className="text-gray-900 hover:text-primary-600">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;