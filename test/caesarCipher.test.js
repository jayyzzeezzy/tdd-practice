import { caesarCipher } from "../script/caesarCipher";

describe('caesar cipher', () => {
    test('cipher a string by 1 key', () => {
        expect(caesarCipher('play', 1)).toBe('qmbz');
    });

    test('cipher a string by 1 key', () => {
        expect(caesarCipher('none', 1)).toBe('opof');
    });

    test('cipher a string by 2 key', () => {
        expect(caesarCipher('kendrick', 2)).toBe('mgpftkem');
    });
});