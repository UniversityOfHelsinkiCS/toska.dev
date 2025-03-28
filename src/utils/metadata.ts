export const getTitle = (titleParts?: string[]) => {
  const baseTitle = "Toska";
  const separator = " - ";

  if (!titleParts || titleParts.length === 0) {
    return baseTitle;
  }

  return `${titleParts.join(separator)}${separator}${baseTitle}`;
};
