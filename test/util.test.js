// textWidth.test.js
import { expect, test, describe } from 'vitest';
import { getTextWidth } from './util';

// describe 描述, decribe会形成一个作用域
describe('getTextWidth function', () => {
    // test for empty string
    test('returns 0 if the input is an empty string', () => {
        expect(getTextWidth('')).toBe(0);
    });

    // test for single character
    test('returns 40 if the input is a single character', () => {
        expect(getTextWidth('a')).toBe(40);
        expect(getTextWidth('中')).toBe(40);
        expect(getTextWidth(1)).toBe(40);
    });

    // test for numbers
    test('returns the correct width for numbers', () => {
        expect(getTextWidth(123)).toBe(27);
        expect(getTextWidth(3.14)).toBe(34);
        expect(getTextWidth(-100)).toBe(34);
    });

    // test for english characters
    test('returns the correct width for english characters', () => {
        expect(getTextWidth('Hello')).toBe(50);
        expect(getTextWidth('World')).toBe(50);
        expect(getTextWidth('Hello World')).toBe(107);
    });

    // test for chinese characters
    test('returns the correct width for chinese characters', () => {
        expect(getTextWidth('你好')).toBe(40);
        expect(getTextWidth('世界')).toBe(40);
        expect(getTextWidth('你好世界')).toBe(60);
    });

    // test for mixed characters
    test('returns the correct width for mixed characters', () => {
        expect(getTextWidth('Hello你好')).toBe(80);
        expect(getTextWidth('World世界')).toBe(80);
        expect(getTextWidth('Hello World你好世界')).toBe(167);
    });
});
