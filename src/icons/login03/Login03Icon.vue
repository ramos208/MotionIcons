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
      <path d="M6 18C6 18.4644 6 18.6965 6.022 18.8918C6.20482 20.5145 7.48545 21.7952 9.10814 21.978C9.30345 22 9.53562 22 9.99998 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9498 20 18.2998 20 15L20 8.99998C20 5.70016 20 4.05024 18.9748 3.02512C17.9497 2 16.2998 2 13 2H9.99998C9.53563 2 9.30345 2 9.10814 2.02201C7.48545 2.20483 6.20482 3.48547 6.022 5.10816C6 5.30347 6 5.53565 6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.07612 11.1183C4 11.3021 4 11.535 4 12.001C4 12.4669 4 12.6999 4.07612 12.8837C4.17761 13.1287 4.37229 13.3234 4.61732 13.4249C4.80109 13.501 5.03406 13.501 5.5 13.501H10.5C10.5002 15.2503 10.511 16.1299 11.0623 16.3858C11.0829 16.3954 11.1037 16.4042 11.1249 16.4124C11.7045 16.6353 12.3999 16.0139 13.7907 14.7711C15.2576 13.4602 15.9912 12.7851 16 11.957C15.9912 11.1289 15.2576 10.4538 13.7907 9.14301C12.3999 7.90018 11.7045 7.27876 11.1249 7.50171C11.1037 7.50985 11.0829 7.51869 11.0623 7.52822C10.5018 7.78844 10.5 8.69318 10.5 10.501H5.5C5.03406 10.501 4.80109 10.501 4.61732 10.5771C4.37229 10.6786 4.17761 10.8733 4.07612 11.1183Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: login03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for login03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-login03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-login03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-login03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-login03 3s ease-in-out infinite alternate;
}
</style>