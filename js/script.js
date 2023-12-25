    let tmpPlaceHolder;

    function hidePlaceholder(e) {
        tmpPlaceHolder = e.placeholder;
        e.placeholder = "";
    }

    function showPlaceholder(e) {
        e.placeholder = tmpPlaceHolder;
    }

    let begin_btn = document.querySelector("#begin-btn");

    begin_btn.addEventListener("mousedown", function (e) {
        e.target.style.background = "rgb(74, 95, 91)";
    });

    begin_btn.addEventListener("mouseup", function (e) {
        e.target.style.background = "rgb(0, 160, 130)";
    });
    function addCategory(imgSrc, category) {
        let clone = document.importNode(template.content, true);
        clone.querySelector('img').src = imgSrc;
        let span = clone.querySelector('span');
        span.textContent = category;
        let categoriesContainer = document.querySelector('.categories');
        let hr = clone.querySelector("hr");
    
        hr.textContent = '';
    
        categoriesContainer.appendChild(clone);
        span.classList.add('font-weight-bold'); 
        span.style.fontSize = "0.8em";
        hr.style.borderColor = "#DD6F22";
    }
    
    

    var template = document.querySelector('#template-category');

    let food = {
        imgSrc: "img/food.png",
        category: 'Їжа',
    };
  
    
    addCategory(food.imgSrc, food.category);
    
    let courier = {
        imgSrc: "img/courier.png",
        category: 'Кур`єрська доставка',
    };
    
    addCategory(courier.imgSrc,courier.category);

    let health = {
        imgSrc:"img/health.png",
        category: "Здоров'я та краса",
    }

    addCategory(health.imgSrc,health.category);

    let supermarket = {
        imgSrc:"img/supermarket.png",
        category: "Супермаркети",
    }

    addCategory(supermarket.imgSrc,supermarket.category);

    var cafeTemplate = document.querySelector("#cafe-template");
    
    function addCafe(cafe,discountBool) {
    
        let clone = document.importNode(cafeTemplate.content, true);
        let cafeContainer = document.querySelector(".cafes");
        let discount = clone.querySelector(".discount");
        let cafeCategory = clone.querySelector(".cafe-category");
        clone.querySelector(".ref").href =cafe.reference;
        clone.querySelector(".back-and-category").style.backgroundImage = `url(${cafe.background})`;
        if(discountBool){
            discount.style.opacity=1;
            discount.textContent="-20%";
            cafeCategory.style.marginBottom="1em";
        }
        clone.querySelector('.cafe-category').textContent = cafe.cafe_category;
        clone.querySelector('.cafe-name').textContent = cafe.cafe_name;
        clone.querySelector('.like-percent').textContent = cafe.like_percent;
        if(cafe.like_in_digits==500){
            clone.querySelector('.like-in-digits').textContent = `(${cafe.like_in_digits}+)`;
        }
        else{
            clone.querySelector('.like-in-digits').textContent = `(${cafe.like_in_digits})`;
        }
    
        cafeContainer.appendChild(clone);
    }
    document.addEventListener('DOMContentLoaded', function() {
        let mcdonalds = {
            background: "https://images.deliveryhero.io/image/stores-glovo/stores/876d3d51ca6af796b1e1ce0d35e42945eb289fb14e663af0b8cdd35e6429c0e9?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
            cafe_category: "Американська",
            cafe_name: "McDonald`s",
            like_percent: "95%",
            like_in_digits: 500,
            reference:"html/mcdonalds.html",
        };
        let vlavashe = {
            background:"https://images.deliveryhero.io/image/stores-glovo/stores/66163f8ddad4fcc5f034a89673a4a7bf09248e0d2349bdeaae61211214c1db3d?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
            cafe_category: "Бургери",
            cafe_name:"VLAVASHE",
            like_percent:"96%",
            like_in_digits:500,
            reference:"html/vlavashe.html",
        }
        let atb = {
            background: "https://images.deliveryhero.io/image/stores-glovo/stores/6f6fe16a57b028a92e41d3814e053b0f39c9b0ae9733d85a1bf2c9c833fb07cc?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
            cafe_category: "Супермаркети",
            cafe_name:"ATB/АТБ",
            like_percent:"94%",
            like_in_digits:191,
            reference:"html/atb.html",
        }
        let budusushi = {
            background:"https://images.deliveryhero.io/image/stores-glovo/stores/023d377c6c98ae2de387d2d5e61e7c5f296b5ab2033a4247ff39db53e89e7856?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
            cafe_category:"Суші",
            cafe_name:"BUDUSUSHI",
            like_percent:"88%",
            like_in_digits:59,
            reference:"html/budusushi.html",
        }
        let chinchin = {
            background:"https://images.deliveryhero.io/image/stores-glovo/stores/0c0f7c9a62e080d6c0bd28eca81663b48356075c5f709e856463f1e9da4fc244?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
            cafe_category:"Азіатська",
            cafe_name:"Chin Chin",
            like_percent:"97%",
            like_in_digits:500,
            reference:"html/chin-chin.html",
        }
        let donerhouse = {
            background:"https://images.deliveryhero.io/image/stores-glovo/stores/a14f26b4a6f9bd77d9e3483488d7d434b1d573b0f9d6297bb70d02e803dc892e?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
            cafe_category:"Фаст-фуд",
            cafe_name: "Doner House 24",
            like_percent:"94%",
            like_in_digits:398,
            reference:"html/donerhouse.html",
        }
        let bbq24 = {
            background:"https://images.deliveryhero.io/image/stores-glovo/stores/974233a47afe3f043c9bb138de8b355bd46b453d5f1b46e215e75343bb56d5dc?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
            cafe_category:"Фаст-фуд",
            cafe_name: "BBQ 24",
            like_percent:"94%",
            like_in_digits:167,
            reference:"html/bbq24.html",
        }
        let khinkalnya = {
            background:"img/khinkalnya.jpeg",
            cafe_category:"Міжнародна",
            cafe_name:"Khinkalnya/Хінкальня",
            like_percent:"98%",
            like_in_digits:497,
            reference:"html/khinkalnia.html",
        }
        addCafe(mcdonalds,false);
        addCafe(vlavashe,true);
        addCafe(atb,false);
        addCafe(budusushi,true);
        addCafe(chinchin,false);
        addCafe(donerhouse,false);
        addCafe(bbq24,true);
        addCafe(khinkalnya,false);
    });
    
    var popularTemplate = document.querySelector("#popular-categories-template");
    function addPopularCategory(category){
        let clone = document.importNode(popularTemplate.content, true);
        clone.querySelector(".one-popular-elem").textContent=category;
        document.querySelector(".popular-categories-box").appendChild(clone);
    }
    addPopularCategory("Бургери");
    addPopularCategory("Фаст-фуд");
    addPopularCategory("Американська");
    addPopularCategory("Міжнародна");
    addPopularCategory("Піца");
    addPopularCategory("Суші");
    addPopularCategory("Шаурма");
    addPopularCategory("Азіатська");
    addPopularCategory("Італійська");
    addPopularCategory("Грузинська");

    var jobTemplate = document.querySelector("#do-you-wanna-be-template");
    
    function addJob(obj){
        let clone = document.importNode(jobTemplate.content,true);
        let jobContainer = document.querySelector(".job-box");
        clone.querySelector(".job-img").src = obj.img;
        clone.querySelector(".job-topic").textContent=obj.title;
        clone.querySelector(".job-description").textContent=obj.description;
        jobContainer.appendChild(clone);
    }
    
    let rider = {
        img: "img/rider-image.png",
        title:"Стати кур'єром",
        description:"Вас цікавить конкурентоспроможна оплата, гнучкий графік і повна самостійність? Доставляйте з Glovo!",
    }
    
    let partner = {
        img: "img/partners-image.png",
        title:"Стати партнером",
        description:"Прискорюйте зростання бізнесу разом із Glovo! Наші технології та база користувачів — ідеальний рецепт для збільшення продажів і відкриття нових можливостей!",
    }
    let career = {
        img: "img/careers-image.png",
        title:"Вакансії",
        description:"Готові до нового, захоплюючого етапу на своєму шляху? Нашій команді потрібні саме такі, як ви — амбітні, прості та приємні в спілкуванні!",
    }
    addJob(rider);
    addJob(partner);
    addJob(career);

    let jobBox = document.querySelector(".job-box");
    let riderBox = jobBox.querySelector(":nth-child(1)");
    riderBox.querySelector("a").setAttribute("href","becomeARider/becomeARider.html");