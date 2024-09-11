
const sortArrBydual  = arr => {
    let arrtemporalsorted = arr.sort(function(a, b){return a-b});
    let arrtemporal = arrtemporalsorted.filter(number => number % 2 === 0);
    return arrtemporal
}
const removeDuplicates = arr => {
    let arrtemp = []
    for (const element of arr) {
       if(!arrtemp.includes(element)){
        arrtemp.push(element)
        } 
        else{
            console.log("Exits")
        }
    }
    return arrtemp
}
const capitalizeFirstLetter = str =>  {
    let strcapitalize =  str.split(' ').map((word) => word[word.length-1] !=="." ?  word[0].toUpperCase() + word.substr(1) : word).join(" "); 
    return strcapitalize  
}   
const loadTask = () => {    
    const tasks = localStorage.getItem('tasks');      
    return tasks ? JSON.parse(tasks) : [];
}
const addTask = (arrOfTask,newTask) => {
    arrOfTask.push(newTask)
    saveItam(arrOfTask)
}
const removeTask = (arrOfTask,Task) => {
    const arrTemp = arrOfTask.filter(t => t !== Task.id)
    saveItam(arrTemp)
}
const saveItam = arrOfTask => {
    localStorage.setItem("arrTask",JSON.stringify(arrOfTask))
}












        
     
     

