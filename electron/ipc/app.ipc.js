const { app } = require('electron');
const { cpu, graphics, mem } = require('systeminformation');

/** app:exit */
exports['app_exit'] = async (e) => {
	app.quit();
};

/** app:ram-stats */
exports['app_stats'] = async (e) => {
	const heap = process.memoryUsage();
	const ramInfo = await mem();
	const uptime = process.uptime();
	const cpuInfo = await cpu();

	const gr = await graphics();
	const gpuInfo = await (async () => {
		if (gr.controllers.length > 1) return gr.controllers.find((e) => e.external);
		return gr.controllers[0];
	})();
	const displayInfo = gr.displays.find((d) => d.main);

	return {
		ram: {
			total: ramInfo.available,
			used: heap.heapUsed,
		},
		uptime,
		cpu: {
			voltage: cpuInfo.voltage
		},
		gpu: {
			coreTemp: gpuInfo.temperatureGpu,
			memTemp: gpuInfo.temperatureMemory,
			memTotal: gpuInfo.vram,
			memUsed: gpuInfo.memoryUsed,
			fps: displayInfo.currentRefreshRate
		}
	};
};
