let setQuestion= [
    {
        question:"Which of the following sugars is a product of the condensation of monosaccharides?",
        options:{
            a:"Galactose",
            b:"Maltose",
            c:"Glucose",
            d:"Fructose"},
        correctanswer:'c'
    },
    {
        question:"From the principle of flotation, a body sinks in a fluid until it displace a quantity equal to its own?",
        options:{
            a:"Density",
            b: "Mass",
            c: "Weight",
            d: "Volume"
        },
        correctanswer:'b'
    },
    {
        question:"Which of the following is true about digital computers.",
        options:{
          a:"They consist of magnetic core memory.",
          b:"They understand data as a continuous measurement of a physical quantity.",
          c:"They represent numbers through a string of binary digits.",
          d:"They are mainly used for scientific purposes."
        },
        correctanswer:'c'
    },
    {
        question:"Who is the President Of Nigeria from 2023-2027",
        options:{
             a:"Yemi Osibanjo",
             b:"Bola Ahmed Tinubu",
             c:"Yusuf Gowan",
             d:"Godwin Emefiele"
        },
        correctanswer:'b'
    },
    {
        question:"What is the number of countries located in the Eastern Part of the Continent 'Europe'",
        options:{
          a:"5",
          b:"12",
          c:"15",
          d:"10"
        },
        correctanswer:'d'

    }

]
let arrayIndex = 0;
let userScore= 0;
let questionDiv = document.querySelector('#display') ;
function populateQuiz(index){
questionDiv.innerHTML=`
<form>
<p>${setQuestion[index].question}</p>
<ul>
    <li>
        <input type="radio" name="q2" class="radio" onchange="selectAnwser('a', ${index})">
        <label for="" id="rad" name="q2" >${setQuestion[index].options.a}</label>
    </li>
    <li>
        <input type="radio" name="q2" class="radio1" onchange="selectAnwser('b',  ${index})">
        <label id="rad">${setQuestion[index].options.b}</label>
    </li> 
    <li>
        <input type="radio" name="q2" class="radio2" onchange="selectAnwser('c',  ${index})">
        <label id="rad">${setQuestion[index].options.c}</label>
    </li>
    <li>
        <input type="radio" name="q2" class="radio3" onchange="selectAnwser('d',  ${index})">
        <label for="" id="rad">${setQuestion[index].options.d}</label>
    </li>
</ul>
</form>`;
}
function selectAnwser (answer,index){
    if(answer === setQuestion[index].correctanswer){
        userScore = ++userScore
    }
}
let nextBtn = document.querySelector('button');
nextBtn.addEventListener('click',function(){
    if(arrayIndex >= setQuestion.length - 1) {
      let newBody =  document.createElement('button')
      newBody.innerHTML="Submit"
      document.body.appendChild(newBody);
      newBody.addEventListener('click',function(){
        questionDiv.innerHTML=` <h2>Your Score is :</h2><h2>${userScore} / ${setQuestion.length}</h2>`;
        nextBtn.style.visibility="hidden";
        newBody.innerHTML="Retry"
        newBody.addEventListener('click',function (){
            window.location= ('index.html');
        })
      })  
    }else{
        arrayIndex = ++arrayIndex;
        populateQuiz(arrayIndex)
    }
    
})
populateQuiz(0);