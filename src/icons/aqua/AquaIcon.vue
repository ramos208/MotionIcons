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
      <path d="M17.7875 18.6811c.7687 0 .7695.7105.7695.7517.0003.2888-.1047.4303-.2229.5535l-3.6066 3.6127c-.2547.2557-.5963.4006-.9567.401H.879c-.1444.0002-.2889-.0409-.4238-.1226-.2628-.1525-.46-.4826-.4551-.8042v-4.3921h17.7874zM23.0632.0001c.3202-.0053.6491.1893.8014.4518.0814.1348.1354.279.1354.4234V13.757c0 .3601-.1402.7054-.3946.9602l-3.5466 3.5524c-.137.1371-.274.2744-.6027.2744-.0411 0-.8225 0-.8225-.7681V.0001h4.4296zM4.5539 5.482s.824 0 .824.7699v12.0934H.0001v-8.0648c0-.361.1397-.7072.3945-.9625L3.95 5.757c.1372-.1376.2744-.275.6039-.275zM18.2983.0002v5.377H6.255c-.7669 0-.7669-.8233-.7669-.8233 0-.3292.137-.4663.2739-.6035L9.3087.398a1.3545 1.3545 0 01.9585-.3977h8.0311z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aqua
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aqua (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aqua {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aqua {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aqua 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aqua 3s ease-in-out infinite alternate;
}
</style>