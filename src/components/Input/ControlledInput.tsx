import { useMemo } from 'react';
import { View, TextInput, TextInputProps, Text } from 'react-native';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'nativewind';

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

const styles = {
  dark: {
    className: 'bg-slate-900 text-white',
    placeholderTextColor: 'rgba(255, 255, 255, 0.25)',
  },
  light: {
    className: 'bg-white text-black',
    placeholderTextColor: 'rgba(0,0,0,0.25)',
  },
};

interface ControlledInputProps<T extends FieldValues>
  extends TextInputProps,
    InputControllerType<T> {}

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { t } = useTranslation();

  const { field, fieldState } = useController({ control, name, rules });

  const { colorScheme } = useColorScheme();

  const { placeholderTextColor, className } = useMemo(() => {
    if (!colorScheme) {
      return styles.light;
    }
    return styles[colorScheme];
  }, [colorScheme]);

  return (
    <View className="bg-transparent">
      <TextInput
        ref={field.ref}
        autoCapitalize="none"
        onChangeText={field.onChange}
        value={field.value as string}
        className={`p-4 w-full shadow-sm rounded-sm border-2 border-transparent focus:border-blue-500 ${className}`}
        placeholderTextColor={placeholderTextColor}
        {...inputProps}
      />
      {fieldState.error && (
        <Text className="text-red-500 font-semibold mt-2">
          {t(fieldState.error.message ?? '')}
        </Text>
      )}
    </View>
  );
}
