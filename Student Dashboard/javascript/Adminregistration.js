
var form = document.getElementById('form')
form.addEventListener('submit',function(e){
e.preventDefault()
var name = document.getElementById("Name").value
var username = document.getElementById("userName").Value
var uniqname = document.getElementById("UniqName").Value
var password = document.getElementById("Password").value





    fetch("http://localhost:3000/admin",{

        method:'POST',
        body:JSON.stringify({
            name:name,
           username:username,
            uniqname:uniqname,
            password: password,
            
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()

    })
   

})


