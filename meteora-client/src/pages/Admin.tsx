import { Link, Outlet } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Painel de Administração</h1>
      <nav className="bg-white p-4 rounded-lg shadow-md mb-6">
        <ul className="flex space-x-4">
          <li>
            <Link to="/admin/products/new" className="text-blue-600 hover:underline">Cadastrar Produto</Link>
          </li>
          <li>
            <Link to="/admin/products" className="text-blue-600 hover:underline">Ver Produtos</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
