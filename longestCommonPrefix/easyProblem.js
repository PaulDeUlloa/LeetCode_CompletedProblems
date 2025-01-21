//! Approach 1: Horizontal scanning

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //This checks if the input array strs is empty. If it is, there's no prefixes to find, so it returns an empty string.
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++)
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  return prefix;
};

// this checks the strings horizontally which is on way of scanning our strings for common prefixes.
