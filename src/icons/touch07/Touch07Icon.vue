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
      <path d="M11.2273 7.78947V3.57895C11.2273 2.70692 10.5353 2 9.68182 2C8.82829 2 8.13636 2.70692 8.13636 3.57895V14.0655L6.46696 12.3546C5.73449 11.6039 4.52795 11.6724 3.88085 12.5014C3.38571 13.1357 3.37204 14.033 3.8476 14.6829L6.94263 18.9123C7.64502 19.8721 7.99622 20.352 8.41886 20.725C9.06365 21.2941 9.83631 21.6901 10.6674 21.8773C11.2121 22 11.7975 22 12.9681 22C15.2003 22 16.3164 22 17.205 21.6504C18.5637 21.1159 19.6373 20.0155 20.1589 18.623C20.5 17.7123 20.5 16.5684 20.5 14.2807V11.6782C20.5 10.649 19.7718 9.77073 18.7782 9.60154L18.4254 9.54147C17.8934 9.45089 17.4091 9.87003 17.4091 10.4211M11.2273 7.78947L11.8225 7.48542C12.1086 7.33925 12.4286 7.24491 12.7397 7.3211C13.6452 7.54286 14.3182 8.37534 14.3182 9.36842M11.2273 7.78947V10.4211M14.3182 9.36842V10.4211M14.3182 9.36842C14.3182 8.78707 14.7795 8.31579 15.3485 8.31579C16.4865 8.31579 17.4091 9.25835 17.4091 10.4211M17.4091 10.4211V11.4737" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touch07
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touch07 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touch07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touch07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touch07 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touch07 3s ease-in-out infinite alternate;
}
</style>