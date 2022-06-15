const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('gp', {
	preload: {
		start: () => ipcRenderer.invoke('preload:start'),
		check: () => ipcRenderer.invoke('preload:check')
	},
	settings: {
		get: () 	=> ipcRenderer.invoke('settings:get'),
		set: (data) => ipcRenderer.invoke('settings:set', data)
	},
	project: {
		create: (project) 	=> ipcRenderer.invoke('project:create', project),
		open: 	(name) 		=> ipcRenderer.invoke('project:open', name),
		save: 	(project) 	=> ipcRenderer.invoke('project:save', project)
	},
	app: {
		stats: () => ipcRenderer.invoke('app:stats'),
		exit: () => ipcRenderer.invoke('app:exit')
	}
});
