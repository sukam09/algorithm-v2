/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const combinations = [];

  const backtrack = (index, currentCombination) => {
    if (currentCombination.length === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const lettersToExplore = digitToLetters[currentDigit];

    for (const letter of lettersToExplore) {
      backtrack(index + 1, currentCombination + letter);
    }
  };

  backtrack(0, '');

  return combinations;
};
