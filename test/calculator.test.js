import { calculator } from "../script/calculator";

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

describe('multiply', () => {
    test('calculator.mul(2, 2) return 4', () => {
        expect(calculator.mul(2, 2)).toBe(4);
    });

    test('calculator.mul(3, 2) return 6', () => {
        expect(calculator.mul(3, 2)).toBe(6);
    });

    test('calculator.mul(0.3, 0.2) return 0.06', () => {
        expect(calculator.mul(0.3, 0.2)).toBeCloseTo(0.06);
    });
});

describe('divide', () => {
    test('calculator.div(9, 3) return 3', () => {
        expect(calculator.div(9, 3)).toBe(3);
    });

    test('calculator.div(15, 3) return 5', () => {
        expect(calculator.div(15, 3)).toBe(5);
    });

    test('calculator.div(0.15, 3) return 0.05', () => {
        expect(calculator.div(0.15, 3)).toBeCloseTo(0.05);
    });

    test('calculator.div(0.0015, 3) return 0.0005', () => {
        expect(calculator.div(0.0015, 3)).toBeCloseTo(0.0005);
    });
});