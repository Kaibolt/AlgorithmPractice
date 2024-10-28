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
  for (let i = 0; i < 7; i++) {
    if ((n = 128 || n < 128)) {
      p7++;
      n = n - 128;
    }
    if ((n = 64 || n < 64)) {
      p6++;
      n = n - 64;
    }
    if ((n = 32 || n < 32)) {
      p5++;
      n = n - 32;
    }
    if ((n = 16 || n < 16)) {
      p4++;
      n = n - 16;
    }
    if ((n = 8 || n < 8)) {
      p3++;
      n = n - 8;
    }
    if ((n = 4 || n < 4)) {
      p2++;
      n = n - 4;
    }
    if ((n = 2 || n < 2)) {
      p1++;
      n = n - 2;
    }
    if ((n = 1 || n < 1)) {
      p0++;
      n = n - 1;
    }
  }
  return p0, p1, p2, p3, p4, p5, p6, p7;
}

console.log(ntB(200));
// Disgusting code, wont even run.
// Find out how to shorten this into a simple function
