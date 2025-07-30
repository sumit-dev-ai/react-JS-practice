const key="reactToDo"
export const getDataFromLocalStorage=()=>{
   
        const rawToDo=localStorage.getItem(key);
        if(!rawToDo) return [];
        return JSON.parse(rawToDo);
    
}
export const setDataFromLocalStorage=(task)=>{
    return localStorage.setItem(key,JSON.stringify(task))
}