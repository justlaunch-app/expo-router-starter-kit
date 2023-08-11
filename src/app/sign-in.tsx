import React from 'react';
import { View } from '_context/Themed';
import { MonoText as Text } from '_components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from 'react-native';
import { ControlledInput } from '_components/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'src/store/auth.store';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

const schema = z.object({
  email: z
    .string()
    .email('sign-in.errors.email-invalid')
    .nonempty('sign-in.errors.email-required'),
  password: z.string().min(8, 'sign-in.errors.password-invalid'),
});

export default function Settings() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();

  const login = useAuth((state) => state.login);
  const user = useAuth((state) => state.user);
  const { t } = useTranslation();

  const onSubmit = handleSubmit(login);

  React.useEffect(() => {
    if (!user) {
      return;
    }
    router.replace('/(root)/(tabs)/(index)');
  }, [user]);

  return (
    <SafeAreaView className="flex-1 items-center p-4 gap-y-8">
      <View className="w-full bg-transparent">
        <Text className="font-bold mb-2">{t('sign-in.email')}</Text>
        <ControlledInput
          className="p-4 text-slate-900 w-full bg-slate-100 shadow-sm"
          keyboardType="email-address"
          placeholder="joe@acme.com"
          control={control}
          name="email"
        />
      </View>
      <View className="w-full bg-transparent">
        <Text className="font-bold mb-2">{t('sign-in.password')}</Text>
        <ControlledInput control={control} name="password" secureTextEntry />
      </View>
      <View className="mt-4 bg-transparent">
        <Button title={t('sign-in.sign-in')} onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
}
