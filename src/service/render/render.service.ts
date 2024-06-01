import {IOpen} from './render.interface';
import {store} from '../../store/store';
import {renderActions} from '../../store/render.reducer';


export class RenderService {
    private static instance: RenderService

    private constructor() {
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new this()
        }

        return this.instance
    }

    add({component}: IOpen) {
        store.dispatch(renderActions.elements([...store.getState().render.elements, component]))
    }

    remove() {
        store.dispatch(renderActions.elements(store.getState().render.elements.slice(0, -1)))
    }

    clear() {
        store.dispatch(renderActions.elements([]))
    }
}
