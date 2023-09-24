// sum.test.js
import { expect, test } from 'vitest';
import { sum } from './sum';

// test方法是用于编写单元测试的函数。test方法接受两个参数：测试名称和测试函数
// test(name: string, testFn: Function, timeout?: number | TestOptions): Promise<void>;
test('adds 1 + 2 to equal 3', () => {
    // expect方法是用于创建断言的函数。断言是一种用于验证代码的行为和输出是否符合预期的方式。
    // expect(actual).matcher(expected)
    // actual是一个表达式或变量，表示要检查的实际值。matcher是一个函数，表示要使用的比较方法。expected是一个值或对象，表示期望的结果。
    expect(sum(1, 2)).toBe(3);
});
