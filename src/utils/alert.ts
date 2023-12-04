import { Platform, Alert as DefaultRNAlert } from 'react-native';

type AlertOption = {
  style?: 'default' | 'cancel' | 'destructive';
  onPress: () => void;
};

type AlertOptions = AlertOption[];

const alertPolyfill = (
  title: string,
  description?: string | undefined,
  options?: AlertOptions
): void => {
  const result = window.confirm(
    [title, description].filter(Boolean).join('\n')
  );

  if (result) {
    const confirmOption = options?.find(({ style }) => style !== 'cancel');
    confirmOption && confirmOption.onPress();
  } else {
    const cancelOption = options?.find(({ style }) => style === 'cancel');
    cancelOption && cancelOption.onPress();
  }
};

export const Alert =
  Platform.OS !== 'web' ? DefaultRNAlert : { alert: alertPolyfill };
