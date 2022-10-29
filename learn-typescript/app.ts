// No 1
function transaction(x: number, y: number): number {
  // tulis jawabanmu disini
  const cost: number = 0.5;
  if (x % 5 === 0 && x < y) {
    let withdraw: number = y - x - cost;
    return withdraw;
  } else {
    return y;
  }
}

console.log(transaction(30, 80)); // expect output 49.5
console.log(transaction(42, 100)); // expect output 100

// No 2
function assigment(n: number): string {
  // tulis jawabanmu disini
  if (n > 90) {
    return 'A';
  } else if (n > 80 && n <= 90) {
    return 'B';
  } else if (n > 70 && n <= 80) {
    return 'C';
  } else if (n > 60 && n <= 70) {
    return 'D';
  } else {
    return 'E';
  }
}

console.log(assigment(95)); // expect output A
console.log(assigment(80)); // expect output C

// No 3
function symbol(str: string): string {
  // tulis jawabanmu disini
  let ipAddress: string = '';
  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === '.') {
      ipAddress = ipAddress + '()';
    } else {
      ipAddress = ipAddress + str[i];
    }
  }
  return ipAddress;
}

console.log(symbol('1.1.1.1')); // expect output 1()1()1()1
console.log(symbol('192.268.1.1')); // expect output 192()268()1()1

// No 4
function solution(n: number): number {
  // tulis jawabanmu disini
  let sum: number = 0;
  // for(let i: number = 0; i < n.length; i++){

  // }
  return sum;
}

console.log(solution(2022)); // expect output 6
console.log(solution(1001)); // expect output 2
