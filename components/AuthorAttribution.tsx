import { Post } from '../lib/types';
import helpers from '../helpers';

export default function AuthorAttribution({
  post,
}: {
  post: Post;
}): JSX.Element {
  return (
    <div className="flex space-x-1 text-white dark:text-white">
      <span>Escrito por</span>
      <a
        href={`/author/${post.metadata.author?.slug}`}
        className="font-medium text-green-600 dark:text-blue-300"
      >
        {post.metadata.author?.title}
      </a>
      <span>
        el {helpers.stringToFriendlyDate(post.metadata.published_date)}
      </span>
    </div>
  );
}
