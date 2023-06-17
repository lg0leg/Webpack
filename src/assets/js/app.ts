const f = (first: string, second = 'script') => {
  console.log(`${first}${second}`);
};

f('start ', 'app');
f('type');
