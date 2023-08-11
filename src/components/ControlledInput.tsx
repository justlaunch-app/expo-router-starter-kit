import { View } from '_context/Themed';
import { TextInput, TextInputProps, Text } from 'react-native';

import React from 'react';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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

interface ControlledInputProps<T extends FieldValues>
  extends TextInputProps,
    InputControllerType<T> {}

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { t } = useTranslation();

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <View className="bg-transparent">
      <TextInput
        ref={field.ref}
        autoCapitalize="none"
        onChangeText={field.onChange}
        value={field.value as string}
        className="p-4 text-slate-900 w-full bg-slate-100 shadow-sm"
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
