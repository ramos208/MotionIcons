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
      <path d="M9.24601 6.61105C9.03276 8.25332 10.35 9.77729 10.35 9.77729C10.35 9.77729 12.013 8.6386 12.2262 6.99633C12.4395 5.35405 11.1223 3.83008 11.1223 3.83008C11.1223 3.83008 9.45927 4.96877 9.24601 6.61105Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.68301 12.1301C8.37906 13.6334 10.3074 14.2234 10.3074 14.2234C10.3074 14.2234 11.1071 12.3759 10.4111 10.8726C9.71504 9.36923 7.78674 8.7793 7.78674 8.7793C7.78674 8.7793 6.98696 10.6267 7.68301 12.1301Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.8095 18.0136C11.8095 18.0136 9.83175 18.4083 8.50364 17.4151C7.17554 16.422 7 14.4172 7 14.4172C7 14.4172 8.97775 14.0226 10.3059 15.0157C11.634 16.0089 11.8095 18.0136 11.8095 18.0136ZM11.8095 18.0136H15.0077C16.1085 18.0136 17.0009 18.906 17.0009 20.0068C17.0009 21.1076 16.1085 22 15.0077 22H13.0009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.7813 2.96764C12.5708 4.10058 12.6174 6.11247 12.6174 6.11247C12.6174 6.11247 14.6267 6.28752 15.8372 5.15458C17.0477 4.02165 17.001 2.00975 17.001 2.00975C17.001 2.00975 14.9918 1.83471 13.7813 2.96764Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laurel-wreath-left02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for laurel-wreath-left02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-laurel-wreath-left02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laurel-wreath-left02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laurel-wreath-left02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-laurel-wreath-left02 3s ease-in-out infinite alternate;
}
</style>