
let user = document.getElementById('user')
let btn = document.getElementById('btn')
let preloader = document.getElementById('preloader')

user.style.display = 'none'


btn.onclick = () =>{
    if(user.style.display == 'block'){
        preloader.style.display = 'block'
        btn.style.display = 'none'
    }else{
        user.style.display = 'block'
        preloader.style.display = 'none'
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    data.forEach((item) =>{
        user.innerHTML += `<h1 style="margin-bottom: 5px;"> Name: ${item.name}  </h1>
        <p>Username: <b>${item.username}</b> </br>
        email: <b>${item.email}</b> </br>
        ID: <b>${item.ide}</b> </br> <p>
        <hr>`

    })
})