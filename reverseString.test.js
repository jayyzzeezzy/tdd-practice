import { reverseString } from "./reverseString";

test('reverse line', () => {
    expect(reverseString('line')).toBe('enil');
});

test('reverse running', () => {
    expect(reverseString('running')).toBe('gninnur');
});