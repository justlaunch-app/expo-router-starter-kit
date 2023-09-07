import { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const FADE_IN_DURATION = 1000;
const FADE_OUT_DURATION = 500;

export interface UseLottieSplashScreenParams {
  animationFadeOut?: boolean;
  onHidden?: () => void;
}

export const useLottieSplashScreen = ({
  animationFadeOut,
  onHidden,
}: UseLottieSplashScreenParams) => {
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

  return {
    onLottieAnimationComplete,
    visible,
    fadeAnim,
  };
};
