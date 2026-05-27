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
      <path d="M12 0C5.391 0 0 5.391 0 12s5.391 12 12 12 12-5.391 12-12S18.609 0 12 0m0 2.088a9.93 9.93 0 0 1 7.477 3.39H16l.348-.607c.347-.783-.958-1.392-1.393-.61l-.607 1.218H4.52C6.435 3.392 9.131 2.088 12 2.088m8.434 4.695A10.07 10.07 0 0 1 21.912 12c0 4.087-2.522 7.653-6.174 9.13l-3.912-3.911q-.13-.131 0-.262l1.39-2.783c.088-.087.174-.174.26-.174h2.436c.087 0 .088.087.088.174l-.697 1.478s0 .174.088.174l.869.61c.087.087.175-.001.261-.088l.956-2.26c.087-.087.174-.174.261-.174h.87s.087 0 .087.174L18 15.652s-.001.174.086.174l.957.61c.087.087.173-.001.26-.088 0-.087 1.045-2.26 1.045-2.434.26-.609.172-1.652-1.045-1.652h-1.39a.19.19 0 0 1-.175-.174v-4.61q0-.26.262-.26zm-16.782.088s9.13.434 9.217.434.26 0 .26.174c.087.173.87 2.174.957 2.261s.087.348-.348.348H4.87a1.15 1.15 0 0 0-1.13 1.13v3.305c0 .261.086.522.173.696.261.26.696.433.783.433.087.087.174.001.174-.086v-4.261c0-.087.087-.174.174-.174H6s.173 0 .086.088c-.348.435-.434.87-.434 1.652 0 1.217.87 1.999 1.217 2.26 0 0 .087.087 0 .174S6 17.044 6 17.13q-.13.131 0 .262l4.348 4.26c-4.696-.87-8.174-4.87-8.174-9.653 0-1.913.522-3.65 1.478-5.129M9.912 14h.957s.173 0 .086.174-1.39 2.696-1.39 2.783v.174l4.52 4.435c-.52.174-1.042.173-1.564.26l-4.435-4.433c-.087-.087 0-.175 0-.262s1.48-2.87 1.566-2.957c0-.087.086-.174.26-.174"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rossmann
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rossmann (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rossmann {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rossmann {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rossmann 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rossmann 3s ease-in-out infinite alternate;
}
</style>