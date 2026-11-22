addDialogs([
{id:"d2-a1-grocery",level:"a1",title:"В продуктовом",sub:"Вы ищете молоко в супермаркете",partner:"Clerk",steps:[
{npc:"Hi! Can I help you find something?",ru:"Привет! Помочь вам что-нибудь найти?"},
{me:[
{en:"Yes, please. Where is the milk?",ru:"Да, пожалуйста. Где молоко?",ok:true,fb:"Простой и вежливый вопрос."},
{en:"Where is milk is?",ru:"Где молоко есть?",ok:false,fb:"Лишний is в конце. Правильно: Where is the milk?"},
{en:"Give me milk.",ru:"Дайте мне молоко.",ok:false,fb:"Звучит как приказ. Лучше спросить: Where is the milk?"}]},
{npc:"It’s in aisle five, in the back.",ru:"В пятом ряду, в конце зала."},
{me:[
{en:"Thank you! And bread?",ru:"Спасибо! А хлеб?",ok:true,fb:"Коротко и естественно."},
{en:"Thanks. Where can I find bread?",ru:"Спасибо. Где найти хлеб?",ok:true,fb:"Полный вежливый вопрос."},
{en:"Thank you. And where breads?",ru:"Спасибо. А где хлеба?",ok:false,fb:"Bread — неисчисляемое, без -s, и нужен глагол: Where is the bread?"}]},
{npc:"Bread is in aisle two. Anything else?",ru:"Хлеб во втором ряду. Что-нибудь ещё?"},
{me:[
{en:"No, that’s all. Thanks!",ru:"Нет, это всё. Спасибо!",ok:true,fb:"Стандартное завершение."},
{en:"No, nothing more need.",ru:"Нет, больше ничего не надо.",ok:false,fb:"Калька. Скажите: No, that’s all."},
{en:"Not anything.",ru:"Ничего.",ok:false,fb:"Звучит странно. Естественно: No, that’s all, thanks."}]},
{npc:"Have a good one!",ru:"Хорошего дня!"}]},

{id:"d2-a1-pharmacy",level:"a1",title:"В аптеке",sub:"У вас болит голова, вы просите лекарство",partner:"Pharmacist",steps:[
{npc:"Hi, how can I help you?",ru:"Здравствуйте, чем могу помочь?"},
{me:[
{en:"I have a headache. Do you have something for it?",ru:"У меня болит голова. У вас есть что-нибудь от этого?",ok:true,fb:"Точно описана проблема."},
{en:"My head is hurting me very.",ru:"Моя голова болит мне очень.",ok:false,fb:"Very не ставится в конце. Скажите: I have a bad headache."},
{en:"I am headache.",ru:"Я головная боль.",ok:false,fb:"Нужен глагол have: I have a headache."}]},
{npc:"Sure. Tylenol or Advil works well. Any allergies?",ru:"Конечно. Хорошо помогает тайленол или адвил. Есть аллергия?"},
{me:[
{en:"No, I don’t have any allergies.",ru:"Нет, у меня нет аллергии.",ok:true,fb:"Правильное отрицание с any."},
{en:"No, I have not allergy.",ru:"Нет, у меня нет аллергия.",ok:false,fb:"Отрицание с have: I don’t have any allergies."},
{en:"No allergies.",ru:"Аллергии нет.",ok:true,fb:"Коротко и понятно."}]},
{npc:"Okay. Take two pills every six hours.",ru:"Хорошо. Принимайте по две таблетки каждые шесть часов."},
{me:[
{en:"Got it. How much is it?",ru:"Понял. Сколько стоит?",ok:true,fb:"Естественный вопрос о цене."},
{en:"How much it costs?",ru:"Сколько это стоит?",ok:false,fb:"В вопросе нужен does: How much does it cost?"},
{en:"What is price?",ru:"Какая цена?",ok:false,fb:"Пропущен артикль: What’s the price? Но лучше How much is it?"}]},
{npc:"It’s eight ninety-nine.",ru:"Восемь долларов девяносто девять центов."}]},

{id:"d2-a1-sim",level:"a1",title:"Покупка SIM-карты",sub:"Вы только прилетели и хотите местный номер",partner:"Sales rep",steps:[
{npc:"Welcome! What can I do for you today?",ru:"Добро пожаловать! Чем могу помочь сегодня?"},
{me:[
{en:"I’d like a SIM card, please.",ru:"Мне нужна SIM-карта, пожалуйста.",ok:true,fb:"I’d like — вежливая просьба."},
{en:"I want buy SIM card.",ru:"Я хочу купить SIM-карту.",ok:false,fb:"После want нужен to и артикль: I want to buy a SIM card."},
{en:"Need SIM.",ru:"Нужна симка.",ok:false,fb:"Слишком обрывисто, без подлежащего. Скажите: I need a SIM card."}]},
{npc:"Sure. Prepaid or a monthly plan?",ru:"Конечно. Предоплаченная или ежемесячный тариф?"},
{me:[
{en:"Prepaid, please. I’m a tourist.",ru:"Предоплаченная, пожалуйста. Я турист.",ok:true,fb:"Ясный выбор с объяснением."},
{en:"Prepaid. I am here only for month.",ru:"Предоплаченная. Я тут только на месяц.",ok:false,fb:"Нужны for и артикль: I’m only here for a month."},
{en:"Which is more cheap?",ru:"Что дешевле?",ok:false,fb:"Короткие прилагательные: cheaper, не more cheap."}]},
{npc:"This plan is thirty dollars with unlimited data.",ru:"Этот тариф стоит тридцать долларов с безлимитным интернетом."},
{me:[
{en:"Great, I’ll take it.",ru:"Отлично, беру.",ok:true,fb:"I’ll take it — стандартное «беру»."},
{en:"Okay, I take.",ru:"Хорошо, я беру.",ok:false,fb:"Нужно дополнение и will: I’ll take it."},
{en:"Does it work in other states?",ru:"Он работает в других штатах?",ok:true,fb:"Уместный уточняющий вопрос."}]},
{npc:"Yes, it works everywhere in the US. Can I see your passport?",ru:"Да, работает везде в США. Можно ваш паспорт?"},
{me:[
{en:"Sure, here it is.",ru:"Конечно, вот он.",ok:true,fb:"Правильный порядок: here it is."},
{en:"Yes, here is it.",ru:"Да, вот оно.",ok:false,fb:"Порядок слов: here it is."},
{en:"Of course, take.",ru:"Конечно, берите.",ok:false,fb:"Калька, звучит грубо. Here you go."}]},
{npc:"Perfect. You’re all set!",ru:"Отлично. Всё готово!"}]},

{id:"d2-a1-barber",level:"a1",title:"В парикмахерской",sub:"Вы зашли постричься",partner:"Barber",steps:[
{npc:"Hey, have a seat. What are we doing today?",ru:"Привет, садитесь. Что делаем сегодня?"},
{me:[
{en:"Just a trim, please.",ru:"Просто подровнять, пожалуйста.",ok:true,fb:"Trim — подравнивание, ходовое слово."},
{en:"I want to cut my hair.",ru:"Я хочу подстричь волосы.",ok:false,fb:"Звучит, будто вы стрижёте сами. Скажите: I’d like a haircut."},
{en:"Make me short hairs.",ru:"Сделайте мне короткие волосы.",ok:false,fb:"Hair неисчисляемое. Short on the sides, please."}]},
{npc:"How short on the sides?",ru:"Насколько коротко по бокам?"},
{me:[
{en:"A number two, please.",ru:"Двойкой, пожалуйста.",ok:true,fb:"В США длину машинки называют номером."},
{en:"Not very short, please.",ru:"Не очень коротко, пожалуйста.",ok:true,fb:"Понятная просьба."},
{en:"Short a little more than middle.",ru:"Чуть короче, чем средне.",ok:false,fb:"Непонятная конструкция. Скажите: Medium, please, or a number three."}]},
{npc:"And the top?",ru:"А сверху?"},
{me:[
{en:"Just a little off the top.",ru:"Сверху чуть-чуть убрать.",ok:true,fb:"Классическая фраза барберов."},
{en:"From top cut few.",ru:"Сверху срежьте немного.",ok:false,fb:"Нужно a little и порядок слов: Just a little off the top."},
{en:"Top don’t touch very.",ru:"Сверху не трогайте сильно.",ok:false,fb:"Лучше: Don’t take too much off the top."}]},
{npc:"You got it.",ru:"Сделаем."}]},

{id:"d2-a1-train",level:"a1",title:"Билет на поезд",sub:"Вы покупаете билет на Amtrak в кассе",partner:"Ticket agent",steps:[
{npc:"Next, please. Where to?",ru:"Следующий, пожалуйста. Куда?"},
{me:[
{en:"One ticket to Boston, please.",ru:"Один билет до Бостона, пожалуйста.",ok:true,fb:"Ticket to — стандартная конструкция."},
{en:"One ticket on Boston.",ru:"Один билет на Бостон.",ok:false,fb:"Калька с «на». Правильно: to Boston."},
{en:"I go to Boston.",ru:"Я еду в Бостон.",ok:false,fb:"Это не просьба. Скажите: One ticket to Boston, please."}]},
{npc:"One way or round trip?",ru:"В одну сторону или туда-обратно?"},
{me:[
{en:"Round trip, please.",ru:"Туда и обратно, пожалуйста.",ok:true,fb:"Round trip — «туда и обратно»."},
{en:"There and back.",ru:"Туда и обратно.",ok:false,fb:"Понятно, но так не говорят. Используйте round trip."},
{en:"Just one way.",ru:"Только в одну сторону.",ok:true,fb:"Тоже корректный ответ."}]},
{npc:"The next train leaves at 3:15. Is that okay?",ru:"Следующий поезд отправляется в 3:15. Подходит?"},
{me:[
{en:"Yes, that’s fine. Which track?",ru:"Да, подходит. С какого пути?",ok:true,fb:"Track — путь/платформа в США."},
{en:"Yes. From which way it goes?",ru:"Да. С какого пути он идёт?",ok:false,fb:"Way — не путь на вокзале, и нет does. Which track does it leave from?"},
{en:"Okay. What is platform?",ru:"Хорошо. Какая платформа?",ok:false,fb:"Нужен артикль: What’s the platform? В США чаще говорят track."}]},
{npc:"Track seven. Here’s your ticket.",ru:"Седьмой путь. Вот ваш билет."}]},

{id:"d2-a1-bus",level:"a1",title:"В автобусе",sub:"Вы не уверены, что едете в нужную сторону",partner:"Driver",steps:[
{npc:"Hi there.",ru:"Здравствуйте."},
{me:[
{en:"Hi. Does this bus go to downtown?",ru:"Здравствуйте. Этот автобус идёт в центр?",ok:true,fb:"Правильный вопрос с does."},
{en:"This bus goes to center?",ru:"Этот автобус идёт в центр?",ok:false,fb:"Нужен does, а «центр города» — downtown."},
{en:"Is this bus go downtown?",ru:"Этот автобус идёт в центр?",ok:false,fb:"Нельзя смешивать is и go. Does this bus go downtown?"}]},
{npc:"Yep. That’s two seventy-five.",ru:"Ага. С вас два семьдесят пять."},
{me:[
{en:"Can I pay with a card?",ru:"Можно заплатить картой?",ok:true,fb:"With a card — правильный предлог."},
{en:"Can I pay by card?",ru:"Можно картой?",ok:true,fb:"By card — тоже верно."},
{en:"Can I pay on card?",ru:"Можно оплатить на карту?",ok:false,fb:"Предлог on здесь не подходит: with a card или by card."}]},
{npc:"Sure, just tap it here.",ru:"Конечно, просто приложите сюда."},
{me:[
{en:"Could you tell me when we get to Main Street?",ru:"Скажете, когда будет Мейн-стрит?",ok:true,fb:"Вежливая просьба с could."},
{en:"Tell me when will be Main Street.",ru:"Скажите, когда будет Мейн-стрит.",ok:false,fb:"Калька и приказной тон. Could you tell me when we get to Main Street?"},
{en:"Say me about Main Street stop.",ru:"Скажите мне про остановку Мейн-стрит.",ok:false,fb:"Say me — ошибка. Tell me, а лучше вежливо: Could you tell me…"}]},
{npc:"No problem. I’ll call it out.",ru:"Без проблем. Я объявлю."}]},

{id:"d2-a1-coffee-order",level:"a1",title:"Кофе навынос",sub:"Вы заказываете кофе в Starbucks",partner:"Barista",steps:[
{npc:"Hi! What can I get started for you?",ru:"Привет! Что вам приготовить?"},
{me:[
{en:"Can I get a large latte, please?",ru:"Можно большой латте, пожалуйста?",ok:true,fb:"Can I get — самый естественный способ заказать."},
{en:"Give me big latte.",ru:"Дайте большой латте.",ok:false,fb:"Звучит грубо и без артикля. Can I get a large latte?"},
{en:"I will latte big.",ru:"Я буду латте большой.",ok:false,fb:"Калька с «Я буду». Скажите: I’ll have a large latte."}]},
{npc:"Sure. What kind of milk?",ru:"Конечно. Какое молоко?"},
{me:[
{en:"Oat milk, please.",ru:"Овсяное, пожалуйста.",ok:true,fb:"Чёткий ответ."},
{en:"Regular is fine.",ru:"Обычное подойдёт.",ok:true,fb:"Regular — обычное."},
{en:"Usual milk.",ru:"Обычное молоко.",ok:false,fb:"Usual = привычный. Для «обычного молока» — regular или whole milk."}]},
{npc:"And a name for the order?",ru:"И имя для заказа?"},
{me:[
{en:"It’s Dmitry. D-M-I-T-R-Y.",ru:"Дмитрий. Д-М-И-Т-Р-И-Й.",ok:true,fb:"Хорошо сразу продиктовать по буквам."},
{en:"My name is calling Dmitry.",ru:"Меня зовут Дмитрий.",ok:false,fb:"Калька с «зовут». Просто: It’s Dmitry."},
{en:"Me name Dmitry.",ru:"Моё имя Дмитрий.",ok:false,fb:"Me — не притяжательное. My name is Dmitry, или It’s Dmitry."}]},
{npc:"Great, it’ll be ready at the end of the counter.",ru:"Отлично, заберёте в конце стойки."}]},

{id:"d2-a1-laundry",level:"a1",title:"В прачечной",sub:"Вы впервые в прачечной самообслуживания",partner:"Attendant",steps:[
{npc:"Hi, need any help?",ru:"Здравствуйте, нужна помощь?"},
{me:[
{en:"Yes, please. How does this machine work?",ru:"Да, пожалуйста. Как работает эта машина?",ok:true,fb:"Правильный вопрос с does."},
{en:"How this machine works?",ru:"Как эта машина работает?",ok:false,fb:"В вопросе нужен does: How does this machine work?"},
{en:"I don’t understand machine.",ru:"Я не понимаю машину.",ok:false,fb:"Без артикля и неестественно. How does this machine work?"}]},
{npc:"Put your clothes in, add soap, and pay with quarters.",ru:"Кладёте одежду, добавляете порошок и платите четвертаками."},
{me:[
{en:"Where can I get quarters?",ru:"Где взять четвертаки?",ok:true,fb:"Нормальный вопрос."},
{en:"I don’t have coins. Is there a change machine?",ru:"У меня нет монет. Тут есть разменный автомат?",ok:true,fb:"Change machine — разменник."},
{en:"Where I can take quarters?",ru:"Где я могу взять четвертаки?",ok:false,fb:"Порядок слов: Where can I get quarters? Take = «взять» физически."}]},
{npc:"There’s a change machine by the door.",ru:"Разменный автомат у двери."},
{me:[
{en:"Great, thank you so much!",ru:"Отлично, большое спасибо!",ok:true,fb:"Тёплая благодарность."},
{en:"Thank you very much big.",ru:"Спасибо очень большое.",ok:false,fb:"Калька. Thank you so much."},
{en:"Thanks, you are very kind man.",ru:"Спасибо, вы очень добрый человек.",ok:false,fb:"Пропущен артикль: a very kind man. Проще: Thanks so much!"}]},
{npc:"Anytime!",ru:"Обращайтесь!"}]},

{id:"d2-a1-library",level:"a1",title:"Читательский билет",sub:"Вы хотите записаться в библиотеку",partner:"Librarian",steps:[
{npc:"Good afternoon. How can I help?",ru:"Добрый день. Чем помочь?"},
{me:[
{en:"Hi, I’d like to get a library card.",ru:"Здравствуйте, я хочу получить читательский билет.",ok:true,fb:"Library card — читательский билет."},
{en:"I want to make reader ticket.",ru:"Я хочу сделать читательский билет.",ok:false,fb:"Калька. Правильно: get a library card."},
{en:"Can I write in library?",ru:"Можно записаться в библиотеку?",ok:false,fb:"«Записаться» не write. Скажите: Can I sign up for a library card?"}]},
{npc:"Sure. Do you have an ID and proof of address?",ru:"Конечно. У вас есть удостоверение и подтверждение адреса?"},
{me:[
{en:"I have my passport and a lease.",ru:"У меня есть паспорт и договор аренды.",ok:true,fb:"Lease — договор аренды, отлично подходит."},
{en:"I have passport and contract of rent.",ru:"У меня паспорт и договор аренды.",ok:false,fb:"Нужны артикли/my, а договор аренды — lease."},
{en:"Will a utility bill work?",ru:"Подойдёт счёт за коммуналку?",ok:true,fb:"Will … work? — подойдёт ли."}]},
{npc:"That works. Fill out this form, please.",ru:"Подходит. Заполните эту форму, пожалуйста."},
{me:[
{en:"Sure. Can I borrow a pen?",ru:"Конечно. Можно ручку?",ok:true,fb:"Borrow — взять на время."},
{en:"Okay. Can you give me pen?",ru:"Хорошо. Дадите ручку?",ok:false,fb:"Пропущен артикль a pen. Вежливее: Can I borrow a pen?"},
{en:"Can I lend a pen?",ru:"Можно одолжить ручку?",ok:false,fb:"Lend — давать в долг. Брать — borrow."}]},
{npc:"Here you go.",ru:"Пожалуйста."}]},

{id:"d2-a1-gym",level:"a1",title:"Запись в спортзал",sub:"Вы пришли узнать про абонемент",partner:"Front desk",steps:[
{npc:"Hey! Welcome to FitLife. Are you a member?",ru:"Привет! Добро пожаловать в FitLife. Вы член клуба?"},
{me:[
{en:"Not yet. I’d like to sign up.",ru:"Пока нет. Я хочу записаться.",ok:true,fb:"Sign up — записаться."},
{en:"No. I want to write myself.",ru:"Нет. Я хочу записаться.",ok:false,fb:"Калька «записаться». Правильно: sign up."},
{en:"No, I am not member yet.",ru:"Нет, я пока не член.",ok:false,fb:"Пропущен артикль: not a member yet."}]},
{npc:"Great. It’s forty dollars a month.",ru:"Отлично. Сорок долларов в месяц."},
{me:[
{en:"Is there a sign-up fee?",ru:"Есть плата за вступление?",ok:true,fb:"Важный вопрос в американских залах."},
{en:"Can I try it first?",ru:"Можно сначала попробовать?",ok:true,fb:"Многие залы дают бесплатный пробный день."},
{en:"It is expensive for me a little.",ru:"Это для меня немного дорого.",ok:false,fb:"Порядок слов: It’s a little expensive for me."}]},
{npc:"You get a free day pass today. Want a tour?",ru:"Сегодня у вас бесплатный день. Показать зал?"},
{me:[
{en:"Yes, that would be great!",ru:"Да, было бы здорово!",ok:true,fb:"Естественный энтузиазм."},
{en:"Yes, show.",ru:"Да, покажите.",ok:false,fb:"Без дополнения и резко. Sure, that’d be great!"},
{en:"Yes, I agree.",ru:"Да, я согласен.",ok:false,fb:"I agree — про мнение, а не про предложение. Sure, thanks!"}]},
{npc:"Awesome, follow me.",ru:"Супер, идите за мной."}]},

{id:"d2-a1-postoffice",level:"a1",title:"На почте",sub:"Вы отправляете посылку домой",partner:"Postal clerk",steps:[
{npc:"Next! What are you sending today?",ru:"Следующий! Что отправляете?"},
{me:[
{en:"I’d like to send this package to Russia.",ru:"Я хочу отправить эту посылку в Россию.",ok:true,fb:"Package — посылка в американском английском."},
{en:"I want send parcel in Russia.",ru:"Хочу отправить посылку в Россию.",ok:false,fb:"Нужно want to, артикль и предлог to: send a package to Russia."},
{en:"This to Russia.",ru:"Это в Россию.",ok:false,fb:"Слишком отрывисто. I’d like to send this to Russia."}]},
{npc:"Okay. What’s inside?",ru:"Хорошо. Что внутри?"},
{me:[
{en:"Just clothes and some books.",ru:"Просто одежда и несколько книг.",ok:true,fb:"Clothes всегда во множественном."},
{en:"Clothes and gifts for my family.",ru:"Одежда и подарки для семьи.",ok:true,fb:"Чёткий ответ."},
{en:"Some clothe and book.",ru:"Немного одежды и книга.",ok:false,fb:"Clothes — только с -s, books — множественное."}]},
{npc:"Fill out this customs form, please.",ru:"Заполните, пожалуйста, таможенную декларацию."},
{me:[
{en:"Sure. How long will it take?",ru:"Конечно. Сколько времени займёт доставка?",ok:true,fb:"How long will it take — стандартный вопрос."},
{en:"How much time it goes?",ru:"Сколько времени она идёт?",ok:false,fb:"Калька. How long will it take?"},
{en:"When it will come?",ru:"Когда она придёт?",ok:false,fb:"Порядок слов в вопросе: When will it arrive?"}]},
{npc:"About two to three weeks.",ru:"Примерно две-три недели."}]},

{id:"d2-a1-hostel",level:"a1",title:"Встреча с хозяином Airbnb",sub:"Хозяин квартиры встречает вас у двери",partner:"Host",steps:[
{npc:"Hi! You must be Anna. I’m Mike.",ru:"Привет! Вы, наверное, Анна. Я Майк."},
{me:[
{en:"Hi Mike, nice to meet you!",ru:"Привет, Майк, приятно познакомиться!",ok:true,fb:"Стандартное приветствие."},
{en:"Yes, I must be Anna.",ru:"Да, я, должно быть, Анна.",ok:false,fb:"Повтор must звучит смешно. Yes, that’s me!"},
{en:"Hello, very pleasant.",ru:"Здравствуйте, очень приятно.",ok:false,fb:"Калька. Nice to meet you."}]},
{npc:"How was your trip?",ru:"Как доехали?"},
{me:[
{en:"Long, but good, thanks.",ru:"Долго, но хорошо, спасибо.",ok:true,fb:"Естественный короткий ответ."},
{en:"It was fine, thanks for asking.",ru:"Нормально, спасибо, что спросили.",ok:true,fb:"Вежливо и тепло."},
{en:"Normal.",ru:"Нормально.",ok:false,fb:"Normal звучит странно. Скажите: Fine / Pretty good."}]},
{npc:"Here are the keys. The Wi-Fi password is on the fridge.",ru:"Вот ключи. Пароль от Wi-Fi на холодильнике."},
{me:[
{en:"Great. What time is checkout?",ru:"Отлично. Во сколько выезд?",ok:true,fb:"Checkout — выезд."},
{en:"When I must go out?",ru:"Когда мне нужно выйти?",ok:false,fb:"Порядок слов и go out = «пойти погулять». What time is checkout?"},
{en:"What time is check out from flat?",ru:"Во сколько выселение из квартиры?",ok:false,fb:"Лишнее и неестественно. What time is checkout?"}]},
{npc:"Eleven a.m. Enjoy your stay!",ru:"В одиннадцать утра. Приятного отдыха!"}]},

{id:"d2-a2-dmv",level:"a2",title:"В DMV",sub:"Вы пришли получить ID штата",partner:"DMV clerk",steps:[
{npc:"Number 42? What are you here for?",ru:"Номер 42? По какому вопросу?"},
{me:[
{en:"I’d like to apply for a state ID.",ru:"Я хочу подать заявку на удостоверение штата.",ok:true,fb:"Apply for — подавать заявку на."},
{en:"I came for make ID.",ru:"Я пришёл сделать удостоверение.",ok:false,fb:"После for не ставится глагол. I’m here to get a state ID."},
{en:"I need to get a state ID card.",ru:"Мне нужно получить удостоверение штата.",ok:true,fb:"Тоже понятно и правильно."}]},
{npc:"Do you have proof of residency?",ru:"У вас есть подтверждение проживания?"},
{me:[
{en:"Yes, I have my lease and a bank statement.",ru:"Да, договор аренды и выписка из банка.",ok:true,fb:"Это типичные принимаемые документы."},
{en:"Yes, I have registration.",ru:"Да, у меня есть прописка.",ok:false,fb:"«Прописки» в США нет. Назовите документ: lease, utility bill."},
{en:"I live here since March.",ru:"Я живу здесь с марта.",ok:false,fb:"С since нужен Present Perfect: I’ve lived here since March. И это не документ."}]},
{npc:"Okay. You’ll need to take a photo. Please look at the camera.",ru:"Хорошо. Нужно сфотографироваться. Смотрите в камеру."},
{me:[
{en:"Can I keep my glasses on?",ru:"Можно не снимать очки?",ok:true,fb:"Keep on — оставить надетым."},
{en:"I must take off glasses?",ru:"Мне надо снять очки?",ok:false,fb:"В вопросе нужна инверсия: Do I need to take off my glasses?"},
{en:"Should I take my glasses off?",ru:"Мне снять очки?",ok:true,fb:"Правильный вопрос."}]},
{npc:"Please take them off. Your ID will arrive by mail in two weeks.",ru:"Снимите, пожалуйста. Удостоверение придёт почтой через две недели."},
{me:[
{en:"Will I get a temporary one today?",ru:"А сегодня я получу временное?",ok:true,fb:"Temporary one — временное."},
{en:"In two weeks after?",ru:"Через две недели после?",ok:false,fb:"Лишнее after. Просто: In two weeks?"},
{en:"What I use before?",ru:"Чем я пользуюсь до этого?",ok:false,fb:"Нужен do и порядок: What do I use until then?"}]},
{npc:"Yes, here’s a paper copy.",ru:"Да, вот бумажная копия."}]},

{id:"d2-a2-luggage",level:"a2",title:"Потерянный багаж",sub:"Ваш чемодан не приехал",partner:"Airline agent",steps:[
{npc:"Hi, how can I help you?",ru:"Здравствуйте, чем могу помочь?"},
{me:[
{en:"My suitcase didn’t arrive.",ru:"Мой чемодан не прибыл.",ok:true,fb:"Чёткое описание проблемы."},
{en:"I lost my baggage. It didn’t come out.",ru:"Мой багаж потерялся. Он не выехал.",ok:true,fb:"Тоже понятно; baggage неисчисляемое — верно."},
{en:"My baggages didn’t come.",ru:"Мои багажи не пришли.",ok:false,fb:"Baggage неисчисляемое, без -s. My bags didn’t come."}]},
{npc:"I’m sorry. Can I see your baggage claim tag?",ru:"Мне жаль. Можно бирку на багаж?"},
{me:[
{en:"Sure, it’s on my boarding pass.",ru:"Конечно, она на посадочном.",ok:true,fb:"Логичный ответ."},
{en:"Here, please.",ru:"Вот, пожалуйста.",ok:false,fb:"Here, please — калька. Here you go."},
{en:"What is claim tag?",ru:"Что такое бирка?",ok:false,fb:"Пропущен артикль: What’s a claim tag?"}]},
{npc:"What does your bag look like?",ru:"Как выглядит ваша сумка?"},
{me:[
{en:"It’s a large black suitcase with a red ribbon.",ru:"Большой чёрный чемодан с красной ленточкой.",ok:true,fb:"Порядок прилагательных: размер, затем цвет."},
{en:"It’s black big suitcase.",ru:"Это чёрный большой чемодан.",ok:false,fb:"Порядок прилагательных и артикль: a big black suitcase."},
{en:"How it looks? Black.",ru:"Как выглядит? Чёрный.",ok:false,fb:"Не нужно повторять вопрос, да ещё с ошибкой. It’s a black suitcase."}]},
{npc:"We’ll deliver it to your hotel when it arrives.",ru:"Мы доставим её в отель, когда она прибудет."},
{me:[
{en:"Thank you. How will I know when it’s found?",ru:"Спасибо. Как я узнаю, что её нашли?",ok:true,fb:"Will только в главной части, после when — Present."},
{en:"When it will arrive, call me please.",ru:"Когда прибудет, позвоните мне.",ok:false,fb:"После when будущее выражается Present: When it arrives, please call me."},
{en:"Can you text me when it arrives?",ru:"Можете написать мне, когда прибудет?",ok:true,fb:"Text — написать SMS."}]},
{npc:"Of course. Here’s your reference number.",ru:"Конечно. Вот номер вашего заявления."}]},

{id:"d2-a2-roommate",level:"a2",title:"Сосед по квартире",sub:"Вы обсуждаете правила с новым соседом",partner:"Roommate",steps:[
{npc:"So, should we split the chores?",ru:"Ну что, поделим домашние дела?"},
{me:[
{en:"Sure. I can take out the trash and do the dishes.",ru:"Конечно. Я могу выносить мусор и мыть посуду.",ok:true,fb:"Take out the trash, do the dishes — устойчивые сочетания."},
{en:"Okay. I can make the dishes.",ru:"Ладно. Я могу мыть посуду.",ok:false,fb:"Посуду не make, а do the dishes."},
{en:"Yes. I will carry out garbage.",ru:"Да. Я буду выносить мусор.",ok:false,fb:"Естественнее: take out the trash."}]},
{npc:"Cool. I’ll clean the bathroom. What about guests?",ru:"Круто. Я буду мыть ванную. А что насчёт гостей?"},
{me:[
{en:"Guests are fine, just let me know in advance.",ru:"Гости — нормально, просто предупреждай заранее.",ok:true,fb:"Let me know in advance — предупреди заранее."},
{en:"No problem, but please warn me before.",ru:"Без проблем, но предупреди меня до.",ok:false,fb:"Warn — про опасность, а before в конце не ставится. Let me know ahead of time."},
{en:"It’s okay if they don’t stay too late.",ru:"Нормально, если они не засиживаются допоздна.",ok:true,fb:"Вежливо обозначена граница."}]},
{npc:"Sounds fair. And bills — fifty-fifty?",ru:"Справедливо. А счета — пополам?"},
{me:[
{en:"Fifty-fifty works for me.",ru:"Пополам меня устраивает.",ok:true,fb:"Works for me — меня устраивает."},
{en:"Yes, on half.",ru:"Да, на половину.",ok:false,fb:"Калька «пополам». Split it in half / fifty-fifty."},
{en:"Yes, I agree with you completely in this.",ru:"Да, я полностью согласен с тобой в этом.",ok:false,fb:"Предлог: agree on this. И слишком формально для соседа."}]},
{npc:"Awesome. I think we’ll get along fine.",ru:"Супер. Думаю, мы поладим."}]},

{id:"d2-a2-uber",level:"a2",title:"Разговор с водителем Uber",sub:"Водитель начинает small talk",partner:"Driver",steps:[
{npc:"Hey, how’s it going? Heading to the airport?",ru:"Привет, как дела? В аэропорт?"},
{me:[
{en:"Yep, that’s right. Going well, thanks!",ru:"Ага, верно. Всё хорошо, спасибо!",ok:true,fb:"Ответ на оба вопроса."},
{en:"Yes. It goes.",ru:"Да. Идёт.",ok:false,fb:"How’s it going? — это «как дела». Ответ: Good, thanks!"},
{en:"Yes, to airport.",ru:"Да, в аэропорт.",ok:false,fb:"Нужен артикль: to the airport."}]},
{npc:"Where are you flying to?",ru:"Куда летите?"},
{me:[
{en:"Chicago, for a work trip.",ru:"В Чикаго, в командировку.",ok:true,fb:"Work trip / business trip — командировка."},
{en:"To Chicago, in a business trip.",ru:"В Чикаго, в командировку.",ok:false,fb:"Предлог: on a business trip."},
{en:"I’m going to Chicago to visit friends.",ru:"Лечу в Чикаго к друзьям.",ok:true,fb:"Правильно и естественно."}]},
{npc:"Nice! Where are you from originally? I hear an accent.",ru:"Здорово! А вы откуда родом? Слышу акцент."},
{me:[
{en:"I’m from Russia. I moved here last year.",ru:"Я из России. Переехал сюда в прошлом году.",ok:true,fb:"Past Simple с last year — верно."},
{en:"I am from Russia. I live here one year.",ru:"Я из России. Живу здесь год.",ok:false,fb:"Нужен Present Perfect: I’ve lived here for a year."},
{en:"Russia. I have moved here last year.",ru:"Россия. Я переехал в прошлом году.",ok:false,fb:"С last year нельзя Present Perfect: I moved here last year."}]},
{npc:"Cool! How do you like it so far?",ru:"Круто! Как вам тут пока?"},
{me:[
{en:"I love it, but the winters are tough.",ru:"Мне нравится, но зимы суровые.",ok:true,fb:"Естественная реплика."},
{en:"I like it very much, people are friendly.",ru:"Очень нравится, люди дружелюбные.",ok:true,fb:"Хорошо."},
{en:"I am liking it very.",ru:"Мне очень нравится.",ok:false,fb:"Very не ставят в конце. I like it a lot."}]},
{npc:"Glad to hear it!",ru:"Рад слышать!"}]},

{id:"d2-a2-lunch",level:"a2",title:"Обед с коллегой",sub:"Коллега приглашает вас на обед",partner:"Coworker",steps:[
{npc:"Hey, want to grab lunch?",ru:"Эй, хочешь сходить пообедать?"},
{me:[
{en:"Sure, I’d love to! Where should we go?",ru:"Конечно, с удовольствием! Куда пойдём?",ok:true,fb:"I’d love to — тепло соглашаемся."},
{en:"Yes, let’s go to eat.",ru:"Да, пошли есть.",ok:false,fb:"Go to eat звучит неловко. Let’s go / Sure, sounds good!"},
{en:"With pleasure!",ru:"С удовольствием!",ok:false,fb:"Калька, звучит слишком формально. Sure, I’d love to!"}]},
{npc:"There’s a good Thai place nearby. Do you like spicy food?",ru:"Тут рядом хорошее тайское место. Любишь острое?"},
{me:[
{en:"I do, but not too spicy.",ru:"Люблю, но не слишком острое.",ok:true,fb:"Короткий ответ I do."},
{en:"Yes, I like sharp food.",ru:"Да, люблю острую еду.",ok:false,fb:"«Острый» о еде — spicy, не sharp."},
{en:"Not really, but I’m happy to try.",ru:"Не особо, но с радостью попробую.",ok:true,fb:"Вежливо и открыто."}]},
{npc:"So how are you settling in?",ru:"Ну как ты осваиваешься?"},
{me:[
{en:"Pretty well, everyone’s been really helpful.",ru:"Неплохо, все очень помогают.",ok:true,fb:"Present Perfect — для недавнего опыта."},
{en:"Good, all people are very helping.",ru:"Хорошо, все люди очень помогающие.",ok:false,fb:"Helping — не прилагательное. Everyone is very helpful."},
{en:"Slowly. I still learn the processes.",ru:"Потихоньку. Я всё ещё изучаю процессы.",ok:false,fb:"Процесс сейчас: I’m still learning."}]},
{npc:"Let me know if you need anything. This one’s on me, by the way.",ru:"Обращайся, если что. Кстати, я угощаю."},
{me:[
{en:"That’s so nice of you, thanks! Next one’s on me.",ru:"Как мило, спасибо! В следующий раз я угощаю.",ok:true,fb:"Естественный ответ на угощение."},
{en:"Oh no, it is not comfortable.",ru:"Ой нет, мне неудобно.",ok:false,fb:"«Неудобно» ≠ not comfortable. Oh, you don’t have to!"},
{en:"Thanks, you’re the best!",ru:"Спасибо, ты лучший!",ok:true,fb:"Дружеская благодарность."}]},
{npc:"No worries!",ru:"Без проблем!"}]},

{id:"d2-a2-utility",level:"a2",title:"Подключение электричества",sub:"Вы звоните в энергокомпанию",partner:"Customer service",steps:[
{npc:"Thank you for calling City Power. How can I help?",ru:"Спасибо, что позвонили в City Power. Чем помочь?"},
{me:[
{en:"Hi, I just moved in and need to set up electricity.",ru:"Здравствуйте, я только заехал, и мне нужно подключить электричество.",ok:true,fb:"Set up — подключить услугу."},
{en:"Hello, I want to connect the light.",ru:"Здравствуйте, хочу подключить свет.",ok:false,fb:"«Свет» здесь = electricity, а «подключить услугу» — set up service."},
{en:"I’d like to start electric service at my new address.",ru:"Хочу подключить электричество по новому адресу.",ok:true,fb:"Официальная формулировка."}]},
{npc:"Sure. What’s the address?",ru:"Конечно. Какой адрес?"},
{me:[
{en:"It’s 25 Oak Street, apartment 3B.",ru:"Оук-стрит, 25, квартира 3B.",ok:true,fb:"В США номер дома ставится перед улицей."},
{en:"Street Oak, house 25, flat 3B.",ru:"Улица Оук, дом 25, квартира 3B.",ok:false,fb:"Русский порядок. В США: 25 Oak Street, Apt 3B."},
{en:"My address is Oak Street 25.",ru:"Мой адрес Оук-стрит 25.",ok:false,fb:"Номер дома идёт первым: 25 Oak Street."}]},
{npc:"When would you like service to start?",ru:"С какого числа подключить?"},
{me:[
{en:"As soon as possible, please.",ru:"Как можно скорее, пожалуйста.",ok:true,fb:"Стандартная фраза."},
{en:"From the first of May.",ru:"С первого мая.",ok:false,fb:"Для даты начала: Starting May first / On May first."},
{en:"Starting tomorrow, if possible.",ru:"С завтрашнего дня, если можно.",ok:true,fb:"Starting — «начиная с»."}]},
{npc:"Okay. There’s a fifty-dollar deposit. Is that okay?",ru:"Хорошо. Есть депозит пятьдесят долларов. Это нормально?"},
{me:[
{en:"Why do I need a deposit?",ru:"Зачем нужен депозит?",ok:true,fb:"Корректный вопрос."},
{en:"Why I need to pay deposit?",ru:"Почему я должен платить депозит?",ok:false,fb:"Нужен do и артикль: Why do I need to pay a deposit?"},
{en:"That’s fine. Can I pay online?",ru:"Хорошо. Можно оплатить онлайн?",ok:true,fb:"Нормально."}]},
{npc:"It’s because you don’t have a US credit history yet.",ru:"Потому что у вас пока нет кредитной истории в США."}]},

{id:"d2-a2-return-online",level:"a2",title:"Возврат онлайн-заказа",sub:"Вам пришёл не тот размер, вы звоните в поддержку",partner:"Support agent",steps:[
{npc:"Hi, thanks for contacting us. What’s the issue?",ru:"Здравствуйте, спасибо за обращение. В чём проблема?"},
{me:[
{en:"I ordered a medium, but I got a large.",ru:"Я заказал M, а пришёл L.",ok:true,fb:"Чётко и по делу."},
{en:"You sent me wrong size.",ru:"Вы прислали мне неправильный размер.",ok:false,fb:"Артикль: the wrong size. И тон резковат."},
{en:"The shirt came in the wrong size.",ru:"Рубашка пришла не того размера.",ok:true,fb:"Нейтрально и вежливо."}]},
{npc:"I’m sorry about that. Would you like a refund or an exchange?",ru:"Извините. Вам вернуть деньги или обменять?"},
{me:[
{en:"An exchange, please.",ru:"Обмен, пожалуйста.",ok:true,fb:"Коротко."},
{en:"I want money back.",ru:"Хочу деньги назад.",ok:false,fb:"Грубовато и без артикля. I’d like a refund, please."},
{en:"I’d prefer a refund.",ru:"Я бы предпочёл возврат денег.",ok:true,fb:"Вежливо."}]},
{npc:"No problem. I’ll email you a return label.",ru:"Без проблем. Я пришлю вам этикетку для возврата."},
{me:[
{en:"Do I have to pay for shipping?",ru:"Мне нужно платить за доставку?",ok:true,fb:"Pay for — платить за."},
{en:"I must pay the delivery?",ru:"Я должен оплатить доставку?",ok:false,fb:"Нужна инверсия и for: Do I have to pay for shipping?"},
{en:"Shipping is free or not?",ru:"Доставка бесплатная или нет?",ok:false,fb:"Нет инверсии. Is return shipping free?"}]},
{npc:"No, it’s free. Just drop it off at any UPS store.",ru:"Нет, бесплатно. Просто сдайте в любой пункт UPS."}]},

{id:"d2-a2-dating",level:"a2",title:"Переписка в приложении знакомств",sub:"Вы получили сообщение в Hinge",partner:"Match",steps:[
{npc:"Hey! I love your hiking photos. Where was that?",ru:"Привет! Обожаю твои фото с походов. Где это?"},
{me:[
{en:"Thanks! That was in the Rockies last summer.",ru:"Спасибо! Это в Скалистых горах прошлым летом.",ok:true,fb:"Ответ с деталями — разговор продолжается."},
{en:"Thank you. It was on Rockies in last summer.",ru:"Спасибо. Это было в Скалистых в прошлом году.",ok:false,fb:"In the Rockies, без in перед last summer."},
{en:"Colorado! Do you hike too?",ru:"Колорадо! Ты тоже ходишь в походы?",ok:true,fb:"Встречный вопрос — хороший приём."}]},
{npc:"I do! I’m always looking for new trails. What else do you do for fun?",ru:"Да! Всё время ищу новые тропы. Чем ещё любишь заниматься?"},
{me:[
{en:"I’m into cooking and board games.",ru:"Люблю готовить и настолки.",ok:true,fb:"Be into — увлекаться."},
{en:"I like to cook and play to board games.",ru:"Люблю готовить и играть в настолки.",ok:false,fb:"После play to не нужен: play board games."},
{en:"My hobby is cooking.",ru:"Моё хобби — готовка.",ok:false,fb:"Грамматически ок, но звучит как в анкете. I’m really into cooking."}]},
{npc:"Board games? Fun! We should play sometime.",ru:"Настолки? Классно! Надо как-нибудь сыграть."},
{me:[
{en:"I’d like that! Are you free this weekend?",ru:"Я бы хотел! Ты свободна в выходные?",ok:true,fb:"Естественно предлагаем встречу."},
{en:"Let’s! How about coffee on Saturday?",ru:"Давай! Может, кофе в субботу?",ok:true,fb:"How about — лёгкое предложение."},
{en:"Yes. You are free in weekend?",ru:"Да. Ты свободна на выходных?",ok:false,fb:"Нет инверсии, и предлог: Are you free this weekend?"}]},
{npc:"Saturday works! Can’t wait.",ru:"Суббота подходит! Жду с нетерпением."}]},

{id:"d2-a2-volunteer",level:"a2",title:"Волонтёрство",sub:"Вы хотите помогать в продовольственном банке",partner:"Coordinator",steps:[
{npc:"Hi! Are you here to volunteer?",ru:"Привет! Вы пришли волонтёрить?"},
{me:[
{en:"Yes! I saw your post online and wanted to help.",ru:"Да! Увидел ваш пост в интернете и захотел помочь.",ok:true,fb:"Past Simple — верно."},
{en:"Yes, I want to be volunteer.",ru:"Да, хочу быть волонтёром.",ok:false,fb:"Пропущен артикль: a volunteer."},
{en:"Yes, I came to help for free.",ru:"Да, пришёл помочь бесплатно.",ok:false,fb:"For free звучит лишне — волонтёрство и так бесплатно."}]},
{npc:"Awesome. Have you volunteered before?",ru:"Здорово. Вы раньше волонтёрили?"},
{me:[
{en:"Not here, but I helped at a shelter back home.",ru:"Здесь нет, но дома я помогал в приюте.",ok:true,fb:"Back home — на родине."},
{en:"No, it’s my first time.",ru:"Нет, это впервые.",ok:true,fb:"Просто и честно."},
{en:"No, I never did it before.",ru:"Нет, никогда раньше не делал.",ok:false,fb:"С never … before — Present Perfect: I’ve never done it before."}]},
{npc:"No problem. Can you help sort cans today?",ru:"Ничего. Можете сегодня помочь сортировать консервы?"},
{me:[
{en:"Sure, just show me what to do.",ru:"Конечно, просто покажите, что делать.",ok:true,fb:"What to do — что делать."},
{en:"Yes, explain me what to do.",ru:"Да, объясните мне, что делать.",ok:false,fb:"Explain требует to: explain to me. Проще: show me."},
{en:"Of course. How long is the shift?",ru:"Конечно. Сколько длится смена?",ok:true,fb:"Полезный вопрос."}]},
{npc:"About three hours. Thanks so much for coming!",ru:"Около трёх часов. Спасибо, что пришли!"}]},

{id:"d2-a2-mechanic",level:"a2",title:"В автосервисе",sub:"У машины горит лампочка",partner:"Mechanic",steps:[
{npc:"What seems to be the problem?",ru:"В чём проблема?"},
{me:[
{en:"The check engine light came on this morning.",ru:"Утром загорелась лампочка «Check engine».",ok:true,fb:"Come on — загореться (о лампочке)."},
{en:"Some lamp is burning on panel.",ru:"Какая-то лампочка горит на панели.",ok:false,fb:"Burning = пожар! Говорят: a light came on on the dashboard."},
{en:"There’s a warning light on the dashboard.",ru:"На панели горит предупреждение.",ok:true,fb:"Dashboard — приборная панель."}]},
{npc:"Okay. Any strange noises?",ru:"Понятно. Какие-нибудь странные звуки?"},
{me:[
{en:"Yes, it makes a weird noise when I brake.",ru:"Да, она странно шумит, когда я торможу.",ok:true,fb:"Make a noise — издавать звук."},
{en:"Yes, it does strange sound.",ru:"Да, она делает странный звук.",ok:false,fb:"Звук — make, не do: makes a strange sound."},
{en:"No, nothing unusual.",ru:"Нет, ничего необычного.",ok:true,fb:"Чёткий ответ."}]},
{npc:"We’ll take a look. It might take a couple of hours.",ru:"Посмотрим. Может занять пару часов."},
{me:[
{en:"Could you give me an estimate first?",ru:"Можете сначала назвать примерную стоимость?",ok:true,fb:"Estimate — смета; важно спросить заранее."},
{en:"How much will be it?",ru:"Сколько будет это?",ok:false,fb:"Порядок слов: How much will it be?"},
{en:"Please call me before you do any repairs.",ru:"Позвоните, пожалуйста, перед ремонтом.",ok:true,fb:"Полезная просьба."}]},
{npc:"Sure, we’ll call you with a quote.",ru:"Конечно, позвоним с расценкой."}]},

{id:"d2-a2-dentist",level:"a2",title:"Запись к стоматологу",sub:"Вы звоните записаться на чистку зубов",partner:"Receptionist",steps:[
{npc:"Bright Smile Dental, this is Karen.",ru:"Стоматология Bright Smile, это Карен."},
{me:[
{en:"Hi, I’d like to make an appointment for a cleaning.",ru:"Здравствуйте, хочу записаться на чистку.",ok:true,fb:"Make an appointment — записаться."},
{en:"Hello, I want to write to the doctor.",ru:"Здравствуйте, хочу записаться к врачу.",ok:false,fb:"«Записаться» — make an appointment, не write."},
{en:"Hi, can I book a teeth cleaning?",ru:"Здравствуйте, можно записаться на чистку зубов?",ok:true,fb:"Book — тоже подходит."}]},
{npc:"Are you a new patient?",ru:"Вы новый пациент?"},
{me:[
{en:"Yes, this is my first visit.",ru:"Да, это мой первый визит.",ok:true,fb:"Ясно."},
{en:"Yes, I am new.",ru:"Да, я новый.",ok:true,fb:"Коротко и понятно."},
{en:"Yes, I never was here.",ru:"Да, я никогда здесь не был.",ok:false,fb:"Present Perfect: I’ve never been here."}]},
{npc:"Do you have dental insurance?",ru:"У вас есть стоматологическая страховка?"},
{me:[
{en:"Yes, I have Delta Dental through my job.",ru:"Да, у меня Delta Dental через работу.",ok:true,fb:"Through my job — через работодателя."},
{en:"Yes, from my work I have insurance.",ru:"Да, от работы у меня страховка.",ok:false,fb:"Порядок и предлог: I have insurance through work."},
{en:"How much is it without insurance?",ru:"Сколько стоит без страховки?",ok:true,fb:"Разумный вопрос."}]},
{npc:"We have an opening Thursday at ten.",ru:"Есть окно в четверг в десять."},
{me:[
{en:"Thursday at ten works for me.",ru:"Четверг в десять мне подходит.",ok:true,fb:"Works for me — подходит."},
{en:"It suits me on Thursday.",ru:"Мне подходит в четверг.",ok:false,fb:"Suits звучит неестественно здесь. That works for me."},
{en:"Do you have anything in the afternoon?",ru:"А есть что-то после обеда?",ok:true,fb:"Вежливо просим другое время."}]},
{npc:"Great, see you then!",ru:"Отлично, до встречи!"}]},

{id:"d2-a2-delivery",level:"a2",title:"Заказ пиццы по телефону",sub:"Вы заказываете доставку домой",partner:"Employee",steps:[
{npc:"Tony’s Pizza, pickup or delivery?",ru:"Пиццерия Тони, самовывоз или доставка?"},
{me:[
{en:"Delivery, please.",ru:"Доставка, пожалуйста.",ok:true,fb:"Коротко и ясно."},
{en:"I want to order pizza on home.",ru:"Хочу заказать пиццу на дом.",ok:false,fb:"Калька «на дом». Правильно: for delivery."},
{en:"Delivery. I’d like to order a large pepperoni.",ru:"Доставка. Хочу заказать большую пепперони.",ok:true,fb:"Сразу и способ, и заказ."}]},
{npc:"Sure. What would you like?",ru:"Конечно. Что желаете?"},
{me:[
{en:"A large pepperoni and a Caesar salad.",ru:"Большую пепперони и салат «Цезарь».",ok:true,fb:"Правильные артикли."},
{en:"One big pizza with pepperonis.",ru:"Одну большую пиццу с пепперони.",ok:false,fb:"Размер пиццы — large, а pepperoni без -s."},
{en:"Can I get a medium half cheese, half pepperoni?",ru:"Можно среднюю, половина сырная, половина пепперони?",ok:true,fb:"Half and half — частый заказ."}]},
{npc:"Got it. What’s the address?",ru:"Принято. Какой адрес?"},
{me:[
{en:"It’s 140 Pine Street, apartment 5. The buzzer is broken, so please call me.",ru:"Пайн-стрит, 140, квартира 5. Домофон сломан, так что позвоните мне.",ok:true,fb:"Buzzer — домофон; полезное уточнение."},
{en:"Pine Street 140, flat 5. Intercom doesn’t work.",ru:"Пайн-стрит 140, квартира 5. Домофон не работает.",ok:false,fb:"Номер дома ставится первым, и нужен артикль: The buzzer doesn’t work."},
{en:"140 Pine Street, unit 5.",ru:"Пайн-стрит, 140, квартира 5.",ok:true,fb:"Unit — квартира в американских адресах."}]},
{npc:"That’ll be about forty minutes.",ru:"Это займёт около сорока минут."},
{me:[
{en:"Great. Can I pay the driver with a card?",ru:"Отлично. Можно расплатиться с курьером картой?",ok:true,fb:"Pay the driver — заплатить курьеру."},
{en:"Okay. I will pay to courier by card.",ru:"Хорошо. Заплачу курьеру картой.",ok:false,fb:"Pay без to, и в США говорят driver, а не courier."},
{en:"Perfect, thanks!",ru:"Отлично, спасибо!",ok:true,fb:"Естественно."}]},
{npc:"Yes, card is fine. Thanks for ordering!",ru:"Да, можно картой. Спасибо за заказ!"}]},

{id:"d2-b1-insurance",level:"b1",title:"Звонок в страховую",sub:"Вам отказали в оплате счёта, вы выясняете причину",partner:"Insurance rep",steps:[
{npc:"Thanks for holding. How can I help you today?",ru:"Спасибо за ожидание. Чем могу помочь?"},
{me:[
{en:"Hi, I received a bill for a doctor’s visit that I thought was covered.",ru:"Здравствуйте, мне пришёл счёт за визит к врачу, который, как я думал, покрывается.",ok:true,fb:"Чётко и вежливо описана ситуация."},
{en:"Hello, you must pay my bill but you didn’t.",ru:"Здравствуйте, вы должны были оплатить мой счёт, но не оплатили.",ok:false,fb:"Обвинительный тон и must вместо were supposed to. Начните нейтрально."},
{en:"Hi, I’m calling about a claim that was denied.",ru:"Здравствуйте, я звоню по поводу отклонённого требования.",ok:true,fb:"Claim — страховое требование."}]},
{npc:"Let me look that up. It looks like the provider was out of network.",ru:"Сейчас посмотрю. Похоже, врач был вне сети."},
{me:[
{en:"I didn’t realize that. Nobody told me when I made the appointment.",ru:"Я этого не знал. Мне никто не сказал при записи.",ok:true,fb:"Realize — осознать, понять."},
{en:"I didn’t know about it. Nobody didn’t tell me.",ru:"Я не знал. Никто мне не сказал.",ok:false,fb:"Двойное отрицание в английском недопустимо: Nobody told me."},
{en:"What does out of network mean exactly?",ru:"Что именно значит «вне сети»?",ok:true,fb:"Уточнять термины — нормально."}]},
{npc:"It means the doctor doesn’t have a contract with us, so coverage is lower.",ru:"Это значит, что у врача нет с нами договора, поэтому покрытие меньше."},
{me:[
{en:"Is there any way to appeal this decision?",ru:"Можно ли как-то обжаловать это решение?",ok:true,fb:"Appeal — обжаловать."},
{en:"Can I complain on this decision?",ru:"Могу я пожаловаться на это решение?",ok:false,fb:"Complain about, а официально — appeal."},
{en:"Would you be able to reprocess it as in-network? The clinic was listed on your website.",ru:"Можно переоформить как «в сети»? Клиника была указана на вашем сайте.",ok:true,fb:"Сильный аргумент, вежливая форма."}]},
{npc:"Yes, you can file an appeal. I’ll send you the form.",ru:"Да, можно подать апелляцию. Я пришлю форму."},
{me:[
{en:"Great. Could you also give me a reference number for this call?",ru:"Отлично. Можете также дать номер обращения?",ok:true,fb:"Всегда полезно брать reference number."},
{en:"Okay. Send me it by email.",ru:"Хорошо. Пришлите мне его по почте.",ok:false,fb:"Порядок: send it to me. И тон резковат."},
{en:"Thanks. How long does the appeal usually take?",ru:"Спасибо. Сколько обычно длится апелляция?",ok:true,fb:"Полезный вопрос."}]},
{npc:"Usually about thirty days. Your reference number is 58213.",ru:"Обычно около тридцати дней. Номер обращения 58213."}]},

{id:"d2-b1-maintenance",level:"b1",title:"Течёт кран",sub:"Вы звоните в управляющую компанию",partner:"Property manager",steps:[
{npc:"Maple Apartments, how can I help?",ru:"Maple Apartments, чем помочь?"},
{me:[
{en:"Hi, this is Olga in 4C. My kitchen faucet has been leaking for a few days.",ru:"Здравствуйте, это Ольга из 4C. У меня уже несколько дней течёт кран на кухне.",ok:true,fb:"Present Perfect Continuous с for — идеально."},
{en:"Hello, my tap in kitchen flows already three days.",ru:"Здравствуйте, мой кран на кухне течёт уже три дня.",ok:false,fb:"Flows — не «течёт» о кране, а leaks; нужен has been leaking for three days."},
{en:"Hi, I need to submit a maintenance request for a leaky faucet.",ru:"Здравствуйте, мне нужно подать заявку на ремонт протекающего крана.",ok:true,fb:"Maintenance request — заявка на ремонт."}]},
{npc:"Sorry to hear that. Is it a slow drip or is water everywhere?",ru:"Жаль. Капает медленно или вода повсюду?"},
{me:[
{en:"It’s a slow drip, but it’s getting worse.",ru:"Капает медленно, но становится хуже.",ok:true,fb:"Getting worse — ухудшается."},
{en:"It drips slowly, but it becomes more bad.",ru:"Капает медленно, но становится хуже.",ok:false,fb:"Сравнительная степень bad — worse: it’s getting worse."},
{en:"Just dripping, but I’m worried about water damage.",ru:"Просто капает, но я переживаю, что будет ущерб от воды.",ok:true,fb:"Water damage — повреждение водой."}]},
{npc:"We can send someone tomorrow between nine and twelve. Will you be home?",ru:"Можем прислать мастера завтра с девяти до двенадцати. Вы будете дома?"},
{me:[
{en:"I’ll be at work, but you can go in. I don’t mind.",ru:"Я буду на работе, но можете зайти. Я не против.",ok:true,fb:"I don’t mind — я не против."},
{en:"I will be on work. You can enter without me.",ru:"Я буду на работе. Можете зайти без меня.",ok:false,fb:"At work, не on work."},
{en:"Is there any chance you could come after five?",ru:"Есть ли возможность прийти после пяти?",ok:true,fb:"Вежливая просьба."}]},
{npc:"Okay, the technician will leave a note when it’s done.",ru:"Хорошо, мастер оставит записку, когда закончит."},
{me:[
{en:"Perfect. Could you also check the bathroom fan? It’s been really loud lately.",ru:"Отлично. Можете также проверить вытяжку в ванной? Она в последнее время очень шумит.",ok:true,fb:"Lately с Present Perfect — верно."},
{en:"Thanks. Also bathroom fan makes noise lately.",ru:"Спасибо. Ещё вытяжка в ванной шумит в последнее время.",ok:false,fb:"Нужен артикль и Present Perfect: the bathroom fan has been noisy lately."},
{en:"Thank you, I appreciate the quick response.",ru:"Спасибо, ценю быструю реакцию.",ok:true,fb:"Вежливое завершение."}]},
{npc:"Sure, I’ll add that to the request.",ru:"Конечно, добавлю в заявку."}]},

{id:"d2-b1-enroll",level:"b1",title:"Запись на курсы",sub:"Вы хотите записаться на вечерний курс в колледже",partner:"Advisor",steps:[
{npc:"Hi, come on in. What can I help you with?",ru:"Здравствуйте, проходите. Чем могу помочь?"},
{me:[
{en:"I’m interested in the evening data analysis course. Is it still open?",ru:"Меня интересует вечерний курс по анализу данных. Набор ещё открыт?",ok:true,fb:"Interested in — правильный предлог."},
{en:"I’m interesting in data analysis course.",ru:"Мне интересен курс анализа данных.",ok:false,fb:"Interesting — «интересный». Нужно interested in."},
{en:"I’d like to enroll in a data analysis class this fall.",ru:"Хочу записаться на курс анализа данных этой осенью.",ok:true,fb:"Enroll in — записаться на курс."}]},
{npc:"It is, but it has a prerequisite: intro to statistics. Have you taken it?",ru:"Открыт, но есть обязательный предварительный курс — введение в статистику. Вы его проходили?"},
{me:[
{en:"Not here, but I studied statistics at university in Russia.",ru:"Здесь нет, но я изучал статистику в университете в России.",ok:true,fb:"Past Simple для законченного опыта в прошлом."},
{en:"I passed statistics in my institute.",ru:"Я сдавал статистику в институте.",ok:false,fb:"«Сдавать» ≠ pass (pass = сдать успешно), и at university, не in my institute."},
{en:"Can my previous coursework count toward it?",ru:"Можно ли зачесть мои прошлые курсы?",ok:true,fb:"Count toward — засчитываться."}]},
{npc:"You could request a waiver. You’d need your transcript translated.",ru:"Можно запросить освобождение. Понадобится переведённая выписка оценок."},
{me:[
{en:"Does it need to be a certified translation?",ru:"Перевод должен быть заверенным?",ok:true,fb:"Certified translation — заверенный перевод."},
{en:"It must be notarial translate?",ru:"Нужен нотариальный перевод?",ok:false,fb:"Нет инверсии и неверные формы. Does it need to be a certified translation?"},
{en:"Where would you recommend getting it translated?",ru:"Где посоветуете сделать перевод?",ok:true,fb:"Get something done — каузатив."}]},
{npc:"Yes, certified. Once we get it, the waiver takes about a week.",ru:"Да, заверенный. Как получим, освобождение оформляется около недели."},
{me:[
{en:"Thanks. If it isn’t approved in time, can I still take the intro course this semester?",ru:"Спасибо. Если не одобрят вовремя, смогу ли я пройти вводный курс в этом семестре?",ok:true,fb:"Первый тип условных: if + Present."},
{en:"And if it will not be approved?",ru:"А если не одобрят?",ok:false,fb:"После if не используется will: What if it isn’t approved?"},
{en:"Great, I’ll get it done this week.",ru:"Отлично, сделаю на этой неделе.",ok:true,fb:"Естественно."}]},
{npc:"Yes, that’s a good backup plan.",ru:"Да, хороший запасной план."}]},

{id:"d2-b1-airbnb-issue",level:"b1",title:"Проблема в Airbnb",sub:"В квартире не работает кондиционер, вы пишете хозяину",partner:"Host",steps:[
{npc:"Hi! Hope you’re settling in well. Let me know if you need anything.",ru:"Привет! Надеюсь, вы хорошо устроились. Если что-то нужно — пишите."},
{me:[
{en:"Thanks! Everything’s great, but the AC doesn’t seem to be working.",ru:"Спасибо! Всё отлично, но кондиционер, похоже, не работает.",ok:true,fb:"Смягчение doesn’t seem to — вежливо."},
{en:"The conditioner is not working.",ru:"Кондиционер не работает.",ok:false,fb:"Conditioner — это бальзам для волос! Кондиционер — AC / air conditioner."},
{en:"Hi, quick question — is there a trick to turning on the AC?",ru:"Привет, вопрос: как включается кондиционер, есть хитрость?",ok:true,fb:"Мягкий заход, вдруг вы что-то не так делаете."}]},
{npc:"Oh no! Did you try the remote on the shelf?",ru:"Ой! Вы пробовали пульт на полке?"},
{me:[
{en:"Yes, I’ve tried it several times. It turns on, but only blows warm air.",ru:"Да, пробовал несколько раз. Включается, но дует тёплым воздухом.",ok:true,fb:"Present Perfect для опыта и конкретика."},
{en:"Yes, I tried already many times, but it blows hot.",ru:"Да, уже много раз пробовал, но дует горячим.",ok:false,fb:"С already и many times — Present Perfect: I’ve already tried it many times."},
{en:"I did. I even changed the batteries.",ru:"Пробовал. Даже батарейки поменял.",ok:true,fb:"Короткий ответ I did — естественно."}]},
{npc:"I’m so sorry. I can have a technician come tomorrow afternoon.",ru:"Мне очень жаль. Могу прислать мастера завтра днём."},
{me:[
{en:"That would be great. It’s pretty hot tonight, though — do you have a fan I could use?",ru:"Было бы здорово. Но сегодня жарко — у вас нет вентилятора?",ok:true,fb:"Though в конце — «впрочем»."},
{en:"Okay, but tonight I will die from heat.",ru:"Ладно, но сегодня я умру от жары.",ok:false,fb:"Звучит драматично для письма хозяину. It’s really hot tonight."},
{en:"Tomorrow is late. Can he come today?",ru:"Завтра поздно. Может прийти сегодня?",ok:false,fb:"Звучит резко. Is there any chance someone could come today?"}]},
{npc:"There’s a fan in the hall closet. I’ll also give you a partial refund for tonight.",ru:"Вентилятор в шкафу в коридоре. И я частично верну деньги за эту ночь."},
{me:[
{en:"That’s really kind of you, thank you!",ru:"Это очень мило с вашей стороны, спасибо!",ok:true,fb:"Kind of you — мило с вашей стороны."},
{en:"I appreciate it. Thanks for handling it so quickly.",ru:"Ценю. Спасибо, что так быстро решаете.",ok:true,fb:"Handle — решать вопрос."},
{en:"Thank you, it’s very kindly.",ru:"Спасибо, это очень любезно.",ok:false,fb:"Kindly — наречие. Нужно: That’s very kind of you."}]},
{npc:"Of course. Enjoy the rest of your stay!",ru:"Конечно. Хорошего отдыха!"}]},

{id:"d2-b1-bank-account",level:"b1",title:"Открытие счёта в банке",sub:"Вы открываете первый счёт в США",partner:"Banker",steps:[
{npc:"So, what kind of account are you looking to open?",ru:"Итак, какой счёт вы хотите открыть?"},
{me:[
{en:"A checking account, and maybe a savings account too.",ru:"Текущий счёт и, может, сберегательный.",ok:true,fb:"Checking — текущий, savings — сберегательный."},
{en:"I want to open a card.",ru:"Хочу открыть карту.",ok:false,fb:"Открывают account, а карту получают: I’d like to open an account and get a debit card."},
{en:"Just a basic checking account for now.",ru:"Пока просто обычный текущий счёт.",ok:true,fb:"For now — пока."}]},
{npc:"Great. Do you have a Social Security number?",ru:"Отлично. У вас есть номер социального страхования?"},
{me:[
{en:"Not yet. I applied for one last week. Can I open an account with my passport?",ru:"Пока нет. Подал заявку на прошлой неделе. Можно открыть счёт по паспорту?",ok:true,fb:"Past Simple с last week, и ясный вопрос."},
{en:"Not yet. I have applied it last week.",ru:"Пока нет. Подал на прошлой неделе.",ok:false,fb:"С last week — Past Simple, и apply for: I applied for it last week."},
{en:"I don’t have one yet, but I have an ITIN.",ru:"Пока нет, но есть ITIN.",ok:true,fb:"ITIN — налоговый номер, многие банки его принимают."}]},
{npc:"Yes, a passport and proof of address will work. Are there any fees you’d like to know about?",ru:"Да, паспорта и подтверждения адреса хватит. Хотите узнать о комиссиях?"},
{me:[
{en:"Yes — is there a monthly fee, and how can I avoid it?",ru:"Да — есть ли ежемесячная плата и как её избежать?",ok:true,fb:"Ключевой вопрос в американских банках."},
{en:"Yes, how much is commission for service?",ru:"Да, сколько комиссия за обслуживание?",ok:false,fb:"Commission — комиссионные продавца. Банковская комиссия — fee."},
{en:"Are there fees for international transfers?",ru:"Есть ли комиссия за международные переводы?",ok:true,fb:"Актуальный вопрос для экспата."}]},
{npc:"The monthly fee is waived if you keep a balance of five hundred dollars.",ru:"Ежемесячная плата не взимается, если держать на счёте пятьсот долларов."},
{me:[
{en:"Got it. And how soon will I get my debit card?",ru:"Понял. И как скоро я получу дебетовую карту?",ok:true,fb:"How soon — как скоро."},
{en:"Clear. When card will come?",ru:"Ясно. Когда придёт карта?",ok:false,fb:"Clear — калька «ясно», и нет инверсии. Got it. When will the card arrive?"},
{en:"That makes sense. Can I set up direct deposit today?",ru:"Логично. Можно сегодня настроить прямое зачисление зарплаты?",ok:true,fb:"Direct deposit — зарплата на счёт."}]},
{npc:"Your card will arrive in seven to ten business days.",ru:"Карта придёт через семь-десять рабочих дней."}]},

{id:"d2-b1-car-accident",level:"b1",title:"Мелкое ДТП",sub:"В вас въехали на парковке, вы говорите с другим водителем",partner:"Other driver",steps:[
{npc:"Oh man, I’m so sorry! I didn’t see you backing out.",ru:"Блин, извините! Я не видел, как вы выезжали."},
{me:[
{en:"It’s okay, are you alright? Nobody’s hurt, that’s the main thing.",ru:"Ничего, вы в порядке? Никто не пострадал — это главное.",ok:true,fb:"Спокойная и заботливая реакция."},
{en:"You must look where you go!",ru:"Надо смотреть, куда едете!",ok:false,fb:"Агрессивно и калька. Сохраняйте спокойствие."},
{en:"Don’t worry. Let’s just exchange information.",ru:"Не переживайте. Давайте обменяемся данными.",ok:true,fb:"Exchange information — стандартная процедура."}]},
{npc:"Yeah, I’m fine. Should we call the police?",ru:"Да, я в порядке. Вызовем полицию?"},
{me:[
{en:"It’s a minor scratch, so I don’t think we need to. Let’s take photos, though.",ru:"Это небольшая царапина, думаю, не нужно. Но давайте сфотографируем.",ok:true,fb:"Take photos — важно для страховой."},
{en:"I think it’s not necessary.",ru:"Думаю, это не обязательно.",ok:false,fb:"В английском отрицание выносят в think: I don’t think it’s necessary."},
{en:"Maybe we should, just to have a report for insurance.",ru:"Может, стоит — чтобы был протокол для страховой.",ok:true,fb:"Разумная предосторожность."}]},
{npc:"Sure. Here’s my license and insurance card.",ru:"Конечно. Вот мои права и страховка."},
{me:[
{en:"Thanks. Mind if I take a picture of them?",ru:"Спасибо. Не против, если я сфотографирую?",ok:true,fb:"Mind if I… — вежливое разрешение."},
{en:"Thanks. I will photograph them, okay?",ru:"Спасибо. Я их сфотографирую, ок?",ok:true,fb:"Понятно, хотя чуть прямолинейно."},
{en:"Thank you. Can I make a photo of them?",ru:"Спасибо. Можно сделать фото?",ok:false,fb:"Фото не make, а take a photo."}]},
{npc:"Of course. Here’s my number too, in case your insurance needs it.",ru:"Конечно. Вот и мой номер, если страховой понадобится."},
{me:[
{en:"Appreciate it. I’ll let you know once I hear back from them.",ru:"Спасибо. Сообщу, как получу ответ от них.",ok:true,fb:"Hear back — получить ответ."},
{en:"Thanks. I will call you when I will know something.",ru:"Спасибо. Позвоню, когда буду что-то знать.",ok:false,fb:"После when — Present: when I know something."},
{en:"Thanks for being so honest about it.",ru:"Спасибо, что так честно.",ok:true,fb:"Тёплое завершение."}]},
{npc:"No problem. Again, sorry about this.",ru:"Без проблем. Ещё раз извините."}]},

{id:"d2-b1-work-feedback",level:"b1",title:"Просьба о фидбеке",sub:"Вы просите менеджера оценить вашу презентацию",partner:"Manager",steps:[
{npc:"Hey, you wanted to chat?",ru:"Привет, хотел поговорить?"},
{me:[
{en:"Yeah, I was wondering if you had any feedback on my presentation yesterday.",ru:"Да, хотел узнать, есть ли у вас отзыв о моей вчерашней презентации.",ok:true,fb:"I was wondering if — очень вежливая конструкция."},
{en:"Yes. Tell me your opinion about my presentation.",ru:"Да. Скажите своё мнение о моей презентации.",ok:false,fb:"Повелительное наклонение звучит требовательно. I was wondering if you had any feedback."},
{en:"Yes, I’d love some feedback on yesterday’s presentation.",ru:"Да, хотел бы получить отзыв о вчерашней презентации.",ok:true,fb:"Прямо и вежливо."}]},
{npc:"Sure. Overall it was solid. The data was clear, but you went a bit fast.",ru:"Конечно. В целом хорошо. Данные понятные, но ты говорил быстровато."},
{me:[
{en:"That’s helpful, thanks. I tend to rush when I’m nervous.",ru:"Это полезно, спасибо. Я склонен торопиться, когда нервничаю.",ok:true,fb:"Tend to — иметь склонность."},
{en:"Yes, I know. I always speak fast when I am nervous.",ru:"Да, знаю. Я всегда говорю быстро, когда нервничаю.",ok:true,fb:"Нормально, можно добавить thanks."},
{en:"Really? I didn’t notice it. I think it was normal speed.",ru:"Правда? Не заметил. Думаю, скорость была нормальная.",ok:false,fb:"Спорить с фидбеком — плохая идея. Лучше поблагодарить и уточнить."}]},
{npc:"Totally normal. Maybe practice with pauses between slides.",ru:"Это нормально. Может, потренируйся делать паузы между слайдами."},
{me:[
{en:"Good idea. Would you mind if I ran the next one by you beforehand?",ru:"Хорошая идея. Не против, если я покажу вам следующую заранее?",ok:true,fb:"Run something by someone — показать на согласование."},
{en:"Okay. Can you check my next presentation before?",ru:"Хорошо. Можете проверить следующую презентацию до?",ok:false,fb:"Before в конце не ставится — нужно beforehand / in advance."},
{en:"Thanks, I’ll work on that for next time.",ru:"Спасибо, поработаю над этим к следующему разу.",ok:true,fb:"Work on — работать над."}]},
{npc:"Absolutely, happy to help.",ru:"Конечно, рад помочь."}]},

{id:"d2-b1-doctor-referral",level:"b1",title:"Направление к специалисту",sub:"Вы просите терапевта направить вас к дерматологу",partner:"Doctor",steps:[
{npc:"So what brings you in today?",ru:"Итак, что вас привело сегодня?"},
{me:[
{en:"I’ve had this rash on my arm for about a month, and it’s not going away.",ru:"У меня уже около месяца сыпь на руке, и она не проходит.",ok:true,fb:"Present Perfect с for, go away — проходить."},
{en:"I have rash on my hand already a month.",ru:"У меня сыпь на руке уже месяц.",ok:false,fb:"Нужен Present Perfect, for и артикль; рука до плеча — arm, кисть — hand."},
{en:"There’s a rash on my arm that won’t clear up.",ru:"У меня на руке сыпь, которая не проходит.",ok:true,fb:"Clear up — пройти (о коже)."}]},
{npc:"Have you tried anything for it?",ru:"Вы что-нибудь пробовали?"},
{me:[
{en:"I’ve been using an over-the-counter cream, but it hasn’t helped much.",ru:"Пользуюсь безрецептурным кремом, но он не особо помог.",ok:true,fb:"Over-the-counter — безрецептурный."},
{en:"I smeared a cream, but no result.",ru:"Мазал кремом, но без результата.",ok:false,fb:"Smear — пачкать. Правильно: I’ve been using a cream / applying a cream."},
{en:"Just some hydrocortisone cream from the pharmacy.",ru:"Только гидрокортизоновый крем из аптеки.",ok:true,fb:"Конкретно."}]},
{npc:"It might be eczema. I can prescribe something stronger.",ru:"Возможно, экзема. Могу выписать что-то посильнее."},
{me:[
{en:"Thanks. Would it be possible to get a referral to a dermatologist as well?",ru:"Спасибо. А можно ещё направление к дерматологу?",ok:true,fb:"Would it be possible — мягкая просьба; referral — направление."},
{en:"I want direction to dermatologist.",ru:"Хочу направление к дерматологу.",ok:false,fb:"Direction — указание пути. Направление к врачу — referral."},
{en:"Could I see a specialist if it doesn’t improve?",ru:"Можно к специалисту, если не станет лучше?",ok:true,fb:"Условие с Present после if."}]},
{npc:"Sure. I’ll put in the referral. Check with your insurance to see who’s covered.",ru:"Конечно. Оформлю направление. Уточните в страховой, кто покрывается."},
{me:[
{en:"Will do. Should I keep using the cream in the meantime?",ru:"Сделаю. Продолжать пока пользоваться кремом?",ok:true,fb:"In the meantime — тем временем."},
{en:"Okay. I must stop the cream?",ru:"Хорошо. Мне бросить крем?",ok:false,fb:"Нет инверсии. Should I stop using the cream?"},
{en:"Thank you, I really appreciate it.",ru:"Спасибо, очень ценю.",ok:true,fb:"Вежливо."}]},
{npc:"Switch to the new prescription instead.",ru:"Лучше перейдите на новое лекарство."}]},

{id:"d2-b1-neighbor-noise",level:"b1",title:"Шумные соседи",sub:"Вы вежливо просите соседа сверху вести себя тише",partner:"Neighbor",steps:[
{npc:"Oh, hey! What’s up?",ru:"О, привет! Как дела?"},
{me:[
{en:"Hi! Sorry to bother you. I live right below you, in 2B.",ru:"Привет! Извините за беспокойство. Я живу прямо под вами, в 2B.",ok:true,fb:"Sorry to bother you — вежливое начало."},
{en:"Hello. You are very loud every night.",ru:"Здравствуйте. Вы очень шумите каждую ночь.",ok:false,fb:"Сразу претензия — конфликт. Начните с извинения и представьтесь."},
{en:"Hi, I don’t think we’ve met. I’m your downstairs neighbor.",ru:"Привет, мы, кажется, не знакомы. Я ваш сосед снизу.",ok:true,fb:"Дружелюбный заход."}]},
{npc:"Oh, nice to meet you! Is everything okay?",ru:"Приятно познакомиться! Всё в порядке?"},
{me:[
{en:"Mostly, yeah. It’s just that the music gets pretty loud late at night.",ru:"В основном да. Просто поздно вечером музыка довольно громкая.",ok:true,fb:"It’s just that — мягкое введение проблемы."},
{en:"Not really. Your music disturbs me very much at night.",ru:"Не очень. Ваша музыка меня очень беспокоит ночью.",ok:false,fb:"Грамматически почти верно, но слишком резко. Смягчите: It’s just that…"},
{en:"Yeah, I just wanted to mention the noise after midnight.",ru:"Да, я просто хотел упомянуть шум после полуночи.",ok:true,fb:"Нейтрально."}]},
{npc:"Oh no, I had no idea! I’m so sorry.",ru:"Ой, я понятия не имел! Простите."},
{me:[
{en:"No worries! Would you mind keeping it down after eleven on weeknights?",ru:"Ничего! Не могли бы вы потише после одиннадцати в будни?",ok:true,fb:"Would you mind + -ing, keep it down — потише."},
{en:"It’s okay. Please make it more quiet after eleven.",ru:"Ничего. Пожалуйста, сделайте тише после одиннадцати.",ok:false,fb:"Quieter, не more quiet; а лучше: keep it down."},
{en:"It’s fine. I have to get up early for work, that’s all.",ru:"Всё нормально. Мне просто рано вставать на работу.",ok:true,fb:"Объяснение без упрёка."}]},
{npc:"Totally, I’ll be more careful. Thanks for letting me know.",ru:"Конечно, буду аккуратнее. Спасибо, что сказали."},
{me:[
{en:"Thanks for understanding! Let me know if I’m ever too loud, too.",ru:"Спасибо за понимание! Скажите, если я тоже буду шуметь.",ok:true,fb:"Взаимность — хороший тон."},
{en:"Thank you for your understanding me.",ru:"Спасибо за ваше понимание меня.",ok:false,fb:"Лишнее me. Thanks for understanding."},
{en:"I appreciate it. Have a good night!",ru:"Ценю. Хорошего вечера!",ok:true,fb:"Тёплое завершение."}]},
{npc:"You too!",ru:"И вам!"}]},

{id:"d2-b1-job-fair",level:"b1",title:"На ярмарке вакансий",sub:"Вы подходите к стенду компании",partner:"Recruiter",steps:[
{npc:"Hi there! Thanks for stopping by. What’s your background?",ru:"Здравствуйте! Спасибо, что подошли. Какой у вас опыт?"},
{me:[
{en:"I’m a software engineer with five years of experience, mostly in backend.",ru:"Я разработчик с пятилетним опытом, в основном бэкенд.",ok:true,fb:"Чёткий питч в одном предложении."},
{en:"I work as programmer five years.",ru:"Я работаю программистом пять лет.",ok:false,fb:"Present Perfect и артикль: I’ve worked as a programmer for five years."},
{en:"I’ve been working in backend development for about five years.",ru:"Я около пяти лет занимаюсь бэкенд-разработкой.",ok:true,fb:"Present Perfect Continuous — отлично."}]},
{npc:"Great. Are you authorized to work in the US?",ru:"Отлично. У вас есть разрешение на работу в США?"},
{me:[
{en:"Yes, I have a green card.",ru:"Да, у меня грин-карта.",ok:true,fb:"Прямой ответ."},
{en:"I’ll need visa sponsorship, but I’m open to discussing options.",ru:"Мне понадобится спонсорство визы, но я готов обсуждать варианты.",ok:true,fb:"Честно и конструктивно."},
{en:"Yes, I have the permission for work.",ru:"Да, у меня есть разрешение на работу.",ok:false,fb:"Калька. Скажите: I’m authorized to work / I have a work permit."}]},
{npc:"We have a few openings. What are you looking for in your next role?",ru:"У нас есть несколько вакансий. Что вы ищете в следующей роли?"},
{me:[
{en:"I’m looking for a team where I can grow into a lead position.",ru:"Ищу команду, где смогу вырасти до лида.",ok:true,fb:"Grow into — вырасти до."},
{en:"I search a job with good salary.",ru:"Ищу работу с хорошей зарплатой.",ok:false,fb:"Search for / look for, и начинать с денег — плохой тон."},
{en:"Ideally, something with more ownership over system design.",ru:"В идеале — больше ответственности за архитектуру.",ok:true,fb:"Ownership — ответственность за результат."}]},
{npc:"Sounds like a good fit. Do you have a résumé with you?",ru:"Похоже, вы подходите. У вас есть резюме с собой?"},
{me:[
{en:"Yes, here you go. What’s the best way to follow up?",ru:"Да, пожалуйста. Как лучше связаться с вами потом?",ok:true,fb:"Follow up — напомнить о себе."},
{en:"Yes. And how I can contact with you later?",ru:"Да. А как я могу связаться с вами позже?",ok:false,fb:"Порядок слов и лишний with: How can I contact you?"},
{en:"Sure! Could I also get your business card?",ru:"Конечно! Можно вашу визитку?",ok:true,fb:"Business card — визитка."}]},
{npc:"Of course. Just email me — my address is on the card.",ru:"Конечно. Просто напишите на почту — адрес на визитке."}]},

{id:"d2-b1-apartment-lease",level:"b1",title:"Продление аренды",sub:"Арендодатель поднимает плату, вы договариваетесь",partner:"Landlord",steps:[
{npc:"Hi! So your lease is up next month. The new rent would be $2,100.",ru:"Привет! Ваша аренда заканчивается в следующем месяце. Новая плата — 2100 долларов."},
{me:[
{en:"Thanks for letting me know. That’s quite a jump from $1,900, though.",ru:"Спасибо, что предупредили. Но это довольно большой скачок с 1900.",ok:true,fb:"Jump — скачок; мягко обозначено несогласие."},
{en:"It’s too much expensive!",ru:"Это слишком много дорого!",ok:false,fb:"Too much expensive — ошибка. Way too expensive / That’s a big increase."},
{en:"I see. Is there any flexibility on that?",ru:"Понятно. Есть ли тут гибкость?",ok:true,fb:"Вежливый заход в переговоры."}]},
{npc:"Well, prices in the area have gone up.",ru:"Ну, цены в районе выросли."},
{me:[
{en:"I understand. I’ve always paid on time and taken good care of the place.",ru:"Понимаю. Я всегда платил вовремя и бережно относился к квартире.",ok:true,fb:"Present Perfect для опыта — сильный аргумент."},
{en:"I understand. I always paid in time.",ru:"Понимаю. Я всегда платил вовремя.",ok:false,fb:"On time — вовремя (по графику); и лучше Present Perfect: I’ve always paid on time."},
{en:"Would you consider $2,000 if I sign for two years?",ru:"Вы бы согласились на 2000, если я подпишу на два года?",ok:true,fb:"Конкретное встречное предложение."}]},
{npc:"Hmm. A two-year lease at $2,000 could work.",ru:"Хм. Двухлетний договор за 2000 может подойти."},
{me:[
{en:"Great. Could we also include fixing the dishwasher in the new lease?",ru:"Отлично. Можно включить в договор ремонт посудомойки?",ok:true,fb:"Пользуемся моментом, вежливо."},
{en:"Good. And you will fix dishwasher, yes?",ru:"Хорошо. И вы почините посудомойку, да?",ok:false,fb:"Пропущен артикль, и звучит требовательно. Could you also fix the dishwasher?"},
{en:"Perfect. Can you send me the updated lease to review?",ru:"Отлично. Пришлёте обновлённый договор на просмотр?",ok:true,fb:"Review — ознакомиться."}]},
{npc:"Sure, I’ll email it this week.",ru:"Конечно, пришлю на этой неделе."}]}
]);
