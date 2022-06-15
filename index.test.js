const traverse = require('./index');

const input12 = [
    [1, 3, 3],
    [2, 1, 4],
    [0, 6, 4]
];

const input16 = [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 1, 2]
];

const input83 = [
    [10, 33, 13, 15],
    [22, 21, 4, 1],
    [5, 0, 2, 3],
    [0, 6, 15, 2]
];

const input145 = [
    [10, 33, 13, 15],
    [22, 21, 4, 1],
    [5, 0, 99, 3],
    [0, 6, 15, 2]
];

describe("traverse Jungle", () => {
    test('input12 should result in 12', () => {
        expect(traverse.traverseWithMoreBananas(input12)).toBe(12);
    });
    test('input16 should result in 16', () => {
        expect(traverse.traverseWithMoreBananas(input16)).toBe(16);
    });
    test('input83 should result in 83', () => {
        expect(traverse.traverseWithMoreBananas(input83)).toBe(83);
    });
    test('input145 should result in 145', () => {
        expect(traverse.traverseWithMoreBananas(input145)).toBe(145);
    });
});


