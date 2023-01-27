const btn = document.getElementById('bt1');
btn.addEventListener('click', newProduct)

function newProduct(){
    let pname1=document.getElementById('pname').value;
let description1=document.getElementById('description').value;

let img1=document.getElementById('img1').value;

let price1=document.getElementById('price').value;





var itemsfromhtml= {pname:pname1, description:description1, img:img1, price:price1, }
var newobject=new ItemsController(0);

newobject.addItem(itemsfromhtml);
newobject.display();

const source = document.getElementById('add').innerHTML;

const template = Handlebars.compile(source)

const context = {};
  context.namefull=pname1;
  
  


    const compiledHtml = template(context)

    const information = document.getElementById('message')
    information.innerHTML = compiledHtml

};