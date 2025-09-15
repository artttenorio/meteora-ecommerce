import Header from "@/components/initialPage/header";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Kart() {
  const { cartItems, orders, updateQuantity, removeFromCart, createOrder, cartTotal } = useCart();
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);

  const handleCreateOrder = async () => {
    try {
      setIsCreatingOrder(true);
      await createOrder();
      alert('Order created successfully!');
    } catch (error) {
      alert('Failed to create order. Please try again.');
    } finally {
      setIsCreatingOrder(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'text-yellow-600';
      case 'CONFIRMED': return 'text-blue-600';
      case 'SHIPPED': return 'text-purple-600';
      case 'DELIVERED': return 'text-green-600';
      case 'CANCELLED': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Carrinho e Pedidos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Cart */}
          <Card>
            <CardHeader>
              <CardTitle>Carrinho Atual</CardTitle>
            </CardHeader>
            <CardContent>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Seu carrinho está vazio</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.productId} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center space-x-4">
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                          )}
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="font-bold">R$ {item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeFromCart(item.productId)}
                          >
                            Remover
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Total: R$ {cartTotal.toFixed(2)}</span>
                    </div>
                    <Button
                      onClick={handleCreateOrder}
                      disabled={isCreatingOrder}
                      className="w-full"
                    >
                      {isCreatingOrder ? 'Criando Pedido...' : 'Finalizar Pedido'}
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Order History */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              {orders.length === 0 ? (
                <p className="text-gray-500">Você ainda não fez nenhum pedido</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold">Pedido #{order.id}</h3>
                          <p className="text-sm text-gray-600">{formatDate(order.createdAt)}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">R$ {parseFloat(order.total.toString()).toFixed(2)}</p>
                          <p className={`text-sm font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {order.orderItems.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span>{item.product.name} x{item.quantity}</span>
                            <span>R$ {parseFloat(item.price.toString()).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
