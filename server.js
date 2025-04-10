const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Указываем папки для статических файлов
app.use(express.static(path.join(__dirname, 'public')));


// Отправка файла index.html при обращении к корневому маршруту
app.get('/', (req, res) => {
    
    //res.send('hello');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});  
