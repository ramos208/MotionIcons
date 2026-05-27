const { animate, spring } = require('motion');
try {
  spring({ stiffness: 400, damping: 10 });
  console.log('spring ok');
} catch (e) {
  console.log('spring error', e);
}
