import { JsonMap } from '@segment/analytics-react-native';
import { segmentClient } from '_config/segment';

export function trackScreen(name: string, properties?: JsonMap) {
  segmentClient.screen(name, properties);
}

export function trackEvent(event: string, properties?: JsonMap) {
  segmentClient.track(event, properties);
}

export function trackIdentify(userId: any, properties?: JsonMap) {
  segmentClient.identify(userId, properties);
}

export function trackGroup(event: string, properties?: JsonMap) {
  segmentClient.group(event, properties);
}

export function trackAlias(newUserId: string) {
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
