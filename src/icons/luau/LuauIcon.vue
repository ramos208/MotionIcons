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
      <path d="M24 5.072 18.928 24 0 18.928 5.072 0 24 5.072ZM8.984 18.402l-.085.375.61.163 1.005-3.75-.641-.172-.731 2.728c-.26.322-.635.417-1.125.286-.462-.124-.616-.47-.464-1.039l.649-2.422-.641-.172-.654 2.44c-.12.455-.107.828.039 1.117.148.287.422.485.822.592.483.13.888.081 1.216-.146Zm3.818 1.42.672.18.015-.055c-.034-.227-.004-.512.088-.857l.462-1.725c.093-.382.045-.713-.142-.994-.187-.282-.496-.481-.928-.597a1.897 1.897 0 0 0-.793-.05 1.42 1.42 0 0 0-.652.272.912.912 0 0 0-.343.488l.645.172c.044-.164.159-.283.344-.357a.969.969 0 0 1 .622-.02c.261.07.44.19.54.36.098.168.117.364.057.588l-.079.295-.624-.167c-.538-.145-.985-.148-1.342-.01-.353.135-.582.398-.687.789-.086.32-.04.618.14.891.183.272.458.458.828.557.414.11.811.05 1.192-.179-.028.196-.033.336-.015.42Zm-.934-.774a.8.8 0 0 1-.47-.307.606.606 0 0 1-.075-.526c.123-.46.577-.584 1.363-.374l.502.135-.206.77a.978.978 0 0 1-.5.3 1.166 1.166 0 0 1-.614.002ZM21 6.804l-3.786-1.015L16.2 9.575l3.786 1.014L21 6.804ZM3.818 16.832l1.207-4.502-.67-.18-1.352 5.047 3.06.82.146-.544-2.39-.64Zm12.944 3.654-.086.375.61.163 1.005-3.75-.641-.172-.731 2.728c-.26.322-.634.417-1.124.286-.462-.124-.617-.47-.465-1.039l.65-2.422-.642-.172-.654 2.44c-.12.456-.106.828.04 1.117.147.288.421.485.821.592.483.13.889.081 1.217-.146Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: luau
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for luau (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-luau {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-luau {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-luau 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-luau 3s ease-in-out infinite alternate;
}
</style>