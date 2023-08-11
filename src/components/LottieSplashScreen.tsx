import React, { useState, useEffect, useRef } from 'react';
import { Modal, Animated, View } from 'react-native';
import LottieView from 'lottie-react-native';
import lottieAnimation from 'src/assets/splash/lottie_animated_logo.json';

interface SplashScreenProps {
  animationFadeOut: boolean;
  onHidden?: () => void;
}

const FADE_IN_DURATION = 1000;
const FADE_OUT_DURATION = 500;

export const SplashScreen: React.FunctionComponent<SplashScreenProps> = ({
  animationFadeOut,
  onHidden,
}) => {
  const [visible, setVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: FADE_IN_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: FADE_OUT_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      if (onHidden) onHidden();
    });
  };

  useEffect(() => {
    fadeIn();

    if (animationFadeOut) {
      fadeOut();
    }
  }, [animationFadeOut]);

  const onLottieAnimationComplete = () => {
    if (animationFadeOut) {
      fadeOut();
    }
  };

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
