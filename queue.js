const isempty_el=document.querySelector("#isempty_value");
const size_el=document.querySelector("#size_value");
const peek_el=document.querySelector("#peek_value");
const element_container=document.querySelector(".element");





let count=0;


function size()
{
    size_el.textContent=count;
    isempty_el.textContent="";
    peek_el.textContent="";
}
function isEmpty()
{
   isempty_el.textContent= count===0 ? "True":"False";
   peek_el.textContent="";
   size_el.textContent="";
}


function peek()
{
      const first_element = element_container.querySelector(".element_text span");
    
    if (first_element && count > 0) {
        peek_el.textContent = first_element.textContent;
    } else {
        peek_el.textContent = "Null";
    }
    size_el.textContent="";
    isempty_el.textContent="";
}

function enqueue()
{
    if(count>=7)
{
    alert(" The Queue is Full.Please perform dequeue operation first to visualize more.");
    return;
}


const user_input_value=document.querySelector(".text_field").value.trim();
if(user_input_value=="") return;


const text=document.querySelector(".element_text");
if(text && text.textContent.trim() === "Null" && element_container.children.length === 1 )
{
    element_container.removeChild(text);
}

const element=document.createElement("div");
element.className="element_text";

const inner_element=document.createElement("h3");
inner_element.className="size_text_show";
inner_element.innerHTML=`<span>${user_input_value}</span>`;

element.appendChild(inner_element);
element_container.appendChild(element);

count++;


document.querySelector(".text_field").value="";
isempty_el.textContent="";
size_el.textContent="";
peek_el.textContent="";

}

function dequeue()
{
    if(count<=0)
{
    alert("The queue is empty so dequeue operation cant be performed.")
    return;
}
const text=document.querySelector(".element_text");
if(text && text.textContent.trim() === "Null" && element_container.children.length === 1 )
{
    return;
}
const first_element=document.querySelector(".element_text");
if(first_element)
{
    element_container.removeChild(first_element);
    count--;
    
}

 if (count === 0) 
{
    const nullEl = document.createElement("div");
    nullEl.className = "element_text";
    nullEl.innerHTML = `<h3 class="size_text_show"><span>Null</span></h3>`;
    element_container.appendChild(nullEl);
    peek_el.textContent = "Null";
}

isempty_el.textContent="";
size_el.textContent="";
peek_el.textContent="";
}

function reset() {
    
    element_container.innerHTML = "";

    
    const nullEl = document.createElement("div");
    nullEl.className = "element_text";
    nullEl.innerHTML = `<h3 class="size_text_show"><span>Null</span></h3>`;
    element_container.appendChild(nullEl);

    
    count = 0;
    

    
    document.querySelector(".text_field").value = "";
isempty_el.textContent="";
size_el.textContent="";
peek_el.textContent="";
}
