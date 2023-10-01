// ///////////verstion(0.3)
// let lest=[
//     {
//         savol:["8+9=? yig'indini hisoblang"],
//         variant:[ "17",  "2" , "5" ,"9"],
//         javob:["a","17"]
//     },
//     {
//         savol:["8+10=? yig'indini hisoblang"],
//         variant:[ "17", "18" , "5" ,"9"],
//         javob:["b","18"]
//     },
//     {
//         savol:["8+11=? yig'indini hisoblang"],
//         variant:[ "17",  "2" , "19" ,"9"],
//         javob:["c","19"]
//     },
//     {
//         savol:["8+12=? yig'indini hisoblang"],
//         variant:[ "17",  "2" , "20" ,"9"],
//         javob:["c","20"]
//     },
//     {
//         savol:["8+13=? yig'indini hisoblang"],
//         variant:[ "17",  "2" , "21" ,"9"],
//         javob:["c","21"]
//     },
//     {
//         savol:["8+14=? yig'indini hisoblang"],
//         variant:[ "17",  "22" , "5" ,"9"],
//         javob:["b","22"]
//     },
//     {
//         savol:["8+15=? yig'indini hisoblang"],
//         variant:[ "17",  "23" , "5" ,"9"],
//         javob:["b","23"]
//     },
//     {
//         savol:["8+16=? yig'indini hisoblang"],
//         variant:[ "17",  "2" , "24" ,"9"],
//         javob:["c","24"]
//     },
//     {
//         savol:["8+17=? yig'indini hisoblang"],
//         variant:[ "17",  "25" , "5" ,"9"],
//         javob:["b","25"]
//     },
//     {
//         savol:["8+18=? yig'indini hisoblang"],
//         variant:[ "17",  "2" , "26" ,"9"],
//         javob:["c","26"]
//     }
//     // {
//     //     savol:["8+19=? yig'indini hisoblang"],
//     //     variant:[ "27",  "2" , "5" ,"9"],
//     //     javob:["a","27"]
//     // },
//     // {
//     //     savol:["8+20=? yig'indini hisoblang"],
//     //     variant:[ "28",  "2" , "5" ,"9"],
//     //     javob:["a","28"]
//     // }
//     ];
// function startTest() {
//     let x=1;
//     while (x) {
//         let tanlov=(prompt(`admen bo'lsangiz......a yoki admen\nuser bo'lsangiz.......b yoki user \nso'zini kiriting`)).toLowerCase();
//             if((tanlov=="admen")||(tanlov=="a")){
//                admen();
//             }
//             if((tanlov=="user")||(tanlov=="b")){
//                 user(lest);
//             }
//             let tekshirish=prompt(`test ishlab ko'rishni istaysizmi \n a)  ha \n b)  yo'q`);
//             if((tekshirish=="a")||(tekshirish=="ha")){
//                 x=1;
//             }
//             else{
//                 x=0; 
//                 break;
//             }
//     }  
// }
// startTest();

// function user(lest){

//     let ILTS=["fan yoki sport olimpiadalarida faxrli o'rin egallaganmi(oxirgi ikki yil ichida) \n a)ha \n b)yo'q ",
//     "chet tili sertifikatingiz mavjudmi \n a)ha \n b)yo'q ",
//     "nogironligi to'g'risidagi xujjat mavjudmi \n a)ha \n b)yo'q"]

//     let b=0,b1=0,b2=0;
//     let imtiyozlar=[];
//     for(let j=0;j<=ILTS.length-1;j++){
//         imtiyozlar.push(variant=prompt(ILTS[j]));
//         }
//         if((imtiyozlar[0]).toLowerCase()==("a"||"ha")){
//             b=b+50;
//         }
//         if((imtiyozlar[1]).toLowerCase()=="a"||"ha"){
//             b1=b1+25;
//         }
//         if((imtiyozlar[2]).toLowerCase()=="a"||"ha"){
//             b2=2;
//         }

//     let d=0;
//     let kiritilgan_javoblar="",javoblar="";
//     let boshlandi= new Date();
//     let  bosh=boshlandi.getMinutes() * 60+boshlandi.getSeconds();
//     for(let i=0;i<=lest.length-1;i++){
//         variant=prompt(` ${lest[i].savol} \n a.${lest[i].variant[0]}\n b.${lest[i].variant[1]}\n c.${lest[i].variant[2]} \n d.${lest[i].variant[3]}`);
//         if((variant[0].toLowerCase()==(lest[i].javob[0]))||(variant.toLowerCase()==(lest[i].javob[1]))){
//             d=d+5;
//         }
//         else{
//             d=d+0;
//         }
//         if(variant.toLowerCase()==("quet"||"chiqish"||"break")){
//             i=lest.length;
//         }
//         javoblar=javoblar+"     "+(i+1)+"."+lest[i].javob;  
//         kiritilgan_javoblar=kiritilgan_javoblar+"     "+(i+1)+"."+variant;

//     }
//     let tugash = new Date();
//     let tugadi=(tugash.getMinutes() * 60)+tugash.getSeconds();
//     let tjavob=lest.length-(lest.length-(d/5));
//     let samaradorlik=((tjavob*100)/(lest.length));
//     alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \nTestdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \n Imtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}\nUmumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \n Samaradorlik ${Math.floor(samaradorlik)}% \nTestni ishlash uchun${tugadi-bosh}soniya sarfladingiz \n Javoblar ketma-ketligi quyidagicha: \n ${javoblar}  \n Siz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
//     }
// function admen() {
//     let b1=1,xatolik=0,parol1="1234";;
//     while (b1) {
//         let parol=prompt(`parolni kiriting`);
//         if(parol==parol1){
//             let savol1=prompt(`a) savol kiritishni istasangiz....kiritish so'zi yoki a variantini kiriting \n b)savol taxrirlashni istasangiz......taxrirlash so'zi yiki a variantini kiriting` );
//             if((savol1[0].toLowerCase()=="a")||(savol1.toLowerCase()=="kiritish")){
//                 let y=1,push1={savol:[] ,variant:[] ,javob:[] };
//                 while (y) {
//                     push1.savol.push(prompt(`savolni kiriting`));
//                     for (let i = 0; i <=3; i++) {
//                         push1.variant.push(prompt(`${i+1}-variantni kiriting`));  
//                     }
//                     for (let i = 0; i <=1; i++) {
//                         push1.javob.push(prompt(`$ ${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob variantini kiriting(qiymatini kiring)`));  
//                     }
//                     let yana=prompt(`yana savolni kiritishni istaysizmi \n a)ha \n b)yo'q`);
//                     if((yana=="b")||(yana=="yo'q")){
//                         y=0,b1=0;
//                     }
//                 }
//                 lest.push(push1);
//             }
//             else if((savol1[0].toLowerCase()=="b")||(savol1.toLowerCase()=="taxrirlash")){
//                 y=1;

//             }
//             else{
//                alert("bunday qiymat mavjud emas qaytadan tanlang");
//                b1=1;
//             }
//         }
//         else{
//             alert(`parol noto'gri `);
//             xatolik=xatolik+1;
//         } 
//         if(xatolik==3){
//             alert(`siz 3 marta xatom kiritdingiz va sayt tomonidan bloklandingiz`);
//             b1=0;
//             break;
//         }
//     }
// }

///////////verstion(0.4)
// let lest = [{
//         savol: ["8+9=? yig'indini hisoblang"],
//         variant: ["17", "2", "5", "9"],
//         javob: ["17"]
//     },
//     {
//         savol: ["8+10=? yig'indini hisoblang"],
//         variant: ["17", "18", "5", "9"],
//         javob: ["18"]
//     },
//     {
//         savol: ["8+11=? yig'indini hisoblang"],
//         variant: ["17", "2", "19", "9"],
//         javob: [ "19"]
//     },
//     {
//         savol: ["8+12=? yig'indini hisoblang"],
//         variant: ["17", "2", "20", "9"],
//         javob: ["20"]
//     },
//     {
//         savol: ["8+13=? yig'indini hisoblang"],
//         variant: ["17", "2", "21", "9"],
//         javob: ["21"]
//     },
//     {
//         savol: ["8+14=? yig'indini hisoblang"],
//         variant: ["17", "22", "5", "9"],
//         javob: ["22"]
//     },
//     {
//         savol: ["8+15=? yig'indini hisoblang"],
//         variant: ["17", "23", "5", "9"],
//         javob: ["23"]
//     },
//     {
//         savol: ["8+16=? yig'indini hisoblang"],
//         variant: ["17", "2", "24", "9"],
//         javob: ["24"]
//     },
//     {
//         savol: ["8+17=? yig'indini hisoblang"],
//         variant: ["17", "25", "5", "9"],
//         javob: [ "25"]
//     },
//     {
//         savol: ["8+18=? yig'indini hisoblang"],
//         variant: ["17", "2", "26", "9"],
//         javob: ["26"]
//     }
//     // {
//     //     savol:["8+19=? yig'indini hisoblang"],
//     //     variant:[ "27",  "2" , "5" ,"9"],
//     //     javob:["27"]
//     // },
//     // {
//     //     savol:["8+20=? yig'indini hisoblang"],
//     //     variant:[ "28",  "2" , "5" ,"9"],
//     //     javob:["28"]
//     // }
// ];

// function startTest() {
//     let x = 1;
//     while (x) {
//         let tanlov = (prompt(`A) Admen bo'lsangiz......a yoki admen\nB) User bo'lsangiz.......b yoki user \nso'zini kiriting`)).toLowerCase();
//         if ((tanlov == "admen") || (tanlov == "a")) {
//             admen();
//         }
//         if ((tanlov == "user") || (tanlov == "b")) {
//             user(lest);
//         }
//         let tekshirish = prompt(`Test ishlab ko'rishni istaysizmi \n a)  Ha \n b)  Yo'q`);
//         if ((tekshirish == "a") || (tekshirish == "ha")) {
//             x = 1;
//         } else {
//             x = 0;
//             break;
//         }
//     }
// }
// startTest();

// function user(lest) {

//     let ILTS = ["Fan yoki sport olimpiadalarida faxrli o'rin egallaganmi(oxirgi ikki yil ichida) \n a)Ha \n b)Yo'q ",
//         "Chet tili sertifikatingiz mavjudmi \n a)Ha \n b)Yo'q ",
//         "Nogironligi to'g'risidagi xujjat mavjudmi \n a)Ha \n b)Yo'q"
//     ]
//     let b = 0,b1 = 0,b2 = 0;
//     let imtiyozlar = [];
//     for (let j = 0; j <= ILTS.length - 1; j++) {
//         imtiyozlar.push(variant = prompt(ILTS[j]));
//     }
//     if (((imtiyozlar[0]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase()=="ha")) {
//         b = b + 50;
//     }
//     if (((imtiyozlar[1]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
//         b1 = b1 + 25;
//     }
//     if (((imtiyozlar[2]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
//         b2 = 2;
//     }

//     // let set=new Set([]);
//     // for (let l = 0; l < lest.length; l++) {
//     //     let r1=Math.floor(Math.random() *lest.length);
//     //     set.add(lest[r1].savol);
//     // }
//     // console.log(set);
//     alert("Testni boshlashga tayyormisiz")
//     let d = 0;
//     let kiritilgan_javoblar = "",javoblar = "";
//     let boshlandi = new Date();
//     let bosh = boshlandi.getMinutes() * 60 + boshlandi.getSeconds();
//     let r=Math.floor(Math.random() * 4);
//     for (let i = 0; i <= lest.length - 1; i++) {
//        let lest2={variant: ["17", "25", "5", "9"]};
//             lest2.variant[0] =lest[i].variant.at(r-1);
//             lest2.variant[1] =lest[i].variant.at(r-2);
//             lest2.variant[2] =lest[i].variant.at(r-3);
//             lest2.variant[3] =lest[i].variant.at(r-4);
//             console.log(lest2.variant);
//         variant = prompt(`${i+1}-savol. ${lest[i].savol} \nA. ${lest[i].variant.at(r-1)} \nB. ${lest[i].variant.at(r-2)} \nC. ${lest[i].variant.at(r-3)} \nD. ${lest[i].variant.at(r-4)} `);
//         if ((variant[0].toLowerCase() == "a")&&(lest2.variant[0] == lest[i].javob[0])){
//                 d = d + 5;
//         } else if ((variant[0].toLowerCase() == "b")&&(lest2.variant[1] == lest[i].javob[0])) {
//                 d = d + 5;
//         } else if ((variant[0].toLowerCase() == "c")&&(lest2.variant[2] == lest[i].javob[0])){
//                 d = d + 5;
//         } else if ((variant[0].toLowerCase() == "d")&&(lest2.variant[3] == lest[i].javob[0])){
//                 d = d + 5;
//         } else if ((variant.toLowerCase() == "quet") ||( variant.toLowerCase() =="chiqish") || (variant.toLowerCase() =="break")) {
//                 i = lest.length;
//         } else {
//             d = d + 0;
//         }
//         javoblar = javoblar + "     " + (i + 1) + "." + lest[i].javob;
//         kiritilgan_javoblar = kiritilgan_javoblar + "     " + (i + 1) + "." + variant;

//     }
//     let tugash = new Date();
//     let tugadi = (tugash.getMinutes() * 60) + tugash.getSeconds();
//     let tjavob = lest.length - (lest.length - (d / 5));
//     let samaradorlik = ((tjavob * 100) / (lest.length));
//     alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \n   Testdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \nImtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}bal\n   Umumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \nSamaradorlik ${Math.floor(samaradorlik)}% \n   Testni ishlash uchun${tugadi-bosh}soniya sarfladingiz \nJavoblar ketma-ketligi quyidagicha: \n ${javoblar}  \nSiz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
// }

// function admen() {
//     let b1 = 1,
//         xatolik = 0,
//         parol1 = "1234";;
//     while (b1) {
//         let parol = prompt(`Parolni kiriting`);
//         if (parol == parol1) {
//             let savol1 = prompt(`a.Savol kiritishni istasangiz......"kiritish" so'zi yoki "A" variantini kiriting \nb)Savol taxrirlashni istasangiz......"taxrirlash "so'zi yiki "A" variantini kiriting`);
//             if ((savol1[0].toLowerCase() == "a") || (savol1.toLowerCase() == "kiritish")) {
//                 let y = 1,
//                     push1 = {
//                         savol: [],
//                         variant: [],
//                         javob: []
//                     };
//                 while (y) {
//                     push1.savol.push(prompt(`Savolni kiriting`));
//                     for (let i = 0; i <= 3; i++) {
//                         push1.variant.push(prompt(`${i+1}-variantni kiriting`));
//                     }
//                     for (let i = 0; i <= 1; i++) {
//                         push1.javob.push(prompt(`$ ${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob variantini kiriting(qiymatini kiring)`));
//                     }
//                     let yana = prompt(`Yana savolni kiritishni istaysizmi \n a)ha \n b)yo'q`);
//                     if ((yana == "b") || (yana == "yo'q")) {
//                         y = 0, b1 = 0;
//                     }
//                 }
//                 lest.push(push1);
//             } else if ((savol1[0].toLowerCase() == "b") || (savol1.toLowerCase() == "taxrirlash")) {
//                 y = 1;

//             } else {
//                 alert("bunday qiymat mavjud emas qaytadan tanlang");
//                 b1 = 1;
//             }
//         } else {
//             alert(`parol noto'gri `);
//             xatolik = xatolik + 1;
//         }
//         if (xatolik == 3) {
//             alert(`Siz 3 marta xato kiritdingiz va sayt tomonidan bloklandingiz`);
//             b1 = 0;
//             break;
//         }
//     }
// }







///////////verstion(0.5)

let lest = [
    {
        savol: ["8+9=? yig'indini hisoblang"],
        variant: ["17", "2", "5", "9"],
        javob: ["17"]
    },
    {
        savol: ["8+10=? yig'indini hisoblang"],
        variant: ["17", "18", "5", "9"],
        javob: ["18"]
    },
    {
        savol: ["8+11=? yig'indini hisoblang"],
        variant: ["17", "2", "19", "9"],
        javob: ["19"]
    },
    {
        savol: ["8+12=? yig'indini hisoblang"],
        variant: ["17", "2", "20", "9"],
        javob: ["20"]
    },
    {
        savol: ["8+13=? yig'indini hisoblang"],
        variant: ["17", "2", "21", "9"],
        javob: ["21"]
    },
    {
        savol: ["8+14=? yig'indini hisoblang"],
        variant: ["17", "22", "5", "9"],
        javob: ["22"]
    },
    {
        savol: ["8+15=? yig'indini hisoblang"],
        variant: ["17", "23", "5", "9"],
        javob: ["23"]
    },
    {
        savol: ["8+16=? yig'indini hisoblang"],
        variant: ["17", "2", "24", "9"],
        javob: ["24"]
    },
    {
        savol: ["8+17=? yig'indini hisoblang"],
        variant: ["17", "25", "5", "9"],
        javob: ["25"]
    },
    {
        savol: ["8+18=? yig'indini hisoblang"],
        variant: ["17", "2", "26", "9"],
        javob: ["26"]
    },
    {
        savol:["8+19=? yig'indini hisoblang"],
        variant:[ "27",  "2" , "5" ,"9"],
        javob:["27"]
    },
    {
        savol:["8+20=? yig'indini hisoblang"],
        variant:[ "28",  "2" , "5" ,"9"],
        javob:["28"]
    }
];

function startTest() {
    let x = 1;
    while (x) {
        let tanlov = prompt(`A) Admen bo'lsangiz......a yoki admen\nB) User bo'lsangiz.......b yoki user \nso'zini kiriting`);
        if ((tanlov.toLowerCase() == "admen") || (tanlov.toLowerCase() == "a")) {
            admen();
        }
        if ((tanlov.toLowerCase() == "user") || (tanlov.toLowerCase() == "b")) {
            user(lest);
        }
        let tekshirish = prompt(`Test ishlab ko'rishni istaysizmi \n a)  Ha \n b)  Yo'q`);
        if ((tekshirish.toLowerCase() == "a") || (tekshirish.toLowerCase() == "ha")) {
            x = 1;
        } else {
            x = 0;
            break;
        }
    }
}
startTest();


function user(lest) {

    let ILTS = ["Fan yoki sport olimpiadalarida faxrli o'rin egallaganmi(oxirgi ikki yil ichida) \n a)Ha \n b)Yo'q ",
        "Chet tili sertifikatingiz mavjudmi \n a)Ha \n b)Yo'q ",
        "Nogironligi to'g'risidagi xujjat mavjudmi \n a)Ha \n b)Yo'q"
    ]
    let b = 0,
        b1 = 0,
        b2 = 0;
    let imtiyozlar = [];
    for (let j = 0; j <= ILTS.length - 1; j++) {
        imtiyozlar.push(variant = prompt(ILTS[j]));
    }
    if (((imtiyozlar[0]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
        b = b + 50;
    }
    if (((imtiyozlar[1]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
        b1 = b1 + 25;
    }
    if (((imtiyozlar[2]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
        b2 = 2;
    }

    let d = 0;
    let r_list = Math.floor(Math.random() * (lest.length));
    let r = Math.floor(Math.random() * 4);
    let kiritilgan_javoblar = "",
        javoblar = "";
    let lest3 = [];
    for (let l = 0; l <= lest.length - 1; l++) {
        lest3.push(lest.at(r_list - l));
    }
    let boshlandi = new Date();
    let bosh = boshlandi.getMinutes() * 60 + boshlandi.getSeconds();

    for (let i = 0; i <= lest.length - 1; i++) {
        let lest2 = {
            variant: ["17", "25", "5", "9"]
        };
        lest2.variant[0] = lest3[i].variant.at(r - 1);
        lest2.variant[1] = lest3[i].variant.at(r - 2);
        lest2.variant[2] = lest3[i].variant.at(r - 3);
        lest2.variant[3] = lest3[i].variant.at(r - 4);
        variant = prompt(`${i+1}-savol. ${lest3[i].savol} \nA. ${lest3[i].variant.at(r-1)} \nB. ${lest3[i].variant.at(r-2)} \nC. ${lest3[i].variant.at(r-3)} \nD. ${lest3[i].variant.at(r-4)} `);
        if ((variant[0].toLowerCase() == "a") && (lest2.variant[0] == lest[i].javob[0])) {
            d = d + 5;
        } else if ((variant[0].toLowerCase() == "b") && (lest2.variant[1] == lest3[i].javob[0])) {
            d = d + 5;
        } else if ((variant[0].toLowerCase() == "c") && (lest2.variant[2] == lest3[i].javob[0])) {
            d = d + 5;
        } else if ((variant[0].toLowerCase() == "d") && (lest2.variant[3] == lest3[i].javob[0])) {
            d = d + 5;
        } else if ((variant.toLowerCase() == "quet") || (variant.toLowerCase() == "chiqish") || (variant.toLowerCase() == "break")) {
            i = lest.length;
        } else {
            d = d + 0;
        }
        javoblar = javoblar + "     " + (i + 1) + "." + lest3[i].javob;
        kiritilgan_javoblar = kiritilgan_javoblar + "     " + (i + 1) + "." + variant;

    }
    let tugash = new Date();
    let tugadi = (tugash.getMinutes() * 60) + tugash.getSeconds();
    let tjavob = lest.length - (lest.length - (d / 5));
    let samaradorlik = ((tjavob * 100) / (lest.length));
    alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \n   Testdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \nImtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}bal\n   Umumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \nSamaradorlik ${Math.floor(samaradorlik)}% \n   Testni ishlash uchun${tugadi-bosh}soniya sarfladingiz \nJavoblar ketma-ketligi quyidagicha: \n ${javoblar}  \nSiz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
}

function admen() {
    let b1 = 1,
        xatolik = 0,
        parol1 = "1234";
    while (b1) {
        let parol = prompt(`Parolni kiriting`);
        if (parol == parol1) {
            let savol1 = prompt(`A)Savol kiritishni istasangiz......"kiritish" so'zi yoki "A" variantini kiriting \nB)Savol taxrirlashni istasangiz......"taxrirlash "so'zi yiki "A" variantini kiriting`);
            if ((savol1[0].toLowerCase()== "a") || (savol1.toLowerCase() == "kiritish")) {
                let y = 1;
                while (y) {
                  let push1 = {
                        savol: [(prompt(`Savolni kiriting`))],
                        variant:[prompt(`1-variantni kiriting`),prompt(`2-variantni kiriting`),prompt(`3-variantni kiriting`),(prompt(`4-variantni kiriting`))],
                        javob:[]                
                    }
                    let jvb=1;
                    while (jvb) {
                        push1.javob=[prompt(`${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob qiymatini kiring)`)]
                        if(push1.variant.some(a=> a==push1.javob)){
                            lest.push(push1);
                            jvb=0;
                            console.log(push1);
                            console.log(lest);
                        }
                        else{
                            alert(`siz kiritgan qiymat javob variantlari orasida yo'q tekshirib qaytadan qiymatni kiring kiriting`);
                            jvb=1;
                        }   
                    }
                    let yana = prompt(`Yana savolni kiritishni istaysizmi \n A)Ha \n B)Yo'q`);
                    if ((yana[0].toLowerCase() == "b") || (yana.toLowerCase() == "yo'q"))  y = 0, b1 = 0;
                }
            } 
            else if ((savol1[0].toLowerCase() == "b") || (savol1.toLowerCase() == "taxrirlash")) {
                y = 1;

            } else {
                alert("Bunday qiymat mavjud emas qaytadan tanlang");
                b1 = 1;
            }
        } else {
            alert(`parol noto'gri `);
            xatolik = xatolik + 1;
        }
        if (xatolik == 3) {
            alert(`Siz 3 marta xato kiritdingiz va sayt tomonidan bloklandingiz`);
            b1 = 0;
            break;
        }
    }
}