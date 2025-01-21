//! Approach 1: Horizontal scanning

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //This checks if the input array strs is empty. If it is, there's no prefixes to find, so it returns an empty string.
  if (strs.length === 0) return "";

  //The variable prefix starts off as the first string in the list (strs[0]). This will be used as a reference point for finding commonality with other strings.
  let prefix = strs[0];

  //A loop is initiated from index 1 because we've already taken care of index 0 by initializing our prefix with it.
  for (let i = 1; i < strs.length; i++)
    //Here we check if the current string (strs[i]) does not start with our current prefix.
    //The method .indexOf(prefix) gives us the position where prefix occurs in that string.
    //If it’s not at position 0, that means it's either not present or present but not as a starting substring.
    while (strs[i].indexOf(prefix) != 0) {
      //When there isn’t a match found (i.e., when we run into a case where some characters don't align), we need to reduce our potential longest common prefix.The use of .slice(0, prefix.length - 1) effectively removes one character from the end of our current prefix.For example: If prefix was "flower", after this operation it becomes "flow", then "flo", etc., until either we find a match or exhaust all letters.
      prefix = prefix.slice(0, prefix.length - 1);

      //At any point during trimming down our possible longest common prefixes, if we reach an empty string, there’s no commonality left—it exits early by returning an empty result immediately.
      if (prefix === "") return "";
    }
  return prefix;
};

// this checks the strings horizontally which is on way of scanning our strings for common prefixes.
