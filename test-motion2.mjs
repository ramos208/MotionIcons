import { animate } from 'motion';
try {
  animate(null, { scale: 1.4 }, { type: "spring", stiffness: 400, damping: 10 });
  console.log('animate ok');
} catch (e) {
  console.log('animate error:', e);
}
