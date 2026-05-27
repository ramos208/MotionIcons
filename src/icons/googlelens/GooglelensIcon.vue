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
      <path d="M12 17.333q-1.667 0-2.833-1.166Q8 15 8 13.333q0-1.666 1.167-2.833Q10.333 9.333 12 9.333q1.667 0 2.833 1.167Q16 11.667 16 13.333q0 1.667-1.167 2.834-1.166 1.166-2.833 1.166Zm8 5.334q-1.1 0-1.883-.784-.784-.783-.784-1.883t.784-1.883q.783-.784 1.883-.784t1.883.784q.784.783.784 1.883t-.784 1.883q-.783.784-1.883.784ZM5.333 24q-2.2 0-3.766-1.567Q0 20.867 0 18.667V16h2.667v2.667q0 1.1.783 1.883.783.783 1.883.783H12V24Zm16-10.667V8q0-1.1-.783-1.883-.783-.784-1.883-.784H5.333q-1.1 0-1.883.784Q2.667 6.9 2.667 8v4H0V8q0-2.2 1.567-3.767 1.566-1.566 3.766-1.566H8L9.333 0h5.334L16 2.667h2.667q2.2 0 3.766 1.566Q24 5.8 24 8v5.333z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googlelens
// Category: search
// Physics Presets: Dynamic kinetic adaptation for googlelens (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googlelens {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googlelens {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googlelens 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googlelens 3s ease-in-out infinite alternate;
}
</style>