
const films = [
    {
        "Name": "Человек-паук: Нет пути домой",
        "id": 1,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/ab/5f/d7/ab5fd7ffcc4f5db3602ae41efc5b7819.jpg",
        "year": "2021",
        "decsription": "Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее.",
        "country": "Исландия, США",
        "genre": ["Боевик", "Приключения", "Фантастика"],
        "trailer": "https://youtu.be/hlANal2_tsc",
        "date": ["02.02.2022", "04.02.2022", "06.02.2022", "07.02.2022", "08.02.2022", "12.02.2022", "14.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ],
        "cinema": ["Москва", "Октябрь", "Столичный", "Берестье", "Беларусь"],
      },
      {
        "Name": "Матрица: Воскрешение",
        "id": 2,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/6e/30/bc/6e30bc18bb0c4dd4ff3de59a0a8633b7.jpg",
        "year": "2021",
        "decsription": "Потеряв память, он снова оказывается в Матрице, посещает психиатра и принимает синие таблетки. Но его продолжают преследовать таинственные видения и обрывки воспоминаний, а однажды на его пути появляется женщина из стертого прошлого – Тринити.",
        "country": "США",
        "genre": ["Боевик", "Фантастика"],
        "trailer": "https://youtu.be/8qB8EGNOtr8",
        "date": ["02.02.2022", "03.02.2022", "04.02.2022", "05.02.2022", "08.02.2022", "13.02.2022", "14.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
        "cinema": ["Москва", "Октябрь", "Столичный", "Беларусь"],
      },
      {
        "Name": "Ёлки 8",
        "id": 3,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/d7/58/46/d75846849a6ec0d359794c9a92271d9a.jpg",
        "year": "2021",
        "decsription": "Старые добрые «Ёлки» снова объединяют тех, кто верит в новогоднее чудо и счастливые перемены. Впервые в кинофраншизе все новеллы основаны на реальных историях. Их герои – люди разного возраста и статуса из разных российских городов, которым удалось в разгар зимы найти свой источник теплоты, смеха и веры в лучшее. А еще и поделиться этим от души с другими. Встречаем 2022-й вместе – с праздничным настроением, с улыбками и «Ёлками»!",
        "country": "Россия",
        "genre": ["Комедия"],
        "trailer": "https://youtu.be/CZ_Nr9sxeXU",
         "date": ["02.02.2022", "05.02.2022", "06.02.2022", "07.02.2022", "08.02.2022", "10.02.2022", "11.02.2022", "12.02.2022", "13.02.2022", "17.02.2022" ], 
         "cinema": ["Москва", "Октябрь", "Столичный", "Берестье"],
      },
      {
        "Name": "Дом Gucci",
        "id": 4,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/2a/b3/08/2ab308c30988309fd416efa1c3e0cb6f.png",
        "year": "2021",
        "decsription": "Фамилия Гуччи звучала так сладко, так соблазнительно… Синоним роскоши, стиля, власти. Но она же была их проклятьем. Шокирующая история любви, предательства, падения и мести, которая привела к жестокому убийству в одной из самых знаменитых модных империй мира.",
        "country": "Канада, США",
        "genre": ["Биография", "Драма", "Триллер"],
        "trailer": "https://youtu.be/tvVRlWQ95C4",
         "date": ["04.02.2022", "07.02.2022", "08.02.2022", "09.02.2022", "10.02.2022", "13.02.2022", "14.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": ["Москва", "Столичный", "Берестье", "Беларусь"],
      },
      {
        "Name": "Три богатыря и конь на троне",
        "id": 5,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/75/59/52/7559524cc5638c24b8ba68f223aa9f08.jpg",
        "year": "2021",
        "decsription": "Как всегда, наш любимый конь Юлий вляпался в историю. А заодно и Князю удружил — они случайно поменялись телами, конечно, не без помощи старой знакомой — Бабы Яги и небольшого колдовства. Теперь Юлий заседает во дворце и благоустраивает Киев, а Князь пашет поле. Вот такие игры престолов. Но долго так продолжаться не может, отечество в опасности! И как всегда, за дело берутся три богатыря.",
        "country": "Россия",
        "genre": ["Детский/Семейный", "Комедия", "Приключения"],
        "trailer": "https://youtu.be/bnqzQ-kDwlo",
         "date": ["02.02.2022", "03.02.2022", "06.02.2022", "07.02.2022", "09.02.2022", "13.02.2022", "14.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": ["Октябрь", "Столичный", "Берестье", "Беларусь"],
      },
       {
        "Name": "Зверопой 2",
        "id": 6,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/c5/08/dc/c508dcd414c5547e3284d03a1c42136d.jpg",
        "year": "2021",
        "decsription": "Тяжело быть продюсером, когда ты коала и у тебя лапки. Еще сложнее, когда твоя верная помощница древнее печатной машинки. И совсем весело, когда твоя труппа — это танцующий без остановки пухляш, колючая девочка-панк, застенчивая школьница, верзила-гангстер и многодетная мама, чьи дети — поросята в прямом смысле слова. Рецепт успеха прост — рвануть в мировую столицу развлечений, завербовать легендарного рок-музыканта и взорвать сцену новым шоу.",
        "country": "США, Франция, Япония",
        "genre": ["Детский/Семейный", "Комедия", "Приключения"],
        "trailer": "https://youtu.be/UIukHag0uGY",
         "date": ["05.02.2022", "07.02.2022", "08.02.2022", "09.02.2022", "10.02.2022", "11.02.2022", "12.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ],
         "cinema": ["Москва", "Октябрь", "Берестье", "Беларусь"], 
      },
         {
        "Name": "10 дней с Сантой",
        "id": 7,
        "avatar_url": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6a074af2-4dfd-44e0-a58a-dad8c9e13df3/1920x",
        "year": "2021",
        "decsription": "Карло, Джулия и трое их детей отправляются в Швецию на рождественские каникулы. По пути они случайно сбивают на машине странного человека, одетого как Санта-Клаус, и решают подвезти его до ближайшего города. Но у незнакомца свои планы на то, как провести это Рождество, и отделаться от него теперь не так-то просто. С тех пор, как Джулия снова начала работать, Карло взял на себя заботу о детях и домашние дела. Однако справиться с ролью «домохозяина» ему оказывается непросто. Только он решает вернуться в привычный жизненный ритм и найти работу, как Джулия сообщает ему, что её ждет повышение, за которым нужно переехать в Швецию. Но это ещё не все новости: 24 декабря ей предстоит пройти собеседование в Стокгольме. Семейное единство оказывается под угрозой, но Карло приходит в голову блестящая идея. Он заводит старый фургон, и семья отправляется в путешествие на север. В пути их ждут неожиданные приключения, а также уморительная встреча-противостояние с самозваным Санта-Клаусом. Другими словами, всё, что нужно, для незабываемого семейного Рождества. «10 дней с Сантой» — это продолжение поучительной семейной комедии «Папа за маму». К ролям вернулись любимые актёры итальянской публики Фабио Де Луиджи («Спрячь бабушку в холодильнике», «Познакомься с Софией», «Женщины против мужчин») и Валентина Лодовини («Комиссар Монтальбано», «Добро пожаловать на юг», «Добро пожаловать на север», «Коко Шанель»).",
        "country": "Италия",
        "genre": ["Детский/Семейный", "Комедия"],
        "trailer": "https://www.youtube.com/watch?v=7fx2L3KOaik",
         "date": ["02.02.2022", "05.02.2022", "06.02.2022", "07.02.2022", "08.02.2022", "13.02.2022", "14.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": ["Москва", "Октябрь", "Столичный", "Беларусь"],
      },
         {
        "Name": "Чемпион мира",
        "id": 8,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/3d/8d/89/3d8d89c62114bb54e3f0500582823d17.jpg",
        "year": "2021",
        "decsription": "Фильм о самом драматичном и легендарном поединке в истории шахмат: матче за звание чемпиона мира между действующим чемпионом мира Анатолием Карповым и претендентом на этот титул — гроссмейстером Виктором Корчным, эмигрировавшим из СССР за несколько лет до этого матча.",
        "country": "Россия",
        "genre": ["Драма"],
        "trailer": "https://youtu.be/1FMVlRrRPLI",
         "date": ["03.02.2022", "05.02.2022", "06.02.2022", "07.02.2022", "08.02.2022", "11.02.2022", "14.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": ["Москва", "Октябрь", "Столичный", "Берестье", "Беларусь"],
      },
         {
        "Name": "Мой волк",
        "id": 9,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/d4/ba/d8/d4bad8baf2bc55c371f370bd9754a0d5.jpg",
        "year": "2021",
        "decsription": "Восьмилетняя Виктория переезжает с отцом из города в горы. Однажды на прогулке они знакомятся с пастухом, и он дарит девочке щенка по кличке Секрет, который становится ей лучшим другом. Лишь позже семья понимает, что из этого ласкового комочка шерсти вырастет опасный хищник. Но дружба не знает границ.",
        "country": "Франция",
        "genre": ["Детский/Семейный", "Приключения"],
        "trailer": "https://youtu.be/X-ZMw54O71k",
         "date": ["03.02.2022", "04.02.2022", "05.02.2022", "09.02.2022", "08.02.2022", "12.02.2022", "13.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ],
         "cinema": ["Москва", "Берестье", "Беларусь"], 
      },
         {
        "Name": "Три орешка для Золушки",
        "id": 10,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/c0/dc/a1/c0dca1f322ffe3cc92a6a2c770fee9af.jpg",
        "year": "1973",
        "decsription": "Мачеха Золушки всеми силами хочет выдать свою глупую и злую родную дочь замуж за принца. Но тому совсем не хочется жениться, он ссорится с отцом и собирается покинуть дворец, но... в последний момент он влюбляется в очаровательную незнакомку в маске, которая быстро исчезает. Принц и не догадывается, что эта прекрасная девушка, ловкий стрелок, которого он встретил в лесу и озорная девчонка — одно и то же лицо. Все эти превращения оказались возможными благодаря волшебным орешкам, в одном из которых находился и свадебный подарок для Золушки.",
        "country": "Германия, Чехословакия",
        "genre": ["Детский/Семейный", "Мелодрама", "Приключения"],
        "trailer": "https://youtu.be/KO9C0SwuZHc",
         "date": ["02.02.2022", "05.02.2022", "06.02.2022", "09.02.2022", "10.02.2022", "12.02.2022", "13.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": [ "Столичный", "Берестье", "Беларусь"],
      },
    
         {
        "Name": "Самый лучший босс",
        "id": 11,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/2d/0a/7e/2d0a7ed6dc73c4dbd8b5f7b5f925c208.jpg",
        "year": "2021",
        "decsription": "Бланко, владелец семейного предприятия, ждет визита комиссии, которая должна решить, получит ли он награду за успехи в бизнесе. Для этого, разумеется, всё должно быть идеально, однако, как назло, проблемы возникают одна за другой.",
        "country": "Испания",
        "genre": ["Комедия"],
        "trailer": "https://youtu.be/ybtqaedMNPA",
         "date": ["02.02.2022", "04.02.2022", "05.02.2022", "06.02.2022", "08.02.2022", "11.02.2022", "13.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": ["Москва", "Столичный", "Берестье", "Беларусь"],
      },
         {
        "Name": "Черный ящик",
        "id": 12,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/ff/ff/d7/ffffd7c09a3bc5e007fc74bacb786f0b.jpg",
        "year": "2021",
        "decsription": "Крушение новейшего авиалайнера уносит нескольких сотен человеческих жизней. Пролить свет на причины трагедии может расшифровка чёрного ящика. Её поручают молодому эксцентричному специалисту Матье (Пьер Нинэ) с уникальным слухом. Расследование авиакатастрофы обнаруживает подозрительные обстоятельства, но Матье никто не верит. Возможно, это всего лишь изощрённые игры его разума? В разгар работы по изучению обстоятельств авиакатастрофы в Альпах власти отдают распоряжение остановиться. Несмотря на запрет, Матье продолжает расследование и добирается до шокирующих улик, которые заставляют его сомневаться даже в близких людях. Талантливый аналитик чувствует, что трагедия стала результатом заговора производителей самолетов и компаний, обеспечивающих лицензирование их технических характеристик. «Маленький человек» сталкивается с системой и победить он может, только поставив на карту свою жизнь. Ставки высоки, напряжение в кадре растет с каждой минутой вплоть до самого финала, который взбудоражит даже самых искушённых фанатов жанра. Режиссёр картины Ян Гозлан признаётся в интервью, что при написании сценария он отталкивался от реальных случаев авиакатастроф. Тем не менее, его история лишена излишней документальности, это не реконструкция конкретных событий, хотя и изобилует интересными техническими подробностями устройства самолета и процесса расшифровки бортовых самописцев. Режиссёру было интересно призвать зрителей к обсуждению вопросов, «которые могут произвести революцию в гражданской авиации – а именно вопросам внедрения искусственного интеллекта там, где сейчас работают пилоты». Главную роль в картине исполнил 32-летний Пьер Нинэ. В 2015 году Нинэ удостоился престижной премии «Сезар» за роль в биографической мелодраме «Ив Сен-Лоран». «Чёрный ящик» – настоящий бенефис талантливого французского актёра, ведь вся история показана его глазами.",
        "country": "Бельгия, Франция",
        "genre": ["Детектив", "Драма", "Триллер"],
        "trailer": "https://youtu.be/Zj2SIj3bacM",
         "date": ["03.02.2022", "04.02.2022", "05.02.2022", "07.02.2022", "08.02.2022", "12.02.2022", "13.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": ["Москва", "Октябрь", "Столичный", "Берестье", "Беларусь"],
      },
         {
        "Name": "Последний богатырь: Посланник Тьмы",
        "id": 13,
        "avatar_url": "https://ms1.relax.by/images/d4b21593f3f04b3b118e37d5e68927ff/thumb/w%3D400%2Ch%3D600%2Cq%3D90/afisha_event_photo/d9/30/ce/d930ced306db4677ec5c7e8a8f7fb6e9.jpg",
        "year": "2021",
        "decsription": "Иван наконец обрел силушку богатырскую, злой чародей Роголеб повержен, и теперь все Белогорье готовится к пиру на весь мир: Иван и Василиса собираются праздновать свадьбу, решая типичные для почти любой пары молодоженов проблемы. В каком платье пойти под венец невесте? Кольца — простые или волшебные? Свадебное путешествие — на куриных ногах или в ступе? В самый разгар приготовлений к празднику зло снова напоминает о себе: Василиса похищена, и в пылу погони Иван и его друзья оказываются в современной Москве. Для жителей Белогорья это — волшебный мир, в котором люди перемещаются на странных колесницах, разговаривают с плоскими дощечками и не в состоянии отличить настоящую магию от дешевой детской игрушки. Но, как выясняется, и в этом мире, бок о бок с обычными людьми, неплохо устроились герои старых сказок, и с их помощью у Ивана есть шанс окончательно победить древнюю Тьму.",
        "country": "Россия",
        "genre": ["Приключения"],
        "trailer": "https://youtu.be/_1G4XhsnPUM",
         "date": ["02.02.2022", "04.02.2022", "06.02.2022", "07.02.2022", "08.02.2022", "10.02.2022", "12.02.2022", "15.02.2022", "16.02.2022", "17.02.2022" ], 
         "cinema": ["Москва", "Октябрь", "Столичный", "Берестье"],
      },
]

export default films;