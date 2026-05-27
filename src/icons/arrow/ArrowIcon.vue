<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="[`motion-${motionProfile.hoverAnimation}`]"
    @mouseenter="onHover"
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
      class="icon-geometry arrow-momentum"
    >
      <line x1="5" y1="12" x2="19" y2="12" class="arrow-shaft" />
      <polyline points="12 5 19 12 12 19" class="arrow-head" />
    </svg>
    
    <!-- Kinetic Trails -->
    <div class="kinetic-trail" v-if="motionProfile.particles && isHovering"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MotionIntelligenceEngine } from '../../system/motion/MotionIntelligenceEngine';

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});

const motionProfile = MotionIntelligenceEngine.generateMotion({
  name: "arrow-right",
  category: "directional",
  geometry: "linear-directional",
  directionality: true,
  symmetry: false,
  motionPotential: ["momentum", "spring"]
});

const isHovering = ref(false);
const onHover = () => {
  isHovering.value = true;
  setTimeout(() => { isHovering.value = false; }, 600); // Reset trail after burst
};
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
}

.arrow-momentum {
  animation: subtle-drift 3s infinite alternate ease-in-out;
}

.motion-anticipation-spring:hover .icon-geometry {
  animation: momentum-burst 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes subtle-drift {
  0% { transform: translateX(0); }
  100% { transform: translateX(2px); }
}

@keyframes momentum-burst {
  0% { transform: translateX(0); }
  20% { transform: translateX(-4px); } /* Anticipation */
  50% { transform: translateX(8px); } /* Spring Release */
  70% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}

.kinetic-trail {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  opacity: 0;
  transform-origin: left center;
  animation: trail-flash 0.6s ease-out forwards;
}

@keyframes trail-flash {
  0% { transform: scaleX(0); opacity: 0.8; }
  50% { transform: scaleX(1); opacity: 0; }
  100% { transform: scaleX(0); opacity: 0; }
}
</style>
