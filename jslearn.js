const addButtonEl = document.getElementById("add-button")
const calcButton = document.getElementById("calc-button")
let GPAss = document.getElementsByClassName("course-form")

var GPA = 0

function calc(){
    let numerator=0
    let den = 0 
    let forms = document.getElementsByClassName("course-form")
    console.log(forms)
    for(let i=0; i<forms.length; i++) {
        let courseGpa = forms[i][1].value
        let courseCrd = forms[i][2].value
        if(courseGpa>=0.7 && courseGpa<=5 && courseCrd>0){
        numerator += courseGpa*courseCrd
        den = den + parseInt(courseCrd)
        }
    }
    if(numerator>0 && den>0){
        return GPA = numerator/den
    }
}


calcButton.addEventListener("click", function() {
    let display = document.getElementById("gpa")
    calc()
    let text = "gpa: " + GPA
    display.innerHTML = text
})

addButtonEl.addEventListener("click", function() {
    const forms = document.getElementById('parent-form')
    const field = document.createElement("form")
    field.className = "course-form"
    field.innerHTML =
    `<input type="text" class="course-name" value="" placeholder="course name">
    <input type="number" class="course-gpa" placeholder="gpa" value="" min="0.7" max="5">
    <input type="number" class="crd-hrs" value="" placeholder="credit hours">
    <input type="reset" class="reset">`
    forms.appendChild(field)
})