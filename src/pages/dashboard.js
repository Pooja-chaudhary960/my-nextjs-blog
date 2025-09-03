import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Dashboard() {
  const router = useRouter();
  const { token, user } = useSelector(state => state.auth);

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token, router]);

  if (!user) return <p className="p-8">Loading...</p>;


  const stats = [
    { title: "Total Posts", value: 12 },
    { title: "Total Comments", value: 34 },
    { title: "Profile Completeness", value: "80%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-white shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Overview</li>
            <li className="hover:text-blue-600 cursor-pointer">Posts</li>
            <li className="hover:text-blue-600 cursor-pointer">Comments</li>
            <li className="hover:text-blue-600 cursor-pointer">Profile</li>
          </ul>
        </aside>

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.firstName}!</h1>
          <p className="text-gray-600 mb-6">Email: {user.email}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 shadow rounded">
                <h3 className="text-gray-500">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
