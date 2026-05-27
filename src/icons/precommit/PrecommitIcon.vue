<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M12 0c-.563 0-1.127.215-1.557.645L.645 10.443c-.86.86-.86 2.254 0 3.114l9.798 9.798c.86.86 2.254.86 3.114 0l9.798-9.798c.86-.86.86-2.254 0-3.114L13.557.645A2.195 2.195 0 0012 0zm0 1.74c.493 0 .987.186 1.361.56L21.7 10.64c.75.75.75 1.973 0 2.722L13.361 21.7c-.374.375-.868.56-1.361.56s-.987-.185-1.361-.56L2.3 13.361a1.93 1.93 0 010-2.722L10.639 2.3c.374-.375.868-.56 1.361-.56zm0 .62c-.333 0-.664.127-.92.382L2.742 11.08a1.295 1.295 0 000 1.84l8.338 8.338a1.296 1.296 0 001.84 0l8.338-8.338a1.295 1.295 0 000-1.84L12.92 2.742A1.296 1.296 0 0012 2.36zM9.207 7.624h3.959c.55 0 1.015.079 1.4.238.385.16.7.371.942.633.241.262.417.561.527.897a3.34 3.34 0 010 2.084c-.11.34-.286.64-.527.902a2.628 2.628 0 01-.942.633c-.385.16-.85.238-1.4.238h-2.043v3.156H9.207zm1.916 1.484v2.657h1.514c.222 0 .434-.016.64-.05.207-.032.39-.097.547-.193.158-.095.284-.23.38-.404.094-.174.142-.401.142-.682 0-.28-.048-.507-.143-.681a1.053 1.053 0 00-.379-.404 1.513 1.513 0 00-.547-.194 4.056 4.056 0 00-.64-.049z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: precommit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for precommit (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-precommit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-precommit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-precommit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-precommit 3s ease-in-out infinite alternate;
}
</style>