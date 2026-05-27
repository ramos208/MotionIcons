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
      <path d="M20.2348 7.86957C21.5163 9.42897 21.9615 10.9117 21.9994 11.6957C21.3294 11.3893 20.5771 11.2174 19.7821 11.2174C17.3369 11.2174 15.1419 12.8433 14.6177 15.0092C14.4924 15.527 14.4298 15.7859 14.2937 15.8929C14.1577 16 13.9382 16 13.4994 16H10.6206C10.1784 16 9.95733 16 9.82074 15.8915C9.68414 15.7829 9.62431 15.5249 9.50465 15.0088C9.00893 12.8708 6.99671 11.0124 4.90197 11.1698C4.69089 11.1857 4.58535 11.1936 4.51294 11.1775C4.44054 11.1613 4.36764 11.1202 4.22185 11.0378C3.80097 10.8001 3.37061 10.5744 2.95793 10.3227C2.38299 9.97198 2.02315 9.35549 2.00053 8.68241C1.98766 8.29933 2.20797 7.91865 2.65301 8.02338L9.07369 9.53435C9.55601 9.64785 9.79717 9.70461 10.0044 9.66597C10.2116 9.62734 10.4656 9.4536 10.9737 9.10614C12.262 8.22518 14.3037 7.39305 16.339 8.12822C16.8961 8.32947 17.1747 8.4301 17.3334 8.43513C17.4921 8.44016 17.7247 8.37247 18.1899 8.23707C18.9431 8.01785 19.6521 7.90409 20.2348 7.86957ZM20.2348 7.86957C19.4316 6.89211 18.2997 5.88452 16.7336 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: motorbike02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for motorbike02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-motorbike02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-motorbike02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-motorbike02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-motorbike02 3s ease-in-out infinite alternate;
}
</style>