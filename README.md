# Router JS

Jadi, router js ini adalah router di url tanpa menggunakan framework js seperti React atau Vue.

Contoh link yang dibuat oleh router js ini adalah:

- situs.com/#/
- situs.com/#baca
- situs.com/#edit

Oh iya, kenapa kok nggak seperti ini:

```
situs.com/#edit/12
```

Soalnya, script ini cuma untuk mendapatkan hash pertama (sebelum `/`). Kalau untuk potongan hash berikutnya, script ini nggak ikut-ikutan.

## Instalasi

Pakai aja `router.js` yang ada di repositori ini.

Terus, nanti masangnya kayak gini:

```
<script src="router.js"></script>
```

## Menggunakan 

Contoh kodenya:

```
new Router({
 el: ".tampil",
 routes: {
  "#": ".beranda",
  "#baca": ".baca"
 },
 script: ["beranda()", "baca()"]
})
```

Nah, kita lihat script di atas. Jadi, dia terdiri dari tiga bagian yaitu `el`, `routes`, dan `script` (opsional).

`el` adalah letak kita menampilkan view router kita. Kalau di Vue kan pakai tag `<router-view>`. Kalau di sini, bisa custom. Kan, di situ kusebutkan `.tampil`. Maka, router viewnya adalah `<div class="tampil"></div>`.

`routes` adalah list linknya (hash) dan templatenya. Yang bagian kiri adalah linknya hash. Bagian kanan adalah templatenya. Misal, yang pertama itu, kalau di linknya `situs.com/#/`, maka kita akan menampilkan `<div class="beranda></div>`.

`script` adalah script-script yang dijalankan setiap perubahan link hash.