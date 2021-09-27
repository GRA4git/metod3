// Создать объект  man с информацией о человеке. Он должен содержать следующие свойства: имя, фамилия, возраст, рост(м), вес(кг), логин, пароль, сумма денег на счете;

const man = {
    name: "Alen",
    lastName: "Delon",
    age: 70,
    height: 180,
    weight: 80,
    login: "alen",
    password: "3753",
    balanse: 100000,
    giveMoney = function( number){
if(number > this.balanse/2){
    return "Делахь, сайгах дац са оццал ахч"
}  
this.balanse -= number
return `Хьаэца хьай ${number}. Соьгахь диснаг х1ар ду: ${this.balanse - number}. Сих хьадалахь!`

}
    }
    getIMT = function (height, weight ) {
        weight / height ** 2
    },
    imtResult = function(imt){
        if(imt<=18){
            return "Недостаточный вес"
        }
        if(imt>18 && imt <=25){
            return "Вес в норме"
        }
        if(imt>25 && imt <=29){
            return "Избыточный вес"
    }
    if( imt > 29){
        return "ожирение"
}
man.adress ={
    sity: paris,
    street: monmartr,
    house: 3
}

let youPassword = "3753"
if (youPassword === man.password) {
    console.log(`Добро пожаловать, ${man.name} ${man.lastName}. Ваш логин ${man.login}`);
  }else{
    console.log(`Указанный пароль, ${youPassword} не верен. Попробуйте еще раз`);
  }


//   Внутри объекта добавить метод .giveMoney() который принимает один параметр - число. Если это число больше чем половина от суммы денег на его счете, то метод должен вернуть,  “Делахь, сайгах дац са оццал ахч”. Если меньше, то функция должна вернуть: “Хьаэца хьай [запрошенная сумма]. Соьгахь диснаг х1ар ду: [остаток суммы]. Сих хьадалахь!”, а сумма измениться. Например: