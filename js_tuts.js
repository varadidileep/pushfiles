document.getElementById("getbtn").addEventListener("click" , getbtn)
document.getElementById("getbtn1").addEventListener("click" , getbtn1)
document.getElementById("getposts").addEventListener("click" , getposts)

function getposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>{
        let data1 = "<h2> posts</h2>";
        data.forEach(function(data){
            data1 += `
            <ul>
            <li> ID : ${data.id}</li>
            
            <li> TITLE : ${data.title}</li>
            <li>BODY: ${data.body} </li>
            </ul>
            `;
            document.getElementById("output").innerHTML = data1;
        })
    })
}

function getbtn1(){
    fetch('sample.json')
    .then((res)=>res.json())
    .then((data)=>{
        let output = "<h2>users</h2>"
        data.forEach(user => {
            output +=  `
           <table style = "width : 20%">
           <tr>
          <th>   </th>
          <th>   </th>
          <th>   </th>
           </tr>


           <tr>
           
            <td> ${user.id}</td>
            <td> ${user.name}</td>
            <td> ${user.city}</td>
          </tr>
          
           </table>
            `;
            document.getElementById("output").innerHTML = output
        });
    })
}
function getbtn(){
    fetch('sample.txt')
    .then((res)=> res.text())
    .then((data)=>{
    document.getElementById("output").innerHTML = data;
    })
}
var obj = {
    name : "Dileep",
    review  : "good"
};
Object.freeze(obj)

console.log(obj)
