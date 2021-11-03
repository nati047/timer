// process.stdout.write('\x07');
let alarms = process.argv.slice(2);
let delay = 0;
alarms.forEach((element) => {
  delay = delay + element * 1000;

  if (!element) return;
  else if (typeof (delay) !== 'number') return;

  else {

    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }

});

