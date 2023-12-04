import { useEffect } from 'react';
import { View } from 'react-native';
import { ControlledInput } from '_components/Input/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'src/store/authStore/auth.store';
import { useTranslation } from 'react-i18next';
import { useSetTitle } from 'src/hooks/useSetTitle';
import { router } from 'expo-router';
import { emailSchema } from '_utils/auth.schema';
import { useIsFocused } from '@react-navigation/native';
import analytics from '_utils/analytics/segment';
import { Label } from '_components/Label/StyledLabel';
import { Alert } from '_utils/alert';
import { Button } from '_components/Button/Button';

const schema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'auth.errors.password-invalid'),
  nickname: z.string().nonempty('auth.errors.nickname-required'),
});

export default function SignUp() {
  const { t } = useTranslation();
  useSetTitle(t('auth.sign-up'));

  const isFocused = useIsFocused();

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
    },
  });

  const register = useAuth((state) => {
    analytics.trackIdentify(state.user?.email, {
      username: state.user?.nickname,
      email: state.user?.email,
    });
    return state.register;
  });

  const onSubmit = handleSubmit((newUser) => {
    const { error } = register(newUser) ?? {};

    if (!error) {
      Alert.alert(t('auth.sign-up-completed'), undefined, [
        {
          text: t('auth.go-to-sign-in'),
          onPress: () => {
            router.replace('/(auth)/sign-in');
            reset();
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
  }, [isFocused, reset]);

  return (
    <View className="flex-1 items-center p-4 gap-y-8">
      <View className="w-full bg-transparent">
        <Label htmlFor="email-sign-up" className="font-bold mb-2">
          {t('auth.email')}
        </Label>
        <ControlledInput
          id="email-sign-up"
          keyboardType="email-address"
          placeholder="joe@acme.com"
          control={control}
          name="email"
        />
      </View>
      <View className="w-full bg-transparent">
        <Label htmlFor="nickname" className="font-bold mb-2">
          {t('auth.nickname')}
        </Label>
        <ControlledInput
          id="nickname"
          placeholder="joeDoe@12"
          control={control}
          name="nickname"
        />
      </View>
      <View className="w-full bg-transparent">
        <Label htmlFor="password-sign-up" className="font-bold mb-2">
          {t('auth.password')}
        </Label>
        <ControlledInput
          id="password-sign-up"
          control={control}
          name="password"
          secureTextEntry
        />
      </View>
      <View className="mt-4 bg-transparent w-full">
        <Button title={t('auth.sign-up')} onPress={onSubmit} />
      </View>
    </View>
  );
}
