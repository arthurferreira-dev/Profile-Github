let imgDIV = document.getElementById('img');
let nameDIV = document.getElementById('name');
let usernameDIV = document.getElementById('username');
let bioDIV = document.getElementById('bio');
let folloDIV = document.getElementById('followers');
let repoDIV = document.getElementById('repos');

let btn = document.querySelector('button#btn');

const Ajax = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.github.com/users/arthurferreira-dev')
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const ajax = JSON.parse(xhr.responseText);
            let name = ajax.name
            let username = ajax.login
            let avatar = ajax.avatar_url
            let bio = ajax.bio
            let follow = `${ajax.followers} seguidores`
            let repos = ajax.public_repos
            let index = ajax.html_url

            let image = document.createElement('img');
            image.src = avatar
            image.setAttribute('width', '184')
            image.setAttribute('alt', 'Avatar Github')
            Classer(image, 'rounded-[50%] ml-auto mr-auto mb-3 mt-3')
            imgDIV.appendChild(image)

            let nm = document.createElement('h1');
            nm.innerHTML = name
            Classer(nm, 'text-2xl font-mono')
            nameDIV.appendChild(nm)

            let usnm = document.createElement('h2');
            usnm.innerHTML = username
            Classer(usnm, 'text-lg font-sans mb-3 font-light')
            usernameDIV.appendChild(usnm);

            let biobio = document.createElement('p');
            biobio.innerHTML = bio
            Classer(biobio, 'text-base font-sans w-[300px] font-medium text-justify')
            bioDIV.appendChild(biobio);

            let flw = document.createElement('p');
            flw.innerHTML = follow
            Classer(flw, 'text-base font-bold text-center font-sans')
            folloDIV.appendChild(flw)

            let rps = document.createElement('p');
            rps.innerHTML = `<i class="ri-git-repository-line font-normal"></i> ${repos} Repositórios Públicos`
            Classer(rps, 'text-base font-semibold text-center font-sans')
            repoDIV.appendChild(rps)
        }
    }
};

const GoGithub = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.github.com/users/arthurferreira-dev')
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const ajax = JSON.parse(xhr.responseText);
            let index = ajax.html_url
            window.location = index
        }
    } 
}

function Classer(element, classe) {
    element.classList.add(...classe.split(' '))
}

btn.addEventListener('click', GoGithub)

setTimeout(Ajax(), 5000);