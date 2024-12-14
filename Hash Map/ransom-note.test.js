const canConstruct = require("./ransom-note");

describe("Ransom Note Tests", () => {
    test("All letters available in magazine", () => {
      const ransomNote = "aabbcc";
      const magazine = "abcabcabc";
      // Explanation: All letters in ransomNote are present in magazine, with enough occurrences.
      expect(canConstruct(ransomNote, magazine)).toBe(true);
    });
  
    test("Not enough letters in magazine", () => {
      const ransomNote = "aabbcc";
      const magazine = "aabcc";
      // Explanation: The letter "b" is only available once in magazine but needed twice in ransomNote.
      expect(canConstruct(ransomNote, magazine)).toBe(false);
    });
  
    test("Empty ransom note", () => {
      const ransomNote = "";
      const magazine = "abc";
      // Explanation: An empty ransomNote can always be constructed, regardless of the magazine content.
      expect(canConstruct(ransomNote, magazine)).toBe(true);
    });
  
    test("Empty magazine", () => {
      const ransomNote = "abc";
      const magazine = "";
      // Explanation: A non-empty ransomNote cannot be constructed from an empty magazine.
      expect(canConstruct(ransomNote, magazine)).toBe(false);
    });
  
    test("Ransom note with characters not in magazine", () => {
      const ransomNote = "xyz";
      const magazine = "abcabcabc";
      // Explanation: The characters "x", "y", and "z" are not present in magazine at all.
      expect(canConstruct(ransomNote, magazine)).toBe(false);
    });
  });
  