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
      <path d="M11.998 20.486a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm-6.335 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm12.671 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zM12 0c5.7 0 10.322 4.066 10.322 9.082 0 5.016-4.622 9.083-10.322 9.083a11.45 11.45 0 0 1-4.523-.917l-5.171 1.293 1.105-4.42c-1.094-1.442-1.733-3.175-1.733-5.039C1.678 4.066 6.3 0 12 0zm-.001 4.235A2.926 2.926 0 0 0 9.072 7.16v1.17h-.115a.47.47 0 0 0-.47.47v4.126c0 .26.21.471.47.471h6.086c.26 0 .47-.21.47-.47V8.798a.47.47 0 0 0-.47-.47h-.115v-1.17a2.927 2.927 0 0 0-2.93-2.924zm0 1.17c.972 0 1.758.786 1.758 1.754v1.17h-3.514v-1.17c0-.968.786-1.754 1.756-1.754z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: threema
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for threema (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-threema {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-threema {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-threema 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-threema 3s ease-in-out infinite alternate;
}
</style>