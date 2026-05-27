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
      <path d="M8.569 16.102c-2.244 0-4.064-1.834-4.064-4.096s1.82-4.095 4.064-4.095c2.244 0 4.063 1.833 4.063 4.095 0 2.262-1.82 4.096-4.063 4.096zm11.019-5.671l-4.296 2.5.02-.118.012-.104.014-.173v-.013l.001-.012.009-.211.001-.232-.003-.168-.01-.24-.016-.22-.024-.239-.016-.13-.034-.233-.04-.228-.047-.223-.052-.219-.037-.135-.062-.211-.07-.207-.061-.168-.08-.2-.087-.195-.092-.19-.099-.189-.105-.185-.01-.015-.113-.183-.12-.18-.127-.176-.135-.175-.143-.172-.016-.02-.152-.17-.16-.168-.168-.167-.179-.166-.014-.013-.189-.165-.201-.166-.202-.158-.226-.167-.245-.172-.183-.124-.28-.181-.316-.197-.105-.063-.388-.23-.096-.057-.244-.142L1.705 0v3.175l4.296 2.5-.11.041-.096.042-.156.074-.012.006-.01.006-.186.098-.2.114-.142.087-.202.13-.181.124-.193.14-.106.08-.182.145-.175.149-.168.152-.162.155-.098.1-.15.16-.143.163-.114.14-.131.169-.125.172-.117.176-.112.18-.107.185-.01.017-.099.19-.094.194-.088.199-.082.204-.077.211-.009.025-.07.217-.065.223-.06.23-.053.24-.004.02-.047.246-.042.258-.034.256-.031.281-.026.299-.014.223-.016.334-.01.374-.003.125-.004.452V24l2.727-1.588v-5l.092.077.083.063.143.099.01.006.007.005.178.114.2.118.144.08.214.112.195.096.219.1.114.048.218.087.217.08.217.071.215.064.132.035.214.051.214.044.173.03.213.03.212.022.206.015.213.008h.227l.215-.008.216-.015.216-.022.22-.031.221-.039.02-.004.224-.047.226-.055.23-.065.233-.074.013-.004.238-.083.245-.093.233-.096.259-.115.272-.128.194-.097.298-.154.33-.18.102-.057.394-.225.094-.054.244-.142 8.697-5.06-2.728-1.588Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: poly
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for poly (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-poly {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-poly {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-poly 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-poly 3s ease-in-out infinite alternate;
}
</style>