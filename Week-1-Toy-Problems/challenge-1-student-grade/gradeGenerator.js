function generateGrade(marks) {
    if(marks > 79) return "A";
    if(marks >= 60) return "B";
    if(marks >= 50) return "C";
    if(marks >= 40) return "D";
    if(marks < 40)  return "E";

console.log(generateGrade(85));
console.log(generateGrade(73));
console.log(generateGrade(45));
console.log(generateGrade(30));
}    