import {makeAutoObservable} from "mobx";
import {createContext} from "react";

export class Modal2State {
    private _value = 0

    constructor() {
        makeAutoObservable(this)
    }

    set value(value: number) {
        this._value = value
    }

    get value() {
        return this._value
    }
}

export const Modal2StateContext = createContext<Modal2State>(
    {} as any,
);
