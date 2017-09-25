import {Injectable} from '@angular/core';
import { File } from '@ionic-native/file';
import {Platform} from 'ionic-angular';

const rootFolderName = "LIFEChat";

@Injectable()
export class FileService {
    constructor(private file: File, private platform: Platform) {
        this.checkAndCreateInitialDirectories().then((prepareMessageData) => {
            this.prepareMessageData();
        }).catch(() => {
            alert("Unable to create initial files. Exiting app");
            this.platform.exitApp();;
        });
        
    }

    private checkAndCreateInitialDirectories(): Promise<any> {
        let prepareMessageData = false;
        return new Promise((resolve, reject) => {
            this.file.checkDir(this.file.dataDirectory, rootFolderName).then(() => {
                // root directory exists
                resolve(prepareMessageData);
            }).catch(() => {
                // root directory doesnot exists, so creating
                this.file.createDir(this.file.dataDirectory, rootFolderName, false).then(() => {
                    // root directory created successfully
                    prepareMessageData = true;
                    resolve(prepareMessageData);
                }).catch(() => {
                    // root directory creation failed
                    reject();
                    
                });
            });
        });
        
    }

    private prepareMessageData() {
        //alert("prepare message data");
    }

    private getPath() {
        return this.file.dataDirectory+"/"+rootFolderName;
    }

    public checkIfFileExists(fileName): Promise<any> {
        return new Promise((resolve, reject) => {
            this.file.readAsText(this.getPath(), fileName).then((value) => {
                resolve(value);
            }).catch(() => {
                reject();
            });
        });
        
    }

    public writeFile(data: string, fileName: string): Promise<any> {
        let directoryPath = this.getPath();
        return new Promise((resolve, reject) => {
            this.checkIfFileExists(fileName).then(() => {
                // file already exists, rewriting
                this.file.writeExistingFile(directoryPath, fileName, data).then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            }).catch(() => {
                // file doesn't exists writing
                this.file.writeFile(directoryPath, fileName, data).then(() => {
                    resolve();
                }).catch((error) => {
                    reject();
                });
            });
        });
    }
}