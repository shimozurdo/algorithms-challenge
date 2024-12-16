/**
Title: Ransom Note

Description:
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * Big O complexity: O(n), The code iterates through both the ransomNote and magazine strings once, so the time complexity is linear, O(n), where n is the length of the longer string between ransomNote and magazine.
 */
var canConstruct = function (ransomNote, magazine) {
    let map = new Map();
    for (const r of ransomNote) {
        map.set(r, map.get(r) + 1 || 1);
    }
    for (const m of magazine) {
        if (map.has(m)) {
            map.set(m, map.get(m) - 1);
            if (map.get(m) === 0)
                map.delete(m);
        }
        if(map.size === 0)
            return true;
    }
    return map.size > 0 ? false : true;
};

module.exports = canConstruct;