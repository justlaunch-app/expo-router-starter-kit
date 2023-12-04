import { createClient } from '@segment/analytics-react-native';

export const segmentClient = createClient({
  writeKey: process.env.SEGMENT_KEY,
});
