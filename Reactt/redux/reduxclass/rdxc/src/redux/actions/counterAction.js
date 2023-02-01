const incrementCount =()=>{
    return {
        type:"increment"
    }
}
const decrementCount = ()=>{
    return {
        type:"decrement"
    }
}

export {incrementCount,decrementCount};