


/*
* Пример использования промесов
*
* */

function getTicket(){
	console.log('Я хочу купить билет');
	
	var promise = new Promise(function(resolve, reject) {
	setTimeout(()=>(Math.random() < 0.8)? resolve(): reject(), 2000 );
	});
	
	return promise;
}

function getOk(){
	console.log('Все отлично, у нас есть билеты')
	//setTimeout(()=>console.log('Все отлично, у нас есть билеты'),2000);
	setTimeout(()=>getMoney(),2000);
}

function getMoney(){
	console.log('С вас 500 рублей');
}


function getError(){
	console.log('К сожалению билеты закончились');
	setTimeout(()=>console.log('Приходите в следующий раз'),2000);
	
}



getTicket().then(getOk)
			.catch(getError);
			

