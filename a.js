import fs from 'fs';

const aa = fs.readFileSync('./aa.json', 'utf8'),
bb = JSON.parse(aa),
mm = bb.matches;

let pp = '';
for (let i = 1; i<mm.length; i++){
    pp += mm[i].translation
}

// const kk = pp.map(item => item).join('')
console.log(pp)
