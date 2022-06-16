import { IEngineSettingsUpdate } from '../types/engine-events';
import bus from './event-bus';

/** 
 * Register global engine events
 */
export default function registerGlobalEngineEvents() {
    bus.on('engine:settings:update', (data: IEngineSettingsUpdate) => {});
    bus.on('engine:settings:load', (data: IEngineSettingsUpdate) => {});
    bus.on('engine:settings:reset', (data: IEngineSettingsUpdate) => {});
}
