import { createClient } from '@segment/analytics-react-native';
import ENV from '_utils/env-loader';

export const segmentClient = createClient({
  writeKey: ENV.SEGMENT_KE,
});
