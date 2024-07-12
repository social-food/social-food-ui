const textTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

const isAllowedTypographyType = (type: string): boolean => {
  return textTag.includes(type);
}

export {
  textTag,
  isAllowedTypographyType,
}