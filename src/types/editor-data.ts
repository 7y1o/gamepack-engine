import IProjectConfig from './engine/project';
import {VueElement} from 'vue';

/** Editor component data reference */
export default interface IEditorData {

	/** Current loaded project */
	loadedProject: IProjectConfig | null,

	/** Is opened project settings tab */
	isProjectSettingsTabShown: boolean,

	/** Is opened engine settings tab */
	isEngineSettingsTabShown: boolean,

	/** Is opened engine info tab */
	isEngineInfoTabShown: boolean,

	/** Is opened engine help tab */
	isEngineHelpTabShown: boolean,

	/** Engine statistics */
	statistics: {
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
			fps: number,
		}
	}
}
