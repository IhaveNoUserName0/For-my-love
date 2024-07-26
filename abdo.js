let container = document.querySelector('.container');
let sources = ['xflower1.png','xflower2.png','xflower3.png','xflower4.png','xflower5.png','xflower6.png'];
let texts = ['I will always love you <3',
            'انتي احلي حاجة حصلتلي',   
            'بحبك اوي يا اجمل و احلي بنت في الدنيا كلها',
            'you are the sweetest gf ever',
            'You will always be my favorite <3',
            'بعشقك يحياتي و هفضل اعشقك دايما'
            ];
let img = document.getElementById('img');
let txt = document.querySelector('.txt');
let page = document.getElementById('page');
const getRandInt = (num) => {
    return Math.floor(Math.random() * num);
}
container.addEventListener('click', () => {
    page.classList.toggle('flip');
    if(page.classList.contains('flip')){
        img.src = sources[getRandInt(sources.length)];
        txt.textContent = texts[getRandInt(texts.length)];
    }
});