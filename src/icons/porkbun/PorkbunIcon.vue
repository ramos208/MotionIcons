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
      <path d="M12 0C5.3708 0 .0176 5.3532.0176 11.9824.0176 18.6117 5.3708 24 12 24s11.9824-5.3532 11.9824-11.9824C23.9824 5.3883 18.6292 0 12 0ZM5.832 5.8848c1.0635.2481 2.092.6384 3.0137 1.1347-1.099.5318-1.9866 1.3824-2.6602 2.375-.4254-.5672-.6738-1.2767-.6738-2.0566 0-.5318.1076-.9923.3203-1.4531zm12.336 0c.2127.4254.3203.9213.3203 1.453 0 .78-.2484 1.4895-.6738 2.0567-.6736-.9926-1.5967-1.8432-2.6602-2.375a9.9821 9.9821 0 0 1 3.0137-1.1347zm-6.0723.8105c3.5286.0471 6.3547 2.9198 6.3203 6.457v3.8282c0 .638-.5318 1.1699-1.17 1.1699-.638 0-1.1698-.5318-1.1698-1.17v-.957H7.8516v.957c0 .6382-.5319 1.17-1.17 1.17-.638 0-1.1699-.5318-1.1699-1.17v-3.6503c0-3.5096 2.7307-6.489 6.2403-6.6309.1152-.0044.2299-.0054.3437-.0039zm1.5 3.7988c-.4963 0-.9219.4256-.9219.922 0 .248.0711.4242.213.6015.1417.2127.3536.3546.5663.461-.1418.0708-.3188.1425-.496.1425-.2128 0-.3907.176-.3907.3887s.178.3906.3906.3906h.1778c.6026 0 1.1346-.3553 1.3828-.8516.39-.1418.7092-.3896.9219-.7441.0709-.1064.0337-.2484-.0372-.2129-.1063-.0355-.2123-.034-.2832.0723-.1063.1418-.2485.2826-.4257.3535v-.1426c0-.39-.1409-.7086-.3536-.9922-.1772-.2481-.425-.3887-.7441-.3887zm0 .5313c.2127 0 .3532.1408.3887.3535v.1777c0 .1773-.0346.3543-.1055.4961-.2481-.0709-.4617-.213-.6035-.4257-.0355-.071-.0703-.14-.0703-.211 0-.2392.2063-.3906.3906-.3906z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: porkbun
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for porkbun (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-porkbun {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-porkbun {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-porkbun 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-porkbun 3s ease-in-out infinite alternate;
}
</style>