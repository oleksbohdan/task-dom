let countryList = [
    {
        country: "Україна",
        capital:"Київ",
        count: 40000000

    },

    {
        country: "Грузія",
        capital:"Тбілісі",
        count: 10000000

    },

    {
        country: "Великобританія",
        capital:"Лондон",
        count: 100000000
    },

    {
        country: "США",
        capital:"Вашингтон",
        count: 300000000
    }
];

let list = document.createElement('ol');
document.body.prepend(list);
for(let i in countryList){
    let country = document.createElement('li');
    for(let each in countryList[i]){
        let p = document.createElement('p');
        switch (each) {
            case 'country':
                if(countryList[i][each] === 'Україна') p.style.backgroundColor='skyblue';
                p.innerText = countryList[i][each];
                break;
            case 'capital':
                if(countryList[i][each] === 'Київ') p.style.backgroundColor = 'yellow';
                p.innerText = `Столиця: м.${countryList[i][each]}`;
                break;
            case 'count':
                p.innerText = `Населення: ${countryList[i][each] / 1000000} млн.`;
                break;
        }
        country.append(p);
    }
    list.append(country);
}

let clickMe = document.getElementById('click-me');
let modal = document.getElementById('modal');
let close = document.getElementById('close');

clickMe.addEventListener('click', function () {
    modal.style.display = 'flex';
});

close.addEventListener('click', function () {
    modal.style.display = 'none';
});

let container = document.getElementById('inner-container');
document.getElementById('item-add').addEventListener('click',function () {
    let item = document.createElement('div');
    item.id = `item-${container.querySelectorAll('.item').length}`;
    item.className = 'item';
    item.innerText = item.id;
    container.append(item);
});

let setColorButton = document.getElementById('set-color-button');
setColorButton.addEventListener('click', function () {
    let idInput = document.getElementById('item-id-input');
    let colorInput = document.getElementById('item-color-input');
    let item = document.getElementById(`item-${idInput.value}`);
    item.style.backgroundColor = colorInput.value;
});

