/// <reference path="./types/global.d.ts" />

// Export the core animated provider
export { default as MotionIconsProvider } from './src/components/MotionIconsProvider.vue';

// Export aliases
export * as Lucide from 'lucide-vue-next';
export * as Heroicons from '@heroicons/vue/24/outline';
export * as Iconoir from '@iconoir/vue';
export * as Phosphor from '@phosphor-icons/vue';
export * as Tabler from '@tabler/icons-vue';
export * as HugeIcons from 'hugeicons-vue';

// Export the global plugin as default
import MotionIcons from './src/plugin/index';
export default MotionIcons;
