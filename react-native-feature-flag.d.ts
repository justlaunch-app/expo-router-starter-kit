// Extend the existing module declaration
declare module "react-native/Libraries/ReactNative/ReactNativeFeatureFlags" {
    export let shouldEmitW3CPointerEvents: () => boolean;
    export let shouldPressibilityUseW3CPointerEventsForHover: () => boolean;
  }
  