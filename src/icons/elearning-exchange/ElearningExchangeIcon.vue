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
      <path d="M2.45898 9C3.7364 4.94289 7.53608 2 12.0248 2C17.223 2 21.4971 5.94668 22 11L20 10.5929" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.541 15C20.2636 19.0571 16.4639 22 11.9752 22C6.77707 22 2.50297 18.0533 2 13L4.00005 13.4071" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.00198 13.5279V15.5197C9.00198 15.8464 9.15779 16.1573 9.43401 16.3301C10.2776 16.8578 10.9193 17.0125 12.0054 17.046C13.0061 17.0729 13.6336 16.9156 14.5679 16.3316C14.8481 16.1564 15.0089 15.8427 15.0089 15.5113V13.5279M17.0112 11.0149V14.0304M7.04924 10.8436C7.41086 10.0796 9.65363 8.74957 11.7009 8.09253C11.8984 8.02914 12.1106 8.03542 12.3053 8.10674C14.1154 8.76943 16.1288 9.77168 16.8597 10.5853C17.2414 11.01 16.8682 11.552 16.4068 11.8874C15.4704 12.5682 14.4364 13.0978 12.3491 13.8996C12.1282 13.9844 11.8828 13.9873 11.6608 13.9049C9.52012 13.1101 7.51902 12.0842 7.06587 11.1817C7.01245 11.0752 6.9983 10.9512 7.04924 10.8436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: elearning-exchange
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for elearning-exchange (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-elearning-exchange {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-elearning-exchange {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-elearning-exchange 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-elearning-exchange 3s ease-in-out infinite alternate;
}
</style>