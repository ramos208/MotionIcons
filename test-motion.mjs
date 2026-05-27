import { animate, spring } from 'motion';
try {
  const ease = spring({ stiffness: 400, damping: 10 });
  console.log('spring ok:', typeof ease);
} catch (e) {
  console.log('spring error:', e);
}
