const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
const matches = [...input.matchAll(/mul\(([0-9]+),([0-9]+)\)|(do.)/g)];
const result = matches.reduce((coll, [command, n1, n2]) => {
    switch (command) {
        case 'don':
            coll.stop = true;
            break;
        case 'do(':
            coll.stop = false;
            break;
        default:
            if(!coll.stop) {
                coll.mul += n1*n2;
            }
            break;
    }
    return coll;
}, {mul: 0, stop: false}).mul;
console.log(result)