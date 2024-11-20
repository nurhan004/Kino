const data = [
    {img:"./img/mirba1.jpg",
        info1:"Рай под ногами матер",
        sub:"Подписка"
    },
    {img:"./img/mirba1.jpg",
        info1:"Рай под ногами матер",
        sub:"Подписка"
    },
    {img:"./img/mirba1.jpg",
        info1:"Рай под ногами матер",
        sub:"Подписка"
    },
    {img:"./img/mirba1.jpg",
        info1:"Рай под ногами матер",
        sub:"Подписка"
    },
    {img:"./img/mirba1.jpg",
        info1:"Рай под ногами матер",
        sub:"Подписка"
    },
    {img:"./img/mirba1.jpg",
        info1:"Рай под ногами матер",
        sub:"Подписка"
    },
    {img:"./img/mirba1.jpg",
        info1:"Рай под ногами матер",
        sub:"Подписка"
    }
]
const root = document.querySelector(".mirba");
data.map((item, ) => {
const itemHTML =`
<a href="">
<div class="">
<img class="w-[150px] h-[230px] rounded-xl" 
src="${item.img}" alt="">
<h1>${item.info1}</h1>
<a class ="text-[#f30745] text-[13px]"
href="">${item.sub}</a>
</div>
</a>
`;
root.innerHTML += itemHTML;
});