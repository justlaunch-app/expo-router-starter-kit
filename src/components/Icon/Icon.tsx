import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  className?: string;
  size?: number;
}) {
  return <FontAwesome className={props.className} size={props.size} {...props} />;
}