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
      <path d="M7.5 8.5H16.5M7.5 12.5H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 10.5C22 9.72921 21.9865 8.97679 21.9609 8.2503C21.8772 5.87683 21.8353 4.69009 20.8699 3.71745C19.9046 2.74481 18.6843 2.6926 16.2438 2.58819C14.9048 2.5309 13.4791 2.5 12 2.5C10.5209 2.5 9.09517 2.5309 7.7562 2.58819C5.3157 2.6926 4.09545 2.74481 3.13007 3.71745C2.16469 4.69009 2.12282 5.87683 2.03909 8.2503C2.01346 8.97679 2 9.72921 2 10.5C2 11.2708 2.01346 12.0232 2.03909 12.7497C2.12282 15.1232 2.16469 16.3099 3.13007 17.2826C4.09545 18.2552 5.31573 18.3074 7.7563 18.4118C8.4902 18.4432 9.25016 18.4667 10.0307 18.4815C10.7718 18.4955 11.1424 18.5026 11.468 18.6266C11.7936 18.7506 12.0675 18.9855 12.6155 19.4553L14.795 21.3242C14.9273 21.4376 15.0958 21.5 15.2701 21.5C15.6732 21.5 16 21.1732 16 20.7701V18.4219C16.0816 18.4186 16.1629 18.4153 16.2438 18.4118C18.6843 18.3074 19.9046 18.2552 20.8699 17.2825C21.8353 16.3099 21.8772 15.1232 21.9609 12.7497C21.9865 12.0232 22 11.2708 22 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chat-feedback01
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for chat-feedback01 (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chat-feedback01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chat-feedback01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chat-feedback01 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-chat-feedback01 2.5s ease-in-out infinite alternate;
}
</style>