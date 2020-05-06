const valuesEntered = process.argv.slice(2);

const numbers = [];

valuesEntered.forEach(item => {
  numbers.push(Number(item));
});

const timers = numbers.filter(number => number > 0 && typeof number === 'number');

if (timers === []) {
  throw new Error('Error, no numbers provided');
}

for (const timer of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000 * timer);
}