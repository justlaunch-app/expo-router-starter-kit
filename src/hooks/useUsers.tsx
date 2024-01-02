import { createInfiniteQuery, createQuery } from 'react-query-kit';
import { reqresApi } from '_utils/api';
import { Support, UserData, UsersResponse } from '_types/Users';
export const useUsers = createInfiniteQuery<
  UsersResponse | null,
  undefined,
  Error
>({
  primaryKey: '/users',
  queryFn: async ({ pageParam }) => {
    const result = await reqresApi.get<UsersResponse>('/users', {
      page: pageParam,
    });
    if (!result.ok) {
      throw new Error(result.problem);
    }
    return result.data ?? null;
  },
  initialPageParam: 1,
  getNextPageParam: (lastPage) => {
    if (lastPage?.page === lastPage?.total_pages) {
      return null;
    }
    return (lastPage?.page ?? 0) + 1;
  },
});

interface Response {
  data: UserData;
  support: Support;
}

export const useUser = createQuery<
  Response | undefined,
  { id: number | string },
  Error
>({
  primaryKey: '/user',
  queryFn: async ({ queryKey: [, variables] }) => {
    const result = await reqresApi.get<Response>(
      `/users/${variables.id}`,
      undefined
    );
    return result.data;
  },
});
