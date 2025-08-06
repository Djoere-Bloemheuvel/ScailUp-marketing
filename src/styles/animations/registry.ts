
// Animation registry for performance tracking and lazy loading
export interface AnimationModule {
  name: string;
  load: () => Promise<void>;
  priority: 'critical' | 'high' | 'medium' | 'low';
  dependencies?: string[];
}

export const animationRegistry: AnimationModule[] = [
  {
    name: 'core',
    load: () => import('./core').then(() => {}),
    priority: 'critical'
  },
  {
    name: 'hero',
    load: () => import('./hero').then(() => {}),
    priority: 'critical'
  },
  {
    name: 'interactions',
    load: () => import('./interactions').then(() => {}),
    priority: 'high'
  },
  {
    name: 'ambient',
    load: () => import('./ambient').then(() => {}),
    priority: 'medium'
  },
  {
    name: 'decorative',
    load: () => import('./decorative').then(() => {}),
    priority: 'low'
  }
];

export class AnimationLoader {
  private static loadedModules = new Set<string>();
  private static loadingPromises = new Map<string, Promise<void>>();

  static async loadByPriority(priority: 'critical' | 'high' | 'medium' | 'low') {
    const modules = animationRegistry.filter(m => m.priority === priority);
    
    return Promise.all(
      modules.map(module => this.loadModule(module.name))
    );
  }

  static async loadModule(name: string): Promise<void> {
    if (this.loadedModules.has(name)) {
      return Promise.resolve();
    }

    if (this.loadingPromises.has(name)) {
      return this.loadingPromises.get(name)!;
    }

    const module = animationRegistry.find(m => m.name === name);
    if (!module) {
      return Promise.resolve();
    }

    const loadPromise = module.load().then(() => {
      this.loadedModules.add(name);
      this.loadingPromises.delete(name);
    });

    this.loadingPromises.set(name, loadPromise);
    return loadPromise;
  }

  static preloadNextPriority(currentPriority: string) {
    const priorities = ['critical', 'high', 'medium', 'low'];
    const currentIndex = priorities.indexOf(currentPriority);
    const nextPriority = priorities[currentIndex + 1];
    
    if (nextPriority) {
      requestIdleCallback(() => {
        this.loadByPriority(nextPriority as any);
      });
    }
  }
}
