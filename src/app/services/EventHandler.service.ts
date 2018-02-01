import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventHandlerService {
    public isSingIn: any
    public isSingOut: any
    public isSingUp: any
    public hasModified: any


    constructor() {
        this.isSingIn = new EventEmitter()
        this.isSingOut = new EventEmitter()
        this.isSingUp = new EventEmitter()
        this.hasModified = new EventEmitter()
    }


    public singIn()
    {
      this.isSingIn.emit()
    }

    public singOut()
    {
      this.isSingOut.emit()
    }

    public singUp(newUser) {
      this.isSingUp.emit(newUser)
    }


    public madeChange()
    {
      this.hasModified.emit()
    }

}
