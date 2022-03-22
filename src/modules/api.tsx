const api = {
    
    GetOkrSlide: (url :string = 'http://localhost:3004/subgoals') => {
        try {
            fetch(url)
                .then(res => {
                console.log("status code: " + res.status)
                    if (!res.ok) return;
                    console.log(res.json())
                    // res.json()
                }
            )
        } catch (error : any) {
            console.table(`error : ${error}`)
        }
    },

    GetOkrSlideId :
    async function (url :string = 'http://localhost:3004/subgoals', id : number) {
        try {
            const res = await fetch(`${url}/${id}`);
            if (!res.ok) return
            const data = res.json();
            return data;
        } catch (error : any) {
            console.table(`error : ${error}`)
        }
    },
    
}

export default api
