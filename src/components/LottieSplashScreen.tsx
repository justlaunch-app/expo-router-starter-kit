import React, { useState, useEffect, useRef } from 'react';
import { Modal, Animated, View } from 'react-native';
import LottieView from 'lottie-react-native';
import lottieAnimation from 'src/assets/splash/lottie_animated_logo.json';

export const SplashScreen: React.FunctionComponent<{
  animationFadeOut: boolean;
  onHidden?: () => void;
}> = ({ animationFadeOut, onHidden }) => {
  const [visible, setVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // Function to fade out the modal
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      // onHidden();
    });
  };

  useEffect(() => {
    fadeIn();
  }, []);

  useEffect(() => {
    if (animationFadeOut) {
      fadeOut();
    }
  }, [animationFadeOut]);

  return (
    <Modal transparent visible={visible}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <LottieView source={lottieAnimation} loop={false} autoPlay />
      </Animated.View>
    </Modal>
  );
};
