import image1 from '../Images/video1.jpg'
import image2 from '../Images/2.jpg'
import image3 from '../Images/3.jpg'
import image4 from '../Images/4.jpg'
import image5 from '../Images/5.jpg'
import image6 from '../Images/6.jpg'
import image7 from '../Images/7.jpg'

const initialState = [
    { id: "nWJXdr0mQ0s",title: "The Freedom of Being Nobody - Ram Dass", uploadTime: "2 Days ago",thumbnail: image1, views: '987K' },
    { id: "K0gt", title: "Redux SAGA vs THUNK ? What should you chose?", uploadTime: "1 month ago", thumbnail: image2, views: '567K' },
    { id: "iWwY6K5Vjyo", title: "Through Love مولانا RUMI", uploadTime: "6 months ago", thumbnail: image3, views: '2.1M' },
    { id: "TMsPQyMITfc", title: "movie scenes that make you think", uploadTime: "Oct 23, 2019", thumbnail: image4, views: '8.6M' },
    { id: "4px19xzK7zI", title: "Kunal Shah: Find your pot of gold", uploadTime: "Oct 6, 2016", thumbnail: image5, views: '367K'},
    { id: "VA0V8rQpqwQ", title: "Kho Gaye Hum Kahaan (Live in Ahmedabad)", uploadTime: "Dec 29, 2019", thumbnail: image6, views: '1.8M'},
    { id: "CswvZGUUbCk", title: "The Benefits Of SOLO TRAVELING", uploadTime: "Jun 4, 2020", thumbnail: image7, views: '365K'}
]
console.log('IS',initialState);

export const addVideoReducer = (state= initialState, action) => {
    switch(action.type){
        case "ADD_VIDEO" :
            return [...state, action.payload];

        default :
            return state;
    }
}