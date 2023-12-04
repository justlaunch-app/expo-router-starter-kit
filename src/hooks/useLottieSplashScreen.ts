import { useState, useEffect, useRef, useCallback } from 'react';
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

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: FADE_IN_DURATION,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: FADE_OUT_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      if (onHidden) onHidden();
    });
  }, [fadeAnim, onHidden]);

  useEffect(() => {
    fadeIn();

    if (animationFadeOut) {
      fadeOut();
    }
  }, [animationFadeOut, fadeIn, fadeOut]);

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
