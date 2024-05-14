import { calculator } from "./calculator";

describe('add', () => {
    test('calculator.add(1, 1) return 2', () => {
        expect(calculator.add(1, 1)).toBe(2);
    });

    test('calculator.add(2, 2) return 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test('calculator.add(0.1, 0.1) return 0.2', () => {
        expect(calculator.add(0.1, 0.1)).toBeCloseTo(0.2);
    });
});

describe('subtract', () => {
    test('calculator.sub(2, 1) return 1', () => {
        expect(calculator.sub(2, 1)).toBe(1);
    });

    test('calculator.sub(4, 2) return 2', () => {
        expect(calculator.sub(4, 2)).toBe(2);
    });

    test('calculator.sub(0.5, 0.1) return 0.4', () => {
        expect(calculator.sub(0.5, 0.1)).toBeCloseTo(0.4);
    });
});