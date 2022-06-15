const { ipcMain } = require('electron');

const { app_exit, app_stats } = require('./ipc/app.ipc')

/** Register ipc events */
exports['registerIPC']  = () => {

	// App module
	ipcMain.handle('app:exit', app_exit);
	ipcMain.handle('app:stats', app_stats);
}
