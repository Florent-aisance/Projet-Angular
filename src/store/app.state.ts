import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { lastValueFrom } from "rxjs";
import { TimeService } from "src/app/time.service";
import { formData } from "src/app/model/formData";

export interface IApp {
    date:Date|null,
    temp:formData[]
}

export const initialApp:IApp = {
    date:null,
    temp: []
}

export class AskDate {
    static readonly type = "askDate"
}

export class DefEmp {
    static readonly type = "DefEmp"
    constructor(public Object: formData ) {}
}

@State<IApp>({name:'appstate', defaults:initialApp})

@Injectable()
export class AppState {

    @Selector()
    static selectDate(state:IApp) {
        return state.date
    }

    @Selector()
    static selectResult(state:IApp) {
        return state.temp
    }
    
    @Action( AskDate )
    async askDate( ctx:StateContext<IApp> ) {
        var data = await lastValueFrom(this.service.getTime())
        ctx.patchState({ date:data.datetime })
    }

    @Action( DefEmp )
    async searchHall( ctx:StateContext<IApp>, {Object}:DefEmp ) {
        var state = ctx.getState()
        var newTemp = state.temp.slice()
        newTemp.push( Object )
        ctx.patchState({ temp: newTemp })
    }
    
    constructor(private service:TimeService) {}
}