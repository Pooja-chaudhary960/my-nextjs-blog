
import Loader from "../../components/Loader/Loader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api.get(`/posts/${id}`)
        .then(res => {
          setPost(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <Loader />;
  if (!post) return <p className="p-8">Post not found</p>;

  return (
    <div>
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </main>
    </div>
  );
}
