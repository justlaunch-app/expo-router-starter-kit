import React, { useEffect } from 'react';
import { View } from '_context/Themed';
import { MonoText as Text } from '_components/StyledText';

import { Alert, Button } from 'react-native';
import { ControlledInput } from '_components/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'src/store/auth.store';
import { useTranslation } from 'react-i18next';
import { useSetTitle } from 'src/hooks/useSetTitle';
import { router } from 'expo-router';
import { emailSchema } from '_utils/auth.schema';
import { useIsFocused } from '@react-navigation/native';

const schema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'auth.errors.password-invalid'),
  nickname: z.string().nonempty('auth.errors.nickname-required'),
});

export default function SignUp() {
  const isFocused = useIsFocused();
  useSetTitle('register');

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
    },
  });

  const register = useAuth((state) => state.register);
  const { t } = useTranslation();

  const onSubmit = handleSubmit((newUser) => {
    const { error } = register(newUser) ?? {};

    if (!error) {
      reset();
      Alert.alert('Registered completed!', undefined, [
        {
          text: t('auth.go-to-login'),
          onPress: () => {
            router.replace('/(auth)/sign-in');
          },
        },
      ]);
      return;
    }

    Alert.alert(t(error));
    reset();
  });

  useEffect(() => {
    if (!isFocused) {
      reset();
    }
  }, [isFocused]);

  return (
    <View className="flex-1 items-center p-4 gap-y-8">
      <View className="w-full bg-transparent">
        <Text className="font-bold mb-2">{t('auth.email')}</Text>
        <ControlledInput
          className="p-4 text-slate-900 w-full bg-slate-100 shadow-sm"
          keyboardType="email-address"
          placeholder="joe@acme.com"
          control={control}
          name="email"
        />
      </View>
      <View className="w-full bg-transparent">
        <Text className="font-bold mb-2">{t('auth.nickname')}</Text>
        <ControlledInput
          className="p-4 text-slate-900 w-full bg-slate-100 shadow-sm"
          placeholder="joeDoe@12"
          control={control}
          name="nickname"
        />
      </View>
      <View className="w-full bg-transparent">
        <Text className="font-bold mb-2">{t('auth.password')}</Text>
        <ControlledInput control={control} name="password" secureTextEntry />
      </View>
      <View className="mt-4 bg-transparent w-full">
        <Button title={t('auth.sign-up')} onPress={onSubmit} />
      </View>
    </View>
  );
}
