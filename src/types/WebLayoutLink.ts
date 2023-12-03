export type WebLayoutLink = {
  href: string;
  name?: string;
  isActive: (path: string) => boolean;
};
