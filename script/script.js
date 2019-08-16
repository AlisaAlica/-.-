let counter=[];

function Parse(){
let text= '{"phones":[{"ratingRevievs": "264 отзыва", "price": {"oldUan": "4 333 грн", "newUan": "3 799 грн"}, "name": "Motorola MOTO G4 (XT1622) Black"}, {"ratingRevievs": "1355 отзывов", "price": "4 999 грн", "name": "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"}, {"ratingRevievs": "426 отзывов", "price": "5 199 грн", "name": "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"}, {"ratingRevievs": "403 отзыва", "price": "4 349 грн", "name": "Xiaomi Redmi Note 4X 3/32GB Black"}, {"ratingRevievs": "488 отзывов", "price": "6 199 грн", "name": "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"}, {"ratingRevievs": "198 отзывов", "price": {"oldUan": "3 495 грн", "newUan": "2 995 грн"}, "name": "Lenovo K5 (A6020a40) Silver"}, {"ratingRevievs": "352 отзыва", "price": {"oldUan": "9 799 грн", "newUan": "7 999 грн"}, "name": "Apple iPhone 5s 16GB Space Gray"}, {"ratingRevievs": "59 отзывов", "price": "5 999 грн", "name": "Nokia 5 Dual Sim Tempered Blue"}, {"ratingRevievs": "119 отзывов", "price": "11 999 грн", "name": "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"}, {"ratingRevievs": "1106 отзывов", "price": "3 999 грн", "name": "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"}, {"ratingRevievs": "380 отзывов", "price": "2 199 грн", "name": "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"}, {"ratingRevievs": "86 отзывов", "price": {"oldUan": "24 999 грн", "newUan": "22 999 грн"}, "name": "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"}, {"ratingRevievs": "177 отзывов", "price": "6 499 грн", "name": "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"}, {"ratingRevievs": "347 отзывов", "price": "4 299 грн", "name": "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"}, {"ratingRevievs": "709 отзывов", "price": "2 799 грн", "name": "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"}, {"ratingRevievs": "527 отзывов", "price": "3 999 грн", "name": "Huawei Y6 Pro Gold + чехол + защитное стекло!"}, {"ratingRevievs": "66 отзывов", "price": "16 499 грн", "name": "Apple iPhone 6s 32GB Gold"}, {"ratingRevievs": "14 отзывов", "price": "11 499 грн", "name": "Apple iPhone 6 32GB Space Gray"}, {"ratingRevievs": "70 отзывов", "price": {"oldUan": "7 399 грн", "newUan": "5 999 грн"}, "name": "Asus ZenFone 2 32GB (ZE551ML) Black"}, {"ratingRevievs": "45 отзывов", "price": "4 299 грн", "name": "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"}, {"ratingRevievs": "376 отзывов", "price": "3 899 грн", "name": "Meizu M3 Note 32GB Grey (Международная версия)"}, {"ratingRevievs": "111 отзывов", "price": {"oldUan": "9 999 грн", "newUan": "7 999 грн"}, "name": "Sony Xperia X Dual (F5122) White"}, {"ratingRevievs": "40 отзывов", "price": "2 222 грн", "name": "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"}, {"ratingRevievs": "93 отзыва", "price": "18 999 грн", "name": "Apple iPhone 7 32GB Black"}, {"ratingRevievs": "33 отзыва", "price": "16 999 грн", "name": "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"}, {"ratingRevievs": "71 отзыв", "price": {"oldUan": "2 399 грн", "newUan": "1 999 грн"}, "name": "LG K5 X220ds Gold"}, {"ratingRevievs": "39 отзывов", "price": "2 995 грн", "name": "Lenovo C2 Power (K10a40) Black"}, {"ratingRevievs": "156 отзывов", "price": "2 599 грн", "name": "Nous NS 5006 Gold"}, {"ratingRevievs": "40 отзывов", "price": "19 689 грн", "name": "LG G6 Mystic White"}, {"ratingRevievs": "24 отзыва", "price": "5 995 грн", "name": "Motorola MOTO G5 (XT1676) Grey"}, {"ratingRevievs": "7 отзывов", "price": {"oldUan": "10 999 грн", "newUan": "9 999 грн"}, "name": "HTC One X10 Dual Sim Silver"}, {"ratingRevievs": "18 отзывов", "price": {"oldUan": "5 999 грн", "newUan": "4 999 грн"}, "name": "Sony Xperia L1 Dual Black"}]}';

let jsonData = JSON.parse(text);
for (let i = 0; i < jsonData.phones.length; i++) {
    counter[i] = jsonData.phones[i];
    console.log(counter[i].ratingRevievs);
    if(counter[i].price.oldUan)
    {console.log(counter[i].price.oldUan);
        console.log(counter[i].price.newUan);
    }else{
        console.log(counter[i].price);
    }
    }   
}

function bubbleSort() {
    for (let i = 0, endI = counter.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if ((counter[j].price.oldUan==undefined)&&(counter[j+1].price.oldUan==undefined)) 
            {
                if (parseInt(counter[j].price.replace(' ','')) > parseInt(counter[j + 1].price.replace(' ',''))) {
                    let swap = counter[j];
                    counter[j] = counter[j + 1];
                    counter[j + 1] = swap;
                }
            }
            if ((counter[j].price.oldUan==undefined)&&(counter[j+1].price.oldUan!=undefined)) 
            {
                if (parseInt(counter[j].price.replace(' ','')) > parseInt(counter[j + 1].price.newUan.replace(' ',''))) {
                    let swap = counter[j];
                    counter[j] = counter[j + 1];
                    counter[j + 1] = swap;
                }
            }
            if ((counter[j].price.oldUan!=undefined)&&(counter[j+1].price.oldUan==undefined))
            {
                if (parseInt(counter[j].price.newUan.replace(' ','')) > parseInt(counter[j + 1].price.replace(' ',''))) {
                    let swap = counter[j];
                    counter[j] = counter[j + 1];
                    counter[j + 1] = swap;
                }
            }

            if ((counter[j].price.oldUan!=undefined)&&(counter[j+1].price.oldUan!=undefined)) 
            {
                if (parseInt(counter[j].price.newUan.replace(' ','')) > parseInt(counter[j + 1].price.newUan.replace(' ',''))) {
                    let swap = counter[j];
                    counter[j] = counter[j + 1];
                    counter[j + 1] = swap;
                }
            }
            
        }
    }
}

function AddProduct(){
    
    let section = document.querySelector('section');
    for (let i = 0; i < counter.length; i++) {
       
        let myArticle = document.createElement('div');
        myArticle.style.height="150px";
        myArticle.style.float="left";
        myArticle.style.marginLeft="1%";
        myArticle.style.display="inline-block";
        myArticle.style.paddingLeft="10px";
        myArticle.style.width="23%";
        myArticle.style.marginTop="10px";
        myArticle.style.background="linear-gradient(45deg, #EECFBA, #C5DDE8)";
       
       
        myArticle.style.border=" 1px solid rgb(176, 176, 176)";
        let myH2 = document.createElement('h2');
        myH2.style.fontSize="14px";
        myH2.style.color="blue";
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myPara4 = document.createElement('p');
        myPara1.style.fontSize="10px";
        myPara1.style.color="blue";
        myH2.textContent = counter[i].name;
        myPara1.textContent =  counter[i].ratingRevievs;
        if(counter[i].price.oldUan)
        {
           myPara2.textContent = counter[i].price.newUan;
           myPara2.style.color="red";
           myPara2.style.display="inline-block";
           myPara2.style.backgroundColor="yellow";
           myPara2.style.fontSize="24px";
           myPara2.style.marginTop="0px";
           myPara2.style.float="left";

           myPara3.textContent= counter[i].price.oldUan;
           myPara3.style.setProperty("text-decoration", "line-through");
           myPara3.style.width="auto";
           myPara3.style.display="inline-block";
           myPara3.style.marginLeft="10px";
           myPara3.style.marginTop="0px";
        }
        else{
            myPara4.textContent = counter[i].price;
            myPara4.style.color="grey";
            myPara4.style.display="inline-block";
            myPara4.style.backgroundColor="yellow";
            myPara4.style.fontSize="20px";
            myPara4.style.marginTop="0px";
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        if(counter[i].price.oldUan)
        {
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
        }
        else{
            myArticle.appendChild(myPara4);
        }
        section.appendChild(myArticle);
      }
}

