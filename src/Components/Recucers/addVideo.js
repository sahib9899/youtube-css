import image1 from '../Images/video1.jpg'
import image2 from '../Images/2.jpg'
import image3 from '../Images/3.jpg'
import image4 from '../Images/4.jpg'
import image5 from '../Images/5.jpg'
import image6 from '../Images/6.jpg'
import image7 from '../Images/7.jpg'
import image8 from '../Images/8.jpg'
import image9 from '../Images/9.jpg'
import image10 from '../Images/10.jpg'
import image11 from '../Images/11.jpg'
import image12 from '../Images/12.jpg'
import image13 from '../Images/13.jpg'
import image14 from '../Images/14.jpg'
import image15 from '../Images/15.jpg'
import image16 from '../Images/16.jpg'


const initialState = [
    { id: "nWJXdr0mQ0s",title: "The Freedom of Being Nobody - Ram Dass", uploadTime: "2 Days ago",thumbnail: image1, views: '1087K', category:'Spiritual' },
    { id: "K0gt", title: "Redux SAGA vs THUNK ? What should you chose?", uploadTime: "1 month ago", thumbnail: image2, views: '567K', category:'Educational' },
    { id: "iWwY6K5Vjyo", title: "Through Love مولانا RUMI", uploadTime: "6 months ago", thumbnail: image3, views: '2.1M', category:'Spiritual' },
    { id: "TMsPQyMITfc", title: "movie scenes that make you think", uploadTime: "Oct 23, 2019", thumbnail: image4, views: '8.6M', category:'Movies' },
    { id: "4px19xzK7zI", title: "Kunal Shah: Find your pot of gold", uploadTime: "Oct 6, 2016", thumbnail: image5, views: '367K', category:'Motivational'},
    { id: "VA0V8rQpqwQ", title: "Kho Gaye Hum Kahaan (Live in Ahmedabad)", uploadTime: "Dec 29, 2019", thumbnail: image6, views: '1.8M', category:'Music'},
    { id: "CswvZGUUbCk", title: "The Benefits Of SOLO TRAVELING", uploadTime: "Jun 4, 2020", thumbnail: image7, views: '365K', category:'Others'},
    { id: "9LZGB3OLXNQ", title: "How To Make Website DARK MODE", uploadTime: "Mar 30, 2021", thumbnail: image8, views: '170K', category:'Educational'},
    { id: "H27jfTZuayo", title: "2021 MG Astor review – Hello Astor! | First Drive | Autocar India", uploadTime: "Sep 30, 2021", thumbnail: image9, views: '35K', category:'Car reviews'},
    { id: "sD0IzQhxH_0", title: "Work the Least for It", uploadTime: "Feb 19, 2020", thumbnail: image10, views: '21K', category:'Educational'},
    { id: "Jxm_sV70b1w", title: "The Best Acting of All Time - Compilation Part IV [HD]", uploadTime: "Nov 29, 2015", thumbnail: image11, views: '86M', category:'Movies'},
    { id: "zVnOmDDTblQ", title: "Naruto and Sasuke vs Madara Uchiha - Full Fight (English Dub)", uploadTime: "Apr 30, 2021", thumbnail: image12, views: '241K', category:'Naruto fights'},
    { id: "Xs6_vecSv2Y", title: "Breaking Bad Greatest Moments", uploadTime: "Apr 6, 2016", thumbnail: image13, views: '16.4M', category:'Series clip'},
    { id: "Rvc_QYpwRrE", title: "Peaky Blinders BEST SCENE S02E06", uploadTime: "Jul 20, 2016", thumbnail: image14, views: '2.6M', category:'Peaky blinders'},
    { id: "8DcywEZSa4U", title: "2021 Kia Carnival Limousine Plus - Minor Updates | Faisal Khan", uploadTime: "Sep 29, 2021", thumbnail: image15, views: '98K', category:'Car reviews'},
    { id: "CswvZT94PHkuydcwGUUbCk", title: "Kun Faya Kun Full Video Song Rockstar | Ranbir Kapoor | A.R. Rahman", uploadTime: "Dec 5, 2011", thumbnail: image16, views: '257M', category:'Music'},
]

export const addVideoReducer = (state= initialState, action) => {
    switch(action.type){
        case "ADD_VIDEO" :
            return [...state, action.payload];

        default :
            return state;
    }
}