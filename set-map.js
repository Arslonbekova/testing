// let lest1 = [
//     {
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
//         javob: ["19"]
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
//     // {
//     //     savol: ["8+15=? yig'indini hisoblang"],
//     //     variant: ["17", "23", "5", "9"],
//     //     javob: ["23"]
//     // },
//     // {
//     //     savol: ["8+16=? yig'indini hisoblang"],
//     //     variant: ["17", "2", "24", "9"],
//     //     javob: ["24"]
//     // },
//     // {
//     //     savol: ["8+17=? yig'indini hisoblang"],
//     //     variant: ["17", "25", "5", "9"],
//     //     javob: ["25"]
//     // },
//     //{
//     //     savol: ["8+18=? yig'indini hisoblang"],
//     //     variant: ["17", "2", "26", "9"],
//     //     javob: ["26"]
//     // },
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

// let userName=document.querySelector("h1");
// console.log(userName);
// userName.textContent="jfhjvhjvjh"




// let currentTest=0;

// function next_Test() {
//     if(currentTest==lest.length-1) currentTest=lest.length-1;
//     else currentTest++;
//     generateTest(currentTest)
// }
// function prev_Test() {
//     if(currentTest==0){
//         currentTest=0
//     }
//     else currentTest--;
//     generateTest(currentTest)

// }
// function generateTest(k) {
//     let question=document.querySelector(".question_text");
//     question.textContent=`${currentTest+1}-savol    `+lest[k].savol[0];
//     let variants=document.querySelectorAll(".variant");
//     console.log(variants);
//     for (let i = 0; i <=variants.length; i++) {
//         variants[i].textContent=lest[k].variant[i]; 
//     } 
// }
// generateTest(currentTest)

// let 










// // ///////////verstion(0.3)
// // let lest=[
// //     {
// //         savol:["8+9=? yig'indini hisoblang"],
// //         variant:[ "17",  "2" , "5" ,"9"],
// //         javob:["a","17"]
// //     },
// //     {
// //         savol:["8+10=? yig'indini hisoblang"],
// //         variant:[ "17", "18" , "5" ,"9"],
// //         javob:["b","18"]
// //     },
// //     {
// //         savol:["8+11=? yig'indini hisoblang"],
// //         variant:[ "17",  "2" , "19" ,"9"],
// //         javob:["c","19"]
// //     },
// //     {
// //         savol:["8+12=? yig'indini hisoblang"],
// //         variant:[ "17",  "2" , "20" ,"9"],
// //         javob:["c","20"]
// //     },
// //     {
// //         savol:["8+13=? yig'indini hisoblang"],
// //         variant:[ "17",  "2" , "21" ,"9"],
// //         javob:["c","21"]
// //     },
// //     {
// //         savol:["8+14=? yig'indini hisoblang"],
// //         variant:[ "17",  "22" , "5" ,"9"],
// //         javob:["b","22"]
// //     },
// //     {
// //         savol:["8+15=? yig'indini hisoblang"],
// //         variant:[ "17",  "23" , "5" ,"9"],
// //         javob:["b","23"]
// //     },
// //     {
// //         savol:["8+16=? yig'indini hisoblang"],
// //         variant:[ "17",  "2" , "24" ,"9"],
// //         javob:["c","24"]
// //     },
// //     {
// //         savol:["8+17=? yig'indini hisoblang"],
// //         variant:[ "17",  "25" , "5" ,"9"],
// //         javob:["b","25"]
// //     },
// //     {
// //         savol:["8+18=? yig'indini hisoblang"],
// //         variant:[ "17",  "2" , "26" ,"9"],
// //         javob:["c","26"]
// //     }
// //     // {
// //     //     savol:["8+19=? yig'indini hisoblang"],
// //     //     variant:[ "27",  "2" , "5" ,"9"],
// //     //     javob:["a","27"]
// //     // },
// //     // {
// //     //     savol:["8+20=? yig'indini hisoblang"],
// //     //     variant:[ "28",  "2" , "5" ,"9"],
// //     //     javob:["a","28"]
// //     // }
// //     ];
// // function startTest() {
// //     let x=1;
// //     while (x) {
// //         let tanlov=(prompt(`admen bo'lsangiz......a yoki admen\nuser bo'lsangiz.......b yoki user \nso'zini kiriting`)).toLowerCase();
// //             if((tanlov=="admen")||(tanlov=="a")){
// //                admen();
// //             }
// //             if((tanlov=="user")||(tanlov=="b")){
// //                 user(lest);
// //             }
// //             let tekshirish=prompt(`test ishlab ko'rishni istaysizmi \n a)  ha \n b)  yo'q`);
// //             if((tekshirish=="a")||(tekshirish=="ha")){
// //                 x=1;
// //             }
// //             else{
// //                 x=0; 
// //                 break;
// //             }
// //     }  
// // }
// // startTest();

// // function user(lest){

// //     let ILTS=["fan yoki sport olimpiadalarida faxrli o'rin egallaganmi(oxirgi ikki yil ichida) \n a)ha \n b)yo'q ",
// //     "chet tili sertifikatingiz mavjudmi \n a)ha \n b)yo'q ",
// //     "nogironligi to'g'risidagi xujjat mavjudmi \n a)ha \n b)yo'q"]

// //     let b=0,b1=0,b2=0;
// //     let imtiyozlar=[];
// //     for(let j=0;j<=ILTS.length-1;j++){
// //         imtiyozlar.push(variant=prompt(ILTS[j]));
// //         }
// //         if((imtiyozlar[0]).toLowerCase()==("a"||"ha")){
// //             b=b+50;
// //         }
// //         if((imtiyozlar[1]).toLowerCase()=="a"||"ha"){
// //             b1=b1+25;
// //         }
// //         if((imtiyozlar[2]).toLowerCase()=="a"||"ha"){
// //             b2=2;
// //         }

// //     let d=0;
// //     let kiritilgan_javoblar="",javoblar="";
// //     let boshlandi= new Date();
// //     let  bosh=boshlandi.getMinutes() * 60+boshlandi.getSeconds();
// //     for(let i=0;i<=lest.length-1;i++){
// //         variant=prompt(` ${lest[i].savol} \n a.${lest[i].variant[0]}\n b.${lest[i].variant[1]}\n c.${lest[i].variant[2]} \n d.${lest[i].variant[3]}`);
// //         if((variant[0].toLowerCase()==(lest[i].javob[0]))||(variant.toLowerCase()==(lest[i].javob[1]))){
// //             d=d+5;
// //         }
// //         else{
// //             d=d+0;
// //         }
// //         if(variant.toLowerCase()==("quet"||"chiqish"||"break")){
// //             i=lest.length;
// //         }
// //         javoblar=javoblar+"     "+(i+1)+"."+lest[i].javob;  
// //         kiritilgan_javoblar=kiritilgan_javoblar+"     "+(i+1)+"."+variant;

// //     }
// //     let tugash = new Date();
// //     let tugadi=(tugash.getMinutes() * 60)+tugash.getSeconds();
// //     let tjavob=lest.length-(lest.length-(d/5));
// //     let samaradorlik=((tjavob*100)/(lest.length));
// //     alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \nTestdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \n Imtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}\nUmumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \n Samaradorlik ${Math.floor(samaradorlik)}% \nTestni ishlash uchun${tugadi-bosh}soniya sarfladingiz \n Javoblar ketma-ketligi quyidagicha: \n ${javoblar}  \n Siz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
// //     }
// // function admen() {
// //     let b1=1,xatolik=0,parol1="1234";;
// //     while (b1) {
// //         let parol=prompt(`parolni kiriting`);
// //         if(parol==parol1){
// //             let savol1=prompt(`a) savol kiritishni istasangiz....kiritish so'zi yoki a variantini kiriting \n b)savol taxrirlashni istasangiz......taxrirlash so'zi yiki a variantini kiriting` );
// //             if((savol1[0].toLowerCase()=="a")||(savol1.toLowerCase()=="kiritish")){
// //                 let y=1,push1={savol:[] ,variant:[] ,javob:[] };
// //                 while (y) {
// //                     push1.savol.push(prompt(`savolni kiriting`));
// //                     for (let i = 0; i <=3; i++) {
// //                         push1.variant.push(prompt(`${i+1}-variantni kiriting`));  
// //                     }
// //                     for (let i = 0; i <=1; i++) {
// //                         push1.javob.push(prompt(`$ ${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob variantini kiriting(qiymatini kiring)`));  
// //                     }
// //                     let yana=prompt(`yana savolni kiritishni istaysizmi \n a)ha \n b)yo'q`);
// //                     if((yana=="b")||(yana=="yo'q")){
// //                         y=0,b1=0;
// //                     }
// //                 }
// //                 lest.push(push1);
// //             }
// //             else if((savol1[0].toLowerCase()=="b")||(savol1.toLowerCase()=="taxrirlash")){
// //                 y=1;

// //             }
// //             else{
// //                alert("bunday qiymat mavjud emas qaytadan tanlang");
// //                b1=1;
// //             }
// //         }
// //         else{
// //             alert(`parol noto'gri `);
// //             xatolik=xatolik+1;
// //         } 
// //         if(xatolik==3){
// //             alert(`siz 3 marta xatom kiritdingiz va sayt tomonidan bloklandingiz`);
// //             b1=0;
// //             break;
// //         }
// //     }
// // }

// ///////////verstion(0.4)
// // let lest = [{
// //         savol: ["8+9=? yig'indini hisoblang"],
// //         variant: ["17", "2", "5", "9"],
// //         javob: ["17"]
// //     },
// //     {
// //         savol: ["8+10=? yig'indini hisoblang"],
// //         variant: ["17", "18", "5", "9"],
// //         javob: ["18"]
// //     },
// //     {
// //         savol: ["8+11=? yig'indini hisoblang"],
// //         variant: ["17", "2", "19", "9"],
// //         javob: [ "19"]
// //     },
// //     {
// //         savol: ["8+12=? yig'indini hisoblang"],
// //         variant: ["17", "2", "20", "9"],
// //         javob: ["20"]
// //     },
// //     {
// //         savol: ["8+13=? yig'indini hisoblang"],
// //         variant: ["17", "2", "21", "9"],
// //         javob: ["21"]
// //     },
// //     {
// //         savol: ["8+14=? yig'indini hisoblang"],
// //         variant: ["17", "22", "5", "9"],
// //         javob: ["22"]
// //     },
// //     {
// //         savol: ["8+15=? yig'indini hisoblang"],
// //         variant: ["17", "23", "5", "9"],
// //         javob: ["23"]
// //     },
// //     {
// //         savol: ["8+16=? yig'indini hisoblang"],
// //         variant: ["17", "2", "24", "9"],
// //         javob: ["24"]
// //     },
// //     {
// //         savol: ["8+17=? yig'indini hisoblang"],
// //         variant: ["17", "25", "5", "9"],
// //         javob: [ "25"]
// //     },
// //     {
// //         savol: ["8+18=? yig'indini hisoblang"],
// //         variant: ["17", "2", "26", "9"],
// //         javob: ["26"]
// //     }
// //     // {
// //     //     savol:["8+19=? yig'indini hisoblang"],
// //     //     variant:[ "27",  "2" , "5" ,"9"],
// //     //     javob:["27"]
// //     // },
// //     // {
// //     //     savol:["8+20=? yig'indini hisoblang"],
// //     //     variant:[ "28",  "2" , "5" ,"9"],
// //     //     javob:["28"]
// //     // }
// // ];

// // function startTest() {
// //     let x = 1;
// //     while (x) {
// //         let tanlov = (prompt(`A) Admen bo'lsangiz......a yoki admen\nB) User bo'lsangiz.......b yoki user \nso'zini kiriting`)).toLowerCase();
// //         if ((tanlov == "admen") || (tanlov == "a")) {
// //             admen();
// //         }
// //         if ((tanlov == "user") || (tanlov == "b")) {
// //             user(lest);
// //         }
// //         let tekshirish = prompt(`Test ishlab ko'rishni istaysizmi \n a)  Ha \n b)  Yo'q`);
// //         if ((tekshirish == "a") || (tekshirish == "ha")) {
// //             x = 1;
// //         } else {
// //             x = 0;
// //             break;
// //         }
// //     }
// // }
// // startTest();

// // function user(lest) {

// //     let ILTS = ["Fan yoki sport olimpiadalarida faxrli o'rin egallaganmi(oxirgi ikki yil ichida) \n a)Ha \n b)Yo'q ",
// //         "Chet tili sertifikatingiz mavjudmi \n a)Ha \n b)Yo'q ",
// //         "Nogironligi to'g'risidagi xujjat mavjudmi \n a)Ha \n b)Yo'q"
// //     ]
// //     let b = 0,b1 = 0,b2 = 0;
// //     let imtiyozlar = [];
// //     for (let j = 0; j <= ILTS.length - 1; j++) {
// //         imtiyozlar.push(variant = prompt(ILTS[j]));
// //     }
// //     if (((imtiyozlar[0]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase()=="ha")) {
// //         b = b + 50;
// //     }
// //     if (((imtiyozlar[1]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
// //         b1 = b1 + 25;
// //     }
// //     if (((imtiyozlar[2]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
// //         b2 = 2;
// //     }

// //     // let set=new Set([]);
// //     // for (let l = 0; l < lest.length; l++) {
// //     //     let r1=Math.floor(Math.random() *lest.length);
// //     //     set.add(lest[r1].savol);
// //     // }
// //     // console.log(set);
// //     alert("Testni boshlashga tayyormisiz")
// //     let d = 0;
// //     let kiritilgan_javoblar = "",javoblar = "";
// //     let boshlandi = new Date();
// //     let bosh = boshlandi.getMinutes() * 60 + boshlandi.getSeconds();
// //     let r=Math.floor(Math.random() * 4);
// //     for (let i = 0; i <= lest.length - 1; i++) {
// //        let lest2={variant: ["17", "25", "5", "9"]};
// //             lest2.variant[0] =lest[i].variant.at(r-1);
// //             lest2.variant[1] =lest[i].variant.at(r-2);
// //             lest2.variant[2] =lest[i].variant.at(r-3);
// //             lest2.variant[3] =lest[i].variant.at(r-4);
// //             console.log(lest2.variant);
// //         variant = prompt(`${i+1}-savol. ${lest[i].savol} \nA. ${lest[i].variant.at(r-1)} \nB. ${lest[i].variant.at(r-2)} \nC. ${lest[i].variant.at(r-3)} \nD. ${lest[i].variant.at(r-4)} `);
// //         if ((variant[0].toLowerCase() == "a")&&(lest2.variant[0] == lest[i].javob[0])){
// //                 d = d + 5;
// //         } else if ((variant[0].toLowerCase() == "b")&&(lest2.variant[1] == lest[i].javob[0])) {
// //                 d = d + 5;
// //         } else if ((variant[0].toLowerCase() == "c")&&(lest2.variant[2] == lest[i].javob[0])){
// //                 d = d + 5;
// //         } else if ((variant[0].toLowerCase() == "d")&&(lest2.variant[3] == lest[i].javob[0])){
// //                 d = d + 5;
// //         } else if ((variant.toLowerCase() == "quet") ||( variant.toLowerCase() =="chiqish") || (variant.toLowerCase() =="break")) {
// //                 i = lest.length;
// //         } else {
// //             d = d + 0;
// //         }
// //         javoblar = javoblar + "     " + (i + 1) + "." + lest[i].javob;
// //         kiritilgan_javoblar = kiritilgan_javoblar + "     " + (i + 1) + "." + variant;

// //     }
// //     let tugash = new Date();
// //     let tugadi = (tugash.getMinutes() * 60) + tugash.getSeconds();
// //     let tjavob = lest.length - (lest.length - (d / 5));
// //     let samaradorlik = ((tjavob * 100) / (lest.length));
// //     alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \n   Testdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \nImtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}bal\n   Umumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \nSamaradorlik ${Math.floor(samaradorlik)}% \n   Testni ishlash uchun${tugadi-bosh}soniya sarfladingiz \nJavoblar ketma-ketligi quyidagicha: \n ${javoblar}  \nSiz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
// // }

// // function admen() {
// //     let b1 = 1,
// //         xatolik = 0,
// //         parol1 = "1234";;
// //     while (b1) {
// //         let parol = prompt(`Parolni kiriting`);
// //         if (parol == parol1) {
// //             let savol1 = prompt(`a.Savol kiritishni istasangiz......"kiritish" so'zi yoki "A" variantini kiriting \nb)Savol taxrirlashni istasangiz......"taxrirlash "so'zi yiki "A" variantini kiriting`);
// //             if ((savol1[0].toLowerCase() == "a") || (savol1.toLowerCase() == "kiritish")) {
// //                 let y = 1,
// //                     push1 = {
// //                         savol: [],
// //                         variant: [],
// //                         javob: []
// //                     };
// //                 while (y) {
// //                     push1.savol.push(prompt(`Savolni kiriting`));
// //                     for (let i = 0; i <= 3; i++) {
// //                         push1.variant.push(prompt(`${i+1}-variantni kiriting`));
// //                     }
// //                     for (let i = 0; i <= 1; i++) {
// //                         push1.javob.push(prompt(`$ ${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob variantini kiriting(qiymatini kiring)`));
// //                     }
// //                     let yana = prompt(`Yana savolni kiritishni istaysizmi \n a)ha \n b)yo'q`);
// //                     if ((yana == "b") || (yana == "yo'q")) {
// //                         y = 0, b1 = 0;
// //                     }
// //                 }
// //                 lest.push(push1);
// //             } else if ((savol1[0].toLowerCase() == "b") || (savol1.toLowerCase() == "taxrirlash")) {
// //                 y = 1;

// //             } else {
// //                 alert("bunday qiymat mavjud emas qaytadan tanlang");
// //                 b1 = 1;
// //             }
// //         } else {
// //             alert(`parol noto'gri `);
// //             xatolik = xatolik + 1;
// //         }
// //         if (xatolik == 3) {
// //             alert(`Siz 3 marta xato kiritdingiz va sayt tomonidan bloklandingiz`);
// //             b1 = 0;
// //             break;
// //         }
// //     }
// // }







// // ///////////verstion(0.5)

// // let lest = [
// //     {
// //         savol: ["8+9=? yig'indini hisoblang"],
// //         variant: ["17", "2", "5", "9"],
// //         javob: ["17"]
// //     },
// //     {
// //         savol: ["8+10=? yig'indini hisoblang"],
// //         variant: ["17", "18", "5", "9"],
// //         javob: ["18"]
// //     },
// //     {
// //         savol: ["8+11=? yig'indini hisoblang"],
// //         variant: ["17", "2", "19", "9"],
// //         javob: ["19"]
// //     },
// //     {
// //         savol: ["8+12=? yig'indini hisoblang"],
// //         variant: ["17", "2", "20", "9"],
// //         javob: ["20"]
// //     },
// //     {
// //         savol: ["8+13=? yig'indini hisoblang"],
// //         variant: ["17", "2", "21", "9"],
// //         javob: ["21"]
// //     },
// //     {
// //         savol: ["8+14=? yig'indini hisoblang"],
// //         variant: ["17", "22", "5", "9"],
// //         javob: ["22"]
// //     },
// //     {
// //         savol: ["8+15=? yig'indini hisoblang"],
// //         variant: ["17", "23", "5", "9"],
// //         javob: ["23"]
// //     },
// //     {
// //         savol: ["8+16=? yig'indini hisoblang"],
// //         variant: ["17", "2", "24", "9"],
// //         javob: ["24"]
// //     },
// //     {
// //         savol: ["8+17=? yig'indini hisoblang"],
// //         variant: ["17", "25", "5", "9"],
// //         javob: ["25"]
// //     },
// //     {
// //         savol: ["8+18=? yig'indini hisoblang"],
// //         variant: ["17", "2", "26", "9"],
// //         javob: ["26"]
// //     },
// //     {
// //         savol:["8+19=? yig'indini hisoblang"],
// //         variant:[ "27",  "2" , "5" ,"9"],
// //         javob:["27"]
// //     },
// //     {
// //         savol:["8+20=? yig'indini hisoblang"],
// //         variant:[ "28",  "2" , "5" ,"9"],
// //         javob:["28"]
// //     }
// // ];


// // function startTest() {
// //     let x = 1;
// //     while (x) {
// //         let tanlov = prompt(`A) Admen bo'lsangiz......a yoki admen\nB) User bo'lsangiz.......b yoki user \nso'zini kiriting`);
// //         if ((tanlov.toLowerCase() == "admen") || (tanlov.toLowerCase() == "a")) {
// //             admen();
// //         }
// //         if ((tanlov.toLowerCase() == "user") || (tanlov.toLowerCase() == "b")) {
// //             user(lest);
// //         }
// //         let tekshirish = prompt(`Test ishlab ko'rishni istaysizmi \n a)  Ha \n b)  Yo'q`);
// //         if ((tekshirish.toLowerCase() == "a") || (tekshirish.toLowerCase() == "ha")) {
// //             x = 1;
// //         } else {
// //             x = 0;
// //             break;
// //         }
// //     }
// // }
// // startTest();

// // function user(lest) {

// //     let ILTS = ["Fan yoki sport olimpiadalarida faxrli o'rin egallaganmi(oxirgi ikki yil ichida) \n a)Ha \n b)Yo'q ",
// //         "Chet tili sertifikatingiz mavjudmi \n a)Ha \n b)Yo'q ",
// //         "Nogironligi to'g'risidagi xujjat mavjudmi \n a)Ha \n b)Yo'q"
// //     ]
// //     let b = 0,
// //         b1 = 0,
// //         b2 = 0;
// //     let imtiyozlar = [];
// //     for (let j = 0; j <= ILTS.length - 1; j++) {
// //         imtiyozlar.push(variant = prompt(ILTS[j]));
// //     }
// //     if (((imtiyozlar[0]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
// //         b = b + 50;
// //     }
// //     if (((imtiyozlar[1]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
// //         b1 = b1 + 25;
// //     }
// //     if (((imtiyozlar[2]).toLowerCase() == "a") || ((imtiyozlar[1]).toLowerCase() == "ha")) {
// //         b2 = 2;
// //     }

// //     let d = 0;
// //     let r_list = Math.floor(Math.random() * (lest.length));
// //     let r = Math.floor(Math.random() * 4);
// //     let kiritilgan_javoblar = "",
// //         javoblar = "";
// //     let lest3 = [];
// //     for (let l = 0; l <= lest.length - 1; l++) {
// //         lest3.push(lest.at(r_list - l));
// //     }
// //     let boshlandi = new Date();
// //     let bosh = boshlandi.getMinutes() * 60 + boshlandi.getSeconds();

// //     for (let i = 0; i <= lest.length - 1; i++) {
// //         let lest2 = {
// //             variant: ["17", "25", "5", "9"]
// //         };
// //         lest2.variant[0] = lest3[i].variant.at(r - 1);
// //         lest2.variant[1] = lest3[i].variant.at(r - 2);
// //         lest2.variant[2] = lest3[i].variant.at(r - 3);
// //         lest2.variant[3] = lest3[i].variant.at(r - 4);
// //         variant = prompt(`${i+1}-savol. ${lest3[i].savol} \nA. ${lest3[i].variant.at(r-1)} \nB. ${lest3[i].variant.at(r-2)} \nC. ${lest3[i].variant.at(r-3)} \nD. ${lest3[i].variant.at(r-4)} `);
// //         if ((variant[0].toLowerCase() == "a") && (lest2.variant[0] == lest[i].javob[0])) {
// //             d = d + 5;
// //         } else if ((variant[0].toLowerCase() == "b") && (lest2.variant[1] == lest3[i].javob[0])) {
// //             d = d + 5;
// //         } else if ((variant[0].toLowerCase() == "c") && (lest2.variant[2] == lest3[i].javob[0])) {
// //             d = d + 5;
// //         } else if ((variant[0].toLowerCase() == "d") && (lest2.variant[3] == lest3[i].javob[0])) {
// //             d = d + 5;
// //         } else if ((variant.toLowerCase() == "quet") || (variant.toLowerCase() == "chiqish") || (variant.toLowerCase() == "break")) {
// //             i = lest.length;
// //         } else {
// //             d = d + 0;
// //         }
// //         javoblar = javoblar + "     " + (i + 1) + "." + lest3[i].javob;
// //         kiritilgan_javoblar = kiritilgan_javoblar + "     " + (i + 1) + "." + variant;

// //     }
// //     let tugash = new Date();
// //     let tugadi = (tugash.getMinutes() * 60) + tugash.getSeconds();
// //     let tjavob = lest.length - (lest.length - (d / 5));
// //     let samaradorlik = ((tjavob * 100) / (lest.length));
// //     alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \n   Testdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \nImtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}bal\n   Umumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \nSamaradorlik ${Math.floor(samaradorlik)}% \n   Testni ishlash uchun${tugadi-bosh}soniya sarfladingiz \nJavoblar ketma-ketligi quyidagicha: \n ${javoblar}  \nSiz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
// // }

// // function admen() {
// //     let b1 = 1,
// //         xatolik = 0,
// //         parol1 = "1234";
// //     while (b1) {
// //         let parol = prompt(`Parolni kiriting`);
// //         if (parol == parol1) {
// //             let savol1 = prompt(`A)Savol kiritishni istasangiz......"kiritish" so'zi yoki "A" variantini kiriting \nB)Savol taxrirlashni istasangiz......"taxrirlash "so'zi yiki "A" variantini kiriting`);
// //             if ((savol1[0].toLowerCase()== "a") || (savol1.toLowerCase() == "kiritish")) {
// //                 let y = 1;
// //                 while (y) {
// //                   let push1 = {
// //                         savol: [(prompt(`Savolni kiriting`))],
// //                         variant:[prompt(`1-variantni kiriting`),prompt(`2-variantni kiriting`),prompt(`3-variantni kiriting`),(prompt(`4-variantni kiriting`))],
// //                         javob:[]                
// //                     }
// //                     let jvb=1;
// //                     while (jvb) {
// //                         push1.javob=[prompt(`${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob qiymatini kiring)`)]
// //                         if(push1.variant.some(a=> a==push1.javob)){
// //                             lest.push(push1);
// //                             jvb=0;
// //                             console.log(push1);
// //                             console.log(lest);
// //                         }
// //                         else{
// //                             alert(`siz kiritgan qiymat javob variantlari orasida yo'q tekshirib qaytadan qiymatni kiring kiriting`);
// //                             jvb=1;
// //                         }   
// //                     }
// //                     let yana = prompt(`Yana savolni kiritishni istaysizmi \n A)Ha \n B)Yo'q`);
// //                     if ((yana[0].toLowerCase() == "b") || (yana.toLowerCase() == "yo'q"))  y = 0, b1 = 0;
// //                 }
// //             } 
// //             else if ((savol1[0].toLowerCase() == "b") || (savol1.toLowerCase() == "taxrirlash")) {
// //                 y = 1;

// //             } else {
// //                 alert("Bunday qiymat mavjud emas qaytadan tanlang");
// //                 b1 = 1;
// //             }
// //         } else {
// //             alert(`parol noto'gri `);
// //             xatolik = xatolik + 1;
// //         }
// //         if (xatolik == 3) {
// //             alert(`Siz 3 marta xato kiritdingiz va sayt tomonidan bloklandingiz`);
// //             b1 = 0;
// //             break;
// //         }
// //     }
// // }

///////////verstion(0.6)

// let lest=[
//     {
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
//         javob: ["19"]
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
//         javob: ["25"]
//     },
//     {
//         savol: ["8+18=? yig'indini hisoblang"],
//         variant: ["17", "2", "26", "9"],
//         javob: ["26"]
//     },
//     {
//         savol:["8+19=? yig'indini hisoblang"],
//         variant:[ "27",  "2" , "5" ,"9"],
//         javob:["27"]
//     },
//     {
//         savol:["8+20=? yig'indini hisoblang"],
//         variant:[ "28",  "2" , "5" ,"9"],
//         javob:["28"]
//     }
// ];


let lest = [
    {
        savol: ["Tarbiy a nima?"],
        javob:["tarbiyachi shaxsiy fazilatlarni tarbiyalanuvchi ongiga singdirish va ular ruhiyatiga maqsadli tasir etish jarayoni"],
        variant: [" o‘sib kelayotgan avlodda hosil qilingan aqliy kamolot, bilim, konikma va malakalardir", 
        "tarbiyachi va tarbiyalanuvchilarning birgalikdagi bilim, konikma va malakalarini hosil qilish jarayoni", 
        "tarbiyachi shaxsiy fazilatlarni tarbiyalanuvchi ongiga singdirish va ular ruhiyatiga maqsadli tasir etish jarayoni", 
        "tarbiyachi xohlagan sifatlarni bolada paydo qilish jarayonidir"]
    },
    {
        savol: ["Tarbiya turlari  togri  korsatilgan qatorni toping:"],
        variant: [" iqtisodiy, jismoniy, madaniy va boshqalar", 
        " ekologik, iqtisodiy, ragbatlantiruvchi va boshqalar",
         "ekologik, axloqiy, estetik va boshqalar", 
         "ismoniy, ruhiy, ekologik va boshqala"],
        javob: ["ekologik, axloqiy, estetik va boshqalar"]
    },
    {
        savol: ["Tarbiya  metodlari  togri  korsatilgan  qatorni toping:"],
        variant: ["soz orqali ifodalash, korgazmalilik, amaliy namuna, ragbatlantirish, jazolash ", 
        " maruza, hikoya, tushuntirish, nazorat qilish, xulosa va tavsiyalar ishlab chiqish ",
         " taqlid qilish, orgatish, tuzatish, ozgartirish, tanbeh berish, kitob bilan ishlash ",
          "mashq va topshiriqlarni mustaqil bajarish, test sinovlariga tayyorlanish, yodlash"],
        javob: ["soz orqali ifodalash, korgazmalilik, amaliy namuna, ragbatlantirish, jazolash"]
    },
    {
        savol: ["Tarbiya vositalarin  korsating:"],
        variant: ["texnik vositalar, yordamchi vositalar, oquv-uslubiy materiallar, mulyajlar va namunalar",
         " manaviyat va marifat ishlari, ichki va tashqi muhit, shaxsning individual psixologik xususiyatlari", 
         " suhbatlar, oquv-tarbiya bilan bogliq mashgulotlar, organish va orgatish jarayoni, bilimlar, konikmalar", 
         "kitoblar, radio-televidenie, kinofilmlar, sanat asarlari, oyin, sport, oqituvchining jonli sozi"],
        javob: ["texnik vositalar, yordamchi vositalar, oquv-uslubiy materiallar, mulyajlar va namunalar"]
    },
    {
        savol: ["«Tarbiya biz uchun yo hayot, yo mamot, yo najot, yo halokat, yo saodat, yo falokat masalasidir» shiorining muallifi kim?"],
        variant: [" Abdulxam Cholpon", 
        " Munavvar Qori Abdurashidxonov",
         "Abdulla Avloniy", 
         "Abdulla Qodiri"],
        javob: ["Abdulla Avloniy"]
    },
    {
        savol: ["Axloq deganda nimani tushunasiz?"],
        javob: ["jamiyatda qabul qilingan, jamoatchilik fikri bilan maqullangan xulq-odob meyorlari majmui"],
        variant: ["jamiyatda qabul qilingan, jamoatchilik fikri bilan maqullangan xulq-odob meyorlari majmui", 
        " kishilar tomonidan yoshlarga qoyiladigan va bajarilishi talab qilinadigan tartib-qoidalar majmui", 
        " mutafakkirlarimiz tomonidan meros qilib qoldirilgan tartib-intizom qoidalari", 
        "insonning boshqalardan ajralib turadigan sifatlar"]
    },
    {
        savol: ["Odob nima?"],
        javob: ["har bir insonning ozi bir inson yoki jamoa bilan bolgan muloqotida hamda yurish-turishida ozini tuta bilishidir"],
        variant: [" diniy manbalarda qayd etilgan talablarga qatiy rioya qilish tartiblari", 
        "har bir insonning ozi bir inson yoki jamoa bilan bolgan muloqotida hamda yurish-turishida ozini tuta bilishidir", 
        " kochada, jamoatchilik joylaridagi ichki tartib-qoidalar va masul shaxslar tomonidan ularning bajarilishini nazorat qilish jarayoni", 
        "mutafakkirlarimiz tomonidan meros qilib qoldirilgan tartib-intizom qoidalar"]
    },
    {
        savol: ["Talim-tarbiyaga doir goyalar va qarashlarning rivojlanish bosqichlarini organadigan fan:"],
        javob: ["pedagogika tarixi"],
        variant: [" pedagogik psixologiya", 
        " kasbiy pedagogika", 
        "pedagogika tarixi", 
        "pedagogik diagnostik"]
    },
    {
        savol: ["Tarbiya metodlarining turlanishini korsating:"],
        javob: ["ijtimoiy ongni shakllantiruvchi, odatlantiruvchi va faoliyatda mashqlantiruvchi, ragbatlantiruvchi va jazolovchi"],
        variant: ["*ijtimoiy ongni shakllantiruvchi, odatlantiruvchi va faoliyatda mashqlantiruvchi, ragbatlantiruvchi va jazolovchi", 
        "faoliyatga majburlovchi, xulq-atvordagi ozgarishlardan ogohlantiruvchi, malum shart-sharoitlarga koniktiruvchi",
         " shaxsni kamolotga yetaklovchi, odamni tubanlikka olib boruvchi, insonni uluglovchi", 
         "tarbiyalovchi, qayta tarbiyalovchi va ozini-ozi tarbiyalovchi metodlar"]
    },
    {
        savol: ["Xalq pedagogikasida qanday tarbiya usullari mavjud?"],
        javob: ["tushuntirish, na’muna, nasihat"],
        variant: [" tushuntirish, odob  axloq, tarbiya", " *tushuntirish, na’muna, nasihat ", 
        " tanqid qilish, urishish, jazolas",
         "jismonan jazolash, ruhan ezish"]
    }
    ,
    {
        savol: ["Jazolash deganda nimani tushunasiz?"],
        javob: ["tarbiyalanuvchining xatti-harakati va faoliyatiga salbiy baho berishdir"],
        variant: [" *tarbiyalanuvchining xatti-harakati va faoliyatiga salbiy baho berishdir", 
        " bu tarbiyalanuvchiga nisbatan noqonuniy xatti-harakatlar asosida tazyiq otkazishdir", 
        " tarbiyalanuvchiga nisbatan tan jazosini qollash bilan bogliq say-harakatlardir", 
        "tarbiyachining oz manfaatlaridan kelib chiqib, qoli ostidagilarga nisbatan nopedagogik tasir otkazishidir"]
    },
    {
        savol: ["Nimaga tarbiyani ijtimoiy xodisa deymiz?"],
        javob: ["tarbiya insonning butun umri davomida turli tashqi tasirlar natijasida amalga oshadi"],
        variant: [" tarbiya jarayoni maktabgacha va maktab davrida asosan oilada amalga oshiriladi", 
        " insonga ozini-ozi tarbiyalashi uchun barcha sharoitlar yaratilgan uchun", 
        " shaxsning shakllanish jarayoni doimiy nazorat qilib boriladi va tegishli tavsiyalar ishlab chiqiladi ", 
        "tarbiya insonning butun umri davomida turli tashqi tasirlar natijasida amalga oshadi"]
    },
    {
        javob: [""],
        savol: ["Prezidentimiz I.Karimovning «Yuksak manaviyat  engilmas kuch» asarida moddiy va manaviy olam nimaga oxshatiladi?"],
        variant: [" yuksaklikka intilib, unib kelayotgan niholga", 
        " yonma-yon oqib turgan ikki daryoga", 
        " *parvoz qilayotgan qushning ikki qanotiga", 
        "shaxsning shakllanish omili bolgan oila va tarbiyaga"]
    },

    {
        savol: ["Prezidentimiz I.Karimovning «Yuksak manaviyat  yengilmas kuch» asarida «Eng buyuk jasorat nima», - degan savolga qanday javob beriladi? Eng buyuk jasorabu "],
        javob: ["manaviy jasorat"],
        variant: [" moddiy jasorat", 
        " *manaviy jasorat ", 
        " ilmiy jasorat", 
        "jismoniy jasora"]
    },

    {
        savol: ["Kozi ojiz bolalarga tarbiya berish masalasi bilan  pedagogikaning qaysi tarmogi shugullanadi?"],
        javob: ["tiflopedagogik"],
        variant: [" oligofrenopedagogika", 
        " surdopedagogika", 
        " defektologiya",
         "tiflopedagogik"]
    },

    {
        savol: ["Umuminsoniy qadriyatlarga sodiqlik deganda nimani tushunasiz?"],
        javob: ["adolat, tenglik, ahil qoshnichilik, insonparvarlik tuygularini avaylash"],
        variant: ["adolat, tenglik, ahil qoshnichilik, insonparvarlik tuygularini avaylash",
         " manaviyat va marifatni yanada yuksalishiga etiborni kuchaytirish", 
         " insonning oz imkoniyatlarini erkin namoyon qilishi uchun shart-sharoit yaratib berish", 
         "xalqimizning milliy manaviy merosini mustahkamlash, ajdodlar merosini asrab-avaylas"]
    },

    {
        savol: ["«Individ» atamasi nimani anglatadi?"],
        javob: ["bolinmas, alohida, yagona manolarini, anglatib, biologik turga kiruvchi alohida tirik mavjudotdir"],
        variant: [" shaxsni takrorlanmasligi, ongliligini, komillikka intilishini", 
        " odamning ijtimoiy mavjudot sifatida turli omillar tasirida tarbiyalanishini", 
        "bolinmas, alohida, yagona manolarini, anglatib, biologik turga kiruvchi alohida tirik mavjudotdir", 
        "jamoada shakllanadigan, talim-tarbiya mahsuli manosini bildirad"]
    },

    {
        savol: ["“Individuallik” atamasi nimani anglatadi?"],
        javob: ["shaxs ruhiy xususiyatlarining boshqalarda qaytarilmaydigan birikmasini"],
        variant: [" shaxsning iqtidorini va Shaxsiy qiziqishlarini namoyon etishini va shu asosda shakllanishini", 
        "shaxs ruhiy xususiyatlarining boshqalarda qaytarilmaydigan birikmasini", 
        "shaxsning jismoniy va intellektual jihatdan jamoada ajralib turishini taminlovchi xususiyatlar yigindisini", 
        "kishining oz manfaatlari boshqalar manfaatlaridan ustun qoyib yashashi hamda borliqqa oziga xos munosabatin"]
    },

    {
        savol: ["Shaxsga xos bolgan quyidagi xususiyatlar uning shakllanishiga xizmat qiluvchi qaysi omillarga kiradi: imkoniyatlar, layoqatlar, qobiliyatlar, tana rangi?"],
        javob: ["irsiy belgilar"],
        variant: ["irsiy belgilar",
         " tashqi va ichki muhit", 
         " talim-tarbiya", 
         "ijtimoiy-siyosiy shart-sharoitla"]
    },

    {
        savol: ["Shaxsning  shakllanishiga tasir etuvchi asosiy omillarni togri korsating:"],
        javob: ["irsiyat, talim, tarbiya, muhit, Shaxsiy faoliyat"],
        variant: [" muhit, talim - tarbiya, geografik shart-sharoitlar, nasl",
         " tarbiya, talim, jamiyat, iqtisodiy vaziyat",
          "irsiyat, talim, tarbiya, muhit, Shaxsiy faoliyat",
          "irsiyat, mehnat, ota-onalar namunasi, milliy qadriyatlar va urf-odatla"]
    },

    {
        savol: ["Irsiyat deganda nimani tushunasiz?"],
        javob: ["ajdodlardan avlodlarga otadigan biologik belgilar"],
        variant: [" ijtimoiy omillar tasirida shaxsning rivojlanishi va oz tajribasini keyingi avlodga meros qilib qoldirishi", 
        " insonning boshqalardan ajralib turadigan sifatlari", 
        "ajdodlardan avlodlarga otadigan biologik belgilar", 
        "odam shaxsining rivojlanish jarayonin"]
    },

    {
        savol: ["Bola rivojlanishiga doir ozgarishlarni, yosh davrlariga xos xususiyatlarni bilish va hisobga olish nima uchun kerak?"],
        javob: ["bolani togri tarbiyalash va samarali oqitish uchun"],
        variant: [" bolaning togri rivojlanib borayotganligini aniqlash uchun", 
        " bolaning jismoniy jihatdan osib borishini aniqlash uchun", 
        "bolani togri tarbiyalash va samarali oqitish uchun",
         "bolaning manaviy-ruhiy jihatdan shakllanish holatini aniqlash va xulosalar chiqarish uchu"]
    },

    {
        savol: ["Qanday xususiyatlar yosh xususiyatlari deyiladi?"],
        javob: ["malum bir yosh davriga xos bolgan anatomik, fiziologik va ruhiy xususiyatlar"],
        variant: ["malum bir yosh davriga xos bolgan anatomik, fiziologik va ruhiy xususiyatlar",
         " malum bir talim turiga togri keladigan shaxsning ahloqiy, aqliy va jismoniy xususiyatlari",
          " bolada ospirinlik davriga xos bolgan jismoniy va xarakteriologik xususiyatlar",
           "o‘quvchilargagina xos bolgan manaviy-ahloqiy, aqliy va jismoniy xususiyatla"]
    },

    {
        savol: ["Ijtimoiylashuv agentlari deganda kimlar nazarda tutiladi?"],
        javob: ["oila, maktab, tengdoshlar, ommaviy axborot vositalari"],
        variant: [" jamoatchilik asosida faoliyat korsatuvchi tarbiyachi, pedagog-xodimlar birikmasi azolari", 
        "oila, maktab, tengdoshlar, ommaviy axborot vositalari", 
        " shaxsning jamiyatga moslashishini doimiy nazorat qilib boruvchi maxsus mutaxassislardan iborat tarbiyachilar guruhi", 
        "ijtimoiy-siyosiy, mafkuraviy, biogeologik shart-sharoitla"]
    },

    {
        savol: ["Shaxsga berilgan togri tarifni korsating:"],
        javob: ["ijtimoiy va shaxslararo munosabatlarning mahsuli, ongli faoliyatning subekti bolmish indivi"],
        variant: [" biologik mavjudot, ozining aql-idroki bilan boshqa barcha mavjudotlardan farq qiladi",
         " bu insonning hissiy, aqliy va jismoniy faoliyatda namoyon boladigan xususiyatlarining yigindisidir", " mehnat, oqish-organish, shaxsiy faoliyat tasirlarida ijobiy namuna asosida shakllangan inson", "ijtimoiy va shaxslararo munosabatlarning mahsuli, ongli faoliyatning subekti bolmish indivi"]
    },

    {
        savol: ["Fuqaro deb kimga aytamiz?"],
        javob: ["huquqiy asoslar orqali malum davlatga mansub shaxsga"],
        variant: [" jamiyatda oz mavqei, maqsad va vazifalari bolgan ongli shaxsga", 
        " sud  huquq tizimida, qandaydir tartibbuzarlikda ayblanayotgan shaxsga",
         " o‘z vatanini, xalqini sevadigan vatanparvar insonga", 
         "huquqiy asoslar orqali malum davlatga mansub shaxsga"]
    },

    {
        savol: ["Oilaning kommunikativ funksiyasi nimalardan iborat?"],
        javob: ["oila azolarining ozaro muloqot va ozaro tushunishga bolgan ehtiyojini qondirishga xizmat qilish"],
        variant: [" oila azolarining axborot-kommunikatsiya texnologiyalari bilan ishlash konikmalarini rivojlantirishga qaratilgan faoliyati", 
        " oila azolarini nutqini ostirish, ularning jismoniy qobiliyatlarini rivojlantirish", 
        "oila azolarining ozaro muloqot va ozaro tushunishga bolgan ehtiyojini qondirishga xizmat qilish", 
        "oila azolarining eslash, unutish, qayta tiklash jarayonlarini kuchaytiris"]
    },

    {
        savol: ["Dunyoqarashning qanday turlari bor?"],
        javob: ["mifologik, diniy, falsafiy"],
        variant: [" ilmiy, manaviy-marifiy, axloqiy",
            " diniy, idealistik, materialistik",
            "mifologik, diniy, falsafiy",
            "realistik, psixologik, sotsiologi"
        ]
    },

    {
        savol: ["Komillik bosqichlarini korsating:"],
        javob: ["jismoniy, axloqiy, aqliy"],
        variant: ["jismoniy, axloqiy, aqliy",
            " individ, odam, shaxs",
            " bolalik, ospirinlik, komillik",
            "biologik, manaviy, axloqi"
        ]
    },

    {
        savol: ["Pedagogik korreksiya jarayonining mohiyati nimadan iborat?"],
        javob: ["yoshlarni manaviy-marifiy tarbiyalash jarayonida oldin yol qoyilgan nuqsonlarni bartaraf etish jarayon"],
        variant: [" tarbiya jarayonining maqsadi, vazifalari va metodlarini aniqlash asosida strategiyani belgilash", 
        " oila, maktab, jamoatchilikning tarbiyaviy faoliyatini muvofiqlashtirish", 
        " shaxsning jamiyatga moslashishini doimiy nazorat qilib borish va tegishli tavsiyalar ishlab chiqish", 
        "yoshlarni manaviy-marifiy tarbiyalash jarayonida oldin yol qoyilgan nuqsonlarni bartaraf etish jarayon"]
    },

    {
        savol: ["Pedagogikaning bosh masalasi:"],
        javob: ["talim-tarbiy"],
        variant: [" talim, metod", 
        " tarbiya, taraqqiyot", 
        " rivojlanish-osish", 
        "talim-tarbiy"]
    },

    {
        savol: ["Pedagogikaning ilmiy tadqiqot usullari:"],
        javob: ["kuzatish, suhbat"],
        variant: ["kuzatish, suhbat", 
        " hikoya, suhbat, maruza", 
        " induktiv, deduktiv", 
        "illyustrativ, demonstrati"]
    },
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
    //////////imtiyoz \\\\\\\\\
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

    // ////////////\\\\\\\\\\\\\\\


    let d = 0;
    let kiritilgan_javoblar = "",
        javoblar = "";
    let r_list = Math.floor(Math.random() * (lest.length));
    let r = Math.floor(Math.random() * 4);
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
        lest2.variant[0] = `${lest3[i].variant.at(r - 1)}`;
        lest2.variant[1] =`${lest3[i].variant.at(r - 2)}`;
        lest2.variant[2] = `${lest3[i].variant.at(r - 3)}`;
        lest2.variant[3] = `${lest3[i].variant.at(r - 4)}`;
        variant = prompt(`${i+1}-savol. ${lest3[i].savol} \nA. ${lest3[i].variant.at(r-1)} \nB. ${lest3[i].variant.at(r-2)} \nC. ${lest3[i].variant.at(r-3)} \nD. ${lest3[i].variant.at(r-4)} `);
        console.log(variant);
        if ((variant[0].toLowerCase() == "a") && (lest2.variant[0] == lest3[i].javob[0])) {
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
    alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \n   Testdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \nImtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}bal\n   Umumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \nSamaradorlik ${Math.floor(samaradorlik)}% \n   Testni ishlash uchun${tugadi-bosh}soniya sarfladingiz`)

    // alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \n   Testdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \nImtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}bal\n   Umumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \nSamaradorlik ${Math.floor(samaradorlik)}% \n   Testni ishlash uchun${tugadi-bosh}soniya sarfladingiz \nJavoblar ketma-ketligi quyidagicha: \n ${javoblar}  \nSiz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
}

function tests_menu() {
    let menu = "";
    for (let i1 = 0; i1 <= lest.length - 1; i1++) {
        menu = menu + `${i1+1}-savol. ${lest[i1].savol} \n A)${lest[i1].variant[0]}  B)${lest[i1].variant[1]}  C)${lest[i1].variant[2]}  D)${lest[i1].variant[3]}\n`
    }
    return menu;
}

function tahrirlash() {
    let tahrir = 1;
    while (tahrir) {
        let n = prompt(
            testsmenu() + "\nTahrirlamoqchi bo'lgan testingiz raqamini kiriting\n"
        );
        lest[n - 1] = {
            savol: prompt("Savolni kiriting: ", lest[n - 1].savol),
            variant: [
                prompt("a) variatni kiriting: ", lest[n - 1].variant[0]),
                prompt("b) variatni kiriting: ", lest[n - 1].variant[1]),
                prompt("c) variatni kiriting: ", lest[n - 1].variant[2]),
                prompt("d) variatni kiriting: ", lest[n - 1].variant[3]),
            ],
            javob: prompt("to'g'ri javob: ", lest[n - 1].javob),
        };
        alert(testsmenu());
        let yana = prompt(`Yana savolni o'chirishni istaysizmi \n A)Ha \n B)Yo'q`);
        if ((yana[0].toLowerCase() == "b") || (yana.toLowerCase() == "yo'q")) tahrir = 0;
        else if ((yana[0].toLowerCase() == "a") || (yana.toLowerCase() == "yo'q")) tahrir = 1;
    }
}

function kiritish() {
    let y = 1;
    while (y) {
        let push1 = {
            savol: [(prompt(`Savolni kiriting`))],
            variant: [prompt(`1-variantni kiriting`), prompt(`2-variantni kiriting`), prompt(`3-variantni kiriting`), (prompt(`4-variantni kiriting`))],
            javob: []
        }
        let jvb = 1;
        while (jvb) {
            push1.javob = [prompt(`${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob qiymatini kiring)`)]
            if (push1.variant.some(a => a == push1.javob)) {
                lest.push(push1);
                jvb = 0;
                console.log(push1);
                console.log(lest);
            } else {
                alert(`siz kiritgan qiymat javob variantlari orasida yo'q tekshirib qaytadan qiymatni kiring kiriting`);
                jvb = 1;
            }
        }
        let yana = prompt(`Yana savolni kiritishni istaysizmi \n A)Ha \n B)Yo'q`);
        if ((yana[0].toLowerCase() == "b") || (yana.toLowerCase() == "yo'q")) y = 0;
    }
}

function ochirish() {
    let delate = 1;
    while (delate) {
        let n = prompt("O'chirmoqchi bo'lgan testni raqamini kiriting\n" + testsmenu());
        let newArr = lest.filter((el, index) => {
            if (index != n - 1) return el;
        });
        lest = newArr;
        alert(testsmenu());
        let yana = prompt(`Yana savolni o'chirishni istaysizmi \n A)Ha \n B)Yo'q`);
        if ((yana[0].toLowerCase() == "b") || (yana.toLowerCase() == "yo'q")) delate = 0;
        else if ((yana[0].toLowerCase() == "a") || (yana.toLowerCase() == "yo'q")) delate = 1;
    }
}

function admen() {
    let b1 = 1,
        xatolik = 0,
        parol1 = "1234";
    while (b1) {
        let parol = prompt(`Parolni kiriting`);
        if (parol == parol1) {
            let savol1 = prompt(`1.....Savol kiritish\n"kiritish"  so'zi  yoki  "1"ni  kiriting \n\n2.....Savol tahrirlash\n"taxrirlash"  so'zi  yoki "2"ni  kiriting\n\n3.....Savol o'chirish\n"o'chirish"  so'zi  yoki  "3"ni  kiriting`);
            if ((savol1[0].toLowerCase() == "1") || (savol1.toLowerCase() == "kiritish")) {
                kiritish();
                b1 = 0;
            } else if ((savol1[0].toLowerCase() == "2") || (savol1.toLowerCase() == "taxrirlash")) {
                tahrirlash();
                b1 = 0;
            } else if ((savol1[0].toLowerCase() == "3") || (savol1.toLowerCase() == "o'chirish")) {
                ochirish();
                b1 = 0;
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