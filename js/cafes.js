let tmpPlaceHolder;

function hidePlaceholder(e) {
    tmpPlaceHolder = e.placeholder;
    e.placeholder = "";
}

function showPlaceholder(e) {
    e.placeholder = tmpPlaceHolder;
}

function addProduct(product, selectContainer, templateSelector) {
    let container = document.querySelector(selectContainer);
    let template = document.querySelector(templateSelector);

    if (container && template) {
        let clone = document.importNode(template.content, true);
        clone.querySelector('img').src = product.img;
        clone.querySelector(".product-title").textContent = product.title;
        clone.querySelector(".product-description").textContent = product.description;
        clone.querySelector(".product-price").textContent = product.price;
        container.appendChild(clone);
    } 
}

let heets = {
    img: "https://src.zakaz.atbmarket.com/origin/photos/55023.jpg",
    title:"Тютюновмісний виріб HEETS PURPLE WAVE",
    description:"",
    price:"95,00 ₴",
}
let kinder = {
    img:"https://src.zakaz.atbmarket.com/origin/photos/1893.jpg",
    title:"Батончик 100г Kinder Chocolate",
    description:"",
    price:"63,00 ₴",
}
let bacon = {
    img: "https://src.zakaz.atbmarket.com/origin/photos/35387.jpg",
    title:"Бекон по-американськи",
    description:"",
    price:"65,00 ₴"
}
let whiskey = {
    img: "https://src.zakaz.atbmarket.com/origin/photos/53303.jpg",
    title:"Набір Віскі 0,7л Bell's Original",
    description:"",
    price:"339,00 ₴",
}
let garden = {
    img : "https://src.zakaz.atbmarket.com/origin/photos/56305.png",
    title:"Горщик для квітів 2,25 л",
    description:"",
    price:"69,00 ₴",
}
let chips = {
    img: "https://src.zakaz.atbmarket.com/origin/photos/45813.jpg",
    title: "Чипси 165 г PRINGLES",
    description:"",
    price:"139,00 ₴",
}
let candle = {
    img: "https://src.zakaz.atbmarket.com/origin/photos/21489.jpg",
    title:"Свічка ароматична",
    description:"",
    price:"99,00 ₴"
}
let yarn = {
    img: "https://src.zakaz.atbmarket.com/origin/photos/7552.jpg",
    title:"Пряжа Nako Lame Fine",
    description:"",
    price:"59,00 ₴",
}
let socks = {
    img:"https://src.zakaz.atbmarket.com/origin/photos/7978.jpg",
    title:"Шкарпетки утеплені «Нарру socks»",
    description:"",
    price:"159,00 ₴",
}
let toy = {
    img:"https://src.zakaz.atbmarket.com/origin/photos/10554.jpg",
    title:"Іграшка, що зростає Динозавр",
    description:"",
    price:"14,90 ₴",
}
let hair = {
    img:"https://src.zakaz.atbmarket.com/origin/photos/55781.png",
    title:"Фарба для волосся Palette ICC, 110",
    description:"",
    price:"65,00 ₴",
}
let mask = {
    img:"https://src.zakaz.atbmarket.com/origin/photos/12554.jpg",
    title:"Маска медична типу 1, блакитна (уп. 10 шт.)",
    description:"",
    price:"14,00 ₴",
}
addProduct(heets,"#atb-product-list","#product-template-atb");
addProduct(kinder,"#atb-product-list","#product-template-atb");
addProduct(bacon,"#atb-product-list","#product-template-atb");
addProduct(whiskey,"#atb-product-list","#product-template-atb");
addProduct(chips,"#atb-product-list","#product-template-atb");
addProduct(candle,"#atb-product-list","#product-template-atb");
addProduct(yarn,"#atb-product-list","#product-template-atb");
addProduct(socks,"#atb-product-list","#product-template-atb");
addProduct(toy,"#atb-product-list","#product-template-atb");
addProduct(hair,"#atb-product-list","#product-template-atb");
addProduct(mask,"#atb-product-list","#product-template-atb");

let cool_pair = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/422bfffb8e815ab2bf04eef303f76411bb2517016930ea09b1a98ee3cf2d4094?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Суші-бокс Кльова пара (32шт/924г)",
    description:"Рол Філадельфія Класік Рол Філадельфія Lux Гарячий рол",
    price:"559,00 ₴",
}
let mix_box = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/619627b4a4a2bf8e6b715089f170652bad46c42e97f78888a50e3ee06bf5a03a?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Суші-бокс Mix Box (40шт/1120г)",
    description:"Філадельфія Lux Філадельфія Класік Філадельфія з креветкою Філадельфія Тобіко Філадельфія Чікен Тонкацу",
    price:"599,00 ₴",
}
let family_box = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/7b750acde856b4f3883d7cd8ce1c25a108c1dac53ca512ee1db1d489b67f1dde?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Суші-бокс Family Box (48шт/1345г)",
    description:"Філадельфія Класік Філадельфія з креветкою Гарячий рол Філадельфія Темпура (гостре) Гарячий рол Гарячий Самурай (гостре) Каліфорнія з крабом у кунжуті Філадельфія Чікен Тонкацу",
    price:"599,00 ₴",
}
let salmon_inside = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/aee72a49d624af040f28fef51ea2620efcc2687090dd7491c461fe14ff1e8328?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Суші-бокс Лосось Інсайд 1кг (38шт/1012г)",
    description:"Філадельфія Аляска Філадельфія Лосось Боніто Гарячий рол Філадельфія Темпура (гостре) Гарячий рол Сяке Темпура Макі Лосось",
    price:"579,00 ₴",
}
let for_three = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/f8d5e900edea4749887d44ec7807123394e9c5f9eb97765fca233435d96cb65e?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Суші-бокс для трьох (30шт/738г)",
    description:"Рол Філадельфія класік, рол Філадельфія тобіко, рол Каліфорнія з лососем теріякі, макі сніжний краб",
    price:"459,00 ₴",
}
let philadelphia_dream = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/539762b3b7aef90df4b00a2c8ba60570b51a2e54bce1937e82644e94bdb4caa8?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
    title:"Суші-бокс Філадельфія дрім (30шт/735г)",
    description:"Рол Філадельфія класік, рол Філадельфія з тунцем, рол Філадельфія тобіко, макі огірок",
    price:"399,00 ₴",
}
let most_profitable = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/2158b6a094b86d53ab78ab92fa36d3a5bb7efaeb941fd07a87f8c7687d785321?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Суші-бокс Найвигідніший (26шт/663г)",
    description:"Рол Філадельфія Міні, Гарячий рол Лосось Чіз, Рол Каліфорнія з крабом у кунжуті, Макі Сніжний краб",
    price:"349,00 ₴",
}
let euphoria = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/bc025bfc126271086efda912fedcc1037cd0fa18365c8052c93e35d9095b35ca?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Суші-бокс Ейфорія (22шт/523г)",
    description:"Рол Філадельфія з лососем у кунжуті, Гарячий рол Філадельфія Темпура, Макі Огірок",
    price:"271,00 ₴",
}
addProduct(cool_pair,"#budusushi-product-list","#product-template-budusushi");
addProduct(mix_box,"#budusushi-product-list","#product-template-budusushi");
addProduct(family_box,"#budusushi-product-list","#product-template-budusushi");
addProduct(salmon_inside,"#budusushi-product-list","#product-template-budusushi");
addProduct(for_three,"#budusushi-product-list","#product-template-budusushi");
addProduct(philadelphia_dream,"#budusushi-product-list","#product-template-budusushi")
addProduct(most_profitable,"#budusushi-product-list","#product-template-budusushi");
addProduct(euphoria,"#budusushi-product-list","#product-template-budusushi");

let shawarma_big_assorti = {
    img:"../img/shawarma-big-assorti.webp",
    title:"Шаурма Велика Асорті",
    description:"Подвійна порція курячого філе, подвійна порція голандського...",
    price:"250,00₴",
    category:"ШАУРМА",
}
let shawarma_classic = {
    img:"../img/shawarma-classic.webp",
    title:"Шаурма Класична",
    description:"Куряче філе, картопля, капуста, Корейська морква, огірок, соус DH",
    price:"190,00₴",
    category:"ШАУРМА",
}
let shawarma_arabian = {
    img:"../img/shawarma-arabian.webp",
    title:"Шаурма Арабська",
    description:"Арабський лаваш, куряче філе, помідор, зелень, огірок, соус DH",
    price:"200,00₴",
    category:"ШАУРМА",
}
let shawarma_dh = {
    img:"../img/shawarma-dh.webp",
    title:"Шаурма DH",
    description:"Куряче філе, телятина, сир моцарелла, помідор, огірок, зелень, соус DH",
    price:"275,00₴",
    category:"ШАУРМА",
}
let shawarma_dorblu = {
    img: "../img/dorblu.webp",
    title:"*DORBLU* NEW",
    description: "куряче філе,сир ДОР БЛЮ ,свіжий огірок,помідорка,салатний лист,маслини,синя цибуля,соус DH",
    price:"275,00₴",
    category:"ШАУРМА",
}
let shawarma_elite = {
    img:"../img/shawarma-elite.webp",
    title:"Шаурма Елітна",
    description:"Подвійна порція курячого філе, сир Сулугуні, картопля, маслини, помідор, огірок, зелень, соус DH",
    price:"270,00₴",
    category:"ШАУРМА",
}
let doner_dh = {
    img:"../img/doner_dh.webp",
    title:"Донер DH",
    description:"Куряче філе,яловичина, сир Моцарелла, огірок, кріп, петрушка, цибуля, соус DH",
    price:"270,00₴",
    category:"ДОНЕРИ",
}
let doner_brooklyn = {
    img:"../img/doner_brooklyn.webp",
    title:"Донер Бруклін",
    description:"Куряче філе, сир Голландський, грибочки смажені на грилі с цибулькою, картопля, кріп, помідор, огірок, соус Тартар, соус Сирний",
    price:"230,00₴",
    category:"ДОНЕРИ",
}
let doner_mexico = {
    img:"../img/doner_mexico.webp",
    title:"Донер Мехіко",
    description:"Куряче філе, кукурудза, Гострий соус, помідор, огірок, цибуля, зелень, соус DH",
    price:"220,00₴",
    category:"ДОНЕРИ",
}
let doner_3cheese = {
    img:"../img/doner_3cheese.webp",
    title:"Донер Три сира",
    description:"Куряче філе, сир Голландський, сир Моцарелла, сир Сулугуні , картопля, помідор,огірок, кріп, петрушка, цибуля, соус DH",
    price:"220,00₴",
    category:"ДОНЕРИ",
}
let doner_classic = {
    img:"../img/doner_classic.webp",
    title: "Донер Класичний",
    description:"Куряче філе, картопля, помідор,огірок, кріп, петрушка, цибуля, соус DH",
    price:"185,00₴",
    category:"ДОНЕРИ",
}
let doner_vegan = {
    img:"../img/doner_vegan.webp",
    title:"Донер Веганський",
    description:"Картопля, кукурудза, салатний лист, зелень, помідор, огірок, соус DH",
    price:"170,00₴",
    category:"ДОНЕРИ",
}
addProduct(shawarma_big_assorti,"#donerhouse-best-list","#donerhouse-product-template");
addProduct(shawarma_classic,"#donerhouse-best-list","#donerhouse-product-template");
addProduct(shawarma_arabian,"#donerhouse-best-list","#donerhouse-product-template");
addProduct(shawarma_dh,"#donerhouse-shawarma-list","#donerhouse-product-template");
addProduct(shawarma_dorblu,"#donerhouse-shawarma-list","#donerhouse-product-template");
addProduct(shawarma_elite,"#donerhouse-shawarma-list","#donerhouse-product-template");
addProduct(shawarma_big_assorti,"#donerhouse-shawarma-list","#donerhouse-product-template");
addProduct(shawarma_classic,"#donerhouse-shawarma-list","#donerhouse-product-template");
addProduct(shawarma_arabian,"#donerhouse-shawarma-list","#donerhouse-product-template");
addProduct(doner_dh,"#donerhouse-doners-list","#donerhouse-product-template");
addProduct(doner_brooklyn,"#donerhouse-doners-list","#donerhouse-product-template");
addProduct(doner_mexico,"#donerhouse-doners-list","#donerhouse-product-template");
addProduct(doner_3cheese,"#donerhouse-doners-list","#donerhouse-product-template");
addProduct(doner_classic,"#donerhouse-doners-list","#donerhouse-product-template");
addProduct(doner_vegan,"#donerhouse-doners-list","#donerhouse-product-template");


let adjarian_khachapuri = {
    img: "../img/khinkalnia-adjarian.khachapuri.webp",
    title:"Хачапурі по-аджарські (300г)",
    description:"Традиційний грузинський хачапурі, у відкритій формі, з ароматного тіста і",
    price:"140,00₴",
}
let pork_shashlik = {
    img:"../img/khinkalnia-shashlik.webp",
    title: "Шашлик зі свинини (250*г)",
    description:"Соковита свиняча шия, попередньо замаринована за класичним рецептом.",
    price:"175,00 ₴",
}
let kharcho = {
    img:"../img/khinkalnia-harcho.webp",
    title:"Суп Харчо (300г)",
    description:"Наваристий, гостро-пряний томатний суп зварений на яловичині, з додаванням рису",
    price:"89,00 ₴",
}
let khinkali_with_meat = {
    img:"../img/meat-khinkali.webp",
    title:"Хінкалі з м'ясом (80г)",
    description:"Хінкалі – національна грузинська страва. В формі мішечка із щільного прісного тіста",
    price:"20,00 ₴",
}
let khinkali_with_meat_and_green = {
    img:"../img/khinkali-with-meat-and-green.webp",
    title:"Хінкалі з зеленню та м'ясом (80г)",
    description:"Хінкалі – національна грузинська страва. В формі мішечка із щільного прісного тіста з",
    price:"20,00 ₴",
}
let khinkali_with_cheese = {
    img:"../img/khinkali-with-meat-and-green.webp",
    title:"Хінкалі з сиром (80г)",
    description:"Хінкалі – національна грузинська страва. В формі мішечка із щільного прісного тіста з",
    price:"20,00 ₴",
}
let khachapuri_megrel = {
    img:"../img/khachapuri-megrel.webp",
    title:"Хачапурі по-мегрельськи",
    description:"Класичний сирний хачапурі круглої форми, духмяний та з хрусткою скоринкою",
    price:"135,00 ₴",
}
let khachapuri_gvezeli = {
    img:"../img/khachapuri-gvezeli.webp",
    title:"Хачапурі Гвезелі з куркою, сиром та шампіньйонами (250г)",
    description:"Запашний та дуже ситний виріб в формі півмісяця із дріжджового тіста та соковитої",
    price:"125,00 ₴",
}
let khachapuri_habizgina = {
    img:"../img/khachapuri-megrel.webp",
    title:"Хачапурі Гурулі (220г)",
    description:"Хачапурі в формі півмісяця, випікається із дріжджового тіста і начинкою з соковитого",
    price:"85,00 ₴",
}
let khachapuri_guruli = {
    img:"../img/khachapuri-gvezeli.webp",
    title:"Хачапурі Гурулі (220г)",
    description:"Хачапурі в формі півмісяця, випікається із дріжджового тіста і начинкою з соковитого",
    price:"85,00 ₴",
}
addProduct(adjarian_khachapuri,"#khinkalnia-best-list","#product-template-khinkalnia");
addProduct(pork_shashlik,"#khinkalnia-best-list","#product-template-khinkalnia");
addProduct(kharcho,"#khinkalnia-best-list","#product-template-khinkalnia");
addProduct(khinkali_with_meat,"#khinkalnia-khinkali-list","#product-template-khinkalnia");
addProduct(khinkali_with_meat_and_green,"#khinkalnia-khinkali-list","#product-template-khinkalnia");
addProduct(khinkali_with_cheese,"#khinkalnia-khinkali-list","#product-template-khinkalnia");
addProduct(adjarian_khachapuri,"#khinkalnia-khachapuri-list","#product-template-khinkalnia");
addProduct(khachapuri_megrel,"#khinkalnia-khachapuri-list","#product-template-khinkalnia");
addProduct(khachapuri_gvezeli,"#khinkalnia-khachapuri-list","#product-template-khinkalnia");
addProduct(khachapuri_habizgina,"#khinkalnia-khachapuri-list","#product-template-khinkalnia");
addProduct(khachapuri_guruli,"#khinkalnia-khachapuri-list","#product-template-khinkalnia");

let double_royale = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/9238630b3f3b9a1d54631abc4c462da4fc82e971939ca22c2439c0f2f276069e?t=W3sicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19LHsid2VicCI6eyJxIjoibG93In19XQ==",
    title:"ДАБЛ РОЯЛ ЧІЗБУРГЕР МЕНЮ",
    description:"",
    price:"278,00 ₴",
}
let big_tasty = {
    img:"../img/big-tasty.webp",
    title:"БІГ ТЕЙСТІ МЕНЮ",
    description:"",
    price:"272,00 ₴",
}
let just_big_tasty = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/95c2b4c7450c55129f69533890a46e2a981b4c4e5d9557597e4794c4d03ca15b?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"БІГ ТЕЙСТІ",
    description:"",
    price:"205,00 ₴",
}
let big_mac_menu = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/74b558eb50da08247923b0555d61525f6fee35115fd936f1c883e5148b830a48?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"БІГ МАК МЕНЮ",
    description:"",
    price:"203,00 ₴",
}
let macchicken_menu = {
    img:"../img/mcchicken-menu.webp",
    title:"МАКЧІКЕН МЕНЮ",
    description:"",
    price:"191,00 ₴",
}
let double_cheeseburger_menu = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/43a6c7155469c4f4c2b931308dc85cdeaa4ccc37d22024b3816bc9041a093ed4?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"ДАБЛ ЧІЗБУРГЕР МЕНЮ",
    description:"",
    price:"187,00 ₴",
}
let chicken_mcnuggets = {
    img: "https://images.deliveryhero.io/image/menus-glovo/products/e2b3bd474146ef7cfcebfc369f2ecad47d99135f10494a547549bb07779e2fda?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"ЧІКЕН МАКНАГЕТС 9ШТ",
    description:"",
    price:"127,00 ₴",
}
let big_mac = {
    img: "https://images.deliveryhero.io/image/menus-glovo/products/5e9711fdd2ea5a7adf4492d97b56498d0184e3c54910d6637191e45778880f1b?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"БІГ МАК",
    description:"",
    price:"123,00 ₴",
}
let chicken_roll = {
    img: "https://images.deliveryhero.io/image/menus-glovo/products/d9a3b37628fc2299fafe36346c6e8b0eaf0afb5d7f8c03d656d2becf46771493?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title: "ЧІКЕН РОЛ",
    description:"",
    price:"123,00 ₴",
}
let double_cheeseburger = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/05282aaa79a7f05e43668d7841e09dc3c0021456a6c5e4f21ccd1cfe5988b5dd?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"ДАБЛ ЧІЗБУРГЕР",
    description:"",
    price:"104,00 ₴",
}

addProduct(double_royale,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(big_tasty,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(just_big_tasty,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(big_mac_menu,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(macchicken_menu,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(double_cheeseburger_menu,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(chicken_mcnuggets,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(big_mac,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(chicken_roll,"#mcdonalds-product-list","#mcdonalds-product-template");
addProduct(double_cheeseburger,"#mcdonalds-product-list","#mcdonalds-product-template");

function addProductDontWork(product, selectContainer, templateSelector) {
    let container = document.querySelector(selectContainer);
    let template = document.querySelector(templateSelector);

    if (container && template) {
        let clone = document.importNode(template.content, true);
        clone.querySelector(".dont-work-title").textContent = product.title;
        clone.querySelector(".dont-work-category").textContent = product.category;
        clone.querySelector(".dont-work-image img").src=product.image;
        container.appendChild(clone);
    } 
}
let promo = {
    title:"Промоакції",
    category:"Акції",
    image:"../img/vlavashe1.jpeg",
}
let combo = {
    title:"КОМБО",
    category:"-30%",
    image:"../img/vlavashe-combo.jpeg",
}
let shawarma = {
    title: "ШАУРМА",
    category:"-30%",
    image:"../img/vlavashe-shawarma.jpeg",
}
let burger = {
    title: "БУРГЕРИ",
    category:"",
    image:"../img/vlavashe-burger.jpeg",
}
let sandwich = {
    title: "СЕНДВІЧІ",
    category:"-20%",
    image:"../img/vlavashe-sandwich.jpeg",
}
let veggie = {
    title: "VEGGIE",
    category:"",
    image:"../img/vlavashe-veggie.jpeg",
}
let french_fries = {
    title: "КАРТОПЛЯ-ФРІ",
    category:"",
    image:"../img/vlavashe-french-fries.jpeg",
}
let drinks = {
    title: "НАПОЇ",
    category:"",
    image:"../img/vlavashe-drinks.jpeg",
}
let beer = {
    title : "ПИВО ТА ЕНЕРГЕТИКИ",
    category:"",
    image:"../img/vlavashe-beer.jpeg",
}
let sauce = {
    title : "СОУСИ",
    category:"",
    image:"../img/vlavashe-sause.jpeg",
}
addProductDontWork(promo,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(combo,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(shawarma,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(burger,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(sandwich,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(sandwich,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(veggie,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(french_fries,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(drinks,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(beer,"#vlavashe-product-list","#dont-work-product-template");
addProductDontWork(sauce,"#vlavashe-product-list","#dont-work-product-template");

let noodles_shrimp = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/150f0c6a68f31fae0befcc2352eb7b89d50e84040b4aa45bf3171a60816c7e66?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Локшина з креветками (380г)",
    description:"готується з яйцем і овочами. Локшина на вибір: яєчна, рисова, або скляна.",
    price:"289,00 ₴",
}
let noodles_tom_yam = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/2bda93a55db50d5495dd4675fa380ccdba900e70658b462e919bd0b2c5c278f1?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
    title:"Локшина Том Ям з куркою (380г)",
    description:"Готується з яйцем і овочами",
    price:"229,00 ₴",
}
let noodles_chicken = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/d5fe9f136c1194224ee5ca04e44d33e591af6b91a59fb8dd91c1a7165ffcc1c2?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
    title:"Локшина з куркою (400г)",
    description:"готується з яйцем і овочами. Локшина на вибір: яєчна, рисова, або скляна.",
    price:"198,00 ₴",
}
let rice_chicken = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/b849c27a3ae522fdb315c96e5b9ee2621b081a06494303c4a8943f0fed6f8a91?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Рис з куркою (380г)",
    description:"Готується з яйцем і овочами. Рис на вибір: класичний або в азіатському соусі.",
    price:"198,00 ₴",
}
let chicken_pineapple = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/ef24914c93f49471b404057f4d5089ec1278ebd227c0dbde4b50b3f58e42e30c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
    title:"Курка в кисло-солодкому соусі з ананасом (340г)",
    description:"",
    price:"189,00 ₴",
}
addProduct(noodles_shrimp,"#chin-chin-product-list","#product-template-chin-chin");
addProduct(noodles_tom_yam,"#chin-chin-product-list","#product-template-chin-chin");
addProduct(noodles_chicken,"#chin-chin-product-list","#product-template-chin-chin");
addProduct(rice_chicken,"#chin-chin-product-list","#product-template-chin-chin");
addProduct(chicken_pineapple,"#chin-chin-product-list","#product-template-chin-chin");

let bbq24_big_assorti = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/11034c7b0aba6e8e59dc39f53ba32b0087fff4c0c613df93ab12922e8d7f0616?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Шаурма Класична Велика Асорті (810г)",
    description:"картопля, огірок солений,сир, гриби, соус часниковий, м’ясо х2 (куряче), лаваш.",
    price:"245,00 ₴",
}
let bbq_premium = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/9d0483cf5d341eccd3a5b1a67d40388af495d61afbe9ffd952541ed9930bd34b?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Шаурма BBQ Преміум (800г)",
    description:"картопля, помідор, зелень, маслини, сир сулугуні, соус часниковий, м’ясо х2 (куряче), лаваш.",
    price:"245,00 ₴",
}
let quattro_formaggi = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/d865cfec7b7c51d47f21d21e6148512313ea42fdbdb67a710dfcb86c5b2ded42?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Шаурма Quattro Formaggi (550г)",
    description:"салатний лист, картопля, помідор, сир чеддер, сир фета, сир сулугуні, соус сирний, м’ясо (куряче), лаваш.",
    price:"210,00 ₴",
}
let bbq_classic = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/11034c7b0aba6e8e59dc39f53ba32b0087fff4c0c613df93ab12922e8d7f0616?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Шаурма Класична Асорті (600г)",
    description:"картопля, огірок солений, сир, гриби, соус часниковий, м’ясо (куряче), лаваш.",
    price:"175,00 ₴",
}
let suluguni_meat = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/88d7f539a2d2ded60d6d0c5fc7271e506188b25d18287f5f3a31c5dfeaeac2e4?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Сулугуні з м'ясом (450г)",
    description:"помідор, зелень, сир сулугуні, соус часниковий, м’ясо (куряче), лаваш.",
    price:"175,00 ₴",
}
let shauchak_bbq24 = {
    img:"https://images.deliveryhero.io/image/menus-glovo/products/7119268010968decbdd29692939450208ca6c241455475363b5371e4383fd5e3?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo5NiwiaGVpZ2h0Ijo5Nn19XQ==",
    title:"Шаучак BBQ Асорті (550г)",
    description:"картопля, помідор, огірок (солоний ), зелень, цибуля червона, сир чеддер,соус часниковий, м’ясо (куряче), коржик.",
    price: "170,00 ₴",
}
addProduct(bbq24_big_assorti,"#bbq-product-list","#product-template-bbq24");
addProduct(bbq_premium,"#bbq-product-list","#product-template-bbq24");
addProduct(bbq_classic,"#bbq-product-list","#product-template-bbq24");
addProduct(suluguni_meat,"#bbq-product-list","#product-template-bbq24");
addProduct(shauchak_bbq24,"#bbq-product-list","#product-template-bbq24");