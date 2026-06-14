// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

import { addBook, listBooks, searchBook } from './functions/bookManager';

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini

// Tambah buku

addBook({
  title: 'Laskar Pelangi',
  author: 'Andrea Hirata',
  publicationYear: 2005,
});

addBook({
  title: 'Bumi',
  author: 'Tere Liye',
  publicationYear: 2014,
});

addBook({
  title: 'Atomic Habits',
  author: 'James Clear',
  publicationYear: 2018,
});

// Tampilkan semua buku

console.log('\n=== LIST BOOKS ===');
listBooks();

// Cari buku berdasarkan judul

console.log('\n=== SEARCH BOOKS ===');
searchBook('Laskar Pelangi');
searchBook('Bumi');
searchBook('Atomic Habits');

// Cari buku tanpa parameter

console.log('\n=== SEARCH TANPA PARAMETER ===');
searchBook();

// Cari buku dengan judul yang tidak ada

console.log('\n=== SEARCH: HARRY POTTER ===');
searchBook('Harry Potter');
