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
      <path d="M3.91145 12H18.0886C19.6914 12 20.2786 12.3707 19.8787 13.9821C19.1733 16.8246 17.1759 17.5306 15.3304 19.3859C14.8819 19.8369 15.5798 20.5032 15.5802 20.9992C15.5809 21.933 14.6928 22 13.9854 22H8.0146C7.30717 22 6.41908 21.933 6.41982 20.9992C6.4202 20.5137 7.0972 19.8159 6.66957 19.3859C4.82407 17.5306 2.82674 16.8246 2.12128 13.9821C1.72136 12.3707 2.30857 12 3.91145 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.5 12C18.5 10.2089 16.6001 8.98823 15 9.69218M3.5 12C3.5 10.7067 4.46855 9.64127 5.7151 9.49889C4.90104 7.65834 6.62631 5.59405 8.53891 6.01716M16.292 9.48272C17.0733 7.68217 15.4185 5.58415 13.4611 6.01716C12.9848 3.32761 9.01516 3.32761 8.53891 6.01716M8.53891 6.01716C9.13252 6.14848 9.64708 6.49221 10 6.96519" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 9L22 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 6L18 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rice-bowl01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rice-bowl01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rice-bowl01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rice-bowl01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rice-bowl01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rice-bowl01 3s ease-in-out infinite alternate;
}
</style>