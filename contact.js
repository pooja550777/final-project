//handlebar--open

const Ram =this.document.getElementById('view').innerHTML
 
const btn1=this.document.getElementById('bt1')
 btn1.addEventListener('click', after);

 function after()
 {
    const template = Handlebars.compile(Ram);
     var personName = document.getElementById('name').value;
     var Email = document.getElementById('email').value;
     var Number = document.getElementById('number').value;
     var Subject = document.getElementById('subject').value;
     var Message = document.getElementById('yourmessage').value;
     
   
     const replacement = {
        personName1:personName.value,
        Email1:Email.value,
        Number1:Number.value,
        Subject1:Subject.value,
        Message1:Message.value
     };
     console.log(replacement);
 }
     




