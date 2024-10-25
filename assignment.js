/*
function getSpaces(spaces, yesterday, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}

console.log(getSpaces(5, "CC..C", ".CCCC"));*/
function ntB(n) {
  let p7,
    p6,
    p5,
    p4,
    p3,
    p2,
    p1,
    p0 = 0;
  let t1 = 128;
  for (let i = 0; i < 7; i++) {
    if ((n = t1 || n < t1)) {
      p7++;
      n = n - t1;
      t1 = t1 / 2;
    }
  }
  return p0, p1, p2, p3, p4, p5, p6, p7;
}

console.log(ntB(128));
