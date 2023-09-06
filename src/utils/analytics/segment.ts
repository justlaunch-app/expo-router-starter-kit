import { segmentClient } from '_config/segment';

// TODO: fix segment types later
type JsonValue = string | number | boolean | null | JsonArray | JsonMap;
type JsonArray = JsonValue[];
interface JsonMap {
  [key: string]: JsonValue;
}

export function trackScreen(name: any, properties?: any) {
  segmentClient.screen(name, properties);
}

export function trackEvent(event: any, properties?: any) {
  segmentClient.track(event, properties);
}

export function trackIdentify(userId: any, properties?: any) {
  segmentClient.identify(userId, properties);
}

export function trackGroup(event: any, properties?: any) {
  segmentClient.group(event, properties);
}

export function trackAlias(newUserId: any) {
  segmentClient.alias(newUserId);
}

export function trackReset() {
  segmentClient.reset();
}

export function trackFlush() {
  segmentClient.flush();
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
