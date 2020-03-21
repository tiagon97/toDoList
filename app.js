const form = document.querySelector('form');
const list = document.querySelector('ul');
const liArray = [];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
const dateDiv = document.querySelector(".date");
dateDiv.textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;


let transparency = 0.10;
const addLiElement = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const liElement = document.createElement('li');
    liElement.innerHTML = '<i class="fas fa-check-square"></i>' + '<span>' + input.value + '</span>' + '<i class="far fa-trash-alt"></i>';
    if (input.value === "") return;
    liArray.push(liElement);
    liArray.forEach((item, key) => {
        item.dataset.key = key;
    })
    list.appendChild(liElement);
    input.value = ''
    liElement.querySelector('.far.fa-trash-alt').addEventListener("click", removeLiElement);
    liElement.querySelector('.fas.fa-check-square').addEventListener("click", uncheckTask);
    const span = liElement.querySelector('span');
    span.classList.add("liStyleSpan");
    span.style.backgroundColor = `rgba(242, 192, 174,${transparency})`;
    transparency += 0.10;
    console.log(transparency);
}

const removeLiElement = (e) => {
    e.target.parentNode.remove();
    transparency = 0.1;
    const index = e.target.parentNode.dataset.key;
    console.log(index)
    liArray.splice(index, 1);
    liArray.forEach((item, key) => {
        item.dataset.key = key;
    })
    for (let i = 0; i < liArray.length; i++) {
        liArray[i].querySelector('span').style.backgroundColor = `rgba(242, 192, 174,${transparency})`;
        transparency += 0.1;
    }

}
const uncheckTask = (e) => {
    e.target.classList.toggle("green");
    e.target.nextSibling.classList.toggle("erase");
}




form.addEventListener("submit", addLiElement);