import { Modal, Animated, useColorScheme } from 'react-native';
import Lottie from 'lottie-react-web';

import lottieAnimation from 'src/assets/splash/lottie_animated_logo.json';
import { useLottieSplashScreen } from 'src/hooks/useLottieSplashScreen';
import { colorSchemePrimaryBgMap } from '_utils/colorSchemePrimaryBgMap';

const SplashScreen = () => {
  const { visible, fadeAnim } = useLottieSplashScreen({});

  const colorScheme = useColorScheme();

  return (
    <Modal transparent visible={visible}>
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          backgroundColor: colorSchemePrimaryBgMap[colorScheme ?? 'light'],
        }}
      >
        <Lottie
          options={{
            animationData: lottieAnimation,
            loop: false,
            autoplay: true,
          }}
        />
      </Animated.View>
    </Modal>
  );
};

export default SplashScreen;
