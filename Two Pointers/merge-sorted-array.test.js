const merge = require("./merge-sorted-array");

describe('Merge Sorted Arrays', () => {
    test('Merge two non-empty sorted arrays', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];
        const m = 3, n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('Merge when nums2 is empty', () => {
        const nums1 = [1, 2, 3];
        const nums2 = [];
        const m = 3, n = 0;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3]);
    });

    test('Merge when nums1 is empty except for placeholder zeros', () => {
        const nums1 = [0, 0, 0];
        const nums2 = [2, 5, 6];
        const m = 0, n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([2, 5, 6]);
    });

    test('Merge when both arrays contain identical elements', () => {
        const nums1 = [2, 2, 3, 0, 0, 0];
        const nums2 = [2, 2, 3];
        const m = 3, n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([2, 2, 2, 2, 3, 3]);
    });

    test('Merge when nums2 contains smaller elements than nums1', () => {
        const nums1 = [4, 5, 6, 0, 0, 0];
        const nums2 = [1, 2, 3];
        const m = 3, n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
