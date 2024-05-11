import { capitalize } from "./capitalize";

test('capitalize a string', () => {
    expect(capitalize('joe')).toBe('Joe');
});