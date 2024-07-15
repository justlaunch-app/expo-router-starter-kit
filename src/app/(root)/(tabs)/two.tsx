import { SafeAreaView } from '@/components/core/safe-area-view';
import { Text } from '@/components/core/text';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <Text variant="largeTitle">Page Two</Text>
      <Text variant="callout" className="pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum ducimus excepturi,
        necessitatibus ea ad molestiae beatae dolores sequi numquam ipsam eaque iste perferendis
        sunt corporis. Qui, dicta. Deleniti, eius.
      </Text>
    </SafeAreaView>
  );
}
