export const assetPath = (relativePath: string): string => {
  const base = import.meta.env.BASE_URL;
  const normalized = relativePath.replace(/^\/+/, "");
  return `${base}${normalized}`;
};

