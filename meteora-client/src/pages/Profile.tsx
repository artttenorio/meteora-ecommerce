import LoggedInHeader from "@/components/initialPage/LoggedInHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser({ name: "John Doe", email: "john.doe@example.com" });
      setOrders([
        {
          id: "1",
          date: "2023-10-26",
          total: 150.0,
          status: "Shipped",
        },
        {
          id: "2",
          date: "2023-10-20",
          total: 75.5,
          status: "Delivered",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <>
      <LoggedInHeader />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>My Orders</CardTitle>
                <CardDescription>View your past orders</CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length > 0 ? (
                  <ul>
                    {orders.map((order) => (
                      <li key={order.id} className="mb-4 p-4 border rounded-lg">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-bold">Order #{order.id}</p>
                            <p>Date: {order.date}</p>
                          </div>
                          <div>
                            <p className="font-bold">
                              ${order.total.toFixed(2)}
                            </p>
                            <p>Status: {order.status}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>You have no orders yet.</p>
                )}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    View and edit your personal information
                  </CardDescription>
                </div>
                <Button>Edit</Button>
              </CardHeader>
              <CardContent>
                {user ? (
                  <>
                    <p>
                      <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
