import Button from "../components/Button/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const goToBlog = () => {
    router.push("/blog"); // navigate to blog list page
  };

  return (
    <div>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-gray-600 mb-6">
          Explore interesting posts and stay updated!
        </p>
        <Button onClick={goToBlog}>
          Explore Blog
        </Button>
      </main>
    </div>
  );
}
