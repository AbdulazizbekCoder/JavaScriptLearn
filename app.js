// birinchi amaliy mashgulot foydalanuvchidan malumot olib uni yoshini
 // va qancha oy hafta kun soat minut va soniya yashaganini chiqarish kerak ! 

// const ism = prompt("Ismingizni kiriting:")
// const year = +prompt("Tug'ilgan yilingizni kiriting:")

// let age = 2024 - year
// let month = age * 12
// let week = (age * 365) / 7
// let day = age * 365
// let clock = day * 24
// let minute = clock * 60
// let secund = minute * 60

// const result = `Assalomu aleykum xurmatli ${ism}. Sizning yoshingiz ${age} Siz ${month} oy
// ,
// ${ week.toFixed(0) } hafta, ${day} kun, ${clock} 
// soat, ${minute} daqiqa, ${secund} soniya`

// alert(result)



// Ikkinchi amaliy mashgulot  
// Ismlar arrayi mavjud va foydalanuvchidan prompt orqali ism soraymiz va foydalanuvchi yuborgan 
// ism bizning arrayni ichida bolsa unga ism mavjud degan xabarnoma yuboramiz

// let ism = prompt('Ism kiriting:')

// const ismlar = ['Abdulaziz', 'Nurbek', 'Doston']


// if(ismlar.includes(ism)){
//     alert( `${ism}  ismi ro'yhatda bor` )
// }else{
//     alert(`Ha ${ism} ismi ro'yhatda mavjud emas`)
// }


// arrayni ichidagi ismlarni hammasiga bek qo'shib consolga chiqarish

// const ismlar = ['Abdulaziz' , 'Alisher', 'Nodir']

// for 
// for(let i = 0; i < ismlar.length; i++){

    // let natija = ismlar[i] + 'bek'

    // console.log(natija);
// }


// while

// let i = 0
// while(ismlar.length > i){

//     let natija = ismlar[i] + 'bek'
//     console.log(natija);
//     i++
// }

 

// Promptda kelgan viloyat nomiga qarab viloyatda qancha aholi bor ekanligini chiqarish


// const ViloyatNomi = prompt('qaysi viloyatni aholi sonini bilmoqchisiz ?')

// switch(ViloyatNomi){
//     case "fargona":
//     alert(` Hozirda ${ViloyatNomi} viloyatida 4 mln aholi bor`)
//     break
    
//     case "andijon":
//     alert(` Hozirda ${ViloyatNomi} viloyatida 3 mln aholi bor`)
//     break
    
//     case "namangan":
//     alert(` Hozirda ${ViloyatNomi} viloyatida 2 mln aholi bor`)
//     break
//     default:
//       alert(`Hozircha ${ViloyatNomi}ning aholi soni haqida malumot yoq`)  
// }



//  prompt orqali olingan malumotni nechta belgisi borligini aniqlang va unga meyor qo'ying

const a = prompt('Biror nima yozing😊')

let meyor = 25

if (a.length > meyor){
    alert(`Siz ${meyor}ta belgidan iborat gap kiritishingiz mumkin. Lekin siz hozir ${a.length}ta 
    belgidan iborat gap kiritingiz. Bu meyordan ${a.length - meyor}ta ko'p `)
}else{
    alert(`Siz ${meyor}ta belgidan iborat gap kiritishingiz mumkin. Lekin siz hozir ${a.length}ta 
    belgidan iborat gap kiritingiz. Bu meyordan ${meyor - a.length}ta kam `)
}


