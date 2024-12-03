const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

function getDirection(diff) {
    return diff > 0 ? 'asc' : 'desc';
}

const safeReports = input.split(`\n`)
    .reduce((cnt, entry) => {
        const report = entry.split(' ');
        let lastChecked = report[0];
        if(lastChecked - report[1] === 0) {
            return cnt;
        }
        const dir = getDirection(lastChecked - report[1]);
        for(let i=1; i<report.length; i++) {
            const diff = lastChecked - report[i];
            if(
                diff === 0
                || Math.abs(diff) > 3
                || dir !== getDirection(diff)
            ) {
                return cnt;
            }
            lastChecked = report[i];
        }
        return cnt+1;
}, 0);
console.log(safeReports);
