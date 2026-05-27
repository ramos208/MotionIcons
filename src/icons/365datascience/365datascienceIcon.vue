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
      <path d="M1.4995 13.6448v-.8577h.8188c.5752 0 1.183-.152 1.1905-.6681 0-.3178-.2587-.7385-1.1666-.7385-.5024 0-1.183.1746-1.183.6832h-1.07c0-1.1993 1.2156-1.6326 2.2605-1.6326 1.07 0 2.2204.5086 2.2291 1.6916a1.1716 1.1716 0 0 1-.7861 1.0876c.5425.1746.9243.6995.9243 1.168 0 1.3588-1.3049 1.7581-2.3987 1.7581-1.0938 0-2.3108-.4345-2.3183-1.6979h1.0775c0 .5727.7862.7711 1.2483.7711.5426 0 1.2647-.2223 1.2647-.8188 0-.3328-.1871-.746-1.2081-.746zm5.0083-1.4304v.8339c.2512-.3768.8666-.5878 1.3124-.5878 1.1428 0 2.3422.4685 2.3422 1.8512 0 1.232-1.207 1.8436-2.3497 1.8436-1.1429 0-2.3673-.6116-2.3673-1.8587V12.222c0-1.2395 1.168-1.8184 2.3346-1.8184 1.232 0 2.3259.476 2.3259 1.6439H9.0422c0-.4923-.628-.7385-1.2396-.7385-.6405-.0075-1.2885.3341-1.2885.9369zm2.5934 2.0973c0-.6116-.5677-.9369-1.281-.9369-.7133 0-1.3212.3177-1.3124.9369.0088.6191.6079.908 1.3049.908.6718 0 1.2885-.2964 1.2885-.908zm5.9967-2.8119h-3.063v.977h1.1013c1.2082 0 2.2857.4848 2.2781 1.7872 0 1.2633-1.0787 1.8674-2.2216 1.8674-1.247 0-2.317-.437-2.3258-1.7406h1.0637c0 .6129.7133.771 1.2483.771.535 0 1.1742-.2385 1.1742-.8978.0088-.628-.6279-.81-1.2156-.81h-2.1488v-2.94h4.1092zm7.9169-3.6897a.9494.9494 0 0 0-.4559 1.7808l-1.9252 4.7183a.9444.9444 0 0 0-.7988.0829l-2.047-2.3422a.9432.9432 0 0 0-.089-1.27.9431.9431 0 0 0-1.4105 1.2412.943.943 0 0 0 1.2483.2498l2.0458 2.3422a.9518.9518 0 0 0-.2072.5927.9491.9491 0 0 0 .2654.6936.9493.9493 0 0 0 1.5701-.3198.9491.9491 0 0 0 .062-.3738.9432.9432 0 0 0-.3427-.7296l1.949-4.7723a.8264.8264 0 0 0 .137.0101.9493.9493 0 0 0 .9083-.5775.9493.9493 0 0 0-.2148-1.0547.9495.9495 0 0 0-.6936-.2654Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: 365datascience
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for 365datascience (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-365datascience {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-365datascience {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-365datascience 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-365datascience 3s ease-in-out infinite alternate;
}
</style>