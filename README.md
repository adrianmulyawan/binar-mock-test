# Jawaban Mock Test Fullstack Web Developer Binar Academy

## 1. Apakah Kegunaan JSON pada REST API?

JSON (JavaScript Object Notation) digunakan dalam REST API sebagai format data ringan dan mudah dibaca. Fungsinya meliputi pertukaran data antara server dan klien, serialization dan deserialization data, serta mendukung banyak bahasa pemrograman. JSON juga mendukung struktur data fleksibel dan nested, mempermudah pemodelan data dalam aplikasi.

## 2. Jelaskan bagaimana REST API bekerja

1. Frontend mengirim request ke server: Pada langkah pertama, frontend (misalnya aplikasi web atau aplikasi seluler) mengirimkan permintaan (request) ke server menggunakan endpoint URL yang telah ditentukan. Permintaan ini biasanya terdiri dari metode HTTP yang sesuai (GET, POST, PUT, DELETE) dan data yang dibutuhkan.

2. Autentikasi: Sebelum memproses permintaan, server melakukan proses autentikasi untuk memastikan bahwa permintaan tersebut berasal dari klien yang sah dan memiliki hak akses yang sesuai.

3. Server memproses permintaan: Setelah berhasil melewati tahap autentikasi, server mulai memproses permintaan tersebut secara internal. Ini dapat melibatkan operasi database, pemrosesan logika bisnis, atau interaksi dengan sistem lain.

4. Server mengembalikan respons: Setelah selesai memproses permintaan, server mengirimkan respons (response) ke frontend. Respons tersebut berisi data yang diminta oleh klien dalam format JSON atau XML. Data ini dapat berupa hasil dari operasi yang dilakukan oleh server atau pesan yang menunjukkan status keberhasilan atau kegagalan permintaan.

5. Frontend mengolah respons: Setelah menerima respons dari server, frontend mengolah data dalam format JSON atau XML yang diterima. Data ini dapat digunakan untuk menampilkan informasi di antarmuka pengguna, memperbarui tampilan, atau menjalankan aksi lain sesuai kebutuhan aplikasi.

## Link Website :

https://binar-mock-test-nu.vercel.app/login

## NOTE :

Gunakan Username "adrianmulyawan" dan Password "12345678" ketika ingin login

## Framework :

1. Botstrap
2. React JS
3. Express JS

## State Management :

1. Redux

## Library :

1. axios
2. react-router
3. react-router-dom
5. redux
6. redux-thunk
7. react-redux
8. jsonwebtoken
9. bcrypt
10. dotenv
11. sequelize
12. pg & pghstore

## Database
1. User : id, username, email, password
2. Todo : id, user_id, title, body

## API :

1. POST - REGISTER      : https://cyan-crazy-mite.cyclic.app/api/v1/register
2. POST - LOGIN         : https://cyan-crazy-mite.cyclic.app/api/v1/login
3. GET - USER LOGIN     : https://cyan-crazy-mite.cyclic.app/api/v1/userLogin
4. GET - GET ALL TODO   : https://cyan-crazy-mite.cyclic.app/api/v1/todo
5. POST - ADD NEW TODO  : https://cyan-crazy-mite.cyclic.app/api/v1/todo
6. PUT - EDIT TODO      : https://cyan-crazy-mite.cyclic.app/api/v1/todo/edit/3
7. DELETE - DELETE TODO : https://cyan-crazy-mite.cyclic.app/api/v1/todo/delete/1
