export const addVideo = (data) => {
    return{
        type: "ADD_VIDEO",
        payload: data
    }
}

export const themeChange = (data) => {
    return{
        type:"THEME_CHANGE",
        payload: data
    }
}

export const menuChange = (data) => {
    return{
        type:"MENU_CHANGE",
        payload: data
    }
}

export const categoryChange = (data) => {
    return{
        type:"CATEGORY_CHANGE",
        payload: data
    }
}

export const viewChange = (data) => {
    console.log('as',data)
    return{
        type:"VIEW_CHANGE",
        payload: data
    }
}
