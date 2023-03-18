// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation>=42){
        return (pickUpLocation-42) 
    }
    else{
        return (42-pickUpLocation)
    }    
}


function distanceFromHqInFeet(pickUpLocation){
    if (pickUpLocation>=42){
        return (pickUpLocation-42)*264 
    }
    else{
        return (42-pickUpLocation)*264
    }    
}


function distanceTravelledInFeet(pickUpLocation, dropOffLocation){
    if (pickUpLocation>=dropOffLocation){
        return (pickUpLocation-dropOffLocation)*264 
    }
    else{
        return (dropOffLocation-pickUpLocation)*264
    }    
}


function calculatesFarePrice(pickUpLocation, dropOffLocation){

    if (pickUpLocation>=dropOffLocation)
    {
       if (((pickUpLocation-dropOffLocation)*264)<=400)
       {
       return 0
        }
        else if ((((pickUpLocation-dropOffLocation)*264)>400) && (((pickUpLocation-dropOffLocation)*264)<=2000))
        {
        return (((pickUpLocation-dropOffLocation)*264)-400)*0.02
         }
        else if ((((pickUpLocation-dropOffLocation)*264)>2000) && (((pickUpLocation-dropOffLocation)*264)<=2500))
        {
            return 25
            }
        else
        {
            return "cannot travel that far"
             }
    }
    else {
        if (((dropOffLocation-pickUpLocation)*264)<=400){
            return 0
             }
             else if ((((dropOffLocation-pickUpLocation)*264)>400) && (((dropOffLocation-pickUpLocation)*264)<=2000)){
             return (((dropOffLocation-pickUpLocation)*264)-400)*0.02
                 }
             else if ((((dropOffLocation-pickUpLocation)*264)>2000) && (((dropOffLocation-pickUpLocation)*264)<=2500)){
                 return 25
                 }
             else{
                 return "cannot travel that far"
             }
         }  
    }
