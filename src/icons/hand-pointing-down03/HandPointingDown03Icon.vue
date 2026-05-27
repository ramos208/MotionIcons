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
      <path d="M11.5004 16.0002H12.5004C13.605 16.0002 14.5004 15.1048 14.5004 14.0002M14.5004 14.0002V13.0002M14.5004 14.0002C14.5004 14.5525 14.9481 15.0002 15.5004 15.0002C16.605 15.0002 17.5004 14.1048 17.5004 13.0002M17.5004 13.0002V12.0002M17.5004 13.0002C17.5004 13.5237 17.9705 13.9219 18.4868 13.8358L18.8292 13.7788C19.7936 13.618 20.5004 12.7837 20.5004 11.806L20.5 10.3334C20.5 8.16008 20.5 7.07338 20.1689 6.20824C19.9769 5.70638 19.4703 5.06636 19.0652 4.60386C18.7148 4.20383 18.5 3.69642 18.5 3.16465V2.00008M11.5002 14.0002V20.5002C11.5002 21.3287 10.8286 22.0002 10.0002 22.0002C9.17178 22.0002 8.50021 21.3287 8.50021 20.5002L8.5 10.5378L6.8797 12.1632C6.16877 12.8764 4.99772 12.8113 4.36965 12.0237C3.88907 11.4211 3.8758 10.5687 4.33738 9.95133L7.93707 5.35312C8.62579 4.47336 9 3.11736 9 2.00008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-pointing-down03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-pointing-down03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-pointing-down03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-pointing-down03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-pointing-down03 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-pointing-down03 3s ease-in-out infinite alternate;
}
</style>