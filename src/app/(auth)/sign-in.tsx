import React, { useEffect, useState } from 'react';
import { StyledText as Text } from '_components/Text/StyledText';
import { View, Alert, Button, Pressable } from 'react-native';
import { ControlledInput } from '_components/Input/ControlledInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'src/store/authStore/auth.store';
import { useTranslation } from 'react-i18next';
import { useSetTitle } from 'src/hooks/useSetTitle';
import { ResetPasswordModal } from 'src/components/ResetPasswordModal';
import { useIsFocused } from '@react-navigation/native';
import { emailSchema } from '_utils/auth.schema';

const schema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'auth.errors.password-invalid'),
});

export default function SignIn() {
  const { t } = useTranslation();
  useSetTitle(t('auth.sign-in'));

  const isFocused = useIsFocused();

  const [modalResetOpen, setModalResetOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useAuth((state) => state.login);

  const onSubmit = handleSubmit((credentials) => {
    const { error } = login(credentials) ?? {};

    if (!error) {
      return;
    }

    Alert.alert(t(error));
  });

  useEffect(() => {
    if (!isFocused) {
      reset();
    }
  }, [isFocused]);

  return (
    <View className="flex-1 items-center p-4 gap-y-8">
      <View>
        <Text className="text-3xl mt-2">EXPO STARTER KIT</Text>
      </View>
      <View className="w-full bg-transparent">
        <Text className="font-bold mb-2">{t('auth.email')}</Text>
        <ControlledInput
          keyboardType="email-address"
          placeholder="joe@acme.com"
          control={control}
          name="email"
        />
      </View>
      <View className="w-full bg-transparent">
        <Text className="font-bold mb-2">{t('auth.password')}</Text>
        <ControlledInput control={control} name="password" secureTextEntry />
      </View>
      <View className="mt-4 bg-transparent w-full">
        <Button title={t('auth.sign-in')} onPress={onSubmit} />
      </View>

      <View>
        <Pressable onPress={() => setModalResetOpen(true)}>
          <Text>{t('auth.reset-password')}</Text>
        </Pressable>
      </View>

      <ResetPasswordModal
        visible={modalResetOpen}
        close={() => setModalResetOpen(false)}
      />
    </View>
  );
}
