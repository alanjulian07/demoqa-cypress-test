# Cypress Automation Test - DemoQA

Automation test ini dibangun menggunakan **Cypress** dengan menerapkan konsep **Page Object Model (POM)** dan **Data-Driven Testing** berbasis file CSV untuk menguji fungsionalitas website [DemoQA Web Tables](https://demoqa.com/webtables).

---

## Fitur Pengujian (Test Cases)

1. **Web Tables (Positive & Negative Test)**
   - **Positive Test Case**: Mengambil data user secara dinamis dari file CSV (`users.csv`) dan melakukan *bulk insert* ke dalam tabel secara berurutan. Dilanjutkan dengan verifikasi bahwa data berhasil masuk ke dalam tabel.
   - **Negative Test Case**: Menguji validasi form ketika field penting (seperti Email) dikosongkan untuk memastikan form menangani error dengan benar.

2. **Nilai Plus (Opsional)**
   - **Droppable Test**: Menguji fungsionalitas interaksi *Drag and Drop* pada halaman [DemoQA Droppable](https://demoqa.com/droppable) hingga elemen target berhasil berubah menjadi status *"Dropped!"*.
   - **Resizable Test**: Menguji fungsionalitas *resize* kotak elemen pada halaman [DemoQA Resizable](https://demoqa.com/resizable).

---

## Struktur Proyek (Page Object Model)

demoqa-cypress-test/
├── cypress/
│   ├── e2e/
│   │   ├── webtables.cy.js    <-- Test script untuk Web Tables (Positive & Negative)
│   │   └── nilai-plus.cy.js     <-- Test script opsional (Droppable & Resizable)
│   ├── fixtures/
│   │   └── users.csv          <-- Sumber data test (Data-Driven Testing)
│   └── support/
│       ├── e2e.js
│       └── pages/
│           ├── WebTablesPage.js <-- Page Object untuk Web Tables
│           ├── DroppablePage.js <-- Page Object untuk Droppable
│           └── ResizablePage.js <-- Page Object untuk Resizable
├── package.json
└── README.md

💻 Prasyarat (Prerequisites)
Sebelum menjalankan pengujian, pastikan perangkat Anda telah terinstal:

> Node.js (Versi LTS disarankan)
> Git
> Code Editor (seperti VS Code)

⚙️ Cara Instalasi & Setup
1. Clone repository ini ke komputer lokal Anda:
git clone <url-repository-github-anda>
cd demoqa-cypress-test

2. Install seluruh dependencies (Cypress & PapaParse) yang terdaftar di package.json:
npm install

▶️ Cara Menjalankan Automation Test
Anda dapat menjalankan pengujian melalui dua mode:

> Mode Interaktif (Cypress Test Runner / UI):
Digunakan untuk melihat eksekusi test secara visual di browser : 
npx cypress open

(Pilih E2E Testing -> Pilih browser Chrome -> Klik file spec yang ingin dijalankan seperti webtables.cy.js atau nilai-plus.cy.js).

> Mode Headless (Command Line / CLI):
Digunakan untuk menjalankan test di background:
npx cypress run