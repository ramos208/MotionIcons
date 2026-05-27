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
      <path d="m23.917 21.886.062-.124v-.042c0-.041.021-.083.021-.103v-.042c0-.041 0-.103-.02-.145l-.063-.124v-.021L12.54 2.135A.618.618 0 0 0 12 1.824c-.228 0-.415.124-.539.31L.083 21.265v.021l-.062.124C0 21.451 0 21.513 0 21.554v.042c0 .041 0 .083.02.103v.042c.021.041.021.083.063.124l.02.021c.021.041.042.083.084.104l.062.062c.02.02.041.041.062.041.02.021.062.021.083.042.02 0 .041.02.062.02.062.021.104.021.166.021h22.736c.062 0 .103 0 .165-.02.021 0 .042-.021.063-.021.041-.021.062-.021.103-.042.02-.02.042-.02.062-.041l.062-.062a.364.364 0 0 0 .083-.104h.021ZM12 11.316l3.627 5.845H8.373L12 11.316Zm-.622-1.347-4.56 7.357-4.455 2.55 9.015-15.15v5.243ZM7.42 18.425h9.14l4.456 2.55H2.964l4.456-2.55Zm9.761-1.099-4.56-7.357V4.725l9.016 15.15-4.456-2.549Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: basicattentiontoken
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for basicattentiontoken (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-basicattentiontoken {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-basicattentiontoken {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-basicattentiontoken 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-basicattentiontoken 3s ease-in-out infinite alternate;
}
</style>