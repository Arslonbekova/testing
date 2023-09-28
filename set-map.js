///////////verstion(0.3)
let lest=[
    {
        savol:["8+9=? yig'indini hisoblang"],
        variant:[ "17",  "2" , "5" ,"9"],
        javob:["a","17"]
    },
    {
        savol:["8+10=? yig'indini hisoblang"],
        variant:[ "17", "18" , "5" ,"9"],
        javob:["b","18"]
    },
    {
        savol:["8+11=? yig'indini hisoblang"],
        variant:[ "17",  "2" , "19" ,"9"],
        javob:["c","19"]
    },
    {
        savol:["8+12=? yig'indini hisoblang"],
        variant:[ "17",  "2" , "20" ,"9"],
        javob:["c","20"]
    },
    {
        savol:["8+13=? yig'indini hisoblang"],
        variant:[ "17",  "2" , "21" ,"9"],
        javob:["c","21"]
    },
    {
        savol:["8+14=? yig'indini hisoblang"],
        variant:[ "17",  "22" , "5" ,"9"],
        javob:["b","22"]
    },
    {
        savol:["8+15=? yig'indini hisoblang"],
        variant:[ "17",  "23" , "5" ,"9"],
        javob:["b","23"]
    },
    {
        savol:["8+16=? yig'indini hisoblang"],
        variant:[ "17",  "2" , "24" ,"9"],
        javob:["c","24"]
    },
    {
        savol:["8+17=? yig'indini hisoblang"],
        variant:[ "17",  "25" , "5" ,"9"],
        javob:["b","25"]
    },
    {
        savol:["8+18=? yig'indini hisoblang"],
        variant:[ "17",  "2" , "26" ,"9"],
        javob:["c","26"]
    }
    // {
    //     savol:["8+19=? yig'indini hisoblang"],
    //     variant:[ "27",  "2" , "5" ,"9"],
    //     javob:["a","27"]
    // },
    // {
    //     savol:["8+20=? yig'indini hisoblang"],
    //     variant:[ "28",  "2" , "5" ,"9"],
    //     javob:["a","28"]
    // }
    ];
function startTest() {
    let x=1;
    while (x) {
        let tanlov=(prompt(`admen bo'lsangiz......a yoki admen\nuser bo'lsangiz.......b yoki user \nso'zini kiriting`)).toLowerCase();
            if((tanlov=="admen")||(tanlov=="a")){
               admen();
            }
            if((tanlov=="user")||(tanlov=="b")){
                user(lest);
            }
            let tekshirish=prompt(`test ishlab ko'rishni istaysizmi \n a)  ha \n b)  yo'q`);
            if((tekshirish=="a")||(tekshirish=="ha")){
                x=1;
            }
            else{
                x=0; 
                break;
            }
    }  
}
startTest();

function user(lest){
 
    let ILTS=["fan yoki sport olimpiadalarida faxrli o'rin egallaganmi(oxirgi ikki yil ichida) \n a)ha \n b)yo'q ",
    "chet tili sertifikatingiz mavjudmi \n a)ha \n b)yo'q ",
    "nogironligi to'g'risidagi xujjat mavjudmi \n a)ha \n b)yo'q"]
    
    let b=0,b1=0,b2=0;
    let imtiyozlar=[];
    for(let j=0;j<=ILTS.length-1;j++){
        imtiyozlar.push(variant=prompt(ILTS[j]));
        }
        if((imtiyozlar[0]).toLowerCase()==("a"||"ha")){
            b=b+50;
        }
        if((imtiyozlar[1]).toLowerCase()=="a"||"ha"){
            b1=b1+25;
        }
        if((imtiyozlar[2]).toLowerCase()=="a"||"ha"){
            b2=2;
        }
    
    let d=0;
    let kiritilgan_javoblar="",javoblar="";
    let boshlandi= new Date();
    let  bosh=boshlandi.getMinutes() * 60+boshlandi.getSeconds();
    for(let i=0;i<=lest.length-1;i++){
        variant=prompt(` ${lest[i].savol} \n a.${lest[i].variant[0]}\n b.${lest[i].variant[1]}\n c.${lest[i].variant[2]} \n d.${lest[i].variant[3]}`);
        if((variant[0].toLowerCase()==(lest[i].javob[0]))||(variant.toLowerCase()==(lest[i].javob[1]))){
            d=d+5;
        }
        else{
            d=d+0;
        }
        if(variant.toLowerCase()==("quet"||"chiqish"||"break")){
            i=lest.length;
        }
        javoblar=javoblar+"     "+(i+1)+"."+lest[i].javob;  
        kiritilgan_javoblar=kiritilgan_javoblar+"     "+(i+1)+"."+variant;
    
    }
    let tugash = new Date();
    let tugadi=(tugash.getMinutes() * 60)+tugash.getSeconds();
    let tjavob=lest.length-(lest.length-(d/5));
    let samaradorlik=((tjavob*100)/(lest.length));
    alert(`${lest.length} ta savoldan ${tjavob} tasiga to'gri javob berdingiz \nTestdan  ${(lest.length-(lest.length-(d/5)))*5} bal to'pladingiz \n Imtiyoz balingiz:${(((lest.length-(lest.length-(d/5)))*5)/b)+b+b1}\nUmumiy ${(b+b1+(((lest.length-(lest.length-(d/5)))*5)/b))+((lest.length-(lest.length-(d/5)))*5)} to'pladingiz \n Samaradorlik ${Math.floor(samaradorlik)}% \nTestni ishlash uchun${tugadi-bosh}soniya sarfladingiz \n Javoblar ketma-ketligi quyidagicha: \n ${javoblar}  \n Siz kiritgan javoblar ketma-ketligi quyidagicha:\n ${kiritilgan_javoblar}`)
    }
function admen() {
    let b1=1,xatolik=0,parol1="1234";;
    while (b1) {
        let parol=prompt(`parolni kiriting`);
        if(parol==parol1){
            let savol1=prompt(`a) savol kiritishni istasangiz....kiritish so'zi yoki a variantini kiriting \n b)savol taxrirlashni istasangiz......taxrirlash so'zi yiki a variantini kiriting` );
            if((savol1[0].toLowerCase()=="a")||(savol1.toLowerCase()=="kiritish")){
                let y=1,push1={savol:[] ,variant:[] ,javob:[] };
                while (y) {
                    push1.savol.push(prompt(`savolni kiriting`));
                    for (let i = 0; i <=3; i++) {
                        push1.variant.push(prompt(`${i+1}-variantni kiriting`));  
                    }
                    for (let i = 0; i <=1; i++) {
                        push1.javob.push(prompt(`$ ${push1.savol} \n a.${push1.variant[0]}\n b.${push1.variant[1]}\n c.${push1.variant[2]} \n d.${push1.variant[3]}\n javob variantini kiriting(qiymatini kiring)`));  
                    }
                    let yana=prompt(`yana savolni kiritishni istaysizmi \n a)ha \n b)yo'q`);
                    if((yana=="b")||(yana=="yo'q")){
                        y=0,b1=0;
                    }
                }
                lest.push(push1);
            }
            else if((savol1[0].toLowerCase()=="b")||(savol1.toLowerCase()=="taxrirlash")){
                y=1;  
            }
            else{
               alert("bunday qiymat mavjud emas qaytadan tanlang");
               b1=1;
            }
        }
        else{
            alert(`parol noto'gri `);
            xatolik=xatolik+1;
        } 
        if(xatolik==3){
            alert(`siz 3 marta xatom kiritdingiz va sayt tomonidan bloklandingiz`);
            b1=0;
            break;
        }
    }
}


// function getSecondsToday() {
//     let hozir= new Date();
//     alert(hozir.getMinutes() * 60+d.getSeconds());
//     alert("dfghjklhgfdcgfvhjkhmg");

    // let b = new Date();
    // alert(b.getMinutes() * 60+b.getSeconds());
    // alert((b.getMinutes() * 60+b.getSeconds())-(d.getMinutes() * 60+d.getSeconds()))
//   }
  
// getSecondsToday();