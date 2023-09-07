import * as React from 'react';
import { StyledText as Text } from '_components/Text/StyledText';
import { View,  Button, Pressable } from 'react-native';
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
import analytics from '_utils/analytics/segment';
import { deviceInfo } from '_config/device';
import { Label } from '_components/Label/StyledLabel';
import {Alert} from "_utils/alert";

const schema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'auth.errors.password-invalid'),
});

export default function SignIn() {
  const { t } = useTranslation();
  useSetTitle(t('auth.sign-in'));

  const isFocused = useIsFocused();

  const [modalResetOpen, setModalResetOpen] = React.useState(false);

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useAuth((state) => {
    analytics.trackEvent('User Logged In', {
      email: state.user?.email,
      userPhone: deviceInfo,
    });
    return state.login;
  });

  const onSubmit = handleSubmit((credentials) => {
    const { error } = login(credentials) ?? {};

    if (!error) {
      return;
    }

    Alert.alert(t(error));
  });

  React.useEffect(() => {
    if (!isFocused) {
      reset();
    }
  }, [isFocused]);

  return (
    <View className="flex-1 items-center p-4 gap-y-8">
      <View>
        <Text className="text-3xl mt-2 font-semibold">EXPO STARTER KIT</Text>
      </View>
      <View className="w-full bg-transparent">
        <Label htmlFor="email-sign-in" className="font-bold mb-2">
          {t('auth.email')}
        </Label>
        <ControlledInput
          id="email-sign-in"
          keyboardType="email-address"
          placeholder="joe@acme.com"
          control={control}
          name="email"
        />
      </View>
      <View className="w-full bg-transparent">
        <Label htmlFor="password-sign-in" className="font-bold mb-2">
          {t('auth.password')}
        </Label>
        <ControlledInput
          id="password-sign-in"
          control={control}
          name="password"
          secureTextEntry
        />
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
