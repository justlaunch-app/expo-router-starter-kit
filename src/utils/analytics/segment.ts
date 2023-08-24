import { useAnalytics } from '@segment/analytics-react-native';

const { screen, track, identify, group, alias, reset, flush } = useAnalytics();

//TODO: fix segment types later
// type JsonValue = string | number | boolean | null | JsonArray | JsonMap;
// type JsonArray = JsonValue[];
// interface JsonMap {
//   [key: string]: JsonValue;
// }

export function trackScreen(name: any, properties?: any) {
  screen(name, properties);
}

export function trackEvent(event: any, properties?: any) {
  track(event, properties);
}

export function trackIdentify(userId: any, properties?: any) {
  identify(userId, properties);
}

export function trackGroup(event: any, properties?: any) {
  group(event, properties);
}

export function trackAlias(newUserId: any) {
  alias(newUserId);
}

export function trackReset() {
  reset();
}

export function trackFlush() {
  flush();
}

export default {
  trackScreen,
  trackEvent,
  trackIdentify,
  trackGroup,
  trackAlias,
  trackReset,
  trackFlush,
};
