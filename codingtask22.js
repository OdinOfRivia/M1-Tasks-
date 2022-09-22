// Task 2-1 
var Matt = 23   
var Simon = 75
var passingGrade = 60

if(Matt >= passingGrade && Simon >= passingGrade) {
    console.log("Both students passed")
}if(Matt >= passingGrade){
    console.log("Matt passed") 
}if(Simon >= passingGrade){
    console.log("Simon passed")
}if(Matt <= passingGrade && Simon <= passingGrade){
    console.log("Both students failed")
}



// Task 2-2 

const students = [
    {name: 'John', score1: 47, score2:46},
     {name: 'Bob', score1: 23, score2:24},
    {name: 'Nick', score1: 40, score2:35},
    {name: 'Alex', score1: 44, score2:45},
]
function sumOfScores(score_1, score_2){
return score_1 + score_2
}
function determine_grade(total){
    if( ( total<= 60) ){
        return "E"
    } else if ( (61 <= total) && (total<= 70)){
        return "D"
    } else if ( (71 <= total) &&  (total <= 80)){
        return "C"
    } else if ((81 <= total) && (total <= 90) ){
        return "B"
    } else {
        return "A"
    }
}

for(var i=0;i<students.length; i++){
const sum =  sumOfScores(students[i].score1,students[i].score2 )
const grade = determine_grade(sum)
console.log(students[i].name, sum, grade)

}




                                        





        
    

  




