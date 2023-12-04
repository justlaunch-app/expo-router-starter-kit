import { View } from 'react-native';
import { ControlledInput } from '_components/Input/ControlledInput';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '_components/Label/StyledLabel';
import { Button } from '_components/Button/Button';
import { useQueryClient } from '@tanstack/react-query';
import { useUsers } from '_hooks/useUsers';
import { useNavigation } from 'expo-router';
import { useUserMutation } from '_hooks/useUserMutation';

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
});

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
};

export default function AddUser() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const { mutate } = useUserMutation({
    onSuccess: (newUser) => {
      queryClient.setQueryData(
        useUsers.getKey(undefined),
        (currentUsers: any) => {
          return {
            ...currentUsers,
            pages: [{ data: newUser }, ...(currentUsers?.pages ?? [])],
          };
        }
      );
      navigation.goBack();
    },
  });

  const onSubmit = handleSubmit((values) => {
    mutate({
      first_name: values.firstName,
      last_name: values.lastName + ' ' + '(LOCAL_ONLY)',
      email: values.email + ' (LOCAL_ONLY)',
    });
  });

  return (
    <View>
      <View className={'p-4 gap-2'}>
        <Label htmlFor={'firstName'}>First Name</Label>
        <ControlledInput name={'firstName'} control={control} />
      </View>
      <View className={'p-4 gap-2'}>
        <Label htmlFor={'lastName'}>Last Name</Label>
        <ControlledInput name={'lastName'} control={control} />
      </View>
      <View className={'p-4 gap-2'}>
        <Label htmlFor={'email'}>Email</Label>
        <ControlledInput name={'email'} control={control} />
      </View>
      <Button title={'Create'} onPress={onSubmit} />
    </View>
  );
}
