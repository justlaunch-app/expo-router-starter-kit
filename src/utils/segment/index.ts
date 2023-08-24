import { useAnalytics } from '@segment/analytics-react-native';

const { screen, track, identify, group, alias, reset, flush } = useAnalytics();

type JsonValue = string | number | boolean | null | JsonArray | JsonMap;
type JsonArray = JsonValue[];
interface JsonMap {
  [key: string]: JsonValue;
}

export function trackScreen(name: string, properties: JsonMap) {
  screen(name, properties);
}

export function trackEvent(event: string, properties: JsonMap) {
  track(event, properties);
}

export function trackIdentify(event: string, properties: JsonMap) {
  identify(event, properties);
}

export function trackGroup(event: string, properties: JsonMap) {
  group(event, properties);
}

export function trackAlias(newUserId: string) {
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
};
