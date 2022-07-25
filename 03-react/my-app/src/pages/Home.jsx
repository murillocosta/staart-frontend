import { useState } from 'react';

import PostForm from '../components/PostForm';
import Feed from '../components/Feed';

export default function Home() {
  const [posts, setPosts] = useState([]);

  function handleSubmit({ history, userName }) {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        publishedAt: new Date(),
      },
    ]);
  }
  return (
    <>
      <PostForm onSubmit={handleSubmit} />

      <main>
        <Feed
          posts={posts}
          title="Seu Feed"
          subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
        />
      </main>
    </>
  );
}
