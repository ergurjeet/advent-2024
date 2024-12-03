const lists = `3   4
4   3
2   5
1   3
3   9
3   3`;

const {lftlocs, rgtLocs} = lists.split(`\n`)
    .reduce((list, entry) => {
        const [lftloc, rgtLoc] = entry.split('   ');
        list.lftlocs.push(lftloc);
        list.rgtLocs.push(rgtLoc);
        return list;
    
}, {lftlocs:[], rgtLocs:[]});
lftlocs.sort();
rgtLocs.sort();
const sum = lftlocs.reduce((dist, lftloc, i) => dist+Math.abs(rgtLocs[i] - lftloc), 0);
console.log(sum);
