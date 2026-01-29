const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const maxPackageCount = Math.ceil(n / 6);

const arr = input.slice(1).map(v => v.split(' ').map(Number));

// console.log(arr);

let minPackage = 1000;
let minUnit = 1000;
for (let i = 0; i < arr.length; i++) {
  const [package, unit] = arr[i];
  if (package < minPackage) {
    minPackage = package;
  }
  if (unit < minUnit) {
    minUnit = unit;
  }
}

const res = [minPackage * maxPackageCount];
let packageCount = maxPackageCount - 1;
while (packageCount >= 0) {
  const remainder = n - 6 * packageCount;
  res.push(minPackage * packageCount + minUnit * remainder);
  // console.log(minPackage, packageCount, minUnit, remainder);
  packageCount--;
}
// res.push(maxPackageCount * minPackage);
// const remain = n - (maxPackageCount - 1) * 6;
// res.push((maxPackageCount - 1) * minPackage + remain * minUnit);
console.log(Math.min(...res));
