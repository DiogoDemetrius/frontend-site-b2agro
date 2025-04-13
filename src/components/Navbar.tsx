import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-500">B2Agro</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Home
            </Link>
            <Link to="/servicos" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Serviços
            </Link>
            <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Blog
            </Link>
            <Link to="/contato" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Contato
            </Link>
            <Link to="/sobre" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Sobre nós
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;