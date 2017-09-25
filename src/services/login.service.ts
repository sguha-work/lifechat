import {Injectable} from '@angular/core';

import {FileService} from './file.service';
import {Database} from './database.service';
import {User} from "./../interfaces/user.interface";

@Injectable()
export class LoginService {
    constructor(private fileService: FileService, private database: Database) {

    }

    public isLoggedIn(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.fileService.checkIfFileExists("user").then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        });
        
    }

    public loginUser(phoneNumber: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.database.getFromDatabase(phoneNumber).then((value) => {
                resolve(value);
            }).catch(() => {
                reject();
            });
        });
    }

    public updateUserStatus(phoneNumber: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.database.updateToDatabase(phoneNumber, data).then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        });
    }
}