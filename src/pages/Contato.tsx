import { useState } from 'react';
import axios from 'axios';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contato/criarContato`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setStatus(response.data.message);
      setFormData({ nome: '', email: '', mensagem: '' }); 
    } catch (axiosError) {
      if (axios.isAxiosError(axiosError)) {
        setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      } else {
        setStatus('Erro inesperado. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Entre em Contato</h2>
          <p className="mt-4 text-lg text-gray-500">Estamos aqui para ajudar você</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Informações de Contato</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Endereço</h4>
                <p className="mt-1">Av. Principal, 1000</p>
                <p>Centro, Cidade - Estado</p>
                <p>CEP: 00000-000</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Telefone</h4>
                <p className="mt-1">(00) 1234-5678</p>
                <p>(00) 98765-4321</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Email</h4>
                <p className="mt-1">contato@b2agro.com</p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;