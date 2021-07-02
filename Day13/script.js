var button = document.querySelector('.btn');
var inputVal = document.querySelector('.input');
button.addEventListener("click",()=>{
    url = `https://api.github.com/users/${inputVal.value}`;     //link to get data
    fetch(url).then((responsae) => {
        return responsae.json();              
    }).then((data) => {
        console.log(data);
        str="";
            str += `<li>Name: ${data.name}</li>`
            str += `<li>Login: ${data.login}</li>`
            str += `<li>Id: ${data.id}</li>`
            str += `<li>Node_id: ${data.node_id}</li>`
            str += `<li>Img Url: ${data.avatar_url}</li>`
            str += `<li>Company: ${data.company}</li>`
            str += `<li>Location: ${data.location}</li>`
            str += `<li>Email: ${data.email}</li>`
            str += `<li>Followewrs: ${data.followers}</li>`
        document.querySelector('.content').innerHTML = str;
    })
});