import { ElectronAPIBridge } from "./types/api.bridge";

const { contextBridge, ipcRenderer } = require('electron')

console.info('preload script loaded!');

let apiDefinition:ElectronAPIBridge = {
    appClose: () => ipcRenderer.send('app-close')
}

contextBridge.exposeInMainWorld('electronAPI', apiDefinition);