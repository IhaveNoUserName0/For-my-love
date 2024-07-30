let container = document.querySelector('.container');
let sources = ['xflower1.png','xflower2.png','xflower3.png','xflower4.png','xflower5.png','xflower6.png'];
let texts = ['I will always love you <3',
            'I am lucky to have you <3',   
            'You are the best thing that ever happened to me <3',
            'You are the sweetest person ever <3',
            'You will always be my favorite <3',
            'I love you so much <3',
            ];
let i = 0;
let img = document.getElementById('img');
let txt = document.querySelector('.txt');
let page = document.getElementById('page');

container.addEventListener('click', () => {
    page.classList.toggle('flip');
    if(page.classList.contains('flip')){
        i++;
        img.src = sources[i%sources.length];
        txt.textContent = texts[i%texts.length];
    }
});

