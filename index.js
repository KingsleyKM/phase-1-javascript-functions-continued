// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
//saturdayFun(); 

const mondayWork = (function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
})
//mondayWork();

function wrapAdjective(anything = "*"){
    return function(name = "special"){
        return `You are ${anything}${name}${anything}!`
    }
}

    