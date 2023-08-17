export const validateString = (value: unknown, maxLength: number) => {
  if (value && typeof value === "string" && value.length < maxLength) {
    return true;
  } else {
    return false;
  }
};
