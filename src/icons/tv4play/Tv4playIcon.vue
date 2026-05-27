<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M10.374 15.93V3.718c0-.209-.279-.307-.402-.12L.037 18.289a.199.199 0 0 0-.006.223c.036.072.108.12.192.12h7.331v1.656c0 .113.102.215.222.215h2.376c.12 0 .222-.102.222-.215v-1.656h1.435c.12 0 .222-.096.222-.222v-2.257a.22.22 0 0 0-.224-.222zm-2.826.008H4.795l2.753-4.073zm16.313-3.744L16.704 8.06c-.078-.049-.169.035-.132.12a10.53 10.53 0 0 1 .894 4.26c0 1.512-.317 2.952-.888 4.248-.036.083.053.161.131.12l7.152-4.127a.283.283 0 0 0 0-.487z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tv4play
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for tv4play (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tv4play {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tv4play {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tv4play 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tv4play 3s ease-in-out infinite alternate;
}
</style>