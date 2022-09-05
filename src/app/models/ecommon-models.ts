import {Callback} from "@ngxs/store/src/internal/internals";

export namespace eCommon{
  export interface MenuItem {
    label:string;
    icon?:string;
    subItems?:MenuItem[];
    action?:Callback
  }
}
