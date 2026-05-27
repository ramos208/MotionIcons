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
      <path d="M2 17C2 19.2091 3.79086 21 6 21C7.48057 21 8.77325 20.1956 9.46487 19H13.3739C13.6095 19 13.7273 19 13.84 19.0265C13.8812 19.0361 13.9217 19.0484 13.9613 19.0632C14.0698 19.1037 14.1678 19.169 14.3638 19.2997L14.4045 19.3268C14.8093 19.5967 15.0118 19.7317 15.2332 19.7646C15.3491 19.7819 15.4671 19.7786 15.5819 19.7549C15.8012 19.7098 15.9958 19.5638 16.3851 19.2719L16.4867 19.1956C16.7997 18.9609 16.9562 18.8435 17.1261 18.7924C17.314 18.7359 17.5144 18.7359 17.7024 18.7924C17.8723 18.8435 18.0287 18.9609 18.3417 19.1956C18.6995 19.4639 18.8784 19.5981 19.0695 19.6476C19.2808 19.7024 19.5042 19.6865 19.7056 19.6024C19.8878 19.5264 20.046 19.3682 20.3622 19.052L21 18.4142C21.6667 17.7475 22 17.4142 22 17C22 16.5858 21.6667 16.2525 21 15.5858C20.711 15.2968 20.5665 15.1522 20.3827 15.0761C20.1989 15 19.9945 15 19.5858 15H9.46487C8.77325 13.8044 7.48057 13 6 13C3.79086 13 2 14.7909 2 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 11V9C20 6.17157 20 4.75736 19.1213 3.87868C18.2426 3 16.8284 3 14 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.125 17H6M6.25 17C6.25 17.1381 6.13807 17.25 6 17.25C5.86193 17.25 5.75 17.1381 5.75 17C5.75 16.8619 5.86193 16.75 6 16.75C6.13807 16.75 6.25 16.8619 6.25 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: authorized
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for authorized (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-authorized {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-authorized {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-authorized 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-authorized 3s ease-in-out infinite alternate;
}
</style>