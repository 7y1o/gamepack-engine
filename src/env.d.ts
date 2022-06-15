/// <reference types="vite/client" />

declare module 'vuesax';
declare module "vue/types/vue" {
  interface Vue {
    $vs: any; // vuesax custom plugin
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ISettings {}
interface IProject {}

interface IMainProcessAPI {

  /** Preloading features */
  preload: {
    start: () => Promise<void>,
    check: () => Promise<{ fin: boolean, process: number, text: string }>
  },

  /** Engine preferences features */
  settings: {
    get: () => Promise<ISettings>,
    set: (data: ISettings) => Promise<void>
  },

  /** Project actions */
  project: {
    create: (project: IProject) => Promise<{ result: boolean, error?: string }>,
    open: (name: string) => Promise<{ result: boolean, error?: string, project: IProject }>,
    save: (project: IProject) => Promise<void>
  }

  /** Common app actions */
  app: {
    stats: () => Promise<{
      ram: {
        total: number,
        used: number
      },
      uptime: number,
      cpu: {
        voltage: string
      },
      gpu: {
        coreTemp: number,
        memTemp: number,
        memTotal: number,
        memUsed: number,
        fps: number
      }
    }>
    exit: () => void,
  }
}

declare global {
  interface Window {
    gp: IMainProcessAPI
  }
}
