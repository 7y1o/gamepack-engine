import { defineComponent, reactive } from 'vue';
import EditTab from '../common/EditTab.vue';

// Types
import IEditorData from '../../types/editor-data';

export default defineComponent({
	data: (): IEditorData => ({
		loadedProject: null,

		// Tabs
		isProjectSettingsTabShown: false,
		isEngineSettingsTabShown: false,
		isEngineInfoTabShown: false,
		isEngineHelpTabShown: false,

		// Engine statistics
		statistics: reactive({
			cpu: {
				voltage: 'Подсчёт...'
			},
			gpu: {
				coreTemp: -1,
				memTemp: -1,
				memTotal: -1,
				memUsed: -1,
				fps: -1
			},
			ram: {
				total: -1,
				used: -1
			},
			uptime: -1
		})
	}),
	mounted() {
		this.beginStatusCheck();
	},
	components: {
		EditTab
	},
	methods: {
		async beginStatusCheck() {
			while (true) {
				console.log('Begin check status cycle step');
				// @ts-ignore
				this.statistics = await window.gp.app.stats();
				console.log('Counted');
				await new Promise(r => setTimeout(r, 500));
			}
		},
		calcSize(bytes: number): string {
			return bytes > 1024
					? bytes > 1024 ** 2
						? bytes > 1024 ** 3
							? Math.round(bytes / (1024 ** 3)) + ' ГБ'
						: Math.round(bytes / (1024 ** 2)) + ' МБ'
					: Math.round(bytes / 1024) + ' КБ'
				: Math.round(bytes) + ' Б';
		},
		calcGPUSize(mb: number): string {
			return mb > 1024
				? Math.round(mb / 1024) + ' ГБ'
				: mb + ' МБ'
		}
	}
});
