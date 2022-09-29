import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { lastValueFrom } from "rxjs";
import { TimeService } from "src/app/time.service";
import { formData } from "src/app/model/formData";

export interface IApp {
    date:Date|null,
    temp:formData[],
    colors: {}[]
}

export const initialApp:IApp = {
    date:null,
    temp: [],
    colors: []
}

export class AskDate {
    static readonly type = "askDate"
}

export class AskColors {
    static readonly type = "askColors"
}

export class DefEmp {
    static readonly type = "DefEmp"
    constructor(public Object: formData ) {}
}

export class SendColor {
    static readonly type = "SendColor"
    constructor(public Color: String ) {}
}

export class RemColor {
    static readonly type = "RemColor"
    constructor(public Color: String ) {}
}

@State<IApp>({name:'appstate', defaults:initialApp})

@Injectable()
export class AppState {

    @Selector()
    static selectDate(state:IApp) {
        return state.date
    }

    @Selector()
    static selectColors(state:IApp) {
        return state.colors
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

    @Action( SendColor )
    async sendColor( ctx:StateContext<IApp>, {Color}:SendColor ) {

        var state = ctx.getState()
        var newColors = state.colors.slice()
        newColors.push( Color )
        ctx.patchState({ colors:newColors })
        
    }

    @Action( RemColor )
    async remColor( ctx:StateContext<IApp>, {Color}:RemColor ) {

        var stateColors = ctx.getState().colors
        var index = stateColors.indexOf(Color)
        if ( index !== -1) {
            stateColors.splice(index, 1)
        }
        ctx.patchState({ colors:stateColors })
        
    }
    
    constructor(private service:TimeService) {}
}