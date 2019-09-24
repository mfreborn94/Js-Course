
/*
************  FUNCTION RETURNING FUNCTION *************

var years = [1990, 1989, 1994, 1965, 1959];

function arrayCalc(arr,fn){
   var arrRes = [];
   for(var i = 0; i < arr.length ; i++){
      arrRes.push(fn(arr[i]));
   }
   return arrRes;
}

function calcAges(el){
   return 2019 - el;
}

function isFullAge(el){
   return el >= 18;
}

var ages = arrayCalc(years,calcAges);
console.log(ages);
var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges); 
*/

/*
            ************  FUNCTION RETURNING FUNCTION *************

function interviewQuestion(job){
   if(job === 'teacher'){
      return function(name){
         console.log('What subject do you teach, ' + name + '?');
      }
   }else if( job === 'designer'){
      return function(name){
         console.log('Can you please explain what UX design is, ' + name + '?');
      }
   }else {
      return function(name){
         console.log('What do you do, ' + name + '?');
      }
   }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
interviewQuestion('designer')('Tri');
*/

/*
            ************  CLOSURES *************


function retirement(retirementAge){
   var a = ' years left until retirement.';
   return function(yearOfBirth){
      var age = 2019 - yearOfBirth;
      console.log((retirementAge - age) + a);
   }
}

var retirementUS = retirement(66);
retirementUS(1994);
*/


/*
            ************  BIND, CALL AND APPLY *************

var john = {
   name: 'John',
   age: 25,
   job: 'teacher',
   presentation: function(style,timeOfDay){
      if(style === 'formal'){
         console.log('Good ' + timeOfDay + ' ladies and gentlemen. I\'m ' + this.name + ', I\'m ' + this.age + ' years old, I\'m a ' + this.job + '. Have a nice ' + timeOfDay +'.');
      } else if( style === 'friendly'){
         console.log('What\'s up? ' + 'I\'m ' + this.name + ', I\'m ' + this.age + ' years old, I\'m a ' + this.job + '. Have a nice ' + timeOfDay +'.')
      }
   }
}

john.presentation('formal','morning');

var jane = {
   name: "Jane",
   age: 26,
   job: 'designer'
}

john.presentation.call(jane,'friendly','afternoon');
john.presentation.apply(jane,['friendly','night']);
var janeFriendly = john.presentation.bind(jane,'friendly');
janeFriendly('morning');

var years = [1990, 1989, 1994, 1965, 1959, 2000];

function arrayCalc(arr,fn){
   var arrRes = [];
   for(var i = 0; i < arr.length ; i++){
      arrRes.push(fn(arr[i]));
   }
   return arrRes;
}

function calcAges(el){
   return 2019 - el;
}

function isFullAge(limit, el){
   return el >= limit;
}

var ages = arrayCalc(years,calcAges);
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);

*/

(function(){
   function Question(question,answer,correct) {
      this.question = question;
      this.answer = answer;
      this.correct = correct;
   }
   
   Question.prototype.displayQuestion = function(){
      console.log(this.question);
   
      for(var i = 0; i<this.answer.length; i++){
         console.log(i + ': ' + this.answer[i]);
      }
   }
   
   Question.prototype.checkAnswer = function(ans,callback){
      var sc;
      if(ans === this.correct){
         console.log('Correct answer!');
         sc = callback(true);
         this.displayScore(sc);
      }else {
         console.log('Wrong answer, try again :)');
         sc = callback(false);
         this.displayScore(sc); 
      }
      
   }

   Question.prototype.displayScore = function(score){
      console.log('Your current score is: ' + score);
   }
   
   function score(){
      var sc = 0;
      return function(correct){
         if(correct){
            sc++;
         }
         return sc;
      }
   }

   var keepScore = score();

   var q1 = new Question('What is the name of this course\'s teacher',
                         ['John','Micheal','Jonas'],
                          2);
   
   var q2 = new Question('Is Javascript the coolest programming language in the world?',
                          ['Yes','No'],
                           0);
   
   var q3 = new Question('What does best describe coding?',
                         ['Hard','Fun','Boring','Tedious'],
                          1);
   
   var questions = [q1,q2,q3];

   nextQuestion();

   function nextQuestion(){

      var random = (Math.floor(Math.random() * questions.length));

      questions[random].displayQuestion();
      
      var ans = prompt('Please select the correct answer.');
      
      if(ans !== 'exit'){
         questions[random].checkAnswer(parseInt(ans),keepScore);
         nextQuestion();
      }
   }
})();


                       