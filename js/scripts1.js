let arr_old = [141, 5, 8, 19, 33, 32, 18, 23];
let c;
let i = 0;

for (let i = arr_old.length; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr_old[j] > arr_old[j + 1]) {
      c = arr_old[j];
      arr_old[j] = arr_old[j + 1];
      arr_old[j + 1] = c;
    }
  }
}

console.log(arr_old);
