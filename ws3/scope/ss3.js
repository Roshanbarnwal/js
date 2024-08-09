var teacher = "roshan";
function fun(){
    var teacher = "sanket";
    teachingAssistant = "vibhav"; //auto global variable.Given both scope and value during execution time.
    console.log(teacher); 
    // teachingAssistant = "vibhav"; 
    console.log(teachingAssistant); //autoglobal needs to declared first.
}
fun();
console.log(teacher);
console.log(teachingAssistant); //fun() needs to be called for autoglobal to come into existence.
{
    var teacher = "Sanket";
    function fun(){
        console.log(subject); //undefined
        // var teacher = "Pulkit";
        var subject = "Javascript";
        teachingAssistant = "vibhav02";
        console.log(teachingAssistant);
        console.log(teacher);
    }
    fun();
    console.log(teacher);
    console.log(teachingAssistant);
}
/**
 * -> What JS does is, it will start the parsing phase. Outside every thing it maintains global scope,
    but the moment it goes inside a function it starts mainting scope of that function also.

 * Phase 1 -> parsing(we will just do scope resolution)
 * whenever we declare a variable using var/let/const or initialising
 * a function, it is a formal declaration. In the parsing phase JS 
 * looks for formal declaration only. In this parsing phase we only 
 * allocate scope, not value to the variable.
 * 
 * Phase 2 -> Execution i.e. either assigning value or retrieving value or 
 * function call.
 */
/**
 * Auto globals -> In JS if we keep on searching scope of a variable in outer
 * scopes and no where found it, we automatically consider it in global scope.
 * This happens during execution phase.
 * -> auto global only works with target reference and not source.
 */