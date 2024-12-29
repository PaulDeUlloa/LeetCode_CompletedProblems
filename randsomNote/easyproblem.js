// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const makeCountsMap = (s) => {
    //If there’s one   ^^^ parameter, you can omit parentheses: so s instead of (s).
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

// Variable Function: The canConstruct variable is assigned an arrow function which takes ransomNote and magazine as parameters.

// Helper Function: The inner helper function sortedCharacterStack sorts and reverses characters from its input string, maintaining clarity within the main logic.

// Main Logic: The core logic checks whether you can construct the ransomNote from available letters in the magazine.

//! Summary:

//Traditional Functions lose their reference to ‘self’ based on how they are invoked unless properly bound with .bind(), stored methods lost scope unless carefully managed.

// Arrow Functions, however retain access via lexical scoping so they always refer back up through closures—making them particularly useful when dealing with callbacks where preserving contextual references is necessary (e.g., event handlers).

// This difference helps prevent common pitfalls associated with managing contexts across different layers or scopes within your applications!
