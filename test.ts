class Main {
  static main(): void {
    let sum: number = 0;
    let average: number;
    let stand_sum: number = 0;
    let stand_dev: number;

    for (let i = 1; i <= 10; i++) {
      sum = sum + i;
      stand_sum = i - 5;
    }

    average = Math.floor(sum / 10);
    console.log("The average is: " + average);

    for (let i = 1; i <= 10; i++) {
      stand_sum = (i - average) * (i - average) + stand_sum;
    }

    stand_dev = stand_sum / (average - 1);
    console.log("The deviation is: " + stand_dev);

    let fact: number = Math.trunc(stand_dev);
    for (let i = Math.trunc(stand_dev - 1); i > 0; i--) {
      fact = fact * i;
    }

    console.log("fact: " + fact);
  }
}

