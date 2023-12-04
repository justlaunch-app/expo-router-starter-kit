import { Post } from '_types/Post';
import { createQuery } from 'react-query-kit';
import { api } from '_utils/api';

export const usePosts = createQuery<Post[] | null, undefined, Error>({
  primaryKey: '/posts',
  queryFn: async () => {
    const result = await api.get<Post[]>('/posts');
    if (!result.ok) {
      throw new Error(result.problem);
    }
    return result.data ?? null;
  },
});
