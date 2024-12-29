// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const makeCountsMap = (s) => {
    const counts = {};
    for (const c of s) {
      counts[c] = (counts[c] || 0) + 1;
    }
    return counts;
  };

  if (ransomNote.length > magazine.length) {
    return false;
  }

  const ransomNoteCounts = makeCountsMap(ransomNote);
  const magazineCounts = makeCountsMap(magazine);

  for (const c in ransomNoteCounts) {
    const countInMagazine = magazineCounts[c] || 0;
    const countInRansomNote = ransomNoteCounts[c];

    if (countInMagazine < countInRansomNote) {
      return false;
    }
  }

  return true;
};

//* Approach 4: Sorting and Stacks

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const sortedCharacterStack = (s) => {
    const charArray = s.split("");
    charArray.sort();
    return charArray.reverse();
  };

  if (ransomNote.length > magazine.length) {
    return false;
  }

  const magazineStack = sortedCharacterStack(magazine);
  const ransomNoteStack = sortedCharacterStack(ransomNote);

  let i = 0;
  let j = 0;

  while (i < magazineStack.length && j < ransomNoteStack.length) {
    if (magazineStack[i] === ransomNoteStack[j]) {
      j++;
    }
    i++;
  }

  return j === ransomNoteStack.length;
};
