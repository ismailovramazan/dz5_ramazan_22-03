let som = document.querySelector('#som')
let usd = document.querySelector('#usd')
let euro = document.querySelector('#euro')
let well = (elem,target,target2)=>{
    elem.oninput = ()=>{
    let request = new XMLHttpRequest();
    request.open("GET",'data.json')
    request.setRequestHeader("Content-type","application/json")
    request.send()
        request.onload = ()=>{
        let response = JSON.parse(request.response)
                    target.forEach(event =>{
               if (target2 === 'som'){
               event.value = (elem.value/response[event.id]).toFixed(2)
            }else if (event===som){
               event.value = (elem.value *  response[elem.id]).toFixed(2)
               // event.value = (elem.value * response.euro).toFixed(2)
               }else {
                   event.value = ((elem.value * response[elem.id])/response[event   .id]).toFixed(2)
               }
         } )
            elem.value === '' && (target.forEach(e => e.value = ''))
        }
    }
}
well(som,[ usd, euro],'som')
well(usd, [som,euro])
well(euro, [som,usd])

    // request.onload = ()=>{
    //     let response = JSON.parse(request.response)
        // if (isTrue){
        //     target.value = (elem.value / response.usd).toFixed(2)
        //     target2.value = (elem.value / response.euro).toFixed(2)
        // } else {
        //     target.value = (elem.value  * response.usd).toFixed(2)
        //     target2.value = (elem.value  * response.euro).toFixed(2)
        // }
        // if (isTrue){
        //     target.value = (elem.value / response.usd).toFixed(2)
        //     target2.value = (elem.value / response.euro).toFixed(2)
        // }else {
        //     target.value = (elem.value * response.usd).toFixed(2)
        //     target2.value = (elem.value * response.euro).toFixed(2)
        // }

        // else if (isTrue) {
        //     target.value = (response.usd * response.som).toFixed(2)
        // }
        // else if (isTrue){
        //     target2.value = (response.som / response.euro).toFixed(2)
        // }else if (isTrue){
        //     target2.value = (response.euro * response.som).toFixed(2)
        // }
        // else{
        //     target.value = response.som === "" && response.euro ==="" && response.usd === "";
        // }
//     }
//     }
// }
// well(som,usd,euro,som,true)
// well(usd,som,euro,usd,false)
// well(euro,som,usd,euro,false)

