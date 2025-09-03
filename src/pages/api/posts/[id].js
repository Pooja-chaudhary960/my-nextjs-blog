useEffect(() => {
  if (id) {
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }
}, [id]);
