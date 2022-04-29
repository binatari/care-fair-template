import axios from "axios";
import authHeader from "./services";
import { useMutation, useQuery } from "react-query";

export const api = axios.create({
    baseURL:process.env.BASE_URL,
    headers:{
        'Content-Type':'application/json',
        accept:'application/json',
        // "Access-Control-Allow-Origin": "http://localhost:3000"
    }
})

api.defaults.withCredentials=true

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});




export const register = (data) => {
    return api.post('/donees', data)
}



export const getCookie = () => {
    return axios.get('https://api.thecarefair.com/sanctum/csrf-cookie',
    {
    //    'Access-Control-Allow-Credentials':true,
       withCredentials:true
    } 
    )
    .then(response => {
       console.log(response.headers);
    }).catch((err)=>console.log(err))
}

export const login = (data) => {
    return api.post('admin/auth/login', data,
    // {
    //     withCredentials:true
    // } 
    )
    // .then(response => {
    //    console.log(response.headers);
    // })
}


export const onLogin = () =>{
    return useMutation(login)
}


export const statisticsOverview = (data) => {
    return api.get('admin/dashboard/statistics',).then(res=>res.data).catch((err)=>err)
  
}


export const recentGivers = () => {
    return api.get('/givers/list?recent=5').then(res=>res.data).catch((err)=>err)
  
}

export const recentReceivers = () => {
    return api.get('admin/receivers/list?recent=5').then(res=>res.data).catch((err)=>err)
  
}

export const recentAgencies = () => {
    return api.get('admin/agencies/list').then(res=>res.data).catch((err)=>err)
  
}

export const activityTimeline = () => {
    return api.get('admin/dashboard/activities').then(res=>res.data).catch((err)=>err)
  
}

export const allReceivers = () => {
    return api.get('admin/receivers/list').then(res=>res.data).catch((err)=>err)
}

export const particularReceiver = (id) => {
    return api.get(`admin/receivers/show/${id}/profile`).then(res=>res.data).catch((err)=>err)
}

export const receiverStatistics = (id) => {
    return api.get(`admin/receivers/show/${id}/summary`).then(res=>res.data).catch((err)=>err)
}

export const receiverSubscription = (id) => {
    return api.get(`admin/receivers/show/${id}/subscriptions/current`).then(res=>res.data).catch((err)=>err)
}
export const receiverSubscriptions = (id) => {
    return api.get(`admin/receivers/show/${id}/subscriptions/history`).then(res=>res.data).catch((err)=>err)
}


export const allGivers = () => {
    return api.get('admin/givers/list').then(res=>res.data).catch((err)=>err)
}

export const particularGiver = (id) => {
    return api.get(`admin/givers/show/${id}/profile`).then(res=>res.data).catch((err)=>err)
}

// export const receiverStatistics = (id) => {
//     return api.get(`admin/receivers/show/${id}/summary`).then(res=>res.data).catch((err)=>err)
// }

export const giverSubscription = (id) => {
    return api.get(`admin/givers/show/${id}/subscriptions/current`).then(res=>res.data).catch((err)=>err)
}
export const giverSubscriptions = (id) => {
    return api.get(`admin/givers/show/${id}/subscriptions/history`).then(res=>res.data).catch((err)=>err)
}

export const onGetStatisticsOverview = () => {
    return useQuery("statisticsOverview", statisticsOverview);
  };

  export const onGetRecentGivers = () => {
    return useQuery("recentGivers", recentGivers);
  };

  export const onGetRecentReceivers = () => {
    return useQuery("recentReceivers", recentReceivers);
  };

  export const onGetRecentAgencies = () => {
    return useQuery("recentAgencies", recentAgencies);
  };

  export const onGetActivityTimeline = () => {
    return useQuery("activityTimeline",activityTimeline);
  };

  export const onGetAllReceivers = () => {
    return useQuery("allReceivers",allReceivers);
  };

  export const onGetParticularReceiver = (id) => {
    return useQuery(["particularReceiver", id],()=>particularReceiver(id), {
        enabled:!!id
    });
  };

  export const onGetReceiverStatistics = (id) => {
    return useQuery("receiverStatistics",()=>receiverStatistics(id),{
        enabled:!!id
    });
  };


  export const onGetReceiverSubscriptions = (id) => {
    return useQuery("receiverSubscriptions",()=>receiverSubscriptions(id),{
        enabled:!!id
    });
  };

  export const onGetReceiverSubscription = (id) => {
    return useQuery("receiverSubscription",()=>receiverSubscription(id),{
        enabled:!!id
    });
  };


  export const onGetAllGivers = () => {
    return useQuery("allGivers",allGivers);
  };

  export const onGetParticularGiver = (id) => {
    return useQuery(["particularGiver", id],()=>particularGiver(id), {
        enabled:!!id
    });
  };

//   export const onGetGiverStatistics = (id) => {
//     return useQuery("receiverStatistics",()=>giverStatistics(id),{
//         enabled:!!id
//     });
//   };


  export const onGetGiverSubscription = (id) => {
    return useQuery("giversSubscriptions",()=>giverSubscription(id),{
        enabled:!!id
    });
  };

  export const onGetGiverSubscriptions = (id) => {
    return useQuery("giversSubscription",()=>giverSubscriptions(id),{
        enabled:!!id
    });
  };

  

