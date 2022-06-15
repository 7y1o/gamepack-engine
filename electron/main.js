const { app, BrowserWindow } = require('electron');
const { registerIPC } = require('./ipc');
const path = require('path');

/**
 * @description Is the app running in development mode
 * @type {boolean}
 */
let isDev = process.env.E_DEV === '1';

/**
 * @description Common window
 * @type {Electron.CrossProcessExports.BrowserWindow}
 */
let cWin;

/**
 * @description Crash window
 * @type {BrowserWindow}
 */
let eWin;

/** Start program */
async function bootstrap() {
	await app.whenReady();
	app

	cWin = new BrowserWindow({
		title: 'GamePack',
		titleBarStyle: 'default',
		width: 1280,
		height: 720,
		minWidth: 800,
		minHeight: 650,
		autoHideMenuBar: true,
		webPreferences: {
			webviewTag: true,
			nodeIntegration: true,
			preload: path.resolve(__dirname, 'preload.js'),
			webgl: true
		},
		center: true,
		backgroundColor: '#202020'
	});

	if (isDev) cWin.webContents.openDevTools({
		mode: 'detach'
	});

	registerIPC();

	if (isDev) await cWin.loadURL('http://localhost:3000/');
	else await cWin.loadFile('index.html');
}

// Start when ready
bootstrap();
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
})
