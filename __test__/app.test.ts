import { greeter } from '../src/utils/utils';

test('greeter returns Hello friend!', () => {
  expect(greeter('friend')).toBe('Hello friend!');
});
