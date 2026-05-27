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
      <path d="M16.7555 6.61105C16.9688 8.25332 15.6516 9.77729 15.6516 9.77729C15.6516 9.77729 13.9886 8.6386 13.7753 6.99633C13.5621 5.35405 14.8793 3.83008 14.8793 3.83008C14.8793 3.83008 16.5423 4.96877 16.7555 6.61105Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.3173 12.1301C17.6213 13.6334 15.693 14.2234 15.693 14.2234C15.693 14.2234 14.8932 12.3759 15.5893 10.8726C16.2853 9.36923 18.2136 8.7793 18.2136 8.7793C18.2136 8.7793 19.0134 10.6267 18.3173 12.1301Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.1914 18.0136C14.1914 18.0136 16.1692 18.4083 17.4973 17.4151C18.8254 16.422 19.0009 14.4172 19.0009 14.4172C19.0009 14.4172 17.0232 14.0226 15.6951 15.0157C14.3669 16.0089 14.1914 18.0136 14.1914 18.0136ZM14.1914 18.0136H10.9932C9.89237 18.0136 9 18.906 9 20.0068C9 21.1076 9.89237 22 10.9932 22H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.22 2.96764C13.4305 4.10058 13.3838 6.11247 13.3838 6.11247C13.3838 6.11247 11.3746 6.28752 10.1641 5.15458C8.95358 4.02165 9.00024 2.00975 9.00024 2.00975C9.00024 2.00975 11.0095 1.83471 12.22 2.96764Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laurel-wreath-right02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for laurel-wreath-right02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-laurel-wreath-right02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laurel-wreath-right02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laurel-wreath-right02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-laurel-wreath-right02 3s ease-in-out infinite alternate;
}
</style>