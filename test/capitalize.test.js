import { capitalize } from "../script/capitalize";

test('capitalize a string', () => {
    expect(capitalize('joe')).toBe('Joe');
});

test('capitalize a string', () => {
    expect(capitalize('Jose')).toBe('Jose');
});