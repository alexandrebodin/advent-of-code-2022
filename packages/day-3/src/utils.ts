const lowercaseACharCode = 'a'.charCodeAt(0);
const upperCaseACharCode = 'A'.charCodeAt(0);

export const charToScore = (char: string) => {
  const code = char.charCodeAt(0);
  if (char === char.toLowerCase()) {
    return code - lowercaseACharCode + 1;
  } else {
    return code - upperCaseACharCode + 27;
  }
};
