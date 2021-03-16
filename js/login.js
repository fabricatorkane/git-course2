let login=prompt('Ты кто?');
if (login=='Админ') {
    
    let passWord=prompt('Пароль?');
    
    if (passWord=='Я Главный!') {
        alert('Здравствуйте!');
    } else if (passWord == '' || passWord == null){ // передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null
        alert('Отмена!');
    } else {
        alert('Неверный пароль');
    }
} else if (login == '' || login == null) {
    alert( 'Отменено' );
  } else {
    alert( "Я вас не знаю" );
  }