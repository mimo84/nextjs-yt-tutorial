import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface PostByIdProps {}
interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const PostById: React.FC<PostByIdProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [post, setPost] = useState<null | IPost>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPost = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const json = await result.json();
      setPost(json);
      setLoading(false);
    };

    getPost();
  }, []);

  if (loading === true) return <div>Loading...</div>;
  else
    return (
      <div>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </div>
    );
};

export default PostById;
