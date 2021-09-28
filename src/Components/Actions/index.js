export const addVideo = (data) => {
    console.log('addvideo',data)
    return{
        type: "ADD_VIDEO",
        payload: data
    }
}