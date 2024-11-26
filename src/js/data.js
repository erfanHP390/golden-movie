const movie = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      isSerial: false,

      time: "142 دقیقه",
      year: 1994,
      imdbScore: 9.3,
      country: "آمریکا",
      director: "Frank Darabont",
      stars: [
        "Tim Robbins",
        "Morgan Freeman",
        "Bob Gunton",
      ],
      genre: ["درام"],
      quality: [480, 720, 1080],
      Isdubbed: true,
      summery:
        "در فیلم رستگاری در شاوشنک : اندی دوفرین بانکدار جوانی است که به جرم قتل همسر اش به حبس ابد در زندان ایالتی شائوشنک محکوم می شود. وی تأکید می کند که جرمی مرتکب نشده، ولی قاضی او را گناهکار اعلام میکند. او سالهای زیادی را در این زندان می گذراند. آلیس بوید رِدینگ یکی از زندانی های سیاه پوست است که به این شهرت دارد که می تواند هر چیزی را در زندان فراهم کند و ...",
      IsTopFilm: true,
      img: "../images/post-film/3.jpg",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_QL75_UX484.5_.jpg",
      url: "https://www.uptvs.com/play2?e=78950&dub=%D8%B1%D8%B3%D8%AA%DA%AF%D8%A7%D8%B1%DB%8C%20%D8%AF%D8%B1%20%D8%B4%D8%A7%D9%88%D8%B4%D9%86%DA%A9",
    },
    {
      id: 2,
      title: "The Godfather",
      isSerial: false,

      time: " 175 دقیقه ",
      year: 1972,
      imdbScore: 9.2,
      country: "آمریکا",
      IsTopFilm: true,
      director: "Francis Ford Coppola",
      stars: [
        "Francis Ford Coppola",
        "Al Pacino",
      ],
      genre: ["درام", "تراژدی", "جنایی"],
      quality: [480, 720, 1080],
      Isdubbed: true,
      summery:
        "فیلم در جشن عروسی کانی، دختر دون ویتو کورلئونه، در لانگ بیچ نیویورک، لانگ آیلند شروع می شود. وقت پدرخوانده برای شنیدن خواهش های دوستان و زیردستان چاپلوس پر شده است. یکی از این خواهش ها را پسرخوانده ی او، جانی فونتی خواننده مطرح می کند. آن خواهش چیست؟",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg",
      poster:
        "https://assets.mubicdn.net/images/artworks/550926/images-original.png?1686641973",
      url: "https://www.uptvs.com/play2?e=67604&dub=%D9%BE%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D9%86%D8%AF%D9%87",
    },
    {
      id: 3,
      title: "Schindler's List",
      isSerial: false,

      time: " 195 دقیقه ",
      year: 1993,
      imdbScore: 9.0,
      country: "آمریکا",
      IsTopFilm: true,
      director: "    Steven Spielberg",
      stars: [
        "Liam Neeson",
        "Ralph Fiennes",
      ],
      genre: ["درام", "زندگینامه", "تاریخی"],
      quality: [480, 720, 1080],
      Isdubbed: true,
      summery:
        " اسکار شیندلر طی سال‌های جنگ جهانی دوم در لهستان که به دست آلمان اشغال شده تلاش می‌کند تا کارگران یهودی خود را نجات داده و از اعزام آنها به اردوگاه‌های کار اجباری جلوگیری کند و...",
      poster:
        "../images/post-film/1-poster.webp",
      img: "../images/post-film/2.jpg",
      url: "https://www.uptvs.com/play2?e=107623&dub=%D9%81%D9%87%D8%B1%D8%B3%D8%AA%20%D8%B4%DB%8C%D9%86%D8%AF%D9%84%D8%B1",
    },
    {
      id: 4,
      title: "Forrest Gump",
      isSerial: false,

      time: "	142",
      IsTopFilm: true,
      year: 1994,
      imdbScore: 8.8,
      director: "Robert Zemeckis",
      stars: [
        "Tom Hanks",
        "Robin Wright",
      ],
      genre: ["زندگینامه", "درام", "رمانتیک"],
      country: "آمریکا",
      quality: [480, 720, 1080],
      Isdubbed: true,
      summery:
        " آی کیوی او در خردسالی زیر حد معمولی (۷۵) بود، شخصیت شیرین و عزیزی دارد و نسبت به عزیزان و وظایف خود از خود گذشته‌است. صفات شخصیتی او باعث می‌شود که موقعیت‌هایی برایش پیش آید که مسیر زندگیش را تغییر دهد. با پیش آمدن چنین موقعیت‌هایی او با رخدادها و شخصیت‌های برجسته تاریخ معاصر آمریکا مواجه می‌شود.",
      poster:
        "https://m.media-amazon.com/images/S/pv-target-images/0ad69b0fc33c51c85f1874652d0663a9c2b5063ae5b78580d5d4530c6917fc27._SX1080_FMjpg_.jpg",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaNwbILJZZrhqpXUECVrPf1m8h3mw8dQWwA&s",
      url: "https://www.uptvs.com/play2?e=96738&dub=%D9%81%D8%A7%D8%B1%D8%B3%D8%AA%20%DA%AF%D8%A7%D9%85%D9%BE",
    },
    {
      id: 5,
      title: "Fight Club",
      isSerial: false,

      time: "139 دقیقه ",
      year: 1999,
      IsTopFilm: true,
      imdbScore: 8.8,
      director: "David Fincher",
      stars: [
        " Brad Pitt",
        "Edward Norton",
      ],
      genre: ["درام"],
      country: "آلمان",
      quality: [720, 1080],
      Isdubbed: true,
      summery:
        " «راوی»، جوانی پریشان، پی می‌برد که به کمک مشت‌بازی با دست‌های برهنه، بیش از هر زمان دیگری احساس زنده بودن می‌کند. او و «تایلر» که به دوستانی صمیمی تبدیل شده‌اند، هفته‌ای یک بار با هم ملاقات می‌کنند تا با هم مشت بازی کنند. در حالی که افراد دیگری هم به باشگاه‌شان می‌پیوندند، محفل‌شان به رغم آن که مخفی است بین شرکت کننده‌هایش، شهرت و محبوبیت یک باشگاه زیرزمینی را پیدا می‌کند و...",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanu-m1-UXm-Cbt0TPM313JoTHCA7aGRD3Hw&s",
      img: "https://media.posterlounge.com/img/products/770000/764906/764906_poster.jpg",
      url: "https://www.uptvs.com/play2?e=81354&dub=%D8%A8%D8%A7%D8%B4%DA%AF%D8%A7%D9%87%20%D9%85%D8%B4%D8%AA%20%D8%B2%D9%86%DB%8C",
    },
    //
    {
      id: 6,
      title: "12 Angry Men",
      isSerial: false,

      time: "96 دقیقه ",
      year: 1957,
      imdbScore: 9,
      IsTopFilm: true,
      genre: ["جنایی", "درام"],
      country: "	آمریکا ",
      Isdubbed: true,
      quality: [480, 720, 1080],
      director: "Sidney Lumet",
      stars: [
        "Henry Fonda",
        "Lee J. Cobb",
      ],
      summery:
        "فیلم درباره‌ی دوازده مرد در هیات منصفه یک دادگاه است که در زمان تنفس و قبل از اخذ رای نهایی دورهم جمع می‌شوند. همه اعضا معتقدند که مظنون گناهکار است. او یک پسر هجده ساله‌است که گمان می‌رود پدر خود را به قتل رسانده‌. یکی از اعضای هیات منصفه به‌نام دیوید با رای گناهکار بودن موافق نیست و شک‌هایی دارد باتوجه به این‌که تمام حقایق اثبات می‌کند که فرد مظنون گناهکار است، اعضا کنجکاو می‌شوند که چگونه دیوید دراین مورد مشکوک است و او دلایل خود را توضیح می‌دهد…",
      img: "https://musicart.xboxlive.com/7/b7805100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGRlZjVhNWMtOTUxYi00MTYxLWEzOWUtMTM1NDc3ZWRjMDZjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg",
      url: "https://www.uptvs.com/play2?e=91610&dub=12%20%D9%85%D8%B1%D8%AF%20%D8%AE%D8%B4%D9%85%DA%AF%DB%8C%D9%86",
    },
    {
      id: 7,
      title: "Se7en",
      isSerial: false,

      time: " 127 دقیقه ",
      year: 1995,
      imdbScore: 8.6,
      IsTopFilm: true,
      genre: ["جنایی", " درام "],
      country: "آمریکا",
      Isdubbed: true,
      quality: [480, 720, 1080],
      director: "David Fincher",
      stars: [
        " Brad Pitt",
        "Morgan Freeman",
      ],
      summery:
        " بازرس نیلز جوان به قسمت جنایی اداره پلیس انتقال یافته و جانشین ویلیامز افسر مجرب پلیس می گردد. وقوع قتلهای زنجیره ای فجیع و ناتوانی او در امر دستگیری عامل آن باعث می شود كه ویلیامز به كمك او بشتابد.اما...",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnYEQx15eUJpQU1BnEsuhSJeTGX_2EBSFdQ&s",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB-4Lcxybi3gU9Alq0HeF5aS7Nrt_QR-nGA&s",
      url: "https://www.uptvs.com/play2?e=78821&dub=%D9%87%D9%81%D8%AA",
    },
    {
      id: 8,
      title: "Gladiator",
      isSerial: false,

      time: "155 دقیقه ",
      year: 2000,
      imdbScore: 8.5,
      IsTopFilm: true,
      genre: ["اکشن", "درام"],
      country: "آمریکا",
      Isdubbed: true,
      quality: [480, 720, 1080],
      director: "Ridley Scott",
      stars: [
        "Russell Crowe",
        "Joaquin Phoenix",
        "Connie Nielsen",
      ],
      summery: "",
      img: "../images/post-film/1.jpg",
      poster: "./images/post-film/2-poster.webp",
      url: "",
    },
    {
      id: 9,
      title: "The Silence of the Lambs",
      isSerial: false,

      time: " 118 دقیقه ",
      year: 1991,
      imdbScore: 8.6,
      IsTopFilm: true,
      genre: ["جنایی", " درام "],
      country: "آمریکا",
      Isdubbed: true,
      quality: [720, 1080],
      director: "Jonathan Demme",
      stars: [
        "Jodie Foster",
        "Anthony Hopkins",
      ],
      summery:
        "در فیلم سکوت بره‌ها کلاریس استارلینگ، کارآموز جوان FBI توسط جک کرافورد مأموریت می‌یابد که با هانیبال لکتر گفتگو نماید، زیرا ممکن است بتواند به آن‌ها در پیدا کردن بیل بوفالو که آدم‌کشی زنجیره‌ای است و پوست قربانیانش را از تن جدا می‌نماید، کمک نماید.",
      img: "https://play-lh.googleusercontent.com/NN4OtSReaguunuEfZftynIypKWaDBwA-AqmWdl8JKO0UrE3izMM9qoKH3q2ToIsn7Zw",
      poster:
        "https://www.indiependent.co.uk/wp-content/uploads/2021/01/silence-of-the-lambs-the-1991-007-anthony-hopkins-across-cell-glass-from-jodie-foster_1000x750.jpg",
      url: "https://www.uptvs.com/play2?e=75871&dub=%D8%B3%DA%A9%D9%88%D8%AA%20%D8%A8%D8%B1%D9%87%E2%80%8C%D9%87%D8%A7",
    },
    {
      id: 10,
      title: "The Irishman",
      isSerial: false,

      time: "209 دقیقه ",
      year: 2019,
      imdbScore: 7.8,
      IsTopFilm: false,
      genre: ["بیوگرافی", "جنایی"],
      country: "آمریکا",
      Isdubbed: true,
      quality: [480, 720, 1080],
      director: "Martin Scorsese",
      stars: [
        "Al Pacino",
        "    Robert De Niro",
      ],
      summery:
        " طی دهه ۱۹۵۰ میلادی، یک راننده کامیون به نام فرانک شیرن، بخشی از محموله خود را به گانگسترهای محلی می‌فروشد و از این طریق با رهبر خانواده مافیایی بوفالینو ارتباط برقرار می‌کند. در ادامه، او همکاری خود را با این باند تبهکار آغاز می‌کند و...",
      img: "https://www.uptvs.com/wp-contents/uploads/2020/01/The-Irishman-2019.jpg",
      poster: "https://cdn.sargarme.com/uploads/2019/12/Irishman-Shakhes.jpg",
      url: "https://www.uptvs.com/play2?e=91907&upd=%D9%85%D8%B1%D8%AF%20%D8%A7%DB%8C%D8%B1%D9%84%D9%86%D8%AF%DB%8C",
    },
    {
      id: 11,
      isSerial: true,
      title: "Chernobyl",
      time: "60 دقیقه ",
      imdbScore: 9.3,
      IsTopseries: true,
      day: "شنبه",
      genre: ["درام", "تاریخی", "حادثه ای"],
      country: "انگلستان",
      Isdubbed: true,
      quality: [480, 720, 1080, "FullHD"],
      director: "Johan Renck ",
      stars: [
        "Jessie Buckley",
        "Jared Harris",
      ],
      notif: "قسمت 5 فصل 1 اضافه شد",
      summery:
        "در سریال چرنوبیل در آوریل 1986، انفجاری در تاسیسات هسته‌ای چرنوبیل در اوکراین رخ داد که باعث به وجود آمدن یکی از بدترین فجایع بشری در طول تاریخ شد و... «والری» نقشه‌ای دقیق را برای برطرف کردن آلودگی نیروگاه هسته‌ای چرنوبیل تدارک می‌بیند. از سوی دیگر، «لیودمیلا» هشدارهای مربوط به قرار گرفتن آتش‌نشان‌ها در معرض تشعشعات رادیواکتیو را نادیده می‌گیرد و...",
      img: "https://m.media-amazon.com/images/M/MV5BOTJiOWExNWEtYzE1ZS00NDJmLWFiY2ItYTNjMWZiNTQ2ZDIwXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYi9FHwbRaJL6WSFzvtAK2vfuzjqBNdxlijg&s",
      url: "https://www.imdb.com/video/vi3724524825/?playlistId=tt7366338&ref_=tt_ov_vi",
    },
    {
      id: 12,
      title: "Breaking Bad",
      isSerial: true,

      time: "45دقیقه ",
      imdbScore: 9.5,
      IsTopseries: true,
      day: "یکشنبه",
      genre: ["علمی", "درام", "جنایی"],
      country: "آمریکا",
      Isdubbed: true,
      quality: [480, 720, 1080],
      director: "Vince Gilligan",
      stars: [
        "Bryan Cranston",
        "Aaron Paul",
        "",
      ],
      notif: "قسمت آخر فصل پنجم قرار گرفت",
      summery:
        " درباره یک معلم شیمی میانسال است که متوجه می شود که دارای سرطان ریه است و ۲ سال بیشتر وقت برای زندگی ندارد. او که وضع مالی خوبی ندارد و دارای همسر و پسری معلول می باشد، به این فکر می افتد که باید قبل از مردن زندگی خانواده خود را تامین کند. پس با توجه به آشناییش به علم شیمی، همراه با یکی از شاگردان سابقش شروع به ساخت و فروش مواد مخدر می کند…",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdq0vuCeWF7fBJ7Dqc3kAzptsczMi_-1_ZXA&s",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzbgcDjlt5Ng1oZrf8KvueF-QUKoAAFSF3g&s",
      url: "https://trailer.uptvs.com/trailer/Breaking-Bad-Trailer.mp4",
    },
    {
      id: 13,
      title: "The Sopranos",
      isSerial: true,

      time: "60 دقیقه ",
      imdbScore: 9.2,
      IsTopseries: true,
      day: "شنبه",
      genre: ["جنایی", " درام "],
      country: "آمریکا",
      Isdubbed: false,
      quality: [, 720, 1080],
      director: "David Chase",
      stars: [
        "James Gandolfini",
        "Lorraine Bracco",
      ],
      notif: "فصل ششم قسمت 7 اضافه شد",
      summery:
        "سریال سوپرانو The Sopranos در مورد یک رئیس مافیای ایتالیایی آمریکایی به نام تونی سوپرانو است که با مسائل شخصی و کاری خود در زندگی دست و پنجه نرم می‌کند. حال این موضوع که بر وضعیت روانی سوپرانو تأثیر گذاشته است، وی را به سمت کمک از یک روانپزشک به نام جنیفر ملفی سوق می‌دهد و…",
      img: "https://m.media-amazon.com/images/M/MV5BZTZkMWVkNTEtYzMxMC00MzQzLTg5NjUtNTNmN2M2NzEwNzI0XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg",
      poster:
        "https://observer.case.edu/wp-content/uploads/2021/08/MV5BM2NmZDNmYTItZGM0OS00NDVmLTgwMjUtZDdmYjg0OWNiODE2XkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_-900x506.jpg",
      url: "https://www.imdb.com/video/vi2751070489/?playlistId=tt0141842&ref_=tt_pr_ov_vi",
    },
    {
      id: 14,
      title: "The Perfect Couple",
      isSerial: false,

      time: "60 دقیقه ",
      imdbScore: 6.6,
      IsTopseries: false,
      day: "دوشنبه",
      genre: ["جنایی", "درام", "معمایی"],
      country: "آمریکا",
      Isdubbed: false,
      quality: [480, 720, 1080],
      director: "Jenna Lamia",
      stars: [
        "Nicole Kidman",
        "Liev Schreiber",
      ],
      notif: "قسمت آخر اضافه شد",
      summery:
        "در سریال زوج کامل The Perfect Couple 2024 آملیا در شرف ازدواج با یکی از ثروتمندترین خانواده‌های نانتاکت (یک جزیره در ایالات متحده) است، اما در این میان یک مرگ ناگهانی، عروسی را به هم می‌زند و همه را به مظنون تبدیل می‌کند و…",
      img: "https://m.media-amazon.com/images/M/MV5BMTRmNDBjNWEtODc5My00YjEyLWJlY2EtODhmYTcxYTcyMzRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQRTYumBVvJUdTtnyS8HxCcisN0wOtz7VplS1vDHWidYgxGR0CUb1ZFKcMJcybtEOkeKuO-rC2_S1b9ABtdLY3lR8Uht2OKP2D_nA2l-XdQToCCuq3skAEAshL-j2jc52OAyA5N4M5bDSSP42GXGPpCU3HmM.jpg?r=6cb",
      url: "https://www.imdb.com/video/vi3093677593/?playlistId=tt11514868&ref_=tt_pr_ov_vi",
    },
    {
      id: 15,
      title: "Kaos",
      isSerial: false,

      time: "60 دقیقه ",
      imdbScore: 7.5,
      IsTopseries: false,
      day: "سه شنبه",
      genre: ["کمدی", "فانتزی"],
      country: "انگلستان",
      Isdubbed: false,
      quality: [480, 720, 1080],
      director: "    Charlie Covell",
      stars: [
        "Jeff Goldblum",
        "Janet McTeer",
      ],
      notif: "فصل اول اضافه شد",
      summery:
        "داستان سریال “Kaos” با زئوس، خدای قدرتمند ولی ناامن آغاز می‌شود. او وقتی متوجه یک چین و چروک روی پیشانی خود می‌شود، دچار ترس و پارانویا می‌گردد. زئوس باور دارد که این نشانه‌ای از پایان سلطنتش و در نهایت، پایان جهان است. این ترس او را به یک موجود انتقام‌جو تبدیل می‌کند. در همین حال، سه انسان به‌تدریج ارتباطات خود با یکدیگر و دخالت‌های خدایان یونانی در سرنوشتشان را کشف می‌کنند. این سه نفر باید با چالش‌های فراوانی روبرو شوند تا بتوانند مسیر درست را در برابر توطئه‌های بزرگ خدایان پیدا کنند.",
      img: "https://whsvikingtimes.com/wp-content/uploads/2024/09/625cd2bf-kaos__1200_1200__32-128-1030-1126.jpg",
      poster:
        "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVGXT54topivEhiSdMTNRRmq7fBqF4iBg4Zc637-39vTMioTFimvzsHzujlU4mOZA-1RxLbr44PVCl8jv62M1toaCUcLQSblmsSV.jpg?r=e8f",
      url: "https://www.imdb.com/video/vi896976409/?playlistId=tt8550732&ref_=tt_pr_ov_vi",
    },
    {
      id: 16,
      title: "The Old Man",
      isSerial: false,

      time: "61 دقیقه ",
      imdbScore: 7.6,
      IsTopseries: false,
      day: "چهارشنبه",
      genre: ["اکشن", "جاسوسی"],
      country: "آمریکا",
      Isdubbed: false,
      quality: [480, 720, 1080],
      director: "Robert Levine  & Jonathan E. Steinberg",
      stars: [
        "Jeff Bridges",
        "John Lithgow",
      ],
      notif: "قسمت 2 فصل دوم اضافه شد",
      summery:
        " یک مامور سابق سیا و کهنه‌سرباز افغانستان که به مدت سی سال به دور از شبکه در ورمونت زندگی می‌کند. زندگی آرام چیس زمانی به هم می‌ریزد که او به طور ناخواسته مجبور به کشتن یک مزاحم می‌شود که به خانه‌اش نفوذ کرده است. این حادثه باعث می‌شود که چیس مجبور به مخفی شدن شود و زندگی او به دنیای پیچیده و پرخطر جاسوسی بازگردد.",
      img: "https://m.media-amazon.com/images/M/MV5BZmMxNjU4YjgtYTNjOS00MzcxLWEyNjMtZmRjNDkxYjNlNGVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster: "https://ntvb.tmsimg.com/assets/p22067988_b_h8_aa.jpg?w=960&h=540",
      url: "https://www.imdb.com/video/vi3748709913/?playlistId=tt5645432&ref_=tt_ov_vi",
    },
    {
      id: 17,
      title: "Shōgun",
      isSerial: true,
      year: 2024,
      time: "60 دقیقه ",
      imdbScore: 8.6,
      IsTopseries: true,
      day: "پنج شنبه",
      genre: ["ماجراجویی", "اکشن", "تاریخی"],
      country: "آمریکا",
      Isdubbed: true,
      quality: [480, 720, 1080],
      director: "nerson",
      stars: [
        "Cosmo Jarvis",
        "Anna Sawai",
      ],
      notif: "قسمت 10 فصل اول اضافه شد",
      summery:
        "در داستان “شوگان”، دو مرد جاه‌طلب از دو جهان مختلف و یک سامورایی زن مرموز دنبال می‌شوند. جان بلکثورن، ملوان انگلیسی ریسک‌پذیر که در آخرین پرواز خود به ژاپن غرق می‌شود و به یک سرزمین ناآشنا کشیده می‌شود. لرد توراناگا، یک زیرک دایمیو قدرتمند، در تقابل با رقبای خطرناک و سیاسی خود قرار دارد. و لیدی ماریکو، زنی با مهارت‌های ارزشمند، اما در مواجهه با روابط خانوادگی بی‌شرف قرار دارد و باید ارزش و وفاداری خود را ثابت کند.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkJDzWJ9S2bVvncWUVjjKA3NFlPex0ppGvA&s",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3APa8rnjfxaHY3p1410WIUC-8R-EEZ3SFyPGg3b2C8mN6F4pm4EgUVlPP3pD6iSoLok&usqp=CAU",
      url: "https://www.imdb.com/video/vi2821244441/?playlistId=tt2788316&ref_=tt_ov_vi",
    },
  ];

const seriesList = [
    {id: 1,title: "دانلود سریال Sherlock", desc: "قسمت 6 فصل 8 اضافه شد",img: "../images/series/176941-g-330x61.jpg"},
    {id: 2,title: "دانلود سریال Breaking Bad", desc: "قسمت 3 فصل 1 اضافه شد",img: "../images/series/81189-g21-330x61.jpg"},
    {id: 3,title: "دانلود سریال Band of Brothers", desc: "قسمت 3 فصل 11 اضافه شد",img: "../images/series/2604-330x61.jpg"},
    {id: 4,title: "دانلود سریال Better Call Saul", desc: "قسمت 3 فصل 4 اضافه شد",img: "../images/series/273181-g4-330x61.jpg"},
    {id: 5,title: "دانلود سریال The Boys", desc: "قسمت 5 فصل 4 اضافه شد",img: "../images/series/5f2081dce1c5f-330x61.jpg"},
]

const genreListMovie = [
    {id: 1,title: "اکشن",num: 4},
    {id: 2,title: "بیوگرافی",num: 1},
    {id: 3,title: "تاریخی",num: 1},
    {id: 4,title: "جنایی",num: 3},
    {id: 5,title: "درام",num: 5},
    {id: 6,title: "علمی تخیلی",num: 2},
    {id: 7,title: "فانتزی",num: 4},
    {id: 8,title: "ماجراجویی",num: 3},
    {id: 9,title: "هیجان انگیز",num: 4},
]

const genreListSerials = [
    {id: 1,title: "اکشن",num: 4},
    {id: 2,title: "بیوگرافی",num: 1},
    {id: 3,title: "تاریخی",num: 1},
    {id: 4,title: "جنایی",num: 3},
    {id: 5,title: "درام",num: 5},
    {id: 6,title: "علمی تخیلی",num: 2},
    {id: 7,title: "فانتزی",num: 4},
    {id: 8,title: "ماجراجویی",num: 3},
    {id: 9,title: "هیجان انگیز",num: 4},
    {id: 10,title: "ورزشی مبارزه ای",num: 2},
    {id: 11,title: "ورزشی",num: 6},
    {id: 12,title: "ترسناک",num: 3},
    {id: 13,title: "رازآلود",num: 4},
    {id: 14,title: "شومن",num: 3},
    {id: 15,title: "ترسناک",num: 5},
    {id: 16,title: "عاشقانه",num: 3},
    {id: 17,title: "مستند",num: 4},
]

const bestMovie = [
    {id:1 , title: "The Lord of the Rings",genre: ["اکشن" , "درام" , "ماجراجویی"], img: "../images/best-movies/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX500-210x310.jpg"},
    {id:2 , title: "Oppenheimer",genre: ["بیوگرافی" , "تاریخی" , "درام"], img: "../images/best-movies/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX500-210x310.jpg"},
    {id:3 , title: "Parasite",genre: ["هیجان انگیز" , "درام" ], img: "../images/best-movies/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX500-210x310.jpg"},
    {id:4 , title: "Inception",genre: ["ماجراجویی" , "علمی تخیلی", "اکشن" ], img: "../images/best-movies/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX500-210x310.jpg"},
    {id:5 , title: "Forrest Gump",genre: ["زندگینامه" , "رمانتیک" ], img: "../images/best-movies/images.jpg"},
]

const bestSerials = [
    {id:1 , title: "Chernobyl",genre: ["حادثه ای" , "تاریخی"], img: "../images/best-serials/1.jpg"},
    {id:2 , title: "Breaking Bad",genre: ["چنایی" , "علمی"], img: "../images/best-serials/2.jpg"},
    {id:3 , title: "The Sopranos",genre: ["هیجان انگیز", "درام" , "جنایی" ], img: "../images/best-serials/3.jpg"},
    {id:4 , title: "Money Heist",genre: ["درام" , "جنایی", "اکشن" ], img: "../images/best-serials/4.jpg"},
    {id:5 , title: "The Boys",genre: ["هیجان انگیز" , "جنایی", "اکشن" ], img: "../images/best-serials/5.jpg"},
]

const daysWeek = [
  {id: 1, title: "شنبه" , entitle: "saturday"},
  {id: 2, title: "یکشنبه" , entitle: "Sunday"},
  {id: 3, title: "دوشنبه" , entitle: "Monday"},
  {id: 4, title: "سه شنبه" , entitle: "Tuesday"},
  {id: 5, title: "چهارشنبه" , entitle: "Wednesday"},
  {id: 6, title: "پنجشنبه" , entitle: "Thursday"},
  {id: 7, title: "جمعه" , entitle: "Friday"},
]

const tickets = [
  {id: 1, title: "اشکال در اشتراک" , status: "در انتظار پاسخ", dep: "پشتیبانی فنی" , dateRegistration: "۱۴۰۳/۰۷/۱۰" , timeRegistration: "۲۳:۵۴:۴۸" , dateUpdated: "۱۴۰۳/۰۷/۱۰", timeUpdated: "۲۳:۵۴:۴۸",desc: "لطفا اشتراک را فعال نمایید و با تشکر",},
  {id: 2, title: "چه چیز هایی شامل اشتراک است" , status: "در انتظار پاسخ", dep: "سوالات قبل از خرید" , dateRegistration: "۱۴۰۳/۰۷/۰۹" , timeRegistration: "۲۲:۰۱:۳۳" , dateUpdated: "۱۴۰۳/۰۷/۰۹", timeUpdated: "۲۲:۰۱:۳۳",desc: "آیا سریال ها هم شامل اشتراک می شود ؟",}
]

const years = ["2000" , "2001" , "2002" , "2003" , "2004" , "2005" , "2006" , "2007" , "2008" , "2009" , "2010" , "2011" , "2012" , "2013" , "2014" , "2015" , "2016" , "2017" , "2018" , "2019" , "2020" , "2021" , "2022" , "2023" , "2024"]

export {movie ,seriesList ,genreListMovie ,genreListSerials , bestMovie , bestSerials , daysWeek , tickets , years}
