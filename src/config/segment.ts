import { createClient } from '@segment/analytics-react-native';

export const segmentClient = createClient({
  writeKey: process.env.EXPO_PUBLIC_SEGMENT_KEY,
});
