import { FunctionComponent } from 'react';
import { Modal, Animated, useColorScheme } from 'react-native';
import Lottie from 'lottie-react-native';

import lottieAnimation from 'src/assets/splash/lottie_animated_logo.json';
import {
  UseLottieSplashScreenParams,
  useLottieSplashScreen,
} from 'src/hooks/useLottieSplashScreen';
import { colorSchemePrimaryBgMap } from '_utils/colorSchemePrimaryBgMap';

export type LottieSplashScreenType =
  FunctionComponent<UseLottieSplashScreenParams>;

const SplashScreen: LottieSplashScreenType = ({
  animationFadeOut,
  onHidden,
}) => {
  const { visible, fadeAnim, onLottieAnimationComplete } =
    useLottieSplashScreen({
      animationFadeOut,
      onHidden,
    });

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
          source={lottieAnimation}
          loop={false}
          autoPlay
          onAnimationFinish={onLottieAnimationComplete}
        />
      </Animated.View>
    </Modal>
  );
};

export default SplashScreen;
