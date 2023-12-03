// Utility function to extract the name from the path
export function pathToName(path: string): string {
  const parts = path.split('/');
  return parts[parts.length - 1];
}
