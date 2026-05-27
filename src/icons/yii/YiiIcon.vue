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
      <path d="M17.8797 0c-.8433.5448-1.8054 1.509-2.3626 2.3403-1.1685 1.7424-1.4392 2.9943-.8005 4.8628.2165.6336.5761 1.2934.8362 1.873 1.0218 2.2778 2.0625 4.3279 1.8107 7.285 2.1603-2.7611 3.0147-3.8864 3.9253-6.57C22.54 6.1032 21.282 2.1322 17.8798 0M5.6417 4.6556c-1.1433.01-2.2877.2206-3.3819.6593-.2107 2.6576 1.0216 7.2303 5.5165 8.5057 1.8172.559 3.2721.4139 5.0555.8988v.0002c-.5755 1.016-1.4105 1.988-1.9082 2.9732-.4934.9764-.585 1.9434-.5391 3.0428.0462 1.1054.3017 2.1896.547 3.2644.9242-.1994 1.7287-.5405 2.4247-.9767 1.8315-1.1483 2.9383-2.9849 3.2528-4.9635 0 0 .0085-.0674.0153-.1245 0 .0057.0005.0114.0003.0171l.0054-.0617c.0003-.0049.0007-.004.001-.009.0055-.0583.0089-.1053.0137-.1605.0108-.123.0218-.2471.03-.3564.0023-.0285.0035-.0521.0055-.0797.0085-.1166.0171-.2335.023-.3358l.0014-.0338.0003-.003c.0006-.0115.0006-.0204.0013-.0318a15 15 0 0 0 .0147-.34c.003-.1062.005-.2063.0052-.2979l-.0002-.0115v-.0058a9 9 0 0 0-.0139-.5081c-.0088-.158-.0207-.3053-.0325-.4612-.081-1.0689-.2939-1.9498-.5285-2.6617a12 12 0 0 0-.1782-.5023v-.0002c-.179-.4714-.3545-.8502-.4805-1.1447a7.4 7.4 0 0 0-.2747-.5688 10 10 0 0 0-.1423-.2573c-.233-.407-.4347-.6938-.435-.6931l-.1231-.1832c-2.0257-2.8436-5.4458-4.6194-8.8755-4.5893"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: yii
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for yii (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-yii {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-yii {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-yii 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-yii 3s ease-in-out infinite alternate;
}
</style>