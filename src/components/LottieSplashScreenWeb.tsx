import React, { useState, useEffect, useRef } from 'react';
import { Modal, Animated } from 'react-native';
import Lottie from 'lottie-react-web';

import lottieAnimation from 'src/assets/splash/lottie_animated_logo.json';

interface SplashScreenProps {
  animationFadeOut: boolean;
  onHidden?: () => void;
}

const FADE_IN_DURATION = 1000;
const FADE_OUT_DURATION = 500;

const SplashScreen: React.FunctionComponent<SplashScreenProps> = ({
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

  return (
    <Modal transparent visible={visible}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
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
