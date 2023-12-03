import { TypeOf, z } from 'zod';

const schema = z.object({
  EXPO_PUBLIC_SEGMENT_KEY: z.string().url().optional(),
  EXPO_PUBLIC_API_URL: z.string().url(),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(parsed.error.format(), null, 4)
  );
  process.exit(1);
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof schema> {}
  }
}
