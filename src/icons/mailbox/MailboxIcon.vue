<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      class="icon-geometry anim-subtle-drift"
    >
      <path d="m14.196 20.014-7.711-5.836c-.48-.31-.733-.268-1.121.155a71.39 71.39 0 0 0-.26.303c-.226.275-.353.451-.262.775.007.043 2.397 7.352 2.397 7.352.225.782.782 1.212 1.642 1.226h3.545c.543 0 .825-.112 1.142-.479l.966-1.283c.67-.951.592-1.459-.338-2.22m-10.22-5.8L9.81 6.494c.31-.48.268-.733-.155-1.12-.105-.092-.204-.177-.303-.261-.275-.226-.45-.353-.775-.261-.042.007-7.352 2.396-7.352 2.396C.444 7.475.014 8.032 0 8.892v3.545c0 .543.113.825.48 1.142l1.282.965c.952.67 1.46.593 2.22-.338m16.043-4.412-5.836 7.71c-.31.48-.268.734.155 1.122l.303.26c.275.226.45.353.775.261.042-.007 7.352-2.396 7.352-2.396.782-.226 1.212-.783 1.226-1.643v-3.545c0-.543-.113-.825-.48-1.142l-1.282-.965c-.952-.67-1.46-.593-2.22.338M9.79 3.986l7.711 5.836c.48.31.733.268 1.121-.155l.26-.303c.226-.275.353-.451.262-.775-.007-.043-2.397-7.352-2.397-7.352-.225-.782-.782-1.212-1.642-1.226h-3.546c-.542 0-.824.112-1.141.479l-.966 1.283c-.67.951-.592 1.459.338 2.22"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mailbox
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for mailbox (simpleicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-mailbox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mailbox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mailbox 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-mailbox 2.5s ease-in-out infinite alternate;
}
</style>