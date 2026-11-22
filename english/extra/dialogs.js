addDialogs([
{id:"d-a1-airport",level:"a1",title:"Паспортный контроль",sub:"Вы прилетели в Нью-Йорк и подходите к офицеру",partner:"Officer",steps:[
{npc:"Good morning. Passport, please.",ru:"Доброе утро. Паспорт, пожалуйста."},
{me:[
{en:"Here you go.",ru:"Вот, пожалуйста.",ok:true,fb:"Стандартная вежливая фраза при передаче вещи."},
{en:"Take.",ru:"Берите.",ok:false,fb:"Калька с «Возьмите» звучит грубо. Скажите: Here you go."},
{en:"Here is it.",ru:"Вот оно.",ok:false,fb:"Порядок слов: Here it is."}]},
{npc:"What’s the purpose of your visit?",ru:"Какова цель вашего визита?"},
{me:[
{en:"I’m here on vacation.",ru:"Я здесь в отпуске.",ok:true,fb:"Чёткий ответ, предлог on с vacation."},
{en:"Tourism. I’m visiting for two weeks.",ru:"Туризм. Я приехал на две недели.",ok:true,fb:"Коротко и сразу указан срок — офицеру удобно."},
{en:"I am come for rest.",ru:"Я приехал отдыхать.",ok:false,fb:"Ошибка грамматики и калька «на отдых». Правильно: I’m here on vacation."}]},
{npc:"How long are you staying?",ru:"Как долго вы пробудете?"},
{me:[
{en:"Two weeks.",ru:"Две недели.",ok:true,fb:"Краткий ответ — именно то, что нужно."},
{en:"Since two weeks.",ru:"С двух недель.",ok:false,fb:"Since — «с какого момента». Для срока: for two weeks."},
{en:"I stay two weeks ago.",ru:"Я остаюсь две недели назад.",ok:false,fb:"Ago — про прошлое. Скажите: For two weeks."}]},
{npc:"Where will you be staying?",ru:"Где вы будете жить?"},
{me:[
{en:"At the Hilton in Manhattan.",ru:"В отеле Хилтон на Манхэттене.",ok:true,fb:"Конкретный ответ с предлогом at."},
{en:"In hotel.",ru:"В отеле.",ok:false,fb:"Пропущен артикль и мало информации: At a hotel in Manhattan, the Hilton."},
{en:"I will live at friend.",ru:"Я буду жить у друга.",ok:false,fb:"«У друга» = with a friend / at my friend’s place."}]},
{npc:"All right. Enjoy your stay.",ru:"Хорошо. Приятного пребывания."}]},

{id:"d-a1-cafe",level:"a1",title:"Заказ в кафе",sub:"Вы заказываете кофе в кофейне",partner:"Barista",steps:[
{npc:"Hi there! What can I get for you?",ru:"Привет! Что вам предложить?"},
{me:[
{en:"Can I get a latte, please?",ru:"Можно мне латте, пожалуйста?",ok:true,fb:"Естественная американская форма заказа."},
{en:"I’d like a latte, please.",ru:"Я бы хотел латте, пожалуйста.",ok:true,fb:"Вежливо и универсально."},
{en:"Give me latte.",ru:"Дайте мне латте.",ok:false,fb:"Звучит как приказ и нет артикля. Лучше: Can I get a latte, please?"}]},
{npc:"Sure. What size?",ru:"Конечно. Какой размер?"},
{me:[
{en:"Medium, please.",ru:"Средний, пожалуйста.",ok:true,fb:"Коротко и вежливо."},
{en:"Middle.",ru:"Средний.",ok:false,fb:"Для размера говорят medium, не middle."},
{en:"Big one, more big.",ru:"Большой, побольше.",ok:false,fb:"Неверная сравнительная форма. Скажите: Large, please."}]},
{npc:"For here or to go?",ru:"Здесь или с собой?"},
{me:[
{en:"To go, please.",ru:"С собой, пожалуйста.",ok:true,fb:"Стандартная фраза «с собой»."},
{en:"With me.",ru:"С собой.",ok:false,fb:"Калька. В кафе говорят to go."},
{en:"For take away.",ru:"На вынос.",ok:false,fb:"В Америке говорят to go; take away — британское и без for."}]},
{npc:"That’ll be four fifty. Name for the order?",ru:"С вас четыре пятьдесят. Имя для заказа?"},
{me:[
{en:"It’s Anna. Here’s my card.",ru:"Анна. Вот моя карта.",ok:true,fb:"Имя и оплата в одной фразе — естественно."},
{en:"My name is Anna, I am pay card.",ru:"Меня зовут Анна, я плачу картой.",ok:false,fb:"Грамматика: I’ll pay by card."},
{en:"Anna. Can I pay with card?",ru:"Анна. Можно картой?",ok:false,fb:"Нужен артикль: pay with a card / by card."}]},
{npc:"Thanks, Anna! It’ll be ready at the end of the counter.",ru:"Спасибо, Анна! Заберёте в конце стойки."}]},

{id:"d-a1-hotel",level:"a1",title:"Заселение в отель",sub:"Вы приехали в отель и регистрируетесь",partner:"Receptionist",steps:[
{npc:"Welcome to the Grand Hotel. Checking in?",ru:"Добро пожаловать в Гранд Отель. Заселяетесь?"},
{me:[
{en:"Yes, I have a reservation under Ivanov.",ru:"Да, у меня бронь на фамилию Иванов.",ok:true,fb:"Under + имя — так говорят о брони."},
{en:"Yes, I booked on Ivanov.",ru:"Да, я бронировал на Иванова.",ok:false,fb:"Калька «на фамилию». Правильно: under Ivanov."},
{en:"Yes. I have reserve.",ru:"Да. У меня резерв.",ok:false,fb:"Нужно существительное: a reservation."}]},
{npc:"Got it. Can I see your ID and a credit card?",ru:"Нашла. Можно ваше удостоверение и кредитную карту?"},
{me:[
{en:"Sure, here they are.",ru:"Конечно, вот они.",ok:true,fb:"They — потому что два предмета."},
{en:"Of course, here you are.",ru:"Конечно, пожалуйста.",ok:true,fb:"Вежливая стандартная фраза."},
{en:"Why you need card?",ru:"Зачем вам карта?",ok:false,fb:"Без вспомогательного глагола звучит грубо: Why do you need my card?"}]},
{npc:"Thank you. Your room is on the fifth floor. Breakfast is from seven to ten.",ru:"Спасибо. Ваш номер на пятом этаже. Завтрак с семи до десяти."},
{me:[
{en:"Great. What’s the Wi-Fi password?",ru:"Отлично. Какой пароль от вайфая?",ok:true,fb:"Естественный вопрос."},
{en:"Which is password from Wi-Fi?",ru:"Какой пароль от вайфая?",ok:false,fb:"Калька «от». Правильно: What’s the Wi-Fi password?"},
{en:"Give password Wi-Fi.",ru:"Дайте пароль вайфай.",ok:false,fb:"Грубо и неграмотно. Спросите: What’s the Wi-Fi password?"}]},
{npc:"It’s on your key card holder. Anything else?",ru:"Он на конверте с ключ-картой. Что-нибудь ещё?"},
{me:[
{en:"No, that’s all. Thank you!",ru:"Нет, это всё. Спасибо!",ok:true,fb:"Вежливое завершение."},
{en:"No, nothing. Bye.",ru:"Нет, ничего. Пока.",ok:false,fb:"Звучит резко. Лучше: No, that’s all, thanks!"},
{en:"Not, thank you.",ru:"Нет, спасибо.",ok:false,fb:"Not не используется так. Скажите: No, thank you."}]},
{npc:"Enjoy your stay!",ru:"Приятного отдыха!"}]},

{id:"d-a1-directions",level:"a1",title:"Как пройти?",sub:"Вы ищете станцию метро и спрашиваете прохожего",partner:"Passerby",steps:[
{me:[
{en:"Excuse me, where’s the subway station?",ru:"Извините, где станция метро?",ok:true,fb:"Excuse me — чтобы привлечь внимание; в США метро — subway."},
{en:"Sorry, how to go to metro?",ru:"Простите, как пройти к метро?",ok:false,fb:"Калька. Правильно: How do I get to the subway?"},
{en:"Hey you, where metro?",ru:"Эй, где метро?",ok:false,fb:"Грубо и без глагола. Начните с Excuse me."}]},
{npc:"Go straight two blocks and turn left. It’s next to the bank.",ru:"Идите прямо два квартала и поверните налево. Рядом с банком."},
{me:[
{en:"Sorry, could you say that again?",ru:"Простите, можете повторить?",ok:true,fb:"Вежливая просьба повторить."},
{en:"Two blocks and then left?",ru:"Два квартала, а потом налево?",ok:true,fb:"Переспросить и уточнить — отличная стратегия."},
{en:"Repeat.",ru:"Повторите.",ok:false,fb:"Звучит как приказ. Скажите: Could you repeat that, please?"}]},
{npc:"Yes, exactly. About five minutes on foot.",ru:"Да, именно. Минут пять пешком."},
{me:[
{en:"Thank you so much!",ru:"Большое спасибо!",ok:true,fb:"Тёплая благодарность."},
{en:"Thanks a lot!",ru:"Спасибо большое!",ok:true,fb:"Естественно и дружелюбно."},
{en:"Big thank.",ru:"Большое спасибо.",ok:false,fb:"Калька. Правильно: Thanks a lot / Thank you so much."}]},
{npc:"No problem. Have a good one!",ru:"Не за что. Хорошего дня!"}]},

{id:"d-a1-store",level:"a1",title:"В магазине одежды",sub:"Вы ищете футболку в магазине",partner:"Sales associate",steps:[
{npc:"Hi! Can I help you find anything?",ru:"Здравствуйте! Помочь что-нибудь найти?"},
{me:[
{en:"Yes, I’m looking for a T-shirt.",ru:"Да, я ищу футболку.",ok:true,fb:"Look for — искать; Present Continuous уместен."},
{en:"I’m just looking, thanks.",ru:"Я просто смотрю, спасибо.",ok:true,fb:"Вежливый отказ от помощи."},
{en:"I search T-shirt.",ru:"Я ищу футболку.",ok:false,fb:"Search не подходит здесь, и нет артикля: I’m looking for a T-shirt."}]},
{npc:"They’re over here. What size do you wear?",ru:"Они вот здесь. Какой у вас размер?"},
{me:[
{en:"Medium, I think.",ru:"Наверное, M.",ok:true,fb:"Естественный ответ."},
{en:"I have size forty-eight.",ru:"У меня 48-й размер.",ok:false,fb:"Российские размеры в США не понятны; используйте S, M, L."},
{en:"My size is middle.",ru:"Мой размер средний.",ok:false,fb:"Medium, а не middle."}]},
{npc:"Here’s a medium. The fitting room is in the back.",ru:"Вот M. Примерочная в глубине."},
{me:[
{en:"Thanks. How much is it?",ru:"Спасибо. Сколько стоит?",ok:true,fb:"Стандартный вопрос о цене."},
{en:"How much it costs?",ru:"Сколько это стоит?",ok:false,fb:"В вопросе нужен does: How much does it cost?"},
{en:"What is price?",ru:"Какая цена?",ok:false,fb:"Нужен артикль: What’s the price?"}]},
{npc:"It’s twenty dollars, but it’s on sale today for fifteen.",ru:"Двадцать долларов, но сегодня скидка — пятнадцать."},
{me:[
{en:"Great, I’ll take it.",ru:"Отлично, беру.",ok:true,fb:"I’ll take it — стандартная фраза при покупке."},
{en:"Good, I take.",ru:"Хорошо, беру.",ok:false,fb:"Нужны will и объект: I’ll take it."},
{en:"OK, I buy this.",ru:"Ок, я покупаю это.",ok:false,fb:"Звучит неестественно. Скажите: I’ll take it."}]},
{npc:"Awesome. I can ring you up over here.",ru:"Отлично. Я пробью вам здесь."}]},

{id:"d-a1-taxi",level:"a1",title:"В такси",sub:"Вы садитесь в такси до отеля",partner:"Driver",steps:[
{npc:"Hi. Where to?",ru:"Здравствуйте. Куда едем?"},
{me:[
{en:"The Plaza Hotel, please.",ru:"В отель Плаза, пожалуйста.",ok:true,fb:"Название места + please — достаточно."},
{en:"To hotel Plaza.",ru:"В отель Плаза.",ok:false,fb:"Порядок слов и артикль: The Plaza Hotel."},
{en:"Drive me Plaza.",ru:"Везите меня в Плазу.",ok:false,fb:"Грубо и без предлога. Просто: The Plaza Hotel, please."}]},
{npc:"Sure thing. Traffic is pretty bad right now.",ru:"Конечно. Сейчас довольно большие пробки."},
{me:[
{en:"How long will it take?",ru:"Сколько времени займёт?",ok:true,fb:"Правильный вопрос о времени поездки."},
{en:"How much time we go?",ru:"Сколько времени мы едем?",ok:false,fb:"Калька. Правильно: How long will it take?"},
{en:"It is long?",ru:"Это долго?",ok:false,fb:"Вопрос без инверсии. Лучше: Will it take long?"}]},
{npc:"About twenty minutes.",ru:"Минут двадцать."},
{npc:"Here we are. That’s thirty-two dollars.",ru:"Приехали. Тридцать два доллара."},
{me:[
{en:"Here’s forty. Keep the change.",ru:"Вот сорок. Сдачи не надо.",ok:true,fb:"Keep the change — так оставляют чаевые."},
{en:"Can I pay by card?",ru:"Можно картой?",ok:true,fb:"Вежливый вопрос об оплате."},
{en:"Change not need.",ru:"Сдача не нужна.",ok:false,fb:"Неграмотно. Скажите: Keep the change."}]},
{npc:"Thanks! Have a nice day.",ru:"Спасибо! Хорошего дня."}]},

{id:"d-a2-doctor",level:"a2",title:"У врача",sub:"Вы пришли к терапевту с простудой",partner:"Doctor",steps:[
{npc:"Hi, I’m Dr. Lee. What brings you in today?",ru:"Здравствуйте, я доктор Ли. Что вас привело?"},
{me:[
{en:"I’ve had a sore throat for three days.",ru:"У меня болит горло уже три дня.",ok:true,fb:"Present Perfect + for — для длящегося состояния."},
{en:"My throat is hurting since three days.",ru:"Горло болит с трёх дней.",ok:false,fb:"Since — с момента. Нужно: I’ve had a sore throat for three days."},
{en:"I am ill with throat.",ru:"Я болею горлом.",ok:false,fb:"Калька. Скажите: I have a sore throat."}]},
{npc:"I see. Do you have a fever?",ru:"Понятно. Температура есть?"},
{me:[
{en:"Yes, it was about a hundred and one last night.",ru:"Да, вчера вечером было около 38,3.",ok:true,fb:"В США температуру меряют по Фаренгейту."},
{en:"I have temperature.",ru:"У меня температура.",ok:false,fb:"У всех есть temperature. Скажите: I have a fever."},
{en:"Yes, thirty-eight.",ru:"Да, тридцать восемь.",ok:false,fb:"Врач подумает о Фаренгейте; уточните Celsius или скажите about 100."}]},
{npc:"Any other symptoms? Cough, headache?",ru:"Другие симптомы? Кашель, головная боль?"},
{me:[
{en:"A little cough, and I feel tired.",ru:"Немного кашляю и чувствую усталость.",ok:true,fb:"Ясное описание симптомов."},
{en:"I have a headache and a runny nose.",ru:"Болит голова и насморк.",ok:true,fb:"Runny nose — насморк, правильно."},
{en:"My head is ill and nose is running away.",ru:"Голова болит, нос течёт.",ok:false,fb:"Калька. Правильно: I have a headache and a runny nose."}]},
{npc:"It looks like a viral infection. Rest, drink fluids, and take ibuprofen if needed.",ru:"Похоже на вирусную инфекцию. Отдых, питьё, ибупрофен при необходимости."},
{me:[
{en:"Should I take antibiotics?",ru:"Мне принимать антибиотики?",ok:true,fb:"Should — для совета; уместный вопрос."},
{en:"Write me antibiotics.",ru:"Выпишите мне антибиотики.",ok:false,fb:"Звучит требовательно; «выписать» = prescribe. Лучше спросить: Do I need antibiotics?"},
{en:"I must drink antibiotics?",ru:"Я должен пить антибиотики?",ok:false,fb:"Лекарства take, а не drink; нужна инверсия: Do I need to take…?"}]},
{npc:"No, antibiotics won’t help with a virus. Call us if it’s not better in a week.",ru:"Нет, от вируса антибиотики не помогут. Позвоните, если через неделю не станет лучше."}]},

{id:"d-a2-apartment",level:"a2",title:"Просмотр квартиры",sub:"Вы смотрите квартиру для аренды",partner:"Agent",steps:[
{npc:"So this is the living room. It gets a lot of light in the afternoon.",ru:"Это гостиная. Днём здесь много света."},
{me:[
{en:"It’s really nice. How much is the rent?",ru:"Очень мило. Сколько аренда?",ok:true,fb:"Позитивно и по делу."},
{en:"How much costs the rent?",ru:"Сколько стоит аренда?",ok:false,fb:"Нужен does: How much does the rent cost? Проще: How much is the rent?"},
{en:"What is payment for month?",ru:"Какая плата за месяц?",ok:false,fb:"Неестественно. Скажите: What’s the monthly rent?"}]},
{npc:"It’s eighteen hundred a month, plus utilities.",ru:"Тысяча восемьсот в месяц плюс коммунальные."},
{me:[
{en:"Are pets allowed?",ru:"С животными можно?",ok:true,fb:"Пассивная конструкция, частый вопрос."},
{en:"Is the deposit one month’s rent?",ru:"Залог — за один месяц?",ok:true,fb:"Важный и правильно сформулированный вопрос."},
{en:"Can I live with my cat here?",ru:"Можно мне жить здесь с кошкой?",ok:false,fb:"Понятно, но стандартно: Are pets allowed? / Is it pet-friendly?"}]},
{npc:"Cats are fine. The deposit is one month’s rent.",ru:"Кошки разрешены. Залог — месячная аренда."},
{me:[
{en:"When is it available?",ru:"Когда можно въехать?",ok:true,fb:"Available — стандартное слово для свободного жилья."},
{en:"From when I can move?",ru:"С какого я могу въехать?",ok:false,fb:"Калька. Правильно: When can I move in?"},
{en:"When it will be free?",ru:"Когда она будет свободна?",ok:false,fb:"Порядок слов и лексика: When will it be available?"}]},
{npc:"The first of next month. Would you like an application?",ru:"С первого числа следующего месяца. Хотите заявку?"},
{me:[
{en:"Yes, please. I’d like to apply.",ru:"Да, пожалуйста. Хочу подать заявку.",ok:true,fb:"Вежливо и ясно."},
{en:"Let me think about it and get back to you.",ru:"Дайте подумать, я вам отвечу.",ok:true,fb:"Вежливый способ не решать сразу."},
{en:"Yes, give.",ru:"Да, давайте.",ok:false,fb:"Слишком резко. Скажите: Yes, please."}]},
{npc:"Great, I’ll email it to you today.",ru:"Отлично, пришлю по почте сегодня."}]},

{id:"d-a2-restaurant",level:"a2",title:"Жалоба в ресторане",sub:"Вам принесли не то блюдо",partner:"Server",steps:[
{npc:"Here’s your chicken pasta. Enjoy!",ru:"Ваша паста с курицей. Приятного аппетита!"},
{me:[
{en:"Excuse me, I think I ordered the salmon.",ru:"Извините, кажется, я заказывал лосося.",ok:true,fb:"I think смягчает претензию — вежливо."},
{en:"This is not my. I ordered fish.",ru:"Это не моё. Я заказал рыбу.",ok:false,fb:"Нужно mine, и тон резковат: Sorry, I think I ordered the salmon."},
{en:"You brought wrong!",ru:"Вы принесли неправильно!",ok:false,fb:"Обвиняюще и неграмотно. Начните с Excuse me, I think…"}]},
{npc:"Oh, I’m so sorry! Let me fix that right away.",ru:"Ой, простите! Сейчас исправлю."},
{npc:"Here’s your salmon. Again, sorry about that.",ru:"Вот ваш лосось. Ещё раз извините."},
{me:[
{en:"No problem. Actually, it’s a little cold.",ru:"Ничего. Правда, он немного холодный.",ok:true,fb:"Мягко сообщаете о проблеме."},
{en:"It is cold. Make hot.",ru:"Холодное. Сделайте горячим.",ok:false,fb:"Звучит как приказ. Лучше: Could you warm it up, please?"},
{en:"Is it normal that it’s cold?",ru:"Это нормально, что оно холодное?",ok:false,fb:"Звучит пассивно-агрессивно. Просто скажите: It’s a bit cold."}]},
{npc:"I’m really sorry. I’ll have the kitchen make a fresh one.",ru:"Мне очень жаль. Попрошу кухню приготовить заново."},
{me:[
{en:"Thank you, I appreciate it.",ru:"Спасибо, очень ценю.",ok:true,fb:"I appreciate it — вежливая благодарность."},
{en:"Thanks, that’s very kind.",ru:"Спасибо, очень любезно.",ok:true,fb:"Тепло и уместно."},
{en:"OK, but fast.",ru:"Ладно, но быстро.",ok:false,fb:"Грубо. Если торопитесь: I’m in a bit of a hurry, if that’s OK."}]},
{npc:"Of course. And dessert is on us tonight.",ru:"Конечно. А десерт сегодня за наш счёт."},
{me:[
{en:"Oh, that’s really nice of you. Thanks!",ru:"О, как мило с вашей стороны. Спасибо!",ok:true,fb:"Nice of you — благодарность за жест."},
{en:"It’s free? Then bring two.",ru:"Бесплатно? Тогда принесите два.",ok:false,fb:"Невежливо пользоваться жестом. Просто поблагодарите."},
{en:"Thank you for your kindly.",ru:"Спасибо за вашу доброту.",ok:false,fb:"Kindly — наречие. Нужно: Thank you for your kindness."}]},
{npc:"My pleasure.",ru:"С удовольствием."}]},

{id:"d-a2-bank",level:"a2",title:"Заблокирована карта",sub:"Вы звоните в банк: карту заблокировали",partner:"Bank agent",steps:[
{npc:"Thank you for calling First Bank. How can I help you?",ru:"Спасибо, что позвонили в Первый банк. Чем помочь?"},
{me:[
{en:"Hi, my card was declined, and I think it’s blocked.",ru:"Здравствуйте, мою карту отклонили, думаю, её заблокировали.",ok:true,fb:"Declined и blocked — точные термины, пассив верный."},
{en:"Hello, you blocked my card!",ru:"Здравствуйте, вы заблокировали мою карту!",ok:false,fb:"Обвиняющий тон. Опишите проблему: My card seems to be blocked."},
{en:"My card is blocking.",ru:"Моя карта блокирует.",ok:false,fb:"Нужен пассив: My card is blocked."}]},
{npc:"I can help with that. Can you verify your full name and date of birth?",ru:"Помогу. Назовите полное имя и дату рождения."},
{me:[
{en:"Sure. It’s Olga Petrova, March 5th, 1990.",ru:"Конечно. Ольга Петрова, 5 марта 1990.",ok:true,fb:"Американский формат даты: месяц, потом число."},
{en:"Olga Petrova, five of March ninety.",ru:"Ольга Петрова, пятое марта девяностого.",ok:false,fb:"Калька. Скажите: March 5th, 1990."},
{en:"Why you need it?",ru:"Зачем вам это?",ok:false,fb:"Это стандартная проверка; вопрос звучит грубо и без do."}]},
{npc:"Thanks. I see a security hold because of a purchase in another country.",ru:"Спасибо. Вижу блокировку безопасности из-за покупки в другой стране."},
{me:[
{en:"Yes, that was me. I’m traveling right now.",ru:"Да, это был я. Я сейчас в поездке.",ok:true,fb:"That was me — подтверждаете операцию."},
{en:"Yes, it’s me who did it.",ru:"Да, это я сделал.",ok:false,fb:"Звучит неестественно. Просто: Yes, that was me."},
{en:"I am travel now.",ru:"Я путешествую сейчас.",ok:false,fb:"Present Continuous: I’m traveling."}]},
{npc:"Got it. I’ve removed the hold. You can use your card now.",ru:"Понятно. Я сняла блокировку. Можете пользоваться картой."},
{me:[
{en:"Great. Can you add a travel notice so it doesn’t happen again?",ru:"Отлично. Можете отметить поездку, чтобы это не повторилось?",ok:true,fb:"Travel notice — точный банковский термин."},
{en:"Thank you so much for your help.",ru:"Огромное спасибо за помощь.",ok:true,fb:"Вежливое завершение."},
{en:"Make so it not happens again.",ru:"Сделайте, чтобы не повторилось.",ok:false,fb:"Неграмотно и резко: Can you make sure it doesn’t happen again?"}]},
{npc:"Done. Have a safe trip!",ru:"Готово. Хорошей поездки!"}]},

{id:"d-a2-booking",level:"a2",title:"Бронь по телефону",sub:"Вы звоните забронировать столик",partner:"Host",steps:[
{npc:"Good evening, Luigi’s. How can I help you?",ru:"Добрый вечер, ресторан Луиджи. Чем помочь?"},
{me:[
{en:"Hi, I’d like to make a reservation for Saturday.",ru:"Здравствуйте, хочу забронировать на субботу.",ok:true,fb:"Make a reservation — стандартное выражение."},
{en:"Hello, I want to reserve a table on Saturday night.",ru:"Здравствуйте, хочу столик на субботний вечер.",ok:true,fb:"Тоже правильно; I’d like звучит мягче, но это нормально."},
{en:"Hello, I want to order table for Saturday.",ru:"Здравствуйте, хочу заказать стол на субботу.",ok:false,fb:"Калька «заказать столик». Правильно: book/reserve a table."}]},
{npc:"Sure. For how many people?",ru:"Конечно. На сколько человек?"},
{me:[
{en:"For four, please.",ru:"На четверых, пожалуйста.",ok:true,fb:"Коротко и ясно."},
{en:"We will be four.",ru:"Нас будет четверо.",ok:false,fb:"Калька. Скажите: There will be four of us."},
{en:"For four persons.",ru:"На четыре персоны.",ok:false,fb:"Persons звучит формально; говорят four people или просто four."}]},
{npc:"What time were you thinking?",ru:"На какое время?"},
{me:[
{en:"Around seven thirty, if possible.",ru:"Около семи тридцати, если можно.",ok:true,fb:"If possible — вежливо."},
{en:"At nineteen thirty.",ru:"В девятнадцать тридцать.",ok:false,fb:"В США 24-часовой формат не используют: seven thirty p.m."},
{en:"On half eight.",ru:"На полвосьмого.",ok:false,fb:"Half eight — британское 8:30, не 7:30. И предлог at."}]},
{npc:"We have seven forty-five. Can I get a name and number?",ru:"Есть на 19:45. Ваше имя и номер?"},
{me:[
{en:"Sure, it’s Dmitry, D-M-I-T-R-Y. My number is 555-0182.",ru:"Конечно, Дмитрий, по буквам... Мой номер 555-0182.",ok:true,fb:"Продиктовать имя по буквам — отличная практика."},
{en:"Seven forty-five works. The name is Dmitry.",ru:"19:45 подходит. Имя — Дмитрий.",ok:true,fb:"Подтвердили время и дали имя."},
{en:"Write: Dmitry.",ru:"Записывайте: Дмитрий.",ok:false,fb:"Звучит командно. Скажите: It’s Dmitry."}]},
{npc:"Perfect. See you Saturday!",ru:"Отлично. Ждём в субботу!"}]},

{id:"d-a2-neighbor",level:"a2",title:"Знакомство с соседом",sub:"Вы только переехали и встретили соседа",partner:"Neighbor",steps:[
{npc:"Hey, are you the new neighbor? I’m Mike from 3B.",ru:"Привет, вы новый сосед? Я Майк из 3Б."},
{me:[
{en:"Hi, yes! I’m Sergey. I just moved in last week.",ru:"Привет, да! Я Сергей. Переехал на прошлой неделе.",ok:true,fb:"Move in — въехать; дружелюбно."},
{en:"Yes, I’m new. Nice to meet you.",ru:"Да, я новенький. Приятно познакомиться.",ok:true,fb:"Просто и вежливо."},
{en:"Yes, I am living here from last week.",ru:"Да, я живу здесь с прошлой недели.",ok:false,fb:"Нужно Present Perfect и since: I’ve lived here since last week."}]},
{npc:"Welcome! How do you like the building so far?",ru:"Добро пожаловать! Как вам дом?"},
{me:[
{en:"I like it a lot. It’s quiet, and it’s close to work.",ru:"Очень нравится. Тихо и близко к работе.",ok:true,fb:"Позитивно с деталями."},
{en:"It is not bad, but very old.",ru:"Неплохо, но очень старый.",ok:false,fb:"При знакомстве лучше начать с позитива."},
{en:"I am liking it.",ru:"Мне нравится.",ok:false,fb:"Like обычно не в Continuous: I like it."}]},
{npc:"Nice. Hey, if you need anything, just knock.",ru:"Здорово. Если что-то нужно — стучите."},
{me:[
{en:"Thanks, that’s really kind. Same here!",ru:"Спасибо, очень мило. Взаимно!",ok:true,fb:"Same here — «и я тоже»."},
{en:"Thanks. Actually, do you know where I can recycle?",ru:"Спасибо. Кстати, не знаете, куда сдавать вторсырьё?",ok:true,fb:"Хороший повод для разговора, косвенный вопрос верен."},
{en:"OK. You too knock.",ru:"Ок. Вы тоже стучите.",ok:false,fb:"Неестественно. Скажите: Same here! / You too!"}]},
{npc:"Sure, the bins are behind the building. See you around!",ru:"Конечно, баки за домом. Ещё увидимся!"}]},
{id:"d-b1-interview",level:"b1",title:"Собеседование",sub:"Первое собеседование на должность в офисе",partner:"Interviewer",steps:[
{npc:"Thanks for coming in. Could you tell me a little about yourself?",ru:"Спасибо, что пришли. Расскажите немного о себе."},
{me:[
{en:"Sure. I’ve worked in customer support for four years, and I enjoy solving problems.",ru:"Конечно. Я четыре года работаю в поддержке клиентов и люблю решать проблемы.",ok:true,fb:"Опыт через Present Perfect и связь с вакансией."},
{en:"I was born in 1992 in Samara, I finished school…",ru:"Я родился в 1992 в Самаре, окончил школу…",ok:false,fb:"Биография с рождения неуместна; говорите о профессиональном опыте."},
{en:"I work in support since four years.",ru:"Я работаю в поддержке с четырёх лет.",ok:false,fb:"Нужно Present Perfect и for: I’ve worked… for four years."}]},
{npc:"Why are you interested in this position?",ru:"Почему вас интересует эта должность?"},
{me:[
{en:"I’d like to grow into a team lead role, and your company invests in training.",ru:"Хочу вырасти до тимлида, а ваша компания вкладывается в обучение.",ok:true,fb:"Цель роста + знание компании."},
{en:"Because you pay more than my current job.",ru:"Потому что вы платите больше.",ok:false,fb:"Слишком прямо; лучше говорить о развитии и задачах."},
{en:"I want to develop myself in your company.",ru:"Хочу развиваться в вашей компании.",ok:false,fb:"Калька «развиваться» и слишком размыто. Конкретизируйте: grow my skills in…"}]},
{npc:"What would you say is your biggest weakness?",ru:"Какая ваша самая большая слабость?"},
{me:[
{en:"I used to take on too much, but now I prioritize and delegate better.",ru:"Раньше я брал слишком много, но теперь лучше расставляю приоритеты.",ok:true,fb:"Used to + показ прогресса — классический сильный ответ."},
{en:"I don’t have weaknesses.",ru:"У меня нет слабостей.",ok:false,fb:"Звучит самоуверенно и неискренне."},
{en:"I am perfectionist.",ru:"Я перфекционист.",ok:false,fb:"Пропущен артикль (a perfectionist), и ответ — клише без примера."}]},
{npc:"Do you have any questions for us?",ru:"У вас есть вопросы к нам?"},
{me:[
{en:"Yes. What does a typical day look like for this role?",ru:"Да. Как выглядит типичный день на этой должности?",ok:true,fb:"Показывает интерес к работе."},
{en:"What are the next steps in the process?",ru:"Какие следующие шаги?",ok:true,fb:"Профессиональный уточняющий вопрос."},
{en:"No, everything is clear.",ru:"Нет, всё понятно.",ok:false,fb:"Отсутствие вопросов выглядит как отсутствие интереса."}]},
{npc:"Great questions. We’ll be in touch by Friday.",ru:"Отличные вопросы. Свяжемся до пятницы."}]},

{id:"d-b1-smalltalk",level:"b1",title:"Разговор у кулера",sub:"Понедельник утром, коллега на кухне офиса",partner:"Coworker",steps:[
{npc:"Morning! How was your weekend?",ru:"Доброе утро! Как выходные?"},
{me:[
{en:"Pretty good! I went hiking with some friends. How about yours?",ru:"Неплохо! Ходил в поход с друзьями. А у тебя?",ok:true,fb:"Деталь + встречный вопрос — суть small talk."},
{en:"Normal.",ru:"Нормально.",ok:false,fb:"Normal звучит странно и обрывает разговор. Скажите: Pretty good, thanks!"},
{en:"I was on nature with friends.",ru:"Был на природе с друзьями.",ok:false,fb:"Калька. Правильно: I spent time outdoors / went hiking."}]},
{npc:"Nice! Mine was low-key. I mostly binge-watched a new show.",ru:"Здорово! У меня спокойно. В основном смотрел новый сериал запоем."},
{me:[
{en:"Oh, which one? I’m looking for something new to watch.",ru:"О, какой? Ищу, что бы посмотреть.",ok:true,fb:"Проявляете интерес и поддерживаете беседу."},
{en:"I don’t watch TV, it is waste of time.",ru:"Я не смотрю ТВ, это трата времени.",ok:false,fb:"Звучит осуждающе, и нужен артикль: a waste of time."},
{en:"What serial?",ru:"Какой сериал?",ok:false,fb:"Serial — ложный друг; сериал = show / series."}]},
{npc:"It’s called The Bear. It’s about a chef. Super intense.",ru:"Называется «Медведь». Про шефа. Очень напряжённый."},
{me:[
{en:"I’ve heard good things about it. I’ll check it out.",ru:"Слышал хорошие отзывы. Посмотрю.",ok:true,fb:"Check it out — естественная фраза."},
{en:"Sounds great, I’ll add it to my list.",ru:"Звучит здорово, добавлю в список.",ok:true,fb:"Дружелюбно и естественно."},
{en:"I will look it.",ru:"Я посмотрю его.",ok:false,fb:"Нужен предлог или другой глагол: I’ll watch it / check it out."}]},
{npc:"Let me know what you think. Well, back to the grind!",ru:"Расскажешь потом. Ну, за работу!"}]},

{id:"d-b1-return",level:"b1",title:"Возврат товара",sub:"Вы возвращаете неисправные наушники",partner:"Clerk",steps:[
{npc:"Hi, what can I do for you?",ru:"Здравствуйте, чем могу помочь?"},
{me:[
{en:"Hi, I’d like to return these headphones. The left side doesn’t work.",ru:"Здравствуйте, хочу вернуть наушники. Левый не работает.",ok:true,fb:"Цель и причина сразу."},
{en:"I want to give back these headphones, they are broken.",ru:"Хочу отдать обратно наушники, они сломаны.",ok:false,fb:"Give back — не про магазин. Используйте return."},
{en:"Your headphones are bad. Money back.",ru:"Ваши наушники плохие. Деньги назад.",ok:false,fb:"Грубо. Лучше: I’d like a refund, please."}]},
{npc:"Sorry to hear that. Do you have the receipt?",ru:"Жаль. У вас есть чек?"},
{me:[
{en:"Yes, here it is. I bought them last Tuesday.",ru:"Да, вот. Купил в прошлый вторник.",ok:true,fb:"Past Simple для конкретного времени."},
{en:"Yes, I have bought them last Tuesday.",ru:"Да, я купил их в прошлый вторник.",ok:false,fb:"С указанием времени нужен Past Simple: I bought."},
{en:"Here is check.",ru:"Вот чек.",ok:false,fb:"Чек в магазине — receipt; check — банковский чек или счёт в ресторане."}]},
{npc:"Would you like a refund or an exchange?",ru:"Хотите возврат денег или обмен?"},
{me:[
{en:"A refund to my card, please.",ru:"Возврат на карту, пожалуйста.",ok:true,fb:"Ясно и вежливо."},
{en:"Could I exchange them for a different model?",ru:"Можно обменять на другую модель?",ok:true,fb:"Вежливая просьба через Could."},
{en:"Return me money.",ru:"Верните мне деньги.",ok:false,fb:"Калька и резкость. Скажите: I’d like a refund."}]},
{npc:"No problem. It should show up on your card in three to five business days.",ru:"Без проблем. Деньги поступят через 3-5 рабочих дней."},
{me:[
{en:"Perfect, thanks for your help.",ru:"Отлично, спасибо за помощь.",ok:true,fb:"Вежливое завершение."},
{en:"Why so long? Do it today.",ru:"Почему так долго? Сделайте сегодня.",ok:false,fb:"Сотрудник не управляет банком; требование грубое."},
{en:"OK, thanks for help.",ru:"Ок, спасибо за помощь.",ok:false,fb:"Нужен притяжательный: thanks for your help."}]},
{npc:"You’re welcome. Have a great day!",ru:"Пожалуйста. Хорошего дня!"}]},

{id:"d-b1-carrental",level:"b1",title:"Проблема с арендой авто",sub:"Арендованная машина показывает ошибку двигателя",partner:"Rental agent",steps:[
{npc:"Speedy Rentals, this is Kate. How can I help?",ru:"Спиди Рентал, это Кейт. Чем помочь?"},
{me:[
{en:"Hi, I rented a car from you this morning, and the check engine light just came on.",ru:"Здравствуйте, я арендовал у вас машину утром, и загорелся чек двигателя.",ok:true,fb:"Контекст + проблема; came on — «загорелся»."},
{en:"Hello, your car is broken.",ru:"Здравствуйте, ваша машина сломана.",ok:false,fb:"Слишком расплывчато и резко. Опишите, что именно произошло."},
{en:"Hi, in the car burns the engine lamp.",ru:"В машине горит лампа двигателя.",ok:false,fb:"Калька. Правильно: The check engine light is on."}]},
{npc:"I’m sorry about that. Is the car driving normally?",ru:"Сожалею. Машина едет нормально?"},
{me:[
{en:"It seems fine, but I don’t want to risk it on the highway.",ru:"Вроде нормально, но не хочу рисковать на трассе.",ok:true,fb:"Чётко и разумно."},
{en:"It drives, but it makes a strange noise when I speed up.",ru:"Едет, но странно шумит при разгоне.",ok:true,fb:"Speed up — разгоняться; полезная деталь."},
{en:"It goes, but I afraid.",ru:"Едет, но я боюсь.",ok:false,fb:"Нужен глагол: I’m afraid. Лучше: I’m worried about it."}]},
{npc:"We can swap it at our airport location, or send roadside assistance.",ru:"Можем заменить в аэропорту или отправить помощь на дорогу."},
{me:[
{en:"I’d prefer to swap it. Will there be an extra charge?",ru:"Предпочту замену. Будет доплата?",ok:true,fb:"Выбор + важный вопрос о деньгах."},
{en:"I need to change the car. I will not pay more!",ru:"Мне нужно поменять машину. Я не буду доплачивать!",ok:false,fb:"Агрессивно до того, как что-то предложили. Спросите о доплате."},
{en:"Better you send somebody to me.",ru:"Лучше пришлите кого-нибудь ко мне.",ok:false,fb:"Калька «лучше вы». Скажите: Could you send someone to me?"}]},
{npc:"No charge at all. We’ll have a similar car ready in thirty minutes.",ru:"Без доплаты. Подготовим похожую машину через 30 минут."},
{me:[
{en:"Great, I’ll head over now. Thanks for sorting this out.",ru:"Отлично, еду. Спасибо, что решили.",ok:true,fb:"Head over и sort out — естественные фразовые глаголы."},
{en:"Good. Thank you for your understanding.",ru:"Хорошо. Спасибо за понимание.",ok:false,fb:"Это говорит тот, кто создал неудобство; вам уместнее: Thanks for your help."},
{en:"OK, I am going there now.",ru:"Ок, я еду туда.",ok:false,fb:"Грамматически допустимо, но сухо; добавьте благодарность."}]},
{npc:"You’re welcome. Drive safe!",ru:"Пожалуйста. Будьте осторожны на дороге!"}]},

{id:"d-b1-landlord",level:"b1",title:"Просьба о ремонте",sub:"Вы пишете/звоните арендодателю о протечке",partner:"Landlord",steps:[
{npc:"Hi, this is Tom. You left me a message?",ru:"Привет, это Том. Вы мне оставляли сообщение?"},
{me:[
{en:"Hi Tom, yes. The kitchen sink has been leaking since yesterday.",ru:"Привет, Том, да. Кухонная раковина протекает со вчерашнего дня.",ok:true,fb:"Present Perfect Continuous + since — идеально."},
{en:"Yes. In the kitchen the water flows.",ru:"Да. На кухне течёт вода.",ok:false,fb:"Калька и неясно. Скажите: The sink is leaking."},
{en:"Yes, the sink is leaking from yesterday.",ru:"Да, раковина течёт с вчера.",ok:false,fb:"Нужно since и Perfect: has been leaking since yesterday."}]},
{npc:"Oh no. Is it a lot of water?",ru:"О нет. Много воды?"},
{me:[
{en:"Not a lot, but there’s a puddle under the cabinet, and it’s getting worse.",ru:"Не очень, но под шкафом лужа, и становится хуже.",ok:true,fb:"Конкретика и динамика проблемы."},
{en:"Some. I put a bucket under it for now.",ru:"Немного. Пока поставил ведро.",ok:true,fb:"Показываете, что приняли меры."},
{en:"A lot of. Everything is in water.",ru:"Много. Всё в воде.",ok:false,fb:"A lot of требует существительного; и не преувеличивайте."}]},
{npc:"I’ll send a plumber. Are you free tomorrow morning?",ru:"Пришлю сантехника. Вы свободны завтра утром?"},
{me:[
{en:"I work until five. Could he come after that, or can he use the spare key?",ru:"Я работаю до пяти. Может он прийти позже или воспользоваться запасным ключом?",ok:true,fb:"Предлагаете решения, вежливый Could."},
{en:"Tomorrow morning works for me.",ru:"Завтра утром мне подходит.",ok:true,fb:"Works for me — естественное согласие."},
{en:"No. Only evening. Make it evening.",ru:"Нет. Только вечером. Сделайте вечером.",ok:false,fb:"Командный тон. Используйте Could he come…?"}]},
{npc:"Let’s do five thirty then. I’ll text you his name.",ru:"Тогда в пять тридцать. Пришлю его имя смской."},
{me:[
{en:"Sounds good. Thanks for taking care of it so quickly.",ru:"Отлично. Спасибо, что так быстро решаете.",ok:true,fb:"Благодарность укрепляет отношения с арендодателем."},
{en:"OK. And who will pay for this?",ru:"Ок. А кто будет платить?",ok:false,fb:"Звучит подозрительно; ремонт — обычно обязанность арендодателя."},
{en:"Thanks that you do it fast.",ru:"Спасибо, что делаете быстро.",ok:false,fb:"Нужна конструкция for + -ing: Thanks for taking care of it."}]},
{npc:"No problem. Talk soon.",ru:"Без проблем. До связи."}]},

{id:"d-b1-party",level:"b1",title:"Знакомство на вечеринке",sub:"Вы на вечеринке у коллеги и никого не знаете",partner:"Guest",steps:[
{npc:"Hi! I don’t think we’ve met. I’m Jess.",ru:"Привет! Кажется, мы не знакомы. Я Джесс."},
{me:[
{en:"Hi Jess, I’m Pavel. I work with Dan. How do you know him?",ru:"Привет, Джесс, я Павел. Работаю с Дэном. А ты откуда его знаешь?",ok:true,fb:"Представились, дали контекст и задали вопрос."},
{en:"Pavel. Very pleasant.",ru:"Павел. Очень приятно.",ok:false,fb:"Калька. Скажите: Nice to meet you."},
{en:"Hello, my name is Pavel, I am from Russia.",ru:"Здравствуйте, меня зовут Павел, я из России.",ok:false,fb:"Формально и без связи с ситуацией; лучше объяснить, как вы здесь оказались."}]},
{npc:"We went to college together. So, how long have you been in town?",ru:"Мы вместе учились в колледже. А ты давно в городе?"},
{me:[
{en:"About a year. I’m still discovering the best spots.",ru:"Около года. Ещё ищу лучшие места.",ok:true,fb:"Ответ + повод продолжить."},
{en:"I am here one year.",ru:"Я здесь один год.",ok:false,fb:"Нужен Present Perfect: I’ve been here for a year."},
{en:"Almost a year now. Any tips?",ru:"Почти год. Есть советы?",ok:true,fb:"Вопрос приглашает к разговору."}]},
{npc:"Oh, you have to try the taco place on 5th Street. It’s amazing.",ru:"О, обязательно попробуй тако на Пятой улице. Потрясающе."},
{me:[
{en:"I love tacos! We should go sometime with Dan.",ru:"Обожаю тако! Надо как-нибудь сходить с Дэном.",ok:true,fb:"Естественный шаг к дружбе."},
{en:"Let’s go there together tomorrow at 7.",ru:"Пошли туда вместе завтра в 7.",ok:false,fb:"Слишком напористо для первого знакомства."},
{en:"I will necessarily try.",ru:"Обязательно попробую.",ok:false,fb:"Калька «обязательно». Скажите: I’ll definitely try it."}]},
{npc:"Totally! Here, let me give you my number.",ru:"Конечно! Давай я дам свой номер."},
{me:[
{en:"Great, I’ll text you so you have mine.",ru:"Отлично, напишу тебе, чтобы у тебя был мой.",ok:true,fb:"Естественный обмен контактами."},
{en:"Write me your phone.",ru:"Напиши мне свой телефон.",ok:false,fb:"Калька. Скажите: What’s your number?"},
{en:"Good, call me sometimes.",ru:"Хорошо, звони иногда.",ok:false,fb:"Sometimes = иногда; нужно sometime = как-нибудь."}]},
{npc:"Awesome. Nice meeting you, Pavel!",ru:"Супер. Приятно было познакомиться, Павел!"}]},
{id:"d-b2-salary",level:"b2",title:"Переговоры о зарплате",sub:"Вам сделали оффер, обсуждаете сумму",partner:"Recruiter",steps:[
{npc:"We’re excited to offer you the role at ninety-five thousand a year. How does that sound?",ru:"Рады предложить вам должность за 95 тысяч в год. Как вам?"},
{me:[
{en:"Thank you, I’m really excited about the role. Based on my research, I was expecting something closer to a hundred and ten.",ru:"Спасибо, мне очень интересна роль. По моим данным, я ожидал ближе к 110.",ok:true,fb:"Энтузиазм + обоснованный контраргумент."},
{en:"It’s too little. I want more.",ru:"Это слишком мало. Хочу больше.",ok:false,fb:"Резко и без аргументов. Ссылайтесь на рынок и опыт."},
{en:"OK, I agree.",ru:"Хорошо, согласен.",ok:false,fb:"Соглашаться сразу — упускать возможность; торг ожидаем."}]},
{npc:"I understand. Our budget for this level is fairly fixed, though.",ru:"Понимаю. Но бюджет для этого уровня довольно фиксирован."},
{me:[
{en:"I appreciate that. Given my experience leading migrations, is there any flexibility?",ru:"Понимаю. Учитывая мой опыт руководства миграциями, есть ли гибкость?",ok:true,fb:"Аргумент ценностью + открытый вопрос."},
{en:"If base salary is fixed, could we look at a signing bonus or extra equity?",ru:"Если оклад фиксирован, можно рассмотреть бонус при найме или опционы?",ok:true,fb:"Переводите разговор на другие компоненты пакета."},
{en:"Then I will go to another company.",ru:"Тогда я уйду в другую компанию.",ok:false,fb:"Ультиматум ломает переговоры; если есть другой оффер, упомяните его спокойно."}]},
{npc:"Let me talk to the hiring manager. We might be able to do a hundred and three plus a five-thousand signing bonus.",ru:"Поговорю с менеджером. Возможно, 103 плюс 5 тысяч бонуса."},
{me:[
{en:"That sounds much better. If you can put that in writing, I’m ready to move forward.",ru:"Гораздо лучше. Если пришлёте письменно, я готов двигаться дальше.",ok:true,fb:"Фиксируете договорённость и показываете готовность."},
{en:"Hmm, maybe. I will think some weeks.",ru:"Хм, может. Подумаю пару недель.",ok:false,fb:"Затягивание раздражает; попросите день-два: Could I have until Friday?"},
{en:"It is still not enough, give one hundred ten.",ru:"Всё ещё мало, дайте 110.",ok:false,fb:"Резко и игнорирует уступку компании."}]},
{npc:"Great. I’ll send the updated offer today.",ru:"Отлично. Пришлю обновлённый оффер сегодня."}]},

{id:"d-b2-review",level:"b2",title:"Оценка эффективности",sub:"Ежегодный разговор с руководителем о результатах",partner:"Manager",steps:[
{npc:"Overall, you’ve had a strong year. One area we’d like to see growth in is communication with other teams.",ru:"В целом год сильный. Хотелось бы роста в коммуникации с другими командами."},
{me:[
{en:"That’s fair. Could you give me a specific example so I can understand it better?",ru:"Справедливо. Можете привести пример, чтобы я лучше понял?",ok:true,fb:"Принимаете отзыв и просите конкретику."},
{en:"It’s not my fault, other teams don’t answer.",ru:"Это не моя вина, другие команды не отвечают.",ok:false,fb:"Оборонительная реакция; сначала выслушайте."},
{en:"I disagree. My communication is perfect.",ru:"Не согласен. Моя коммуникация идеальна.",ok:false,fb:"Звучит самонадеянно и закрывает диалог."}]},
{npc:"Sure. During the launch, marketing didn’t hear about the delay until the last minute.",ru:"Конечно. Во время запуска маркетинг узнал о задержке в последний момент."},
{me:[
{en:"You’re right, I should have flagged it earlier. Going forward, I’ll send weekly status updates.",ru:"Вы правы, надо было сообщить раньше. Впредь буду присылать еженедельные отчёты.",ok:true,fb:"Should have + конкретный план — зрелый ответ."},
{en:"I see. I’ll make sure stakeholders hear about risks as soon as I spot them.",ru:"Понятно. Буду сообщать заинтересованным о рисках, как только их замечу.",ok:true,fb:"Конкретное обязательство."},
{en:"Yes, I must have told them earlier.",ru:"Да, я должен был сказать раньше.",ok:false,fb:"Must have = «наверное, сказал». Нужно should have told."}]},
{npc:"That would help a lot. What are your goals for next year?",ru:"Это бы очень помогло. Какие цели на следующий год?"},
{me:[
{en:"I’d like to take ownership of a larger project and eventually move toward a senior role.",ru:"Хочу взять на себя проект побольше и двигаться к сеньорской роли.",ok:true,fb:"Take ownership — сильная деловая формулировка."},
{en:"I want promotion and bigger salary.",ru:"Хочу повышение и большую зарплату.",ok:false,fb:"Без артиклей и без связи с вкладом; формулируйте через ответственность."},
{en:"I don’t know, the same as now.",ru:"Не знаю, как сейчас.",ok:false,fb:"Отсутствие целей выглядит как отсутствие мотивации."}]},
{npc:"Great. Let’s build a plan for that together.",ru:"Отлично. Давайте составим план вместе."}]},

{id:"d-b2-conflict",level:"b2",title:"Конфликт с коллегой",sub:"Коллега снова присвоил вашу работу на встрече",partner:"Coworker",steps:[
{me:[
{en:"Hey Chris, do you have a minute? I wanted to talk about this morning’s meeting.",ru:"Крис, есть минутка? Хотел поговорить об утренней встрече.",ok:true,fb:"Приватно и спокойно начинаете разговор."},
{en:"Chris, why did you steal my work?",ru:"Крис, зачем ты украл мою работу?",ok:false,fb:"Обвинение сразу вызовет защиту. Начните нейтрально."},
{en:"We need to speak seriously.",ru:"Нам надо серьёзно поговорить.",ok:false,fb:"Звучит угрожающе; мягче: Do you have a minute to chat?"}]},
{npc:"Sure, what’s up?",ru:"Конечно, что такое?"},
{me:[
{en:"When you presented the dashboard, it sounded like you built it alone. I felt my part got overlooked.",ru:"Когда ты показывал дашборд, звучало так, будто ты сделал его один. Мне показалось, мой вклад не заметили.",ok:true,fb:"Факт + ваши чувства (I-statement), без обвинений."},
{en:"You always take credit for everything.",ru:"Ты всегда присваиваешь всё себе.",ok:false,fb:"Always — обобщение, которое обостряет конфликт."},
{en:"You presented like you did everything yourself, it is not honest.",ru:"Ты представил, будто всё сам, это нечестно.",ok:false,fb:"Обвиняющий тон; говорите о своём восприятии."}]},
{npc:"Oh, I didn’t mean it that way. I was just trying to keep it short.",ru:"Ой, я не это имел в виду. Просто старался покороче."},
{me:[
{en:"I get that. Next time, could we mention who worked on what, or present together?",ru:"Понимаю. В следующий раз можем упоминать, кто что делал, или выступать вместе?",ok:true,fb:"Признаёте его позицию и предлагаете решение."},
{en:"OK, I believe you. Let’s just make sure credit is shared going forward.",ru:"Ладно, верю. Давай впредь делить заслуги.",ok:true,fb:"Спокойно и с договорённостью на будущее."},
{en:"Short or not, you must say my name.",ru:"Коротко или нет, ты должен назвать моё имя.",ok:false,fb:"Must звучит как приказ коллеге; предложите вместо требования."}]},
{npc:"Absolutely, that’s fair. Sorry about that.",ru:"Конечно, справедливо. Извини."},
{me:[
{en:"Thanks for hearing me out. I appreciate it.",ru:"Спасибо, что выслушал. Ценю.",ok:true,fb:"Hear me out — завершение, сохраняющее отношения."},
{en:"OK. But I will watch.",ru:"Ладно. Но я буду следить.",ok:false,fb:"Звучит угрожающе и портит примирение."},
{en:"No problem, forget.",ru:"Без проблем, забудь.",ok:false,fb:"Обесценивает разговор; и нужно forget it."}]},
{npc:"Of course. Want to grab lunch?",ru:"Конечно. Пообедаем?"}]},

{id:"d-b2-pitch-meeting",level:"b2",title:"Идея на совещании",sub:"Вы предлагаете команде новый процесс",partner:"Team lead",steps:[
{npc:"Okay, anything else before we wrap up?",ru:"Так, что-то ещё, прежде чем закончим?"},
{me:[
{en:"Actually, yes. I have an idea that could cut our release time in half.",ru:"Да. У меня идея, которая может вдвое сократить время релиза.",ok:true,fb:"Начинаете с выгоды — сразу внимание."},
{en:"I have one small idea, probably stupid, but…",ru:"У меня маленькая идея, наверное, глупая, но…",ok:false,fb:"Самоуничижение ослабляет предложение."},
{en:"Yes, I want to propose to change everything.",ru:"Да, хочу предложить всё поменять.",ok:false,fb:"Propose + -ing: propose changing; и «всё» пугает."}]},
{npc:"Interesting. Go on.",ru:"Интересно. Продолжай."},
{me:[
{en:"If we automate the regression tests, QA can focus on new features instead of repeating manual checks.",ru:"Если автоматизировать регрессионные тесты, QA сосредоточится на новых фичах.",ok:true,fb:"Условие First Conditional и конкретная польза."},
{en:"Right now we lose about two days per release on manual testing. Automating it would save that time.",ru:"Сейчас теряем два дня на релиз на ручном тестировании. Автоматизация сэкономит это время.",ok:true,fb:"Цифры делают аргумент убедительным."},
{en:"If we will automate tests, it will be faster.",ru:"Если мы автоматизируем тесты, будет быстрее.",ok:false,fb:"После if не ставят will: If we automate…"}]},
{npc:"Sounds good, but who would set it up? Everyone’s pretty busy.",ru:"Звучит хорошо, но кто настроит? Все заняты."},
{me:[
{en:"I’d be happy to lead a two-week pilot on one module and share the results.",ru:"Я готов провести двухнедельный пилот на одном модуле и показать результаты.",ok:true,fb:"Берёте инициативу и снижаете риск пилотом."},
{en:"It is not my problem, I just give the idea.",ru:"Это не моя проблема, я только даю идею.",ok:false,fb:"Снимаете с себя ответственность — идею не примут."},
{en:"Somebody will find time.",ru:"Кто-нибудь найдёт время.",ok:false,fb:"Размыто; предложите конкретный план."}]},
{npc:"Let’s do it. Send me a short proposal by Friday.",ru:"Давай. Пришли короткое предложение к пятнице."}]},

{id:"d-b2-escalation",level:"b2",title:"Эскалация в поддержке",sub:"Интернет не работает неделю, вы просите старшего",partner:"Support rep",steps:[
{npc:"Thanks for holding. Have you tried restarting your router?",ru:"Спасибо за ожидание. Вы пробовали перезагрузить роутер?"},
{me:[
{en:"Yes, several times. This is my third call this week, so I’d like to speak with a supervisor.",ru:"Да, несколько раз. Это мой третий звонок за неделю, я хотел бы поговорить с руководителем.",ok:true,fb:"Факты + твёрдая, но вежливая просьба."},
{en:"Are you kidding me? Of course I tried!",ru:"Вы шутите? Конечно, пробовал!",ok:false,fb:"Агрессия против оператора не помогает."},
{en:"Give me your boss.",ru:"Дайте мне вашего начальника.",ok:false,fb:"Грубо. Скажите: I’d like to speak with a supervisor, please."}]},
{npc:"I understand your frustration. Let me transfer you.",ru:"Понимаю ваше раздражение. Переключаю."},
{npc:"Hi, this is Maria, a supervisor. I see you’ve had ongoing outages.",ru:"Здравствуйте, это Мария, руководитель. Вижу, у вас постоянные сбои."},
{me:[
{en:"Yes. I work from home, and I’ve lost several days of work. I need a technician visit and a credit for this week.",ru:"Да. Я работаю из дома и потерял несколько рабочих дней. Мне нужен выезд техника и компенсация за неделю.",ok:true,fb:"Ущерб + чёткие требования."},
{en:"It’s been a week. What can you do to fix this permanently?",ru:"Уже неделя. Что вы можете сделать, чтобы решить это окончательно?",ok:true,fb:"Открытый вопрос заставляет предложить решение."},
{en:"I want compensation of moral damage.",ru:"Хочу компенсацию морального ущерба.",ok:false,fb:"Юридическая калька; просите service credit."}]},
{npc:"I can schedule a technician for tomorrow and apply a credit for the full month.",ru:"Могу назначить техника на завтра и начислить компенсацию за весь месяц."},
{me:[
{en:"That works. Could you email me a confirmation and a reference number?",ru:"Подходит. Пришлёте подтверждение и номер обращения?",ok:true,fb:"Фиксируете договорённость письменно."},
{en:"Finally! Why didn’t you do it from the beginning?",ru:"Наконец-то! Почему не сделали сразу?",ok:false,fb:"Упрёк человеку, который помог; лучше поблагодарить."},
{en:"OK, but if tomorrow nobody comes, I will go to court.",ru:"Ладно, но если завтра никто не придёт, пойду в суд.",ok:false,fb:"Преждевременная угроза; попросите подтверждение."}]},
{npc:"Of course. You’ll have it within the hour.",ru:"Конечно. Получите в течение часа."}]},

{id:"d-c1-disagree",level:"c1",title:"Дипломатичное несогласие",sub:"Руководитель хочет сдвинуть дедлайн раньше, вы против",partner:"Manager",steps:[
{npc:"I told the client we’d deliver by the 15th instead of the 30th. That shouldn’t be a problem, right?",ru:"Я сказал клиенту, что сдадим 15-го вместо 30-го. Проблем не будет, да?"},
{me:[
{en:"I see why that’s appealing, but I have some concerns about whether we can do it without cutting corners.",ru:"Понимаю, почему это привлекательно, но сомневаюсь, что получится без халтуры.",ok:true,fb:"Признание + мягкое несогласие; cut corners — идиома."},
{en:"That’s impossible. You should have asked us first.",ru:"Это невозможно. Надо было сначала спросить нас.",ok:false,fb:"Прямой упрёк руководителю; выразите это мягче."},
{en:"No problem, we’ll manage somehow.",ru:"Без проблем, как-нибудь справимся.",ok:false,fb:"Обещание, в которое вы не верите, обернётся провалом."}]},
{npc:"What kind of concerns?",ru:"Какие сомнения?"},
{me:[
{en:"Realistically, testing alone takes ten days. If we compress it, we risk shipping bugs the client will notice.",ru:"Реально одно тестирование — десять дней. Если сжать, рискуем отдать баги, которые клиент заметит.",ok:true,fb:"Факты и последствия для общей цели."},
{en:"The timeline is not realistic, and the team will burn out.",ru:"Сроки нереальны, и команда выгорит.",ok:false,fb:"Утверждение без данных звучит как жалоба."},
{en:"Frankly speaking, it’s a bad decision.",ru:"Честно говоря, это плохое решение.",ok:false,fb:"Frankly speaking — калька, и оценка решения шефа резка."}]},
{npc:"Hmm. But I’ve already made the commitment.",ru:"Хм. Но я уже пообещал."},
{me:[
{en:"Understood. What if we deliver the core features by the 15th and the rest by the 30th? That way we keep the promise in spirit.",ru:"Понятно. Что если сдать основное к 15-му, а остальное к 30-му? Так сохраним суть обещания.",ok:true,fb:"Компромисс, сохраняющий лицо руководителя."},
{en:"Would it help if I joined the call with the client to explain the trade-offs?",ru:"Поможет, если я присоединюсь к звонку и объясню компромиссы?",ok:true,fb:"Поддержка вместо противостояния."},
{en:"It’s your commitment, not mine.",ru:"Это ваше обещание, не моё.",ok:false,fb:"Разрушает доверие и отношения."}]},
{npc:"A phased delivery could work. Let’s pitch it to them together.",ru:"Поэтапная сдача может сработать. Предложим им вместе."}]},

{id:"d-c1-networking",level:"c1",title:"Нетворкинг",sub:"Вы на отраслевой конференции, подходите к спикеру",partner:"Speaker",steps:[
{me:[
{en:"Hi, I really enjoyed your talk, especially the part about data privacy trade-offs.",ru:"Здравствуйте, мне очень понравился ваш доклад, особенно часть о компромиссах приватности.",ok:true,fb:"Конкретный комплимент показывает, что вы слушали."},
{en:"Hello, your report was very interesting.",ru:"Здравствуйте, ваш доклад был очень интересным.",ok:false,fb:"Report — отчёт; доклад = talk / presentation. И слишком общо."},
{en:"Hi, can you give me a job?",ru:"Здравствуйте, можете дать мне работу?",ok:false,fb:"Слишком в лоб; сначала выстраивают отношения."}]},
{npc:"Thank you! That section sparked a lot of debate. What brings you here?",ru:"Спасибо! Эта часть вызвала много споров. А вы что здесь делаете?"},
{me:[
{en:"I lead a small analytics team at a fintech startup, so the privacy angle is very relevant to us.",ru:"Руковожу небольшой командой аналитики в финтех-стартапе, так что тема приватности для нас актуальна.",ok:true,fb:"Кратко о себе и связь с темой собеседника."},
{en:"I am working as head of analytics department in the company of fintech.",ru:"Работаю начальником отдела аналитики в компании финтеха.",ok:false,fb:"Тяжёлая калька; говорите проще: I lead analytics at a fintech startup."},
{en:"I came to look for contacts.",ru:"Пришёл искать контакты.",ok:false,fb:"Слишком утилитарно; покажите общий интерес."}]},
{npc:"Oh, fintech is where it gets really tricky. How are you handling consent?",ru:"О, в финтехе это особенно сложно. Как вы решаете вопрос согласий?"},
{me:[
{en:"We’re still figuring it out, honestly. I’d love to pick your brain about it sometime, if you’re open to it.",ru:"Честно, ещё разбираемся. Был бы рад как-нибудь посоветоваться с вами, если вы не против.",ok:true,fb:"Pick your brain — идиома; ненавязчивая просьба."},
{en:"Mainly through layered opt-ins. Actually, I’d be curious to hear how your team approaches it.",ru:"В основном через многоуровневые согласия. Интересно, как это делает ваша команда.",ok:true,fb:"Делитесь опытом и возвращаете вопрос."},
{en:"It’s a long story, I can’t explain now.",ru:"Это долгая история, сейчас не объяснить.",ok:false,fb:"Обрывает разговор, который собеседник сам начал."}]},
{npc:"Happy to. Here’s my card. Shoot me an email next week.",ru:"С удовольствием. Вот моя визитка. Напишите на следующей неделе."},
{me:[
{en:"Will do. Thanks so much, and congrats again on the talk.",ru:"Обязательно. Большое спасибо, и ещё раз поздравляю с докладом.",ok:true,fb:"Will do — краткое согласие; тёплое завершение."},
{en:"Thank you. I will write you without fail.",ru:"Спасибо. Обязательно напишу.",ok:false,fb:"Without fail звучит книжно; скажите I’ll definitely reach out."},
{en:"Great. Can you also introduce me to your boss?",ru:"Отлично. А можете познакомить с вашим начальником?",ok:false,fb:"Слишком быстро просите больше."}]},
{npc:"Looking forward to it.",ru:"Буду ждать."}]},

{id:"d-c1-tough-interview",level:"c1",title:"Трудные вопросы",sub:"Финальное собеседование, интервьюер давит",partner:"Interviewer",steps:[
{npc:"I notice you were at your last company for only eight months. Why so short?",ru:"Вижу, вы проработали в прошлой компании всего восемь месяцев. Почему так мало?"},
{me:[
{en:"The company restructured, and my role shifted away from product work. I realized I wanted to stay hands-on, so I made a deliberate move.",ru:"Компания реструктуризировалась, роль ушла от продукта. Я понял, что хочу практическую работу, и осознанно ушёл.",ok:true,fb:"Честно, без негатива, с акцентом на выбор."},
{en:"My boss was terrible, and the company was a mess.",ru:"Начальник был ужасен, а в компании бардак.",ok:false,fb:"Критика бывшего работодателя — красный флаг."},
{en:"It was not my fault, there were circumstances.",ru:"Это не моя вина, были обстоятельства.",ok:false,fb:"Оборонительно и размыто."}]},
{npc:"Tell me about a time you failed.",ru:"Расскажите о случае, когда вы потерпели неудачу."},
{me:[
{en:"I once underestimated a migration, and we missed the deadline by two weeks. Since then, I build in buffers and flag risks early.",ru:"Я недооценил миграцию, сорвали срок на две недели. С тех пор закладываю запас и рано сообщаю о рисках.",ok:true,fb:"Реальная ошибка + урок (формат STAR)."},
{en:"I can’t remember any serious failures.",ru:"Не помню серьёзных провалов.",ok:false,fb:"Звучит неискренне или как отсутствие рефлексии."},
{en:"Once my team failed a project because they didn’t listen to me.",ru:"Однажды команда провалила проект, потому что не слушала меня.",ok:false,fb:"Перекладываете вину — плохой сигнал."}]},
{npc:"Why should we hire you over other candidates with more experience?",ru:"Почему нам взять вас, а не кандидатов с большим опытом?"},
{me:[
{en:"I can’t speak to other candidates, but I bring a rare mix of engineering depth and client-facing experience, which this role clearly needs.",ru:"Не могу говорить за других, но у меня редкое сочетание технической глубины и работы с клиентами, а роли это нужно.",ok:true,fb:"Не принижаете других, фокус на своей ценности."},
{en:"Experience is not everything. I learn faster than others.",ru:"Опыт — не всё. Я учусь быстрее других.",ok:false,fb:"Голословное сравнение звучит самонадеянно."},
{en:"Because I really need this job.",ru:"Потому что мне очень нужна эта работа.",ok:false,fb:"Говорите о пользе компании, не о своей нужде."}]},
{npc:"Fair enough. That’s a compelling answer.",ru:"Справедливо. Убедительный ответ."}]},

{id:"d-c1-contract",level:"c1",title:"Условия контракта",sub:"Вы фрилансер и обсуждаете договор с клиентом",partner:"Client",steps:[
{npc:"We’d like unlimited revisions included in the fixed price. Standard for us.",ru:"Мы хотим неограниченные правки в фиксированной цене. У нас это стандарт."},
{me:[
{en:"I understand wanting that security. To keep the project on schedule, I typically include two rounds, with additional ones at an hourly rate.",ru:"Понимаю желание гарантий. Чтобы держать сроки, я обычно включаю два раунда, остальные — почасово.",ok:true,fb:"Признаёте интерес клиента и предлагаете рамки."},
{en:"Unlimited? No way, that’s crazy.",ru:"Неограниченно? Ни за что, это безумие.",ok:false,fb:"Эмоционально и непрофессионально."},
{en:"OK, if it’s standard for you.",ru:"Ладно, раз у вас так принято.",ok:false,fb:"Опасная уступка: бесконечные правки съедят бюджет."}]},
{npc:"Two feels tight. Could we meet at three?",ru:"Два — маловато. Сойдёмся на трёх?"},
{me:[
{en:"Three works if we agree on a clear brief upfront. Does that sound reasonable?",ru:"Три подойдёт, если заранее согласуем чёткое ТЗ. Разумно?",ok:true,fb:"Уступка в обмен на условие — принцип переговоров."},
{en:"I can do three if the payment terms move from net sixty to net thirty.",ru:"Могу три, если срок оплаты сократим с 60 до 30 дней.",ok:true,fb:"Торг: уступка за уступку."},
{en:"Fine, three, but this is my last word.",ru:"Ладно, три, но это моё последнее слово.",ok:false,fb:"Ультимативный тон без выгоды для вас."}]},
{npc:"Net thirty is fine. One more thing, we need full IP rights.",ru:"30 дней подходит. И ещё — нам нужны полные права на интеллектуальную собственность."},
{me:[
{en:"That’s fine once final payment is received. I’d just like to keep the right to show the work in my portfolio.",ru:"Хорошо, после окончательной оплаты. Хотел бы лишь оставить право показывать работу в портфолио.",ok:true,fb:"Защищаете себя и уточняете исключение."},
{en:"Of course, take all rights from today.",ru:"Конечно, забирайте все права с сегодняшнего дня.",ok:false,fb:"Передача прав до оплаты — риск остаться без денег."},
{en:"IP rights cost extra. Double price.",ru:"Права стоят отдельно. Двойная цена.",ok:false,fb:"Резкий скачок без объяснения рушит доверие."}]},
{npc:"Agreed. I’ll have legal update the draft.",ru:"Договорились. Попрошу юристов обновить черновик."}]},

{id:"d-c2-banter",level:"c2",title:"Саркастичные подколки",sub:"Друзья подшучивают над вашим опозданием",partner:"Friend",steps:[
{npc:"Well, well, look who decided to grace us with his presence. Only forty minutes late!",ru:"Ну-ну, посмотрите, кто соизволил почтить нас присутствием. Всего на сорок минут!"},
{me:[
{en:"What can I say? Greatness takes time.",ru:"Что сказать? Величие требует времени.",ok:true,fb:"Самоирония в ответ на подкол — идеальный тон."},
{en:"Forty? I’ll have you know it was thirty-eight. I’m practically early.",ru:"Сорок? Чтоб ты знал, тридцать восемь. Я практически рано.",ok:true,fb:"I’ll have you know — притворно-обиженная формула."},
{en:"Sorry, sorry, there was a big traffic jam, I am really sorry.",ru:"Простите, была большая пробка, мне очень жаль.",ok:false,fb:"Серьёзные извинения ломают игру; друзья ждут шутки."}]},
{npc:"Practically early. Sure. And I’m practically a supermodel.",ru:"Практически рано. Ну да. А я практически супермодель."},
{me:[
{en:"I mean, if the lighting’s right and you squint…",ru:"Ну, если свет удачный и прищуриться…",ok:true,fb:"Подхватываете шутку и мягко подкалываете в ответ."},
{en:"No, you are not supermodel.",ru:"Нет, ты не супермодель.",ok:false,fb:"Буквальное понимание сарказма — разговор мёртв."},
{en:"Don’t flatter yourself.",ru:"Не льсти себе.",ok:false,fb:"Звучит колко всерьёз; не хватает игривости."}]},
{npc:"Wow. Okay, you’re buying the first round for that.",ru:"Вау. Ладно, за это первый круг с тебя."},
{me:[
{en:"Fair. Consider it my lateness tax.",ru:"Справедливо. Считай это налогом на опоздание.",ok:true,fb:"Принимаете «наказание» с юмором."},
{en:"Fine, but just so you know, I’m ordering you the cheapest beer they’ve got.",ru:"Ладно, но знай: закажу тебе самое дешёвое пиво.",ok:true,fb:"Шутливая месть поддерживает перепалку."},
{en:"Why me? It’s not fair.",ru:"Почему я? Это нечестно.",ok:false,fb:"Обида всерьёз — не тот регистр."}]},
{npc:"Deal. Welcome, your highness.",ru:"Договорились. Добро пожаловать, ваше величество."}]},

{id:"d-c2-defuse",level:"c2",title:"Разрядить обстановку",sub:"Два коллеги на грани скандала на совещании",partner:"Colleague",steps:[
{npc:"This is ridiculous! Your team dropped the ball again, and now we’re the ones who look bad!",ru:"Это нелепо! Твоя команда снова облажалась, а плохо выглядим мы!"},
{me:[
{en:"Hold on, let’s take a breath. I can tell this has been really frustrating for you.",ru:"Подожди, давай выдохнем. Вижу, тебя это очень расстроило.",ok:true,fb:"Признание эмоций снижает накал."},
{en:"Calm down! Don’t shout at me.",ru:"Успокойся! Не кричи на меня.",ok:false,fb:"«Calm down» обычно только злит сильнее."},
{en:"That’s not true, it was your team’s fault.",ru:"Неправда, это вина твоей команды.",ok:false,fb:"Встречное обвинение — эскалация."}]},
{npc:"Frustrating doesn’t even begin to cover it. The client called me directly.",ru:"«Расстроило» — это мягко сказано. Клиент звонил мне лично."},
{me:[
{en:"That’s a tough spot to be put in. Let’s figure out what went wrong, not who, and fix it before the next call.",ru:"Неприятное положение. Давай разберёмся, что пошло не так, а не кто, и исправим до следующего звонка.",ok:true,fb:"Переводите из обвинений в решение."},
{en:"I hear you, and I’d be upset too. Can we walk through the timeline together after this meeting?",ru:"Понимаю, я бы тоже расстроился. Пройдёмся по хронологии вместе после встречи?",ok:true,fb:"Эмпатия + выносите конфликт из публичного поля."},
{en:"Well, it happens. No need to be dramatic.",ru:"Ну бывает. Не драматизируй.",ok:false,fb:"Обесценивание подливает масла в огонь."}]},
{npc:"Fine. But I need to know this won’t happen again.",ru:"Ладно. Но мне нужно знать, что это не повторится."},
{me:[
{en:"Fair ask. I’ll set up a shared checklist for handoffs, and you’ll have it by tomorrow.",ru:"Справедливо. Сделаю общий чек-лист передачи задач, получишь завтра.",ok:true,fb:"Конкретное обязательство восстанавливает доверие."},
{en:"I can’t promise anything.",ru:"Ничего не могу обещать.",ok:false,fb:"Честно, но снова разжигает тревогу; предложите меры."},
{en:"I guarantee one hundred percent it will never happen.",ru:"Гарантирую на сто процентов, что никогда не повторится.",ok:false,fb:"Нереалистичное обещание подорвёт доверие позже."}]},
{npc:"Okay. Thanks for handling this like an adult.",ru:"Ладно. Спасибо, что ведёшь себя по-взрослому."}]},

{id:"d-c2-investors",level:"c2",title:"Питч инвесторам",sub:"Вы презентуете стартап венчурному фонду",partner:"Investor",steps:[
{npc:"You’ve got five minutes. Why should we care?",ru:"У вас пять минут. Почему нам это должно быть интересно?"},
{me:[
{en:"Because small clinics lose about twenty percent of revenue to no-shows, and we’ve cut that in half for our first fifty customers.",ru:"Потому что маленькие клиники теряют около 20% выручки из-за неявок, а мы сократили это вдвое для первых 50 клиентов.",ok:true,fb:"Боль рынка + доказанный результат за одну фразу."},
{en:"Our app is unique and revolutionary, nobody has anything like this.",ru:"Наше приложение уникально и революционно, ни у кого такого нет.",ok:false,fb:"Пустые эпитеты; инвесторы хотят цифры."},
{en:"Let me first tell about our team and history.",ru:"Позвольте сначала рассказать о команде и истории.",ok:false,fb:"Нужно tell you about, и начинать стоит с проблемы, а не с истории."}]},
{npc:"Nice numbers. But what stops a big EHR company from just copying you?",ru:"Неплохие цифры. Но что помешает крупному поставщику медкарт просто скопировать вас?"},
{me:[
{en:"Honestly, they could build the feature. What they can’t easily replicate is our model, trained on two million appointments, and our integrations with the small-practice software they ignore.",ru:"Честно, функцию построить могут. Но им сложно повторить нашу модель на двух миллионах приёмов и интеграции с софтом малых практик, которые они игнорируют.",ok:true,fb:"Признание угрозы + конкретный ров (moat) — убедительно."},
{en:"They are too slow and stupid to do it.",ru:"Они слишком медленные и глупые для этого.",ok:false,fb:"Недооценка конкурентов — тревожный сигнал."},
{en:"Nothing stops them, but we hope they won’t.",ru:"Ничего не мешает, но надеемся, что не станут.",ok:false,fb:"Надежда — не стратегия."}]},
{npc:"Okay. What are you raising, and what’s it for?",ru:"Хорошо. Сколько привлекаете и на что?"},
{me:[
{en:"Three million to hit five hundred clinics in eighteen months, mostly going into sales and two key integrations.",ru:"Три миллиона, чтобы выйти на 500 клиник за 18 месяцев, в основном на продажи и две ключевые интеграции.",ok:true,fb:"Сумма, цель, срок и использование — всё, что нужно."},
{en:"As much as possible, we will see how to spend.",ru:"Сколько получится, потом решим, как тратить.",ok:false,fb:"Отсутствие плана убивает сделку."},
{en:"Three millions for development of the business.",ru:"Три миллиона на развитие бизнеса.",ok:false,fb:"Million без -s после числа; и слишком размыто."}]},
{npc:"Clear and grounded. Let’s set up a follow-up with my partners.",ru:"Чётко и обоснованно. Давайте назначим встречу с моими партнёрами."}]}
]);
