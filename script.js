
let getUser = document.getElementById('getUser')
let userImage = document.getElementById('userImage')
let heading = document.getElementById('additionalInfo')
let userName = document.getElementById('name')


let ageButton = document.getElementById('AGE')
let emailButton = document.getElementById('EMAIL')
let phoneButton = document.getElementById('PHONE')
let gotData = false;


fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((data) => {
            let userData = data.results
            gotData = true;
            let x = 0
            userImage.src = userData[x].picture.large
            userName.innerText = userData[x].name.first + " " + userData[x].name.last

            ageButton.addEventListener("click",() => {
                heading.innerText = userData[x].dob.age
            })
            emailButton.addEventListener("click",() => {
                heading.innerText = userData[x].email
            })
            phoneButton.addEventListener("click",() => {
                heading.innerText = userData[x].phone
            })

            getUser.addEventListener("click",() => {
                heading.innerText = ""
                fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((data) => {
            let userData = data.results
            gotData = true;
            let x = 0
            userImage.src = userData[x].picture.large
            userName.innerText = userData[x].name.first + " " + userData[x].name.last

            ageButton.addEventListener("click",() => {
                heading.innerText = userData[x].dob.age
            })
            emailButton.addEventListener("click",() => {
                heading.innerText = userData[x].email
            })
            phoneButton.addEventListener("click",() => {
                heading.innerText = userData[x].phone
            })
        })
            })
            
        })