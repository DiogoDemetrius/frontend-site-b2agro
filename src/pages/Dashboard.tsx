import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaChartLine, FaFileInvoiceDollar, FaCalendarAlt, FaTractor, FaSignOutAlt, FaUserCog } from 'react-icons/fa';

const Dashboard = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  // Mock user data - in a real app, this would come from your authentication context
  const user = {
    name: 'João Silva',
    email: 'joao@example.com',
    role: 'Administrador',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          
          {/* User Profile Menu */}
          <div className="relative">
            <button 
              onClick={toggleProfileMenu}
              className="flex items-center space-x-3 focus:outline-none"
            >
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
              <img 
                src={user.profileImage} 
                alt="Profile" 
                className="h-10 w-10 rounded-full border-2 border-primary-500"
              />
            </button>
            
            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                  <p className="text-xs font-medium text-primary-600">{user.role}</p>
                </div>
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                  <FaUserCog className="mr-2" /> Perfil
                </Link>
                <Link to="/auth" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                  <FaSignOutAlt className="mr-2" /> Sair
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600">
                <FaChartLine className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Receita Mensal</p>
                <p className="text-lg font-semibold text-gray-900">R$ 24.500,00</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FaFileInvoiceDollar className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Despesas</p>
                <p className="text-lg font-semibold text-gray-900">R$ 12.340,00</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <FaTractor className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Produção</p>
                <p className="text-lg font-semibold text-gray-900">1.250 ton</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <FaCalendarAlt className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Próximos Eventos</p>
                <p className="text-lg font-semibold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Activity and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Atividades Recentes</h2>
            </div>
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                {[
                  { id: 1, action: 'Fatura #1234 paga', date: 'Hoje, 10:30', icon: <FaFileInvoiceDollar className="text-green-500" /> },
                  { id: 2, action: 'Novo relatório gerado', date: 'Ontem, 15:45', icon: <FaChartLine className="text-blue-500" /> },
                  { id: 3, action: 'Colheita registrada', date: '2 dias atrás', icon: <FaTractor className="text-yellow-500" /> },
                  { id: 4, action: 'Reunião agendada', date: '3 dias atrás', icon: <FaCalendarAlt className="text-purple-500" /> },
                ].map((item) => (
                  <li key={item.id} className="py-3 flex items-center">
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.action}</p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Tasks */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Tarefas Pendentes</h2>
            </div>
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                {[
                  { id: 1, task: 'Revisar relatório financeiro', deadline: 'Hoje', priority: 'Alta' },
                  { id: 2, task: 'Agendar manutenção de equipamentos', deadline: 'Amanhã', priority: 'Média' },
                  { id: 3, task: 'Atualizar inventário', deadline: 'Esta semana', priority: 'Baixa' },
                  { id: 4, task: 'Preparar documentação fiscal', deadline: 'Próxima semana', priority: 'Alta' },
                ].map((item) => (
                  <li key={item.id} className="py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.task}</p>
                        <p className="text-xs text-gray-500">Prazo: {item.deadline}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.priority === 'Alta' ? 'bg-red-100 text-red-800' : 
                        item.priority === 'Média' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;