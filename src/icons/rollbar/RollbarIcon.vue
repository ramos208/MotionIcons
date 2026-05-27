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
      <path d="M24 2.5795c-.0019-.1956-.1152-.5064-.484-.584-.0578-.0162-.1178-.0113-.177-.0104-.3082.0276-4.3793.4162-8.9551 2.4569-2.7478 1.2221-4.8747 3.0984-6.213 5.376l-.3449.1494C2.9271 12.1542 0 16.4046 0 21.338v.0828c0 .3392.2786.5955.5967.5955h16.2625c.1045 0 .2506-.0351.3748-.1391l6.5533-5.5255a.5932.5932 0 0 0 .2116-.4598V2.5795Zm-6.5544 17.5582V8.382l5.3622-4.5195v11.7557ZM7.3684 16.4908h8.885v4.3333H2.227ZM14.868 5.532a30.7234 30.7234 0 0 1 6.5315-2.043L16.6063 7.53a30.4061 30.4061 0 0 0-6.489 1.528c1.1866-1.4487 2.787-2.6501 4.7506-3.5262ZM8.978 10.7722a30.7706 30.7706 0 0 1 7.2753-1.9947v6.5211h-8.494a10.5382 10.5382 0 0 1 1.2187-4.5264zm-1.636.7611a11.8074 11.8074 0 0 0-.7887 4.0826l-5.2886 4.4632c.4-3.6262 2.5535-6.6591 6.0773-8.5458z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rollbar
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rollbar (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rollbar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rollbar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rollbar 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rollbar 3s ease-in-out infinite alternate;
}
</style>