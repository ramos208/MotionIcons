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
      <path d="M20.9999 13.9824H16.0742C15.2321 13.9824 14.5705 14.686 14.1994 15.4296C13.7962 16.2375 12.9888 16.9824 11.4999 16.9824C10.011 16.9824 9.20365 16.2375 8.80046 15.4296C8.42934 14.686 7.76769 13.9824 6.92558 13.9824H1.99992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.6601 5.97537C16.6601 5.97537 17.0371 6.09064 17.5607 6.85858C17.5607 6.85858 18.3287 5.20059 19.3933 4.62463" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.0166 12.4916C21.0166 16.9739 21.0166 19.215 19.6242 20.6076C18.2317 22 15.9905 22 11.5083 22C7.026 22 4.78486 22 3.39239 20.6076C1.99992 19.215 1.99992 16.9739 1.99992 12.4916C1.99992 8.00935 1.99992 5.76821 3.39239 4.37574C4.78486 2.98328 7.026 2.98328 11.5083 2.98328" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22.0001 5.98324C22.0001 8.18312 20.2167 9.96647 18.0169 9.96647C15.817 9.96647 14.0336 8.18312 14.0336 5.98324C14.0336 3.78336 15.817 2 18.0169 2C20.2167 2 22.0001 3.78336 22.0001 5.98324Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: inbox-check
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for inbox-check (hugeicons). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-inbox-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-inbox-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-inbox-check 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-inbox-check 2.5s ease-in-out infinite alternate;
}
</style>