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
      <path d="M6.277 1.538a.018.018 0 0 0-.012.007l-4.74 8.21-1.398 2.418c.446.774.794 1.353 1.22 2.09.671 1.164 1.548 1.597 3.13 1.889a12.9 12.9 0 0 1 .697-1.392l2.783-4.824 2.786-4.826c.404-.702 1.296-2.143 2.57-2.965-.04.025-.07.059-.109.085.07-.047.137-.094.209-.136.46-.278.98-.467 1.413-.515.339-.038 1.465-.041 2.74-.041zm11.59.505c-1.048-.008-1.462.007-2.545.008-1.39 0-2.381.887-3.083 1.773.372.493.68.971.863 1.288a13357.605 13357.605 0 0 0 5.571 9.648c.404.7 1.209 2.196 1.284 3.71.029.574-.079 1.165-.265 1.592-.131.3-.652 1.207-1.256 2.253L24 12.678v-.008a.013.013 0 0 0-.002-.005zM.001 8.163l.095 4.946L0 8.163zm.093 4.946 1.132 1.964 4.264 7.384a.015.015 0 0 0 .012.005h12.265c.446-.779.664-1.147 1.311-2.282.709-1.242.278-2.681-.037-3.472-.618.076-1.18.093-1.547.093H6.35c-.809 0-2.505-.05-3.853-.741-.513-.263-.972-.65-1.248-1.027-.176-.238-.625-1.003-1.156-1.924z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: commerzbank
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for commerzbank (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-commerzbank {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-commerzbank {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-commerzbank 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-commerzbank 3s ease-in-out infinite alternate;
}
</style>