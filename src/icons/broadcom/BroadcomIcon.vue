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
      <path d="M12 0c6.628 0 12 5.372 12 12a12 12 0 0 1-.56 3.63 13.641 13.641 0 0 0-.867-.388c-1.372-.546-2.629-.363-3.888.4 0 0-.459.28-.597.366-.586.37-1.14.717-1.672.717-.508 0-1.007-.135-1.218-1.117-.33-1.533-1.135-5.298-1.486-7.162-.206-1.097-.319-1.688-.436-2.088-.208-.706-.586-1.09-1.124-1.15 0 0-.084-.013-.152-.013-.068 0-.162.014-.162.014-.531.064-.907.447-1.114 1.15-.117.4-.23.99-.436 2.087-.351 1.864-1.156 5.63-1.486 7.162-.21.982-.71 1.117-1.218 1.117-.531 0-1.086-.348-1.672-.717-.138-.086-.597-.366-.597-.366-1.259-.763-2.516-.946-3.888-.4-.301.12-.586.251-.867.387A11.995 11.995 0 0 1 0 12C0 5.372 5.372 0 12 0m8.375 16.976c-.453.152-.855.42-1.256.672-.756.475-1.613 1.014-2.704 1.014-1.614 0-2.749-.964-3.112-2.647C13.023 14.712 12 9.793 12 9.793a496.28 496.28 0 0 1-1.303 6.222c-.362 1.683-1.497 2.647-3.112 2.647-1.09 0-1.946-.539-2.703-1.014-.401-.252-.804-.52-1.256-.672a2.319 2.319 0 0 0-1.414-.01c-.33.097-.644.234-.951.386C3.227 21.292 7.207 24 11.91 24s8.863-2.708 10.83-6.648a5.958 5.958 0 0 0-.95-.386 2.322 2.322 0 0 0-1.415.01"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: broadcom
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for broadcom (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-broadcom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-broadcom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-broadcom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-broadcom 3s ease-in-out infinite alternate;
}
</style>