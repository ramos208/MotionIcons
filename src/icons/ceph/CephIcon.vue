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
      <path d="M11.959.257A11.912 11.912 0 003.503 3.76 11.92 11.92 0 000 12.217a11.934 11.934 0 001.207 5.243c.72 1.474 1.888 2.944 3.208 4.044.86-.47 1.35-.99 1.453-1.545.1-.533-.134-1.107-.737-1.805a9.031 9.031 0 01-2.219-5.937c0-4.988 4.058-9.047 9.047-9.047h.08c4.99 0 9.048 4.059 9.048 9.047a9.03 9.03 0 01-2.218 5.936c-.599.693-.84 1.292-.735 1.83.108.556.595 1.068 1.449 1.522 1.322-1.1 2.489-2.57 3.209-4.046A11.898 11.898 0 0024 12.217a11.929 11.929 0 00-3.503-8.457A11.923 11.923 0 0012.04.257h-.041zm-.005 4.837a7.072 7.072 0 00-3.76 1.075A7.202 7.202 0 006.15 8.093a7.164 7.164 0 00-1.161 2.65 7.188 7.188 0 00.04 3.125 7.14 7.14 0 001.22 2.607c.154.207.326.396.509.597l.185.202.005.006c.007.007.017.016.026.027.635.738.957 1.533.957 2.36a3.4 3.4 0 01-1.788 2.989 11.924 11.924 0 002.685 1.087c.14-.088.614-.441 1.077-1.083a4.899 4.899 0 00.94-2.99 6.595 6.595 0 00-.49-2.37 6.717 6.717 0 00-1.302-2.033l-.002-.004-.124-.142c-.21-.245-.428-.497-.602-.792a4.104 4.104 0 01-.462-1.135 4.258 4.258 0 01-.024-1.85 4.25 4.25 0 01.686-1.564 4.216 4.216 0 013.432-1.773H12.042a4.202 4.202 0 013.432 1.773c.33.466.568 1.007.686 1.565a4.27 4.27 0 01-.023 1.849c-.093.39-.249.772-.463 1.135-.173.295-.391.547-.602.792l-.123.142-.004.004a6.736 6.736 0 00-1.301 2.033 6.607 6.607 0 00-.49 2.37 4.897 4.897 0 00.94 2.99c.463.642.937.995 1.076 1.083a11.776 11.776 0 002.687-1.087 3.399 3.399 0 01-1.789-2.988c0-.817.313-1.59.956-2.359.009-.012.02-.022.027-.03l.006-.004.184-.204c.183-.2.355-.39.51-.596a7.14 7.14 0 001.22-2.608 7.21 7.21 0 00.04-3.124 7.185 7.185 0 00-1.16-2.65 7.203 7.203 0 00-2.044-1.924 7.074 7.074 0 00-3.762-1.075h-.09zM12 9.97a2.365 2.365 0 00-2.362 2.361A2.364 2.364 0 0012 14.691c1.301 0 2.36-1.059 2.36-2.36A2.364 2.364 0 0012 9.968z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ceph
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ceph (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ceph {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ceph {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ceph 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ceph 3s ease-in-out infinite alternate;
}
</style>