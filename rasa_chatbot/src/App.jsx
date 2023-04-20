import React, { useState } from "react";

function App() 
{

    const[item,setitem] = useState("");
    const[listarray,setlistarray] = useState([]);


    function onchangehandler(event)
    {
        setitem(event.target.value);
    }

    function strike(id)
    {
        alert("I have been clicked");
        console.log(id);
        let list = document.getElementById("todolist");
        var lis = list.getElementsByTagName("li");  
        var len = lis.length;
        var a = 0;
        while(a < len)
        {
            if(lis[a].id == id)
            {
                var current_item = lis[a];
                current_item.style = "text-decoration:line-through"
                console.log("yaya");
                break;
            }
            a++;
        }
        //var current_item = lis.getElementById(id);
        //current_item.style = "text-decoration:line-through";
    }
    function onclickhandler()
    {
        if(listarray.length >= 5 && item != "")
        {
            alert("Too many tasks for today. Let's finish those first");
        }

        else
        {
            
            listarray.push(item);
            let list = document.getElementById("todolist");
            let li = document.createElement("li");
            li.innerText = item;
            li.id = item;
            var button = document.createElement("button");
            button.className = "normal";
            button.id = item;
            //button.onclick = strike(button.id);
            button.onclick = function(){
                //alert('here be dragons');return false;
                let list = document.getElementById("todolist");
                var lis = list.getElementsByTagName("li");  
                var len = lis.length;
                var a = 0;
                while(a < len)
                {
                    if(lis[a].id == item)
                    {
                        var current_item = lis[a];
                        current_item.style = "text-decoration:line-through"
                        console.log("yaya");
                        break;
                    }
                    a++;
                }
            };
            //console.log(button.id);
            button.innerHTML = "Done";
            li.append(button);
            list.appendChild(li);
        }
        
        var inp = document.getElementById('inp');
        inp.value = "";
        console.log(listarray.length);

        
    }
    function clearhandler()
    {
        setlistarray([]);
        let list = document.getElementById("todolist");
        var lis = list.getElementsByTagName("li")
        while(lis.length > 0) {
            list.removeChild(lis[0]);
        }
        
    }
    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input id="inp" type="text"  onChange={onchangehandler}/>
            <button onClick={onclickhandler}>
            <span>Add</span>
            </button>
        </div>
        <div>
            <ul id = "todolist">
            </ul>
        </div>
        <button onClick={clearhandler}>
            <span>Clear</span>
        </button>
        </div>
    );
}

export default App;
