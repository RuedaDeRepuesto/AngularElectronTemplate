import { BrowserWindow, app, ipcMain } from "electron";
const url = require('url');
const path = require('path');


export class AppWindow{

    private win:BrowserWindow;
    constructor(){
        this.win = new BrowserWindow({
            width: 1280,
            height: 800,
            title:'Angular Electron App',
            webPreferences:{
                webviewTag:true,
                preload:this.fPath('./electron/preload.js')
            }
        });
        
        let isServed = false;
        if(process.argv.find(i => i.includes('--serve'))){
            isServed = true;
        }
    
        if(!isServed){
            this.win.loadURL(url.format({      
                pathname: path.join(
                    __dirname,
                    './index.html'),       
                protocol: 'file:',      
                slashes: true     
            }));
        }else{
            this.win.loadURL('http://localhost:4200');
        }
        this.addElectronEvents();
        this.win.webContents.openDevTools();
    }


    private addElectronEvents(){
        ipcMain.on('app-close',(e:any) =>{
            app.exit();
        });
    }

    private fPath(f:string){
        return path.join(__dirname,f);
    }
}

app.on('ready', ()=> {
    let appWindow = new AppWindow();
});

