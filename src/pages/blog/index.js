import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getPosts } from "../../services/postService";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card title={post.title} body={post.body.slice(0, 100) + "..."} />
          </Link>
        ))}
      </main>
    </div>
  );
}
