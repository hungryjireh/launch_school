const greetVictor = (name) => {
  const greetings = ['Morning', 'Afternoon', 'Evening'];

  greetings.map((greeting) => {
    console.log(`Good ${greeting}, ${name}.`);
  })
}

greetVictor('Victor');