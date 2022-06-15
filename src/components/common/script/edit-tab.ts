import { defineComponent } from 'vue';

export default defineComponent({
	data: () => ({

		// Creation panel
		createPanelSize: 300,
		isCreatePanelResizing: false,

		// Inspector panel
		inspectorSize: 300,
		isInspectorResizing: false,
	}),
	props: {},
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
			if (this.isCreatePanelResizing) this.isCreatePanelResizing = false;
			if (this.isInspectorResizing) this.isInspectorResizing = false;
		},
	},
});
