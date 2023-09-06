import { useAnalytics } from '@segment/analytics-react-native';

type JsonValue = string | number | boolean | null | JsonArray | JsonMap;
type JsonArray = JsonValue[];
interface JsonMap {
  [key: string]: JsonValue;
}

export const useSegment = () => {
  const { screen, track, identify, group, alias, reset, flush } =
    useAnalytics();

  function trackScreen(name: any, properties?: any) {
    screen(name, properties);
  }

  function trackEvent(event: any, properties?: any) {
    track(event, properties);
  }

  function trackIdentify(userId: any, properties?: any) {
    identify(userId, properties);
  }

  function trackGroup(event: any, properties?: any) {
    group(event, properties);
  }

  function trackAlias(newUserId: any) {
    alias(newUserId);
  }

  function trackReset() {
    reset();
  }

  function trackFlush() {
    flush();
  }

  return {
    trackScreen,
    trackEvent,
    trackIdentify,
    trackGroup,
    trackAlias,
    trackReset,
    trackFlush,
  };
};
