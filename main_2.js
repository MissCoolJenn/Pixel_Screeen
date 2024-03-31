var screen_p = document.getElementById('screen_p');

// Функция расчета расширения экрана пикселей
function Screen_size(q) {
    // определение соотношения сторон экрана
    //var aspects = window_size_X / window_size_Y;

    // возврат расширения сторон экрана пикселей
    switch (q) {
        case 'Y':
            // получение размеров окна пользователя
            var window_size_Y = window.innerHeight;
            // определение расширение экрана символов
            var window_symbol_size_Y = Math.floor(window_size_Y / 24); // 18 - для шрифта 15px, 12 для шрифта 10

            // делает расширениие экрана пикселей не четным
            if(window_symbol_size_Y % 2 == 0) {
                return window_symbol_size_Y - 1;
            } 
            else {
                return window_symbol_size_Y;
            }
            //console.log(window_symbol_size_Y);

        case 'X':
            // получение размеров окна пользователя
            var window_size_X = window.innerWidth;
            // определение расширение экрана символов
            var window_symbol_size_X = Math.floor(window_size_X / 12.2); // 9.1 - для шрифта 15px, 6.1 для шрифта 12

            // делает расширениие экрана пикселей не четным
            if(window_symbol_size_X % 2 == 0) {
                return window_symbol_size_X - 1;
            } 
            else {
                return window_symbol_size_X;
            }
            //console.log(window_symbol_size_X);
    }
}

// получение координат центра строки
function Get_display_center(q) {
    return q / 2 - 0.5;
}


// функция изменение переменных размеров экрана символов
function Screen_pixels() {
    // получение соотношения сторон пикселей
    window_X = Screen_size('X');   
    window_Y = Screen_size('Y');

    // получение координат центрального пикселя
    window_center_X = Get_display_center(window_X);
    window_center_Y = Get_display_center(window_Y);

    // список для заполнения дисплея символами
    var X = '';
    for(var i = 0; i < window_Y; i++) {
        let inner_list = '';

        for(var j = 0; j < window_X; j++) {
            if(i == window_center_Y && j == window_center_X) {
                inner_list += '.';
            }
            else {
                inner_list += '@';
            }
            
        }

        X += inner_list;
        X += '\n';
    }

    // изменение текста на экране символов
    return X;
}

// обработчик события - изменение размера окна браузера
window.onresize = function() {
    screen_p.textContent = Screen_pixels();
};

// запускается при загрузке страницы
screen_p.textContent = Screen_pixels();