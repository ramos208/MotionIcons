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
      <path d="M20.892.036c-.066.078-4.134 1.356-5.313 1.679-1.089.3-4.201 1.49-4.646 1.778-.144.1-.255.267-.255.378s.278.622.611 1.134c.756 1.156.778 1.434.211 2.767-.556 1.29-.9 1.7-1.8 2.123-.412.19-.867.467-1.023.6-.156.134-.556.356-.89.478-.333.123-.622.3-.644.39-.033.144.022.144.4.022.6-.212.912-.112.912.289 0 .355-.445.666-1.623 1.156-2.823 1.144-3.646 1.511-4.024 1.822-.578.445-.655.856-.355 1.79.122.378.222.811.222.945 0 .233.589 1.923 1.5 4.323.367.956 1.123 2.279 1.312 2.29.056 0 .067-.256.022-.567-.066-.5-.166-3.245-.189-5.602-.022-1.2.223-1.767 1.112-2.634.844-.834 2.123-1.712 3.256-2.256.756-.356.834-.378 1.701-.312.934.067 2.479-.144 3.323-.444.3-.111.578-.122.89-.067.6.111 4.412.122 4.412.011 0-.044-.356-.144-.789-.21-1.167-.179-1.19-.334-.056-.423 1.845-.156.834-.39-1.69-.39-1.655 0-1.978-.088-2.567-.7-.578-.61-.855-2.211-.555-3.19.066-.21.155-1.111.21-2 .045-.89.123-1.7.168-1.812.1-.256 1.344-.978 2.512-1.456.51-.211 1.333-.556 1.822-.767.778-.333 1.845-.789 2.557-1.078.167-.078.122-.1-.234-.1-.244-.011-.478.011-.5.033"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: frigate
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for frigate (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-frigate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-frigate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-frigate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-frigate 3s ease-in-out infinite alternate;
}
</style>