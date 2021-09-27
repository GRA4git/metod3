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
  } else{
    console.log(`Указанный пароль, ${youPassword} не верен. Попробуйте еще раз`);
  }

    }
    man.lotteryNumber = 344;

    let lottery = Math.floor(Math.random() * 1000) + 1;
    
    if (lottery === man.lotteryNumber) {
         man.summaDeneg += 1000000
        alert('поздравляем вы выиграли')
    } else {
        alert('Вы проиграли, попробуйте еще раз')
    }
        
    }


// 7. Присвоить объекту новое свойство lotteryNumber задать ему любое произвольное значение от 0 до 1000. Отдельно от объекта создать переменную lottery, в значении которого будет рандомное (случайное число(нужно самостоятельно узнать как в js получить случайное число)). Далее напишите код, в котором, если значение свойство lotteryNumber и переменной lottery окажутся равны, то свойство объекта `man` отвечающее за сумму денег на счете увеличивается на 1 000 000 и в alert() будет выведено сообщение: “поздравляем вы выиграли!”, иначе “Вы проиграли, попробуйте еще раз”. 

