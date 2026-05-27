import { optimize } from 'svgo';

export interface GeometryMetrics {
  curves: number;
  corners: number;
  circles: number;
  lines: number;
  complexity: 'simple' | 'medium' | 'complex';
  directionality: boolean;
  symmetry: boolean;
  motionPotential: string[];
}

export interface AnalysisReport {
  name: string;
  library: string;
  category: string;
  normalizedSvg: string;
  geometry: GeometryMetrics;
}

const semanticCategories: Record<string, string[]> = {
  notification: ['bell', 'alert', 'alarm', 'message', 'inbox', 'ring', 'chat', 'mail'],
  weather: ['cloud', 'sun', 'moon', 'rain', 'snow', 'wind', 'storm', 'lightning', 'fog'],
  loading: ['loader', 'refresh', 'sync', 'rotate', 'spinner', 'circle-notch', 'repeat'],
  mechanical: ['settings', 'gear', 'cog', 'wrench', 'tool', 'slider', 'adjust'],
  search: ['search', 'find', 'lens', 'zoom', 'magnify', 'scan', 'eye'],
  directional: ['arrow', 'chevron', 'caret', 'play', 'forward', 'back', 'skip', 'move'],
  ai: ['cpu', 'network', 'ai', 'bot', 'sparkle', 'magic', 'brain', 'terminal', 'code']
};

export class Analyzer {
  /**
   * Cleans and normalizes SVGs via SVGO config.
   */
  static normalizeSvg(rawSvg: string): string {
    const result = optimize(rawSvg, {
      plugins: [
        'removeDimensions',
        'removeXMLProcInst',
        'removeTitle',
        {
          name: 'convertColors',
          params: { currentColor: true },
        },
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [
              { viewBox: '0 0 24 24' },
              { fill: 'none' },
              { stroke: 'currentColor' },
              { 'stroke-width': '2' },
              { 'stroke-linecap': 'round' },
              { 'stroke-linejoin': 'round' }
            ]
          }
        }
      ]
    });
    return result.data;
  }

  /**
   * Semantically analyzes icon name to detect its real-world category.
   */
  static detectCategory(name: string): string {
    const lowerName = name.toLowerCase();
    for (const [category, keywords] of Object.entries(semanticCategories)) {
      if (keywords.some(k => lowerName.includes(k))) {
        return category;
      }
    }
    return 'generic';
  }

  /**
   * Analyzes geometry using fast heuristic counts of curves (C, S, Q, T),
   * lines (L, H, V), circles (cx, cy, r), and corners (z, path commands).
   */
  static analyzeGeometry(name: string, svg: string): GeometryMetrics {
    const curves = (svg.match(/[CSQTcsqt]/g) || []).length;
    const lines = (svg.match(/[LHVlhv]/g) || []).length;
    const circles = (svg.match(/<circle/g) || []).length;
    
    // Heuristic corners based on closed path points
    const corners = (svg.match(/[Zz]/g) || []).length * 4;

    const totalNodes = curves + lines + circles + corners;
    let complexity: 'simple' | 'medium' | 'complex' = 'simple';
    if (totalNodes > 30) complexity = 'complex';
    else if (totalNodes > 12) complexity = 'medium';

    const category = this.detectCategory(name);
    const directionality = category === 'directional' || name.includes('right') || name.includes('left') || name.includes('up') || name.includes('down');
    const symmetry = !directionality;

    const motionPotential: string[] = [];
    if (category === 'notification') motionPotential.push('pendulum', 'sound-ripple');
    else if (category === 'weather') motionPotential.push('turbulence', 'floating');
    else if (category === 'loading') motionPotential.push('rotation', 'energy-pulse');
    else if (category === 'directional') motionPotential.push('acceleration', 'kinetic-trail');
    else if (category === 'mechanical') motionPotential.push('spin', 'friction');
    else if (category === 'ai') motionPotential.push('neural-pulse', 'glow');
    else motionPotential.push('elastic-pop');

    return {
      curves,
      corners,
      circles,
      lines,
      complexity,
      directionality,
      symmetry,
      motionPotential
    };
  }

  /**
   * Runs the full analysis pipeline on a single raw SVG icon.
   */
  static analyze(name: string, library: string, rawSvg: string): AnalysisReport {
    const normalizedSvg = this.normalizeSvg(rawSvg);
    const category = this.detectCategory(name);
    const geometry = this.analyzeGeometry(name, normalizedSvg);

    return {
      name,
      library,
      category,
      normalizedSvg,
      geometry
    };
  }
}
