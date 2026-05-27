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
      <path d="M12 0c-.385 0-.77.102-1.11.307L2.762 5.193a2.147 2.147 0 0 0-1.043 1.84v9.93a2.15 2.15 0 0 0 1.043 1.843l8.126 4.886c.683.41 1.537.41 2.22 0l8.128-4.886a2.15 2.15 0 0 0 1.043-1.842v-9.93c0-.754-.396-1.452-1.043-1.84L13.11.306A2.152 2.152 0 0 0 12 0Zm-.094 3.462c.224-.001.449.056.65.17l6.192 3.548c.402.23.65.658.65 1.12v1.85c0 .468-.253.898-.66 1.127l-1.296.722 1.295.724c.408.228.661.659.661 1.126v1.849c0 .462-.248.89-.65 1.12l-6.192 3.549a1.29 1.29 0 0 1-1.297-.008l-6.022-3.55a1.29 1.29 0 0 1-.635-1.111V8.3c0-.457.242-.88.635-1.112l6.022-3.547c.2-.118.423-.177.647-.179zm.018 2.782L7.182 9.037v5.924l4.742 2.793 4.894-2.803v-.344l-1.413-.788c-.34-.19-.55-.55-.55-.94V11.12c0-.39.21-.75.55-.94l1.413-.787v-.345z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bakalari
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bakalari (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bakalari {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bakalari {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bakalari 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bakalari 3s ease-in-out infinite alternate;
}
</style>