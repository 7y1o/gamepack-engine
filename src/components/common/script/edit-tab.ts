import { defineComponent } from 'vue';
import CanvasEditor from '../../../engine/canvas';
import CreationPanel from '../../editor/CreationPanel.vue';
import bus from '../../../utils/event-bus';

export default defineComponent({
	data: () => ({
		// Common editor canvas
		canvas: null as unknown as HTMLCanvasElement,

		// Creation panel
		createPanelSize: 300,
		isCreatePanelResizing: false,

		// Inspector panel
		inspectorSize: 300,
		isInspectorResizing: false,
	}),
	mounted() {
		this.canvas = document.querySelector('#editor-canvas')!;
		if (this.canvas) new CanvasEditor(this.canvas);
	},
	props: {},
	components: {
		CreationPanel
	},
	methods: {
		
		// Start creation panel resize
		creationPanelResizeStart() {
			this.isCreatePanelResizing = true;
		},

		// Start inspector panel resize
		inspectorResizeStart() {
			this.isInspectorResizing = true;
		},

		// Handle mouse movement
		handleMouseMove(e: MouseEvent) {

			// Handle creation panel resize
			if (this.isCreatePanelResizing) {
				this.createPanelSize += e.movementX;
				if (this.createPanelSize < 200) this.createPanelSize = 200;
				if (this.createPanelSize > 600) this.createPanelSize = 600;
			}

			// Handle inspector resize
			if (this.isInspectorResizing) {
				this.inspectorSize -= e.movementX;
				if (this.inspectorSize < 200) this.inspectorSize = 200;
				if (this.inspectorSize > 600) this.inspectorSize = 600;
			}
		},

		// Handle mouse up
		handleMouseButtonUp() {
			if (this.isCreatePanelResizing) {
				this.isCreatePanelResizing = false;
				bus.emit('engine:settings:update', {
					editor: {
						panels: {
							creation: {
								width: this.createPanelSize
							}
						}
					}
				});
			}

			if (this.isInspectorResizing) {
				this.isInspectorResizing = false;
				bus.emit('engine:settings:update', {
					editor: {
						panels: {
							inspector: {
								width: this.createPanelSize
							}
						}
					}
				});
			}
		},
	},
});
