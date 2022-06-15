import { IEngineSettingsUpdate } from '../types/engine-events';
import bus from './event-bus';

/** 
 * Register global engine events
 * Engine events: /docs/engine-events.md 
 */
export default function registerGlobalEngineEvents() {
    bus.on('engine:settings:update', (data: IEngineSettingsUpdate) => {
        console.log('It works!')
    });
}
