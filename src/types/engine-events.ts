
/** Settings update data */
export interface IEngineSettingsUpdate {
    theme?: 'light',
    primaryColor: 'red' | 'orange' | 'green' | 'blue' | 'purple' | 'magenta',
    editor?: {
        panels?: {
            creation?: {
                width?: number,
                tabAllEnabled?: boolean,
                tabPrimitivesEnabled?: boolean,
                tabFxEnabled?: boolean,
                tabTriggersEnabled?: boolean,
                tabPositions: ('all' | 'primitives' | 'fx' | 'triggers')[]
            },
            inspector?: {
                width?: number,
            }
        },
    },
    statusBar?: {
        ramStatsEnabled?: boolean,
        gpuCoreStatsEnabled?: boolean,
        gpuMemStatsEnabled?: boolean,
        fpsStatsEnabled?: boolean,
        
        ramStatsDisplayMode?: 'all' | 'bar' | 'text',
        gpuMemStatsDisplayMode?: 'all' | 'bar' | 'text'
    },

}
