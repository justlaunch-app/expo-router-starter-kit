import { createMutation } from 'react-query-kit';
import { UserData } from '_types/Users';
import { reqresApi } from '_utils/api';

export const useUserMutation = createMutation<
  UserData | undefined,
  Pick<UserData, 'first_name' | 'last_name' | 'email'>,
  Error
>({
  mutationKey: ['createUser'],
  mutationFn: async ({ first_name, last_name, email }) => {
    const result = await reqresApi.post<UserData>('/users', {
      first_name,
      last_name,
      email,
    });
    return result.data;
  },
});
