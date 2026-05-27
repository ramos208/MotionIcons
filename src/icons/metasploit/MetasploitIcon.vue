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
      <path d="M11.353 0h1.368q4.19.218 8.144 1.616.217.077.216.309-.015 4.033-.002 12.102 0 .81-.093 1.173c-.217.845-.76 1.635-1.326 2.325q-.318.388-1.024 1.046-2.955 2.75-6.01 5.094-.183.14-.516.335h-.17q-.627-.42-.945-.673-3.992-3.184-5.442-4.459-1.348-1.185-2.169-2.611c-.369-.64-.466-1.287-.465-2.099q.01-6.048.002-12.218c0-.183.09-.264.261-.325Q7.145.227 11.352 0ZM7.474 7.864q0-.094.069-.031l2.797 2.516a.374.372 21.2 0 1 .122.276l-.006 4.333a.182.182 0 0 0 .183.184l2.524-.018a.11.11 89.8 0 0 .108-.11q-.007-2.201.01-4.461.002-.173.146-.29 1.397-1.145 2.946-2.393.068-.055.068.032v10.881q0 .092.063.024.794-.865 1.628-1.838.71-.83.984-1.87.26-.989.262-1.997.007-4.754.009-9.768a.136.136 0 0 0-.137-.136q-1.15.004-2.424 0c-.287-.002-.441-.022-.619.149Q14.16 5.317 11.982 7.4a.046.046 0 0 1-.062 0Q9.782 5.437 7.769 3.525c-.234-.222-.515-.381-.843-.373q-1.09.026-2.33.005-.184-.004-.184.18-.003 4.54.005 9.032.002.536.036 1.027c.076 1.093.2 2.126.803 3.021.574.852 1.329 1.656 2.126 2.405q.023.022.054.026.04.006.04-.034z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: metasploit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for metasploit (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-metasploit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-metasploit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-metasploit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-metasploit 3s ease-in-out infinite alternate;
}
</style>