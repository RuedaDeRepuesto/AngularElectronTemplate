import { Injectable } from '@angular/core';
import { ElectronAPIBridge } from '../../electron/types/api.bridge';

@Injectable({providedIn: 'root'})
export class ElectronService{

    private _bridge:ElectronAPIBridge = (window as any).electronAPI;
    constructor() { }


    appClose(){
        this._bridge.appClose();
    }
    
}