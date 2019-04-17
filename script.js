
/*Пример использования промесов
*
* getDataFromBD() - функция запускающая цепочку промесов
* выполнена передача данных через resolve(users) в следующий promise в виде usersList
* */

function getDataFromBD(){

    let promise = new Promise(function (resolve,reject) {

        setTimeout(function () {
            console.log('Сервер: запрашиваю список пользователей в БД');
            console.log('...');
            Math.random() < 0.9 ? resolve(): reject('не удалость получить данные из БД');
        }, 1000);

    });

    return promise
}

getDataFromBD().then(function () {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('БД: формирую список пользователей');
            console.log('...');
            Math.random() < 0.9 ? resolve(): reject('Ошибка формирования списка пользователей');
        }, 1000)
    });
})
    .then(function () {

        return new Promise(function (resolve, reject) {
            setTimeout(function () {

                let users = ['иван', 'петр', 'григорий'];

                console.log('Сервер: запрашиваю список пользователей в БД');
                console.log('...');
                Math.random() < 0.9 ? resolve(users): reject('Ошибка запроса пользователей из БД');
            }, 1000);
        });

    })
    .then(function (usersList) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Получен следующий список пользователей ' + usersList.join(';'));
                console.log('трансформирую данные для клиента');
                console.log('...');
                Math.random() < 0.9 ? resolve(): reject('Ошибка трансформации данных для клиента');
            }, 1000);
        });
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Клиент получает данные');
                console.log('...');
                Math.random() < 0.9 ? resolve(): reject('Ошибка получения данных для клиента');
            }, 1000);
        });
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Программа завершена')
    });

/**
* Пример использования функции async await
* common() - асинхронная функция
* 
* 
* */


function getDataFromBD(){
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log('Сервер: запрашиваю список пользователей в БД');
            console.log('...');
            Math.random() < 0.9 ? resolve(): reject('не удалость получить данные из БД');
        }, 1000);
    });
}

function createUserList(){
	return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('БД: формирую список пользователей');
            console.log('...');
            Math.random() < 0.9 ? resolve(): reject('Ошибка формирования списка пользователей');
        }, 1000)
    });
}

function getUserList(){
	return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let users = ['иван', 'петр', 'григорий'];
                console.log('Сервер: запрашиваю список пользователей в БД');
                console.log('...');
                Math.random() < 0.9 ? resolve(users): reject('Ошибка запроса пользователей из БД');
            }, 1000);
    });
}

function transformData(usersList){
	return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Получен следующий список пользователей ' + usersList.join(';'));
                console.log('трансформирую данные для клиента');
                console.log('...');
                Math.random() < 0.9 ? resolve(): reject('Ошибка трансформации данных для клиента');
            }, 1000);
        });
}

function getData(){
return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('Клиент получает данные');
                console.log('...');
                Math.random() < 0.9 ? resolve(): reject('Ошибка получения данных для клиента');
            }, 1000);
        });
}


async function common(){
	let response1 = await getDataFromBD();
	let response2 = await createUserList();
	let response3 = await getUserList();
	let response4 = await transformData(response3);
	let response5 = await getData();
	console.log('конец')
}

common();

	
	
