import { ComponentProps } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const TabBarIcon = (props: {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};
