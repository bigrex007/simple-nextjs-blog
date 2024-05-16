import React from 'react';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/cosmic';
import HeroSection  from '../components/Hero';

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto w-full max-w-5xl flex-col px-4 lg:px-0">
      <HeroSection />
      {!posts && 'You must add at least one Post to your Bucket'}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </main>
  );
}
export const revalidate = 60;
