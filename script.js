


/*
* Пример использования промесов
*
* */

function shoot() {

    console.log('Вы бросили монетку...');

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve() : reject();
        }, 3000);
    });

    return promise;
}

function dropEagle(){
    console.log('Выпал орел');
}

function dropTail(){
    console.log('Выпала решка');
}


/*shoot()
    .then(() => console.log('Монетка брошена и кажется это орел'))
    .then(dropEagle)
    .catch(dropTail)
    .then(() => console.log('игра окончена'));*/

shoot()
    .then(() => console.log('Монетка брошена и кажется это орел'))
    .then(dropEagle, dropTail)
    .then(() => console.log('игра окончена'));