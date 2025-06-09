export const isPresentInFavorites=(favorites,restaurent)=>{
    for(let item of favorites){
        if(restaurent.id===item.id){
            return true;
        }
    }
    return false;
}