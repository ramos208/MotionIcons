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
      <path d="M12.07 10.679v-.672H9.32v3.97h2.751v-.656H9.975v-1h2.002v-.657H9.975v-.985zm2.049 3.299v-3.971h.656v3.314h1.908v.657zm3.111 0v-3.971h.657v3.314h1.907v.657zm-4.456-3.971h.657v3.97h-.657zM1.079 11.023c-.25.25-.407.594-.407.985 0 .39.157.735.407 1a1.418 1.418 0 0 0 1.986 0c.25-.265.406-.61.406-1 0-.391-.156-.735-.407-.985a1.418 1.418 0 0 0-1.985 0M0 12.008c0-1.142.922-2.064 2.064-2.064 1.141 0 2.064.922 2.064 2.064a2.062 2.062 0 0 1-2.064 2.064A2.062 2.062 0 0 1 0 12.008Zm6.176-.344v-.985h1.329a.5.5 0 0 1 .5.485c0 .281-.234.5-.5.5zm1.657.61c.485-.141.829-.579.829-1.11 0-.642-.516-1.157-1.157-1.157H5.519v3.97h.657v-1.656h.922l.985 1.657h.782zM5.05 10.429a.477.477 0 0 1-.485.484.468.468 0 0 1-.484-.484c0-.266.203-.485.484-.485.266 0 .485.219.485.485zm17.684-.422h-.798l-1.016 1.47-1.016-1.47h-.813l1.485 2.157v1.814h.672v-1.814zm.781.813a.404.404 0 0 1-.406-.407c0-.219.172-.406.406-.406.22 0 .407.187.407.406a.414.414 0 0 1-.407.407m0-.892a.487.487 0 0 0-.484.485c0 .266.219.485.484.485a.487.487 0 0 0 .485-.485.487.487 0 0 0-.485-.485zm-.125.313h.203c.032 0 .063.031.063.063a.067.067 0 0 1-.063.062h-.203zm.344.063a.14.14 0 0 0-.14-.141h-.282v.5h.078v-.219h.14l.11.22h.094l-.11-.22a.15.15 0 0 0 .11-.14"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: oreilly
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for oreilly (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-oreilly {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-oreilly {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-oreilly 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-oreilly 3s ease-in-out infinite alternate;
}
</style>