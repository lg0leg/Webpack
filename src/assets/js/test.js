const prom = () => Promise.resolve('+js');
prom().then((val) => console.log(val));
