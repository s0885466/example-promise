
/*Пример использования промесов
*
* getDataFromBD() - функция запускающая цепочку промесов
* */

function getDataFromBD(){

    let promise = new Promise(function (resolve,reject) {

        setTimeout(function () {
            console.log('Сервер: запрашиваю список пользователей в БД');
            console.log('...');
            Math.random() < 0.8 ? resolve(): reject('не удалость получить данные из БД');
        }, 1000);

    });

    return promise
}

getDataFromBD().then(function () {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('БД: формирую список пользователей');
            console.log('...');
            Math.random() < 0.8 ? resolve(): reject('Ошибка формирования списка пользователей');
        }, 1000)
    });
})
    .then(function () {

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Сервер: запрашиваю список пользователей в БД');
                console.log('...');
                Math.random() < 0.8 ? resolve(): reject('Ошибка запроса пользователей из БД');
            }, 1000);
        });

    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('трансформирую данные для клиента');
                console.log('...');
                Math.random() < 0.8 ? resolve(): reject('Ошибка трансформации данных для клиента');
            }, 1000);
        });
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Клиент получает данные');
                console.log('...');
                Math.random() < 0.8 ? resolve(): reject('Ошибка получения данных для клиента');
            }, 1000);
        });
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Программа завершена')
    });


