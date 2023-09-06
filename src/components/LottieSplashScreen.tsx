import * as React from 'react';
import { Modal, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import lottieAnimation from 'src/assets/splash/lottie_animated_logo.json';
import { useLottieSplashScreen } from 'src/hooks/useLottieSplashScreen';

interface SplashScreenProps {
  animationFadeOut: boolean;
  onHidden?: () => void;
}

export type LottieSplashScreenNative =
  React.FunctionComponent<SplashScreenProps>;

const SplashScreen: LottieSplashScreenNative = ({
  animationFadeOut,
  onHidden,
}) => {
  const { visible, fadeAnim, onLottieAnimationComplete } =
    useLottieSplashScreen({ animationFadeOut, onHidden });

  return (
    <Modal transparent visible={visible}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <LottieView
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
