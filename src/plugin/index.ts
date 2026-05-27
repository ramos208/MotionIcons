import type { App, Plugin } from 'vue';
import MotionIconsProvider from '../components/MotionIconsProvider.vue';

// Import all icon libraries
import * as l from 'lucide-vue-next';
import * as h from '@heroicons/vue/24/outline';
import * as i from '@iconoir/vue';
import * as p from '@phosphor-icons/vue';
import * as t from '@tabler/icons-vue';
import * as hg from 'hugeicons-vue';
import { fas as f } from '@fortawesome/free-solid-svg-icons';
import * as b from 'simple-icons';

const motionIconsAliases = { l, i, h, t, p, hg, f, b };

const MotionIcons: Plugin = {
  install(app: App) {
    // Register the core provider globally
    app.component('MotionIconsProvider', MotionIconsProvider);

    // Attach to Vue's globalProperties
    app.config.globalProperties.$motionIcons = motionIconsAliases;

    // Attach aliases safely to the global scope (for direct template/script usage without imports)
    if (typeof globalThis !== 'undefined') {
      Object.assign(globalThis, motionIconsAliases);
    }
    
    // Specifically attach to window if we're in a browser environment
    if (typeof window !== 'undefined') {
      Object.assign(window, motionIconsAliases);
    }
  }
};

export default MotionIcons;
