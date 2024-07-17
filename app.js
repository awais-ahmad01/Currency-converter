const apiKey = "59c2cd42d5bda1c236a20d7e";

const URL = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/EUR/GBP`;

const URLL = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/`;

const inputAmount = document.querySelector('.amount input');

const selectList = document.querySelectorAll('.select-container select');

const selectFrom = document.querySelector('.select-from');

const selectTo = document.querySelector('.select-to');

const image1 = document.querySelector('.from-img');

const image2 = document.querySelector('.to-img');

const msg = document.querySelector('.msg');

const btn = document.querySelector('.btn');



for(const select of selectList){
    for(const ccode in countryList){
        const optionElement = document.createElement('option');
        optionElement.innerText = ccode;
        optionElement.value = ccode;
        select.append(optionElement);

        if(select.name === 'from' && ccode === 'USD'){
            optionElement.selected = 'selected';
            
        }

        if(select.name === 'to' && ccode === 'PKR'){
            optionElement.selected = 'selected';
            
        }
    
    }
}


selectFrom.addEventListener('change', (event)=>{
    image1.src= `https://flagsapi.com/${countryList[event.target.value]}/flat/64.png`;
})


selectTo.addEventListener('change', (event)=>{
    image2.src= `https://flagsapi.com/${countryList[event.target.value]}/flat/64.png`;
})


const fetchData = async ()=>{
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${selectFrom.value}/${selectTo.value}`);

    let data = await response.json();

    // console.log(data);

    // console.log(data.conversion_rate)

    // console.log(inputAmount.value * data.conversion_rate)

    msg.innerText = `${inputAmount.value}${selectFrom.value} = ${Math.floor(inputAmount.value * data.conversion_rate)}${selectTo.value}`;


    
}

const animation = ()=>{
    var timeline = gsap.timeline();

    timeline.from("#arrow-icon", {
        rotate:360,
        duration:0.3,
        
    })

    timeline.from(".msg", {
        y:-10,
        opacity:0,
        duration:0.3,
    })

    gsap.to(".msg", {
        backgroundColor:'green',
        color: 'white',
        borderRadius: 4,
        padding: 4,
        border: '2px solid black'
    })
}


btn.addEventListener('click', (event)=>{
    event.preventDefault();
    fetchData();
    animation();
});








