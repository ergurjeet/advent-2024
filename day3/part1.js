const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const parsed = [...input.matchAll(/mul\(([0-9]+),([0-9]+)\)/g)].reduce((mul, [, d1, d2]) => mul+d1*d2, 0);
console.log(parsed)