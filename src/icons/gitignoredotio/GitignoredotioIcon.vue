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
      <path d="M15.08 7.143c-.958.57-1.977 1.065-3.743 1.02-2.082 0-3.55 1.11-3.55 2.91 0 1.035.405 1.74 1.409 2.28-.57.36-.884.93-.884 1.516 0 .84.719 1.575 2.456 1.575h1.257c.794 0 1.153.33 1.153.795 0 .525-.344.915-1.841.915-1.513 0-1.812-.315-1.812-1.005H7.428c0 1.575.794 2.565 3.849 2.565 2.815 0 4.252-1.005 4.252-2.64 0-1.335-1.183-2.31-3.024-2.31h-1.318c-.764 0-.869-.24-.869-.48 0-.18.09-.36.255-.45.284.06.584.09.928.09 2.052 0 3.37-1.125 3.37-2.67 0-1.036-.54-1.62-1.543-2.056 1.003 0 1.737-.09 2.291-.315zm-3.683 2.565c.793 0 1.212.42 1.212 1.305 0 .915-.434 1.395-1.212 1.395-.734 0-1.213-.495-1.213-1.365 0-.825.464-1.335 1.213-1.335zm9.135-5.423c-.826 0-1.412.588-1.412 1.341 0 .77.586 1.342 1.412 1.342s1.396-.573 1.396-1.341c0-.754-.57-1.341-1.396-1.341zm1.426 4.19h-4.55v1.627h2.178v4.747h-2.253v1.627H24V14.85h-2.042zM3.933 13.933l1.02 1.02-2.477 2.476-.62-.62v-.8l2.077-2.076Zm-2.695-.219v2.477L0 14.952l1.238-1.238Zm2.257-.219-1.638 1.639v-2.039l.619-.619 1.019 1.02z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gitignoredotio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gitignoredotio (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gitignoredotio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gitignoredotio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gitignoredotio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gitignoredotio 3s ease-in-out infinite alternate;
}
</style>