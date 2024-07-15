import { Text } from '@/components/core/text';
import { Ionicon } from '@/components/core/icon';
import { ParallaxScrollView } from '@/components/core/parallax-scroll-view';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicon
          size={310}
          name="code-slash"
          style={{
            color: '#808080',
            bottom: -90,
            left: -35,
            position: 'absolute',
          }}
        />
      }
    >
      <Text variant="largeTitle">Page Two</Text>
      <Text variant="callout" className="pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum ducimus excepturi,
        necessitatibus ea ad molestiae beatae dolores sequi numquam ipsam eaque iste perferendis
        sunt corporis. Qui, dicta. Deleniti, eius.
      </Text>
    </ParallaxScrollView>
  );
}
