const theList = ['Lauren', 'Kevin',true,35,null,undefined,[
    'one', 'two']]
console.log(theList)

theList.pop()
theList.splice(0,1)

console.log(theList)

theList.splice(0,0,"FIRST")

console.log(theList)

theList.splice(3,0,"hello world")
theList.splice(2,0,"middle")
theList.push("LAST")

console.log(theList)