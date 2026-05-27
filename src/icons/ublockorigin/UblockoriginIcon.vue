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
      <path d="M12 0C7.502 3 6.002 3 1.5 3c0 15.002 0 15.002 10.5 21 10.5-5.998 10.5-5.998 10.5-21-4.498 0-5.998 0-10.5-3zM5.956 7.472h1.512v4.536c0 1.322.19 1.508 1.512 1.508 1.323 0 1.512-.19 1.512-1.512V7.472H12v.767a3.75 3.75 0 012.268-.767 3.79 3.79 0 013.776 3.78 3.79 3.79 0 01-3.78 3.775 3.765 3.764 0 01-2.684-1.133c-.464.77-1.315 1.133-2.6 1.133-2.079 0-3.024-.944-3.024-3.023zm8.308 1.512A2.254 2.254 0 0012 11.252a2.254 2.254 0 002.268 2.264 2.254 2.254 0 002.264-2.268 2.254 2.254 0 00-2.268-2.264z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ublockorigin
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ublockorigin (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ublockorigin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ublockorigin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ublockorigin 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ublockorigin 3s ease-in-out infinite alternate;
}
</style>