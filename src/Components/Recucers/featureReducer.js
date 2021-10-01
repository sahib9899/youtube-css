import { action } from "../Actions";

export const themeChange = (state=false, action) => {
    switch(action.type){
        case "THEME_CHANGE" :
            return action.payload;

        default :
            return state;
    }
}

export const menuChange = (state=false, action) => {
    switch(action.type){
        case "MENU_CHANGE" :
            return action.payload;

        default :
            return state;
    }
}

export const categoryChange = (state='All', action) => {
    switch(action.type){
        case "CATEGORY_CHANGE" :
            return action.payload;

        default :
            return state;
    }
}
export const viewChange = (state=false, action) => {
    switch(action.type){
        case "VIEW_CHANGE" :
            return action.payload;

        default :
            return state;
    }
}
