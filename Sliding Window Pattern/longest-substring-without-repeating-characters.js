/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxSubstring = 0;
    let dic = [];
    let startIndex = 0;
    for (let i = 0; i < s.length; i++) {
        const l = s[i];
        if (!dic.includes(l))
            dic.push(l);
        else {
            startIndex = dic.indexOf(l) + 1;
            dic = dic.slice(startIndex);            
            dic.push(l);
        }
        maxSubstring = Math.max(maxSubstring, dic.length);
    }
    return maxSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("abba"));