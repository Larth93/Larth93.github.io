addDialogs([
{id:"d3-standup",level:"b2",title:"Утренний стендап",sub:"Вы рассказываете команде о прогрессе и блокере",partner:"Team lead",steps:[
{npc:"Morning, everyone. Let’s keep it quick. What did you work on yesterday?",ru:"Всем доброе утро. Давайте быстро. Над чем вы вчера работали?"},
{me:[
{en:"I wrapped up the login page and opened a pull request.",ru:"Я доделал страницу входа и открыл пулл-реквест.",ok:true,fb:"Wrap up — естественный глагол для «доделать». Кратко и по делу."},
{en:"Yesterday I was making the login page all day.",ru:"Вчера я весь день делал страницу входа.",ok:false,fb:"Make a page — калька; о задачах говорят work on / build. И нет результата — что готово?"},
{en:"I have finished login page yesterday.",ru:"Я закончил страницу входа вчера.",ok:false,fb:"Yesterday требует Past Simple: I finished. И артикль: the login page."}]},
{npc:"Great. What’s on your plate today?",ru:"Отлично. Что у вас сегодня в планах?"},
{me:[
{en:"Today I’m picking up the payment integration.",ru:"Сегодня берусь за интеграцию платежей.",ok:true,fb:"Pick up a task — типичный айтишный оборот «взять задачу»."},
{en:"I’ll start on the payment integration, if nothing urgent comes up.",ru:"Начну интеграцию платежей, если не всплывёт ничего срочного.",ok:true,fb:"Start on + оговорка — естественно и профессионально."},
{en:"On my plate is payments today.",ru:"На моей тарелке платежи сегодня.",ok:false,fb:"Идиому повторяют иначе: I’m working on payments today. Инверсия звучит странно."}]},
{npc:"Any blockers?",ru:"Есть блокеры?"},
{me:[
{en:"Yes, I’m blocked on API keys — could someone from DevOps help me out after this?",ru:"Да, мне нужны API-ключи — кто-нибудь из DevOps поможет после стендапа?",ok:true,fb:"Blocked on + конкретная просьба, и вынесено за рамки стендапа — образцово."},
{en:"Yes, DevOps didn’t give me keys, it’s their fault.",ru:"Да, DevOps не дали ключи, это их вина.",ok:false,fb:"Обвинение на общем созвоне звучит непрофессионально. Описывайте проблему, а не виноватых."},
{en:"Yes, I have a blocker with keys, I will explain it all now in detail.",ru:"Да, у меня блокер с ключами, сейчас всё подробно объясню.",ok:false,fb:"Подробности на стендапе — антипаттерн. Предложите обсудить после: let’s take it offline."}]},
{npc:"Sure, Mike can sync with you afterwards. Anything else?",ru:"Конечно, Майк свяжется с вами потом. Что-то ещё?"},
{me:[
{en:"No, that’s it from me.",ru:"Нет, у меня всё.",ok:true,fb:"Стандартная фраза для завершения своего апдейта."},
{en:"Nothing more. Finish.",ru:"Больше ничего. Конец.",ok:false,fb:"Finish как реплика звучит обрывисто. Говорят: That’s it from me / That’s all."},
{en:"I think that’s everything from my side, thanks.",ru:"Думаю, с моей стороны всё, спасибо.",ok:true,fb:"From my side — вежливый вариант завершения."}]},
{npc:"Thanks. Next up, Sarah.",ru:"Спасибо. Следующая — Сара."}]},
{id:"d3-review",level:"b2",title:"Спор на код-ревью",sub:"Коллега оставил замечание к вашему коду, вы не согласны",partner:"Reviewer",steps:[
{npc:"I left a comment on your PR. I think this function should be split into smaller ones.",ru:"Я оставил комментарий к вашему PR. Думаю, функцию надо разбить на несколько."},
{me:[
{en:"Thanks for the review. Could you say a bit more about what you’d split out?",ru:"Спасибо за ревью. Можете подробнее, что бы вы вынесли?",ok:true,fb:"Сначала благодарность и уточнение — снимает напряжение."},
{en:"No, it’s fine as it is.",ru:"Нет, всё нормально как есть.",ok:false,fb:"Резкий отказ без аргументов. Так спор только начинается."},
{en:"Why you think so?",ru:"Почему вы так думаете?",ok:false,fb:"Ошибка порядка слов в вопросе: Why do you think so? К тому же звучит оборонительно."}]},
{npc:"Well, it handles validation, saving and sending emails. That’s three responsibilities.",ru:"Ну, она занимается валидацией, сохранением и отправкой писем. Это три ответственности."},
{me:[
{en:"Fair point about the emails. But I’d argue validation and saving belong together here.",ru:"Справедливо про письма. Но я бы сказал, что валидация и сохранение здесь связаны.",ok:true,fb:"Fair point + I’d argue — частичное согласие и мягкое возражение."},
{en:"You are wrong, validation and saving are one thing.",ru:"Вы ошибаетесь, валидация и сохранение — одно и то же.",ok:false,fb:"You are wrong — слишком прямо для ревью. Лучше I see it differently."},
{en:"I see where you’re coming from, though I’m not sure splitting everything helps readability.",ru:"Понимаю вашу логику, хотя не уверен, что дробление улучшит читаемость.",ok:true,fb:"I see where you’re coming from — идиоматичный способ признать позицию собеседника."}]},
{npc:"Hmm. What if we move the email part to a separate service?",ru:"Хм. А если вынести отправку писем в отдельный сервис?"},
{me:[
{en:"That makes sense. I’ll do that in this PR.",ru:"Логично. Сделаю это в этом PR.",ok:true,fb:"Компромисс принят — коротко и конструктивно."},
{en:"OK, but I make it later, maybe.",ru:"Ладно, но сделаю потом, может быть.",ok:false,fb:"Грамматика (I’ll do it) и неопределённость «может быть» звучат несерьёзно."},
{en:"Good idea, but can we do it in a follow-up ticket so this PR stays small?",ru:"Хорошая идея, но можно отдельным тикетом, чтобы PR остался небольшим?",ok:true,fb:"Follow-up ticket — профессиональная формулировка, чтобы отложить изменения."}]},
{npc:"Works for me. And the rest?",ru:"Меня устраивает. А остальное?"},
{me:[
{en:"Let’s leave it for now and revisit if it grows.",ru:"Давайте пока оставим и вернёмся, если разрастётся.",ok:true,fb:"Revisit — точный глагол для «вернуться к вопросу»."},
{en:"The rest we leave. Discussion is closed.",ru:"Остальное оставляем. Обсуждение закрыто.",ok:false,fb:"Звучит как приказ. В команде лучше Let’s… / How about…"},
{en:"Rest I will not touch, sorry.",ru:"Остальное я трогать не буду, извините.",ok:false,fb:"Без артикля (the rest) и с ненужным «sorry» — звучит неловко и упрямо."}]},
{npc:"Deal. I’ll approve once the email part is out.",ru:"Договорились. Одобрю, когда уберёте письма."}]},
{id:"d3-clientcall",level:"b2",title:"Звонок клиенту",sub:"Клиент недоволен задержкой релиза",partner:"Client",steps:[
{npc:"Hi. I have to say, I’m quite disappointed. The release was supposed to be last Friday.",ru:"Здравствуйте. Должен сказать, я довольно разочарован. Релиз должен был быть в прошлую пятницу."},
{me:[
{en:"I completely understand, and I’m sorry for the delay. Let me explain what happened.",ru:"Полностью понимаю и прошу прощения за задержку. Позвольте объяснить, что случилось.",ok:true,fb:"Признание + извинение + переход к объяснению — классика работы с клиентом."},
{en:"It’s not our fault, the requirements changed.",ru:"Это не наша вина, требования поменялись.",ok:false,fb:"Перекладывание вины в первой же фразе раздражает клиента."},
{en:"Sorry for delaying.",ru:"Извините за задерживание.",ok:false,fb:"Неестественно. Говорят: Sorry for the delay."}]},
{npc:"Go on.",ru:"Продолжайте."},
{me:[
{en:"During final testing we found a security issue, and we didn’t want to ship it.",ru:"На финальном тестировании мы нашли уязвимость и не хотели её выпускать.",ok:true,fb:"Ship — естественный глагол для релиза; причина звучит как забота о клиенте."},
{en:"We found some bugs, so it was impossible.",ru:"Мы нашли баги, поэтому было невозможно.",ok:false,fb:"Расплывчато и безлико. Клиенту нужна конкретика."},
{en:"On testing we have found a problem of security.",ru:"На тестировании мы нашли проблему безопасности.",ok:false,fb:"During testing, we found, a security problem/issue — ошибки предлога, времени и сочетания."}]},
{npc:"I see. So when can we expect it?",ru:"Понятно. Так когда нам ждать?"},
{me:[
{en:"We’re aiming for Wednesday, and I’ll confirm by Monday evening.",ru:"Целимся на среду, подтвержу к вечеру понедельника.",ok:true,fb:"Aim for + обещание подтвердить — честно и без пустых гарантий."},
{en:"Wednesday, one hundred percent guaranteed.",ru:"В среду, стопроцентная гарантия.",ok:false,fb:"После срыва сроков громкие гарантии подрывают доверие."},
{en:"Realistically Wednesday. I’ll send you a status update every day until then.",ru:"Реалистично — в среду. До тех пор буду присылать статус каждый день.",ok:true,fb:"Realistically + регулярные апдейты восстанавливают доверие."}]},
{npc:"All right. Please keep me in the loop.",ru:"Хорошо. Держите меня в курсе."},
{me:[
{en:"Absolutely. Thank you for your patience.",ru:"Обязательно. Спасибо за терпение.",ok:true,fb:"Thank you for your patience — стандартная вежливая концовка."},
{en:"Of course. Thanks for your patient.",ru:"Конечно. Спасибо за ваш терпеливый.",ok:false,fb:"Patient — прилагательное/пациент; нужно существительное patience."},
{en:"Yes, yes, I will keep you in loop.",ru:"Да-да, буду держать в петле.",ok:false,fb:"Пропущен артикль (in the loop), а «yes, yes» звучит отмахиванием."}]},
{npc:"Thanks. Talk soon.",ru:"Спасибо. До связи."}]},
{id:"d3-pitch",level:"b2",title:"Питч идеи руководителю",sub:"Вы предлагаете внедрить новый инструмент",partner:"Manager",steps:[
{npc:"You wanted to talk to me about something?",ru:"Вы хотели о чём-то поговорить?"},
{me:[
{en:"Yes, do you have five minutes? I’d like to run an idea by you.",ru:"Да, у вас есть пять минут? Хочу обсудить с вами идею.",ok:true,fb:"Run an idea by someone — идиома «посоветоваться насчёт идеи»."},
{en:"Yes. I have an idea and you must listen.",ru:"Да. У меня идея, и вы должны выслушать.",ok:false,fb:"Must звучит требовательно. Руководителю так не говорят."},
{en:"Yes, I want to propose you an idea.",ru:"Да, хочу предложить вам идею.",ok:false,fb:"Propose не берёт два дополнения так: I’d like to propose an idea / suggest something to you."}]},
{npc:"Sure, go ahead.",ru:"Конечно, давайте."},
{me:[
{en:"We spend about six hours a week on manual reports. A dashboard tool could automate most of that.",ru:"Мы тратим около шести часов в неделю на ручные отчёты. Инструмент дашбордов автоматизирует большую часть.",ok:true,fb:"Начать с проблемы и цифры — сильный ход питча."},
{en:"Our reports are boring, let’s buy a new program.",ru:"Наши отчёты скучные, давайте купим новую программу.",ok:false,fb:"Нет бизнес-аргумента — «скучно» руководителя не убедит."},
{en:"I found a super cool tool, everybody uses it.",ru:"Я нашёл суперкрутой инструмент, все им пользуются.",ok:false,fb:"Super cool и «все пользуются» — неформально и неубедительно."}]},
{npc:"Interesting. What would it cost?",ru:"Интересно. Сколько это стоит?"},
{me:[
{en:"About two hundred dollars a month, which pays for itself in the first week.",ru:"Около двухсот долларов в месяц, окупается в первую же неделю.",ok:true,fb:"Pay for itself — идиома «окупиться»."},
{en:"Two hundred a month. It returns its money fast.",ru:"Двести в месяц. Быстро возвращает свои деньги.",ok:false,fb:"Калька. По-английски: it pays for itself quickly."},
{en:"Around two hundred a month. I could run a free trial first to prove it works.",ru:"Около двухсот в месяц. Могу сначала запустить бесплатный пробный период.",ok:true,fb:"Предложение пилота снижает риск — хороший аргумент."}]},
{npc:"Put together a one-page summary and I’ll take it to the budget meeting.",ru:"Подготовьте краткую сводку на страницу, я вынесу на бюджетное совещание."},
{me:[
{en:"Will do. I’ll have it to you by Thursday.",ru:"Сделаю. Пришлю к четвергу.",ok:true,fb:"Will do — короткое деловое «сделаю»; have it to you by — точный срок."},
{en:"OK, I will try to do it maybe this week.",ru:"Хорошо, попробую сделать, может, на этой неделе.",ok:false,fb:"Try + maybe звучит неуверенно. Назовите срок."},
{en:"Great, thanks for hearing me out.",ru:"Отлично, спасибо, что выслушали.",ok:true,fb:"Hear someone out — «выслушать до конца»; вежливое завершение."}]},
{npc:"Looking forward to it.",ru:"Жду."}]},
{id:"d3-givefb",level:"b2",title:"Обратная связь джуниору",sub:"Вы мягко указываете коллеге на ошибки",partner:"Junior developer",steps:[
{npc:"You wanted to give me some feedback on my last task?",ru:"Вы хотели дать мне обратную связь по последней задаче?"},
{me:[
{en:"Yes. First of all, the feature works well — nice job on the UI.",ru:"Да. Прежде всего, фича работает хорошо — отличная работа с интерфейсом.",ok:true,fb:"Начать с конкретной похвалы — правило хорошего фидбэка."},
{en:"Yes. There are many problems.",ru:"Да. Там много проблем.",ok:false,fb:"Начинать с «много проблем» — демотивирует и звучит размыто."},
{en:"Yes, I will criticize you now a little.",ru:"Да, сейчас немного вас покритикую.",ok:false,fb:"Criticize you звучит как нападение. Говорят: share some feedback."}]},
{npc:"Thanks! And what could be better?",ru:"Спасибо! А что можно улучшить?"},
{me:[
{en:"One thing I noticed is there were no tests. Going forward, could you add them?",ru:"Я заметил, что не было тестов. В дальнейшем могли бы добавлять?",ok:true,fb:"One thing I noticed + going forward — мягко и про будущее."},
{en:"You forgot tests. Always forget.",ru:"Вы забыли тесты. Вечно забываете.",ok:false,fb:"Обобщения «вечно» превращают фидбэк в упрёк."},
{en:"Tests are absent. It is bad practice.",ru:"Тесты отсутствуют. Это плохая практика.",ok:false,fb:"Absent — книжно и холодно. И нет предложения, что делать."}]},
{npc:"Oh, right. I wasn’t sure how to test that part, to be honest.",ru:"Ой, да. Честно говоря, я не знал, как тестировать эту часть."},
{me:[
{en:"No worries — let’s pair on it tomorrow and I’ll show you our approach.",ru:"Не страшно — давайте завтра поработаем вместе, покажу наш подход.",ok:true,fb:"Pair on something — «поработать в паре»; предложение помощи."},
{en:"You should have asked. Why you didn’t ask?",ru:"Надо было спросить. Почему вы не спросили?",ok:false,fb:"Упрёк + ошибка: Why didn’t you ask?"},
{en:"That’s totally fine, it’s tricky. Feel free to ping me whenever you’re stuck.",ru:"Ничего, это непросто. Пишите мне, когда застрянете.",ok:true,fb:"Ping me, stuck — естественная рабочая лексика; поддерживает."}]},
{npc:"That would be great, thanks.",ru:"Было бы здорово, спасибо."},
{me:[
{en:"Overall, you’re making great progress. Keep it up.",ru:"В целом вы отлично прогрессируете. Так держать.",ok:true,fb:"Завершить на позитиве — «сэндвич» фидбэка."},
{en:"Overall it was normal.",ru:"В целом было нормально.",ok:false,fb:"Normal по-английски — «обычный», не «неплохо». Звучит как скрытая критика."},
{en:"Good. Go work.",ru:"Хорошо. Идите работайте.",ok:false,fb:"Грубое завершение, обесценивает разговор."}]},
{npc:"Thanks, I really appreciate it.",ru:"Спасибо, очень ценю."}]},
{id:"d3-recvfb",level:"b2",title:"Получение критики",sub:"Руководитель указывает на ваши недочёты",partner:"Manager",steps:[
{npc:"I wanted to mention that your last two reports came in late.",ru:"Хотел отметить, что ваши два последних отчёта пришли с опозданием."},
{me:[
{en:"You’re right, and I apologise. I should have flagged it earlier.",ru:"Вы правы, извиняюсь. Надо было предупредить раньше.",ok:true,fb:"Принять ответственность + flag — «заранее обозначить проблему»."},
{en:"It’s because I have too much work, it’s not my problem.",ru:"Это потому что у меня много работы, это не моя проблема.",ok:false,fb:"Оборонительно. Даже если правда, сначала признайте факт."},
{en:"Yes, they were late a bit, but nobody died.",ru:"Да, чуть опоздали, но никто же не умер.",ok:false,fb:"Обесценивание и неуместный юмор в ответ на критику."}]},
{npc:"Is something getting in the way?",ru:"Что-то мешает?"},
{me:[
{en:"Honestly, I’ve been juggling two projects, and I underestimated the workload.",ru:"Честно говоря, я разрывался между двумя проектами и недооценил нагрузку.",ok:true,fb:"Juggle — «совмещать с трудом»; честно, без оправданий."},
{en:"I have very many tasks every day always.",ru:"У меня очень много задач каждый день всегда.",ok:false,fb:"Нагромождение и very many звучит неестественно. Лучше a heavy workload."},
{en:"The data from finance usually arrives late, which leaves me very little time.",ru:"Данные от финансов обычно приходят поздно, у меня остаётся мало времени.",ok:true,fb:"Фактическая причина без обвинения людей."}]},
{npc:"Okay. What would help?",ru:"Ладно. Что бы помогло?"},
{me:[
{en:"Could we move the deadline to Tuesday, or could I get the data a day earlier?",ru:"Можно сдвинуть дедлайн на вторник или получать данные на день раньше?",ok:true,fb:"Конкретные варианты решения — то, чего ждёт руководитель."},
{en:"I don’t know. You are the boss, you decide.",ru:"Не знаю. Вы начальник, вам решать.",ok:false,fb:"Перекладывание ответственности звучит пассивно-агрессивно."},
{en:"Maybe less work. Give me less.",ru:"Может, меньше работы. Дайте меньше.",ok:false,fb:"Слишком прямолинейно и без деталей. Лучше: Could we reprioritise?"}]},
{npc:"Let’s try Tuesday for a month and see how it goes.",ru:"Попробуем вторник в течение месяца и посмотрим."},
{me:[
{en:"Sounds good. Thanks for raising it with me directly.",ru:"Звучит хорошо. Спасибо, что сказали мне прямо.",ok:true,fb:"Благодарность за фидбэк показывает зрелость."},
{en:"Okay. I promise it never happens again.",ru:"Ладно. Обещаю, это никогда не случается снова.",ok:false,fb:"Нужно will never happen; к тому же «никогда» — слишком громкое обещание."},
{en:"Great, I appreciate the flexibility.",ru:"Отлично, ценю вашу гибкость.",ok:true,fb:"Appreciate the flexibility — вежливая деловая формула."}]},
{npc:"Good. Let’s check in at the end of the month.",ru:"Хорошо. Сверимся в конце месяца."}]},
{id:"d3-deadline",level:"b2",title:"Перенос дедлайна",sub:"Вы просите отсрочку у проджект-менеджера",partner:"Project manager",steps:[
{npc:"How’s the migration going? We’re still on track for the 15th, right?",ru:"Как идёт миграция? Мы всё ещё укладываемся к 15-му?"},
{me:[
{en:"Actually, that’s what I wanted to talk about. I don’t think we’ll make the 15th.",ru:"Вообще-то, об этом я и хотел поговорить. Думаю, к 15-му мы не успеем.",ok:true,fb:"Make a deadline — «успеть к сроку». Честно и сразу."},
{en:"Yes, yes, everything is fine.",ru:"Да-да, всё нормально.",ok:false,fb:"Скрывать проблему — худший вариант: менеджер узнает в последний момент."},
{en:"No. We will not finish. Impossible.",ru:"Нет. Мы не закончим. Невозможно.",ok:false,fb:"Слишком категорично и без объяснений."}]},
{npc:"Oh. What’s the problem?",ru:"Ох. В чём проблема?"},
{me:[
{en:"The legacy data is messier than we expected — about a third needs manual cleanup.",ru:"Старые данные грязнее, чем мы ожидали — треть требует ручной чистки.",ok:true,fb:"Messier than expected + цифра — конкретно и убедительно."},
{en:"The data is dirty like a pig.",ru:"Данные грязные как свинья.",ok:false,fb:"Неуместная образность для делового разговора."},
{en:"There were unexpected difficulties of different kinds.",ru:"Возникли непредвиденные трудности разного рода.",ok:false,fb:"Канцелярит без конкретики — вызывает подозрения."}]},
{npc:"How much more time do you need?",ru:"Сколько ещё времени нужно?"},
{me:[
{en:"Another week. Alternatively, we could ship the core tables on the 15th and the rest later.",ru:"Ещё неделю. Либо можем выпустить основные таблицы 15-го, а остальное позже.",ok:true,fb:"Предложить альтернативу — сильная позиция в переговорах о сроках."},
{en:"I think one more week should do it, with a small buffer built in.",ru:"Думаю, одной недели хватит, с небольшим запасом.",ok:true,fb:"Should do it — «должно хватить»; buffer — запас времени."},
{en:"Give me how much you can.",ru:"Дайте сколько сможете.",ok:false,fb:"Неопределённость не помогает менеджеру планировать."}]},
{npc:"Let’s go with the phased approach. Can you send me a revised plan?",ru:"Давайте поэтапно. Пришлёте обновлённый план?"},
{me:[
{en:"Sure, I’ll have it in your inbox by end of day.",ru:"Конечно, будет у вас на почте до конца дня.",ok:true,fb:"By end of day (EOD) — стандартный деловой срок."},
{en:"Of course, I will send it you today.",ru:"Конечно, пришлю вам его сегодня.",ok:false,fb:"Порядок: send it to you или send you it. Send it you — ошибка."},
{en:"Okay, sometime.",ru:"Ладно, как-нибудь.",ok:false,fb:"«Как-нибудь» после срыва сроков — недопустимо."}]},
{npc:"Thanks for the heads-up.",ru:"Спасибо, что предупредили."}]},
{id:"d3-onboard",level:"b2",title:"Новичок в команде",sub:"Вы вводите нового коллегу в курс дела",partner:"New colleague",steps:[
{npc:"Hi, I’m Tom. It’s my first day — I was told you’d show me around?",ru:"Привет, я Том. Это мой первый день — сказали, вы мне всё покажете?"},
{me:[
{en:"Hi Tom, welcome aboard! Yes, I’ll be your buddy for the first couple of weeks.",ru:"Привет, Том, добро пожаловать! Да, я буду твоим наставником первые пару недель.",ok:true,fb:"Welcome aboard — тёплое приветствие нового сотрудника."},
{en:"Hello. Yes. Follow me.",ru:"Здравствуйте. Да. Идите за мной.",ok:false,fb:"Сухо и холодно для первого дня новичка."},
{en:"Hi, welcome on board of our team!",ru:"Привет, добро пожаловать на борт нашей команды!",ok:false,fb:"Смешаны конструкции: welcome aboard / welcome to the team."}]},
{npc:"Great. Where should I start?",ru:"Отлично. С чего начать?"},
{me:[
{en:"First, let’s get your laptop set up, then I’ll walk you through our codebase.",ru:"Сначала настроим ноутбук, потом проведу тебя по нашему коду.",ok:true,fb:"Walk someone through — «подробно показать, объяснить»."},
{en:"Start with reading all documentation. It is 300 pages.",ru:"Начни с чтения всей документации. Там 300 страниц.",ok:false,fb:"Отпугивает. И лучше the documentation."},
{en:"Don’t worry about anything today — just settle in and meet the team.",ru:"Сегодня ни о чём не переживай — осваивайся и знакомься с командой.",ok:true,fb:"Settle in — «освоиться на новом месте»."}]},
{npc:"Is there anything I should know about how the team works?",ru:"Есть что-то, что мне стоит знать о работе команды?"},
{me:[
{en:"We’re pretty relaxed, but we do take code reviews seriously. Nobody merges without approval.",ru:"Мы довольно расслабленные, но к ревью относимся серьёзно. Без одобрения никто не мержит.",ok:true,fb:"Do take — эмфатическое do подчёркивает контраст."},
{en:"Rules are many. You will learn on your mistakes.",ru:"Правил много. Научишься на своих ошибках.",ok:false,fb:"Learn from mistakes, не on. И звучит недружелюбно."},
{en:"Everybody is doing what they want.",ru:"Каждый делает что хочет.",ok:false,fb:"Создаёт ложное впечатление о хаосе."}]},
{npc:"Good to know. And who do I ask if I get stuck?",ru:"Полезно знать. А кого спрашивать, если застряну?"},
{me:[
{en:"Me, any time. There are no stupid questions here.",ru:"Меня, в любое время. Здесь нет глупых вопросов.",ok:true,fb:"Поддерживающая фраза, снижает тревогу новичка."},
{en:"Ask Google first, then ask me if really needed.",ru:"Сначала гугли, потом спрашивай меня, если реально надо.",ok:false,fb:"Отбивает желание задавать вопросы в первый день."},
{en:"Just drop a message in the team channel — someone always jumps in.",ru:"Просто пиши в канал команды — кто-нибудь всегда подключится.",ok:true,fb:"Drop a message, jump in — естественная разговорная лексика."}]},
{npc:"Thanks, that’s really reassuring.",ru:"Спасибо, это очень успокаивает."}]},
{id:"d3-ielts1",level:"b2",title:"IELTS Speaking Part 1",sub:"Экзаменатор задаёт вопросы о вас",partner:"Examiner",steps:[
{npc:"Good afternoon. Can you tell me your full name, please?",ru:"Добрый день. Назовите, пожалуйста, ваше полное имя."},
{me:[
{en:"My full name is Anna Petrova.",ru:"Моё полное имя — Анна Петрова.",ok:true,fb:"Простой полный ответ — именно то, что нужно."},
{en:"Anna.",ru:"Анна.",ok:false,fb:"Просили полное имя; односложный ответ — плохое начало."},
{en:"My name’s Anna Petrova, but everyone calls me Anya.",ru:"Меня зовут Анна Петрова, но все зовут меня Аня.",ok:true,fb:"Небольшое естественное расширение ответа."}]},
{npc:"Let’s talk about your hometown. Where are you from?",ru:"Поговорим о родном городе. Откуда вы?"},
{me:[
{en:"I’m from Kazan, a city on the Volga. It’s famous for its mix of cultures.",ru:"Я из Казани, города на Волге. Он славится смешением культур.",ok:true,fb:"Ответ + одна деталь — идеальная длина для Part 1."},
{en:"I am from Kazan. Next question.",ru:"Я из Казани. Следующий вопрос.",ok:false,fb:"Слишком коротко; экзаменатору нужен материал для оценки."},
{en:"I am living in Kazan since my birth.",ru:"Я живу в Казани с рождения.",ok:false,fb:"С since нужен Present Perfect: I’ve lived in Kazan since I was born."}]},
{npc:"Do you work or are you a student?",ru:"Вы работаете или учитесь?"},
{me:[
{en:"I’m currently studying economics, in my third year.",ru:"Сейчас учусь на экономиста, на третьем курсе.",ok:true,fb:"Currently + деталь — грамотно и естественно."},
{en:"I’m a student of economy.",ru:"Я студентка экономики.",ok:false,fb:"Economy — экономика страны; наука — economics. Лучше: I study economics."},
{en:"I work as a nurse — it’s demanding, but really rewarding.",ru:"Я работаю медсестрой — это тяжело, но очень вознаграждает.",ok:true,fb:"Demanding/rewarding — хорошая лексика для высокого балла."}]},
{npc:"Do you enjoy reading?",ru:"Вам нравится читать?"},
{me:[
{en:"Yes, I’m quite into fantasy, though I don’t get much time for it these days.",ru:"Да, я увлекаюсь фэнтези, хотя сейчас мало времени.",ok:true,fb:"Be into + though — разговорно и с нюансом, что ценится."},
{en:"Yes, I like reading very much books.",ru:"Да, я люблю читать очень много книг.",ok:false,fb:"Неправильный порядок: I really like reading books / I read a lot."},
{en:"I like it. It is useful for brain.",ru:"Мне нравится. Это полезно для мозга.",ok:false,fb:"Пропущен артикль (for the brain), ответ шаблонный."}]},
{npc:"Thank you. Now let’s move on to Part 2.",ru:"Спасибо. Теперь перейдём к Части 2."}]},
{id:"d3-ielts2",level:"b2",title:"IELTS Speaking Part 2",sub:"Вы рассказываете о памятном путешествии",partner:"Examiner",steps:[
{npc:"Here’s your topic: describe a trip you remember well. You have one minute to prepare.",ru:"Ваша тема: опишите поездку, которую хорошо помните. У вас минута на подготовку."},
{me:[
{en:"Could I have a pencil and some paper for notes, please?",ru:"Можно карандаш и бумагу для заметок?",ok:true,fb:"Вежливая уместная просьба — на экзамене это разрешено."},
{en:"Give me paper.",ru:"Дайте бумагу.",ok:false,fb:"Повелительное наклонение без please звучит грубо."},
{en:"Can I not prepare and start directly?",ru:"Можно я не буду готовиться и начну сразу?",ok:false,fb:"Отказ от подготовки — ошибка тактики; минута помогает структурировать ответ."}]},
{npc:"All right, you can start now.",ru:"Хорошо, можете начинать."},
{me:[
{en:"I’d like to talk about a trip to Georgia I took with friends two years ago.",ru:"Я хочу рассказать о поездке в Грузию с друзьями два года назад.",ok:true,fb:"Чёткое вступление с указанием темы — экзаменатор это ценит."},
{en:"So. Georgia. Mountains. Wine.",ru:"Итак. Грузия. Горы. Вино.",ok:false,fb:"Набор слов вместо связной речи — низкий балл за Fluency."},
{en:"Two years ago I have been to Georgia with friends.",ru:"Два года назад я была в Грузии с друзьями.",ok:false,fb:"Ago требует Past Simple: I went to Georgia."}]},
{npc:"Mm-hm.",ru:"Угу."},
{me:[
{en:"What made it memorable was the hospitality — strangers kept inviting us for dinner.",ru:"Памятной её сделало гостеприимство — незнакомцы постоянно звали нас на ужин.",ok:true,fb:"Cleft sentence «What made it… was…» — продвинутая структура."},
{en:"It was very very interesting and very beautiful.",ru:"Было очень-очень интересно и очень красиво.",ok:false,fb:"Повторы very — бедная лексика. Используйте breathtaking, fascinating."},
{en:"People were hospitable; strangers invited us to dinner many times.",ru:"Люди были гостеприимны; незнакомцы много раз звали нас на ужин.",ok:true,fb:"Грамотно и конкретно, хорошая лексика."}]},
{npc:"Thank you. Would you go back there?",ru:"Спасибо. Вы бы поехали туда снова?"},
{me:[
{en:"Definitely — I’d love to go back in autumn for the grape harvest.",ru:"Однозначно — хотела бы вернуться осенью на сбор винограда.",ok:true,fb:"Короткий ответ с причиной — идеально для финального вопроса."},
{en:"Yes, I would go there again, sure, if I will have money.",ru:"Да, поехала бы, если у меня будут деньги.",ok:false,fb:"В условном if нельзя will: if I have / if I had the money."},
{en:"Maybe yes, maybe no.",ru:"Может да, может нет.",ok:false,fb:"Уклончивость без объяснения — упущенная возможность показать язык."}]},
{npc:"Thank you. Now we’ll talk about travel more generally.",ru:"Спасибо. Теперь поговорим о путешествиях в целом."}]},
{id:"d3-toefl",level:"b2",title:"Устный тест TOEFL-формата",sub:"Вы отвечаете на вопрос с аргументацией",partner:"Test proctor",steps:[
{npc:"Question one: some people prefer to study alone, others in groups. Which do you prefer and why?",ru:"Вопрос первый: кто-то предпочитает учиться в одиночку, кто-то в группе. Что вы предпочитаете и почему?"},
{me:[
{en:"I prefer studying alone, mainly because I can set my own pace.",ru:"Я предпочитаю учиться один, в основном потому, что могу задать свой темп.",ok:true,fb:"Чёткая позиция + первая причина сразу — идеальная структура."},
{en:"Both have pluses and minuses, it depends, everyone is different.",ru:"У обоих есть плюсы и минусы, зависит, все разные.",ok:false,fb:"Нет чёткой позиции — в TOEFL это снижает балл."},
{en:"I prefer to study alone because of I can concentrate.",ru:"Предпочитаю один, потому что я могу сосредоточиться.",ok:false,fb:"Because of + существительное; перед предложением просто because."}]},
{npc:"Please continue.",ru:"Продолжайте."},
{me:[
{en:"For example, when I prepared for my physics exam, I could spend extra time on the topics I found hard.",ru:"Например, готовясь к экзамену по физике, я мог тратить больше времени на сложные темы.",ok:true,fb:"Личный пример делает аргумент убедительным."},
{en:"Example: physics. Hard. I study more.",ru:"Пример: физика. Сложно. Я учу больше.",ok:false,fb:"Рубленые фразы — низкий балл за связность."},
{en:"Moreover, I find groups distracting, since people tend to drift off topic.",ru:"Кроме того, группы меня отвлекают: люди уходят от темы.",ok:true,fb:"Moreover, tend to, drift off topic — хорошие связки и лексика."}]},
{npc:"You have ten seconds left.",ru:"Осталось десять секунд."},
{me:[
{en:"So overall, studying alone helps me learn more efficiently.",ru:"Итак, в целом учёба в одиночку помогает мне учиться эффективнее.",ok:true,fb:"Краткий вывод — правильное завершение ответа."},
{en:"And also my friend Max, he once…",ru:"А ещё мой друг Макс, он однажды…",ok:false,fb:"Начинать новую историю за 10 секунд — ответ оборвётся."},
{en:"In conclusion, that is why alone is better for me.",ru:"В заключение, вот почему одному лучше для меня.",ok:false,fb:"Alone — не существительное; лучше studying alone works better for me."}]},
{npc:"Time’s up. Next question.",ru:"Время вышло. Следующий вопрос."}]},
{id:"d3-politics",level:"b2",title:"Политика за ужином",sub:"Знакомый заводит разговор о выборах",partner:"Acquaintance",steps:[
{npc:"So, what do you make of the election results?",ru:"Ну, что думаешь о результатах выборов?"},
{me:[
{en:"Honestly, I’m still trying to make sense of it all. What about you?",ru:"Честно, я ещё пытаюсь во всём разобраться. А ты?",ok:true,fb:"Мягкий уход от позиции + встречный вопрос — дипломатично."},
{en:"They are idiots who voted for him.",ru:"Те, кто за него голосовал, — идиоты.",ok:false,fb:"Оскорбление — верный способ испортить ужин."},
{en:"I don’t make politics.",ru:"Я не делаю политику.",ok:false,fb:"Калька. Говорят: I’m not really into politics / I try to stay out of politics."}]},
{npc:"I think it’s a disaster, to be honest.",ru:"Честно говоря, по-моему, это катастрофа."},
{me:[
{en:"I can see why a lot of people feel that way.",ru:"Понимаю, почему многие так считают.",ok:true,fb:"Признать чувства, не соглашаясь прямо — дипломатичный ход."},
{en:"You are completely wrong, it’s the best thing.",ru:"Ты совершенно не прав, это лучшее, что могло быть.",ok:false,fb:"Резкое противоречие за столом создаёт конфликт."},
{en:"Disaster is strong word.",ru:"Катастрофа — сильное слово.",ok:false,fb:"Идея нормальная, но пропущен артикль: That’s a strong word."}]},
{npc:"Don’t you think so?",ru:"Ты так не считаешь?"},
{me:[
{en:"I think it’s a bit early to tell. Let’s see what they actually do.",ru:"Думаю, судить пока рано. Посмотрим, что они реально сделают.",ok:true,fb:"Too early to tell — идиоматичная нейтральная позиция."},
{en:"I have my own opinion but I won’t say it.",ru:"У меня своё мнение, но я его не скажу.",ok:false,fb:"Звучит демонстративно и холодно."},
{en:"I’m a bit torn, honestly. There are arguments on both sides.",ru:"Честно, я немного разрываюсь. Есть аргументы с обеих сторон.",ok:true,fb:"Be torn — «колебаться между вариантами»."}]},
{npc:"Fair enough. Anyway, how’s the new job?",ru:"Справедливо. Ладно, как новая работа?"},
{me:[
{en:"Oh, it’s going really well, thanks for asking!",ru:"О, всё идёт отлично, спасибо, что спросил!",ok:true,fb:"С радостью подхватить смену темы — социальный навык."},
{en:"Wait, we didn’t finish about politics.",ru:"Подожди, мы не закончили про политику.",ok:false,fb:"Возвращаться к острой теме, когда собеседник её закрыл, — неловко."},
{en:"Job is job.",ru:"Работа есть работа.",ok:false,fb:"Калька обрывает разговор. Лучше рассказать пару деталей."}]},
{npc:"Glad to hear it!",ru:"Рад слышать!"}]},
{id:"d3-comfort",level:"c1",title:"Утешить друга",sub:"Друга уволили, он расстроен",partner:"Friend",steps:[
{npc:"I got laid off today. I just can’t believe it.",ru:"Меня сегодня сократили. Просто не могу поверить."},
{me:[
{en:"Oh no, I’m so sorry. That’s awful. Do you want to talk about it?",ru:"О нет, мне так жаль. Это ужасно. Хочешь поговорить?",ok:true,fb:"Сочувствие + предложение выслушать — лучший старт."},
{en:"Don’t worry, it’s not a big deal.",ru:"Не переживай, ничего страшного.",ok:false,fb:"Обесценивание чувств. Человеку сейчас плохо."},
{en:"Ha, finally you can rest!",ru:"Ха, наконец отдохнёшь!",ok:false,fb:"Шутка сразу после плохой новости ранит."}]},
{npc:"They just called me in and said my position was cut. After five years.",ru:"Просто вызвали и сказали, что позицию сократили. После пяти лет."},
{me:[
{en:"Five years… that must feel like a real slap in the face.",ru:"Пять лет… это, должно быть, как пощёчина.",ok:true,fb:"That must feel like — эмпатия через признание чувств."},
{en:"It happens to everyone sometimes.",ru:"Такое с каждым бывает.",ok:false,fb:"Звучит как отмахивание, хоть и правда."},
{en:"That’s so unfair. You put so much into that place.",ru:"Это так несправедливо. Ты столько вложил в эту работу.",ok:true,fb:"Put a lot into — признание вклада, поддерживает."}]},
{npc:"I don’t even know what to do next.",ru:"Даже не знаю, что дальше делать."},
{me:[
{en:"You don’t have to figure it all out tonight. Let’s get some food first.",ru:"Не обязательно всё решать сегодня. Давай сначала поедим.",ok:true,fb:"Figure out + конкретная забота — снимает давление."},
{en:"You must immediately update your CV and send it to fifty companies.",ru:"Ты должен немедленно обновить резюме и разослать в 50 компаний.",ok:false,fb:"Советы-приказы в момент шока не помогают."},
{en:"What you will do? You have a mortgage!",ru:"Что ты будешь делать? У тебя же ипотека!",ok:false,fb:"Ошибка (What will you do?) и усиливает панику."}]},
{npc:"Yeah… thanks. I really needed that.",ru:"Да… спасибо. Мне это было нужно."},
{me:[
{en:"Anytime. And whenever you’re ready, I’m happy to help with job hunting.",ru:"Всегда. И когда будешь готов, помогу с поиском работы.",ok:true,fb:"Предложение помощи без давления — whenever you’re ready."},
{en:"No problem. Bye.",ru:"Без проблем. Пока.",ok:false,fb:"Слишком сухо для такого момента."},
{en:"You’re welcome, it was nothing.",ru:"Пожалуйста, это пустяк.",ok:false,fb:"Формально-вежливо, но холодно. Лучше: Anytime / That’s what friends are for."}]},
{npc:"That means a lot.",ru:"Это много значит."}]},
{id:"d3-doctor",level:"b2",title:"Обсуждение диагноза",sub:"Врач объясняет результаты анализов",partner:"Doctor",steps:[
{npc:"Your blood tests came back, and your cholesterol is quite high.",ru:"Пришли анализы крови, холестерин довольно высокий."},
{me:[
{en:"Oh. How worried should I be?",ru:"Ох. Насколько мне стоит беспокоиться?",ok:true,fb:"Естественный вопрос, помогает понять серьёзность."},
{en:"What does that mean exactly in my case?",ru:"Что именно это значит в моём случае?",ok:true,fb:"In my case — уточнение, которое ценят врачи."},
{en:"Is it dangerous for die?",ru:"Это опасно для умереть?",ok:false,fb:"Грамматически неверно. Скажите: Is it life-threatening?"}]},
{npc:"It’s not an emergency, but it does raise your risk of heart disease.",ru:"Это не экстренно, но повышает риск болезней сердца."},
{me:[
{en:"I see. What are my options?",ru:"Понятно. Какие у меня варианты?",ok:true,fb:"Options — ключевое слово при обсуждении лечения."},
{en:"Give me pills and that’s it.",ru:"Дайте таблетки, и всё.",ok:false,fb:"Резко и без обсуждения — врач может предложить и другие методы."},
{en:"Can I fix it with no medicine, only with sport?",ru:"Можно исправить без лекарств, только спортом?",ok:false,fb:"Sport — вид спорта; о физнагрузке говорят exercise. И лучше without medication."}]},
{npc:"We could start with diet and exercise and recheck in three months.",ru:"Можно начать с диеты и упражнений и пересдать через три месяца."},
{me:[
{en:"That sounds reasonable. Are there any foods I should cut out?",ru:"Звучит разумно. Есть продукты, которые стоит исключить?",ok:true,fb:"Cut out — «исключить из рациона»."},
{en:"What if it doesn’t improve by then?",ru:"А если к тому времени не станет лучше?",ok:true,fb:"Уместный уточняющий вопрос о плане Б."},
{en:"OK, I will eat less fat things.",ru:"Хорошо, буду есть меньше жирных вещей.",ok:false,fb:"Fat things — неестественно; fatty foods."}]},
{npc:"Mainly fried food and processed meat. I’ll give you a leaflet.",ru:"В основном жареное и переработанное мясо. Дам вам буклет."},
{me:[
{en:"Thank you, doctor. I’ll book a follow-up for three months’ time.",ru:"Спасибо, доктор. Запишусь на повторный приём через три месяца.",ok:true,fb:"Follow-up appointment — «повторный приём»."},
{en:"Thanks, I will come again after three months maybe.",ru:"Спасибо, может, приду снова через три месяца.",ok:false,fb:"Maybe звучит несерьёзно о здоровье; in three months."},
{en:"Thanks. Bye-bye!",ru:"Спасибо. Пока-пока!",ok:false,fb:"Bye-bye слишком по-детски в кабинете врача."}]},
{npc:"Take care.",ru:"Берегите себя."}]},
{id:"d3-quit",level:"c1",title:"Увольнение по-хорошему",sub:"Вы сообщаете руководителю, что уходите",partner:"Manager",steps:[
{npc:"You wanted to see me?",ru:"Вы хотели меня видеть?"},
{me:[
{en:"Yes, thanks for making time. This isn’t easy to say, but I’ve decided to hand in my notice.",ru:"Да, спасибо, что нашли время. Это непросто сказать, но я решил подать заявление.",ok:true,fb:"Hand in one’s notice — стандартная идиома; смягчающее вступление уместно."},
{en:"Yes. I’m leaving. Here is my paper.",ru:"Да. Я ухожу. Вот моя бумага.",ok:false,fb:"Слишком резко; и paper — не «заявление» (resignation letter)."},
{en:"Yes, I want to make my dismissal.",ru:"Да, хочу оформить своё увольнение.",ok:false,fb:"Dismissal — увольнение по инициативе работодателя. Вы уходите сами: resign."}]},
{npc:"Oh. I’m sorry to hear that. May I ask why?",ru:"Ох. Жаль это слышать. Можно спросить почему?"},
{me:[
{en:"I’ve been offered a role that’s a step up in terms of responsibility, and it felt like the right time.",ru:"Мне предложили позицию с большей ответственностью, и момент показался подходящим.",ok:true,fb:"A step up — «шаг вперёд»; нейтральная причина без критики компании."},
{en:"Honestly, the management here is a joke.",ru:"Честно, руководство здесь — посмешище.",ok:false,fb:"Не сжигайте мосты: рекомендации и репутация важнее."},
{en:"It’s more about where I want to be long-term rather than anything here.",ru:"Дело скорее в моих долгосрочных планах, чем в чём-то здесь.",ok:true,fb:"Rather than anything here — дипломатично снимает упрёк с компании."}]},
{npc:"Is there anything we could do to change your mind?",ru:"Можем ли мы что-то сделать, чтобы вы передумали?"},
{me:[
{en:"I appreciate that, truly, but my mind’s made up.",ru:"Ценю это, правда, но я уже решил.",ok:true,fb:"My mind’s made up — твёрдо, но тепло."},
{en:"Maybe if you pay double, ha-ha.",ru:"Может, если заплатите вдвое, ха-ха.",ok:false,fb:"Шутка о деньгах сбивает с толку: вы торгуетесь или уходите?"},
{en:"No. Nothing. Never.",ru:"Нет. Ничего. Никогда.",ok:false,fb:"Категоричность звучит враждебно."}]},
{npc:"Understood. What’s your notice period — a month?",ru:"Понятно. Какой у вас срок — месяц?"},
{me:[
{en:"Yes, and I’ll make sure everything’s handed over properly before I go.",ru:"Да, и я позабочусь, чтобы всё было передано как следует.",ok:true,fb:"Hand over — передача дел; оставляет хорошее впечатление."},
{en:"Yes, but last two weeks I will probably be sick.",ru:"Да, но последние две недели я, наверное, буду болеть.",ok:false,fb:"Намёк на фиктивный больничный — непрофессионально."},
{en:"A month, yes. I’m happy to help train whoever replaces me.",ru:"Месяц, да. Готов помочь обучить преемника.",ok:true,fb:"Whoever replaces me — естественная конструкция; щедрый жест."}]},
{npc:"Thank you. We’ll miss you around here.",ru:"Спасибо. Нам будет вас не хватать."},
{me:[
{en:"I’ll miss you all too. I’ve learned a huge amount here.",ru:"Я тоже буду скучать. Я многому здесь научился.",ok:true,fb:"Тёплое завершение сохраняет отношения."},
{en:"Yes, I know.",ru:"Да, я знаю.",ok:false,fb:"Звучит самодовольно."},
{en:"Thanks. I don’t think I will miss.",ru:"Спасибо. Не думаю, что буду скучать.",ok:false,fb:"Бестактно и грамматически неполно (miss it/you)."}]}]},
{id:"d3-aidebate",level:"c1",title:"Спор об ИИ",sub:"Приятель уверен, что ИИ отнимет все рабочие места",partner:"Friend",steps:[
{npc:"Honestly, AI is going to wipe out most jobs within ten years. We’re doomed.",ru:"Честно, ИИ уничтожит большинство профессий за десять лет. Нам конец."},
{me:[
{en:"I’d push back on that a bit. Historically, technology has shifted jobs rather than eliminated them.",ru:"Я бы немного поспорил. Исторически технологии смещали рабочие места, а не уничтожали.",ok:true,fb:"Push back on — мягкое возражение; аргумент с опорой на историю."},
{en:"That’s stupid, you watch too many films.",ru:"Это глупо, ты смотришь слишком много фильмов.",ok:false,fb:"Переход на личности вместо аргументов."},
{en:"I don’t agree with you on 100 percent.",ru:"Я не согласен с тобой на 100 процентов.",ok:false,fb:"Лишний предлог: I don’t agree 100 percent. И непонятно, с чем именно."}]},
{npc:"But this time is different. AI can think.",ru:"Но в этот раз всё иначе. ИИ умеет думать."},
{me:[
{en:"That’s debatable. It’s brilliant at patterns, but whether that counts as thinking is another matter.",ru:"Спорно. Он отлично работает с закономерностями, но мышление ли это — другой вопрос.",ok:true,fb:"Debatable, another matter — точные маркеры несогласия в дискуссии."},
{en:"It doesn’t think, it just counts.",ru:"Он не думает, он просто считает.",ok:false,fb:"Упрощение. Calculate/predict было бы точнее, и без нюанса."},
{en:"I take your point that it’s different in scale, though.",ru:"Хотя принимаю довод, что масштаб другой.",ok:true,fb:"I take your point — признание аргумента оппонента, признак зрелой дискуссии."}]},
{npc:"So you’re not worried at all?",ru:"Так тебя это совсем не беспокоит?"},
{me:[
{en:"I wouldn’t go that far. The transition could be brutal for some sectors.",ru:"Так далеко я бы не заходил. Переход может быть жёстким для некоторых отраслей.",ok:true,fb:"I wouldn’t go that far — идиома для частичного несогласия."},
{en:"Not at all. Everything will be fine for sure.",ru:"Совсем нет. Всё точно будет хорошо.",ok:false,fb:"Категоричный оптимизм ослабляет вашу позицию."},
{en:"Of course I am worried, but I am not doomed.",ru:"Конечно волнуюсь, но мне не конец.",ok:false,fb:"Doomed — о людях работает, но фраза звучит как калька и сбивает аргумент."}]},
{npc:"Hmm. So what should we actually do?",ru:"Хм. И что нам делать?"},
{me:[
{en:"Invest in retraining, and keep the skills that are hard to automate — judgment, empathy.",ru:"Вкладываться в переобучение и развивать трудноавтоматизируемые навыки — суждение, эмпатию.",ok:true,fb:"Конкретное предложение завершает спор конструктивно."},
{en:"Nothing, relax and drink beer.",ru:"Ничего, расслабиться и пить пиво.",ok:false,fb:"Шутка обесценивает серьёзный разговор."},
{en:"I think we need to learn new skills, which are hard for automation.",ru:"Думаю, нужно учить новые навыки, которые трудны для автоматизации.",ok:false,fb:"Which после запятой меняет смысл; и hard to automate, а не hard for automation."}]},
{npc:"Fair enough. I’m slightly less doomed now.",ru:"Ладно. Мне теперь чуть менее безнадёжно."}]},
{id:"d3-ielts3",level:"c1",title:"IELTS Speaking Part 3",sub:"Абстрактная дискуссия с экзаменатором",partner:"Examiner",steps:[
{npc:"Why do you think people travel more nowadays than in the past?",ru:"Почему, по-вашему, люди сейчас путешествуют больше, чем раньше?"},
{me:[
{en:"I’d say it’s largely down to cheaper flights, and social media has made travel almost aspirational.",ru:"Я бы сказал, во многом из-за дешёвых перелётов, а соцсети сделали путешествия чуть ли не мечтой.",ok:true,fb:"Down to — «из-за»; aspirational — лексика высокого балла."},
{en:"Because now it’s cheap.",ru:"Потому что сейчас дёшево.",ok:false,fb:"Part 3 требует развёрнутых ответов; одна причина — мало."},
{en:"There are a few reasons. Firstly, budget airlines; secondly, remote work lets people travel longer.",ru:"Есть несколько причин. Во-первых, лоукостеры; во-вторых, удалёнка позволяет ездить дольше.",ok:true,fb:"Структура firstly/secondly — хорошая связность."}]},
{npc:"Do you think tourism has any negative effects?",ru:"Есть ли у туризма негативные последствия?"},
{me:[
{en:"Undoubtedly. Overtourism can price locals out of their own neighbourhoods.",ru:"Несомненно. Сверхтуризм может вытеснить местных жителей ценами из их же районов.",ok:true,fb:"Price someone out — точная идиома; overtourism — актуальная лексика."},
{en:"Yes, tourists make a lot of garbage and noise and it is bad.",ru:"Да, туристы делают много мусора и шума, и это плохо.",ok:false,fb:"Make garbage — коллокация неверна (produce litter); «it is bad» — пусто."},
{en:"Of course, it has a negative influence to nature.",ru:"Конечно, у него негативное влияние на природу.",ok:false,fb:"Influence on, не to. Лучше: an impact on the environment."}]},
{npc:"How might travel change in the future?",ru:"Как путешествия могут измениться в будущем?"},
{me:[
{en:"It’s hard to predict, but I suspect carbon taxes might make flying a luxury again.",ru:"Сложно предсказать, но подозреваю, что углеродные налоги снова сделают полёты роскошью.",ok:true,fb:"Hedging (I suspect, might) — признак высокого уровня."},
{en:"In future everybody will fly to Mars.",ru:"В будущем все будут летать на Марс.",ok:false,fb:"Нереалистично и без аргументации; in the future."},
{en:"Perhaps virtual reality will replace some trips, though I doubt it’ll ever match the real thing.",ru:"Возможно, VR заменит часть поездок, хотя сомневаюсь, что сравнится с реальностью.",ok:true,fb:"Match the real thing — идиоматично; уступительное though."}]},
{npc:"Thank you. That’s the end of the speaking test.",ru:"Спасибо. На этом устная часть закончена."},
{me:[
{en:"Thank you very much.",ru:"Большое спасибо.",ok:true,fb:"Простое вежливое завершение."},
{en:"So what is my score?",ru:"Так какой у меня балл?",ok:false,fb:"Экзаменатор не может сообщить балл — вопрос неуместен."},
{en:"Thank you, have a nice day.",ru:"Спасибо, хорошего дня.",ok:true,fb:"Вежливо и естественно."}]},
{npc:"Goodbye.",ru:"До свидания."}]},
{id:"d3-deeptalk",level:"c1",title:"Откровенный разговор",sub:"Друг признаётся, что чувствует себя потерянным",partner:"Friend",steps:[
{npc:"Can I be honest? Lately I feel like I’m just going through the motions.",ru:"Можно честно? В последнее время я будто живу на автомате."},
{me:[
{en:"Of course. What’s been going on?",ru:"Конечно. Что происходит?",ok:true,fb:"Открытый вопрос приглашает к разговору."},
{en:"Everybody feels like that, it’s normal.",ru:"Все так себя чувствуют, это нормально.",ok:false,fb:"Обобщение обесценивает переживание."},
{en:"Going through what motions?",ru:"Через какие движения?",ok:false,fb:"Буквальное понимание идиомы «делать что-то механически»."}]},
{npc:"I don’t know. Work, gym, sleep, repeat. Nothing feels meaningful.",ru:"Не знаю. Работа, спортзал, сон, по кругу. Ничто не кажется значимым."},
{me:[
{en:"That sounds really draining. How long have you been feeling this way?",ru:"Звучит изматывающе. Давно ты так себя чувствуешь?",ok:true,fb:"Draining — точное слово для эмоционального истощения."},
{en:"You should find a hobby. Try painting!",ru:"Тебе надо найти хобби. Попробуй рисовать!",ok:false,fb:"Быстрый совет без выслушивания — человек почувствует, что его не слышат."},
{en:"I get that. I went through something similar a couple of years ago.",ru:"Понимаю. Я переживал что-то похожее пару лет назад.",ok:true,fb:"Go through — «пережить»; разделённый опыт сближает."}]},
{npc:"Months, maybe. I keep telling myself it’ll pass.",ru:"Месяцы, наверное. Твержу себе, что пройдёт."},
{me:[
{en:"It might, but it’s worth taking seriously. Have you thought about talking to someone?",ru:"Может, и пройдёт, но к этому стоит отнестись серьёзно. Думал поговорить со специалистом?",ok:true,fb:"Talk to someone — деликатный эвфемизм для терапевта."},
{en:"Maybe you are just lazy?",ru:"Может, ты просто ленивый?",ok:false,fb:"Осуждение — худшая реакция на откровенность."},
{en:"You need psychiatrist urgently.",ru:"Тебе срочно нужен психиатр.",ok:false,fb:"Слишком резко и драматично; плюс пропущен артикль."}]},
{npc:"Maybe. It helps just saying it out loud, honestly.",ru:"Может быть. Честно, помогает уже то, что сказал это вслух."},
{me:[
{en:"I’m really glad you told me. I’m here whenever you need.",ru:"Я правда рад, что ты сказал. Я рядом, когда нужно.",ok:true,fb:"Поддержка без давления."},
{en:"Okay, great, so problem solved!",ru:"Окей, отлично, значит, проблема решена!",ok:false,fb:"Преждевременное «решение» обесценивает разговор."},
{en:"Let’s make this a regular thing — no phones, just a walk and a chat.",ru:"Давай делать так регулярно — без телефонов, просто прогулка и разговор.",ok:true,fb:"Конкретное тёплое предложение."}]},
{npc:"I’d like that.",ru:"Мне бы этого хотелось."}]},
{id:"d3-teasing",level:"c1",title:"Дружеские подколки",sub:"Коллега подшучивает над вашим опозданием",partner:"Colleague",steps:[
{npc:"Well, well, look who decided to grace us with their presence!",ru:"Ну-ну, посмотрите, кто соизволил почтить нас своим присутствием!"},
{me:[
{en:"What can I say? I like to make an entrance.",ru:"Что сказать? Люблю эффектно появляться.",ok:true,fb:"Self-deprecating humour — лучший ответ на подколку."},
{en:"I am not late, the bus was late!",ru:"Я не опоздал, автобус опоздал!",ok:false,fb:"Оправдание всерьёз ломает шутливый тон."},
{en:"Why are you always attacking me?",ru:"Почему ты всегда на меня нападаешь?",ok:false,fb:"Воспринимать дружескую иронию как нападение — неловко."}]},
{npc:"Did you stop for a three-course breakfast on the way?",ru:"По дороге заехал на завтрак из трёх блюд?"},
{me:[
{en:"Four courses, actually. I have standards.",ru:"Из четырёх, вообще-то. У меня стандарты.",ok:true,fb:"Подхватить и усилить шутку — классика banter."},
{en:"No, I ate only a sandwich at home.",ru:"Нет, я съел только бутерброд дома.",ok:false,fb:"Буквальный ответ на риторический вопрос убивает юмор."},
{en:"Says the guy who missed the whole meeting last Friday.",ru:"Сказал тот, кто пропустил всё совещание в прошлую пятницу.",ok:true,fb:"Says the guy who… — идиоматичная ответная подколка."}]},
{npc:"Ouch! Fair enough, you got me there.",ru:"Ай! Справедливо, тут ты меня подловил."},
{me:[
{en:"Anyway, did I miss anything important?",ru:"Ладно, я пропустил что-то важное?",ok:true,fb:"Плавный возврат к делу после шуток."},
{en:"Ha-ha, I won! You lose!",ru:"Ха-ха, я выиграл! Ты проиграл!",ok:false,fb:"Злорадство превращает banter в соревнование."},
{en:"Yes, I am clever.",ru:"Да, я умный.",ok:false,fb:"Звучит самодовольно без иронии."}]},
{npc:"Just the usual. Coffee’s fresh, though.",ru:"Всё как обычно. Зато кофе свежий."},
{me:[
{en:"You’re a lifesaver.",ru:"Ты мой спаситель.",ok:true,fb:"Lifesaver — идиоматичная шутливая благодарность."},
{en:"Thank you for information.",ru:"Спасибо за информацию.",ok:false,fb:"Формально и холодно после дружеской перепалки."},
{en:"Now that’s the best news I’ve heard all day.",ru:"Вот это лучшая новость за день.",ok:true,fb:"Лёгкое преувеличение поддерживает тон."}]},
{npc:"Don’t get used to it.",ru:"Не привыкай."}]},
{id:"d3-lawyer",level:"c1",title:"Консультация юриста",sub:"Вы обсуждаете спор с бывшим работодателем",partner:"Lawyer",steps:[
{npc:"So, tell me what brings you in today.",ru:"Итак, расскажите, что привело вас сегодня."},
{me:[
{en:"My former employer is withholding my final paycheck, and I’d like to know where I stand.",ru:"Бывший работодатель удерживает мою последнюю зарплату, хочу понять свою позицию.",ok:true,fb:"Withhold, where I stand — точная юридически-разговорная лексика."},
{en:"My boss is a thief and I want to put him in prison.",ru:"Мой босс — вор, и я хочу посадить его.",ok:false,fb:"Эмоционально и неточно; юристу нужны факты."},
{en:"They don’t give me my last salary.",ru:"Они не дают мне мою последнюю зарплату.",ok:false,fb:"Present Simple неуместен; лучше They haven’t paid my final salary."}]},
{npc:"How long has it been since you left?",ru:"Сколько прошло с вашего ухода?"},
{me:[
{en:"Six weeks. I’ve got all our email correspondence, if that helps.",ru:"Шесть недель. У меня есть вся переписка, если это поможет.",ok:true,fb:"Предложение документов — то, что ждёт юрист."},
{en:"Six weeks ago I left.",ru:"Шесть недель назад я ушёл.",ok:false,fb:"Ответ корректен, но порядок слов неестественен для ответа на вопрос: It’s been six weeks."},
{en:"It’s been about six weeks, and they’ve ignored two written requests.",ru:"Прошло около шести недель, и они проигнорировали два письменных запроса.",ok:true,fb:"It’s been + факты по делу."}]},
{npc:"Did you sign anything when you left?",ru:"Вы что-нибудь подписывали при уходе?"},
{me:[
{en:"Only a handover form — nothing waiving my right to payment, as far as I’m aware.",ru:"Только акт передачи дел — ничего об отказе от права на оплату, насколько я знаю.",ok:true,fb:"Waive a right — юридическая коллокация «отказаться от права»."},
{en:"I signed some papers, I didn’t read them.",ru:"Подписал какие-то бумаги, не читал.",ok:false,fb:"Честно, но опасно расплывчато; уточните, что за документы."},
{en:"No, I didn’t sign nothing.",ru:"Нет, я ничего не подписывал.",ok:false,fb:"Двойное отрицание: I didn’t sign anything."}]},
{npc:"Then we can start with a formal letter before action.",ru:"Тогда начнём с официальной досудебной претензии."},
{me:[
{en:"What would that cost, and what are the odds it resolves things?",ru:"Сколько это стоит и каковы шансы, что это решит вопрос?",ok:true,fb:"Odds — естественный вопрос о вероятности успеха."},
{en:"Do it. Make them suffer.",ru:"Делайте. Пусть страдают.",ok:false,fb:"Эмоциональная мстительность не помогает делу."},
{en:"Could you explain what happens if they still don’t pay?",ru:"Объясните, что будет, если они всё равно не заплатят?",ok:true,fb:"Вопрос о следующих шагах — разумно."}]},
{npc:"Usually a letter is enough. If not, we take it to an employment tribunal.",ru:"Обычно претензии достаточно. Если нет, идём в трудовой суд."}]},
{id:"d3-landlord",level:"c1",title:"Спор с арендодателем",sub:"Хозяин не возвращает залог",partner:"Landlord",steps:[
{npc:"I’ve looked at the flat, and I’m keeping part of the deposit for the carpet.",ru:"Я осмотрел квартиру и удержу часть залога за ковёр."},
{me:[
{en:"I’m surprised to hear that. The carpet was already worn when I moved in.",ru:"Удивлён это слышать. Ковёр был изношен уже при моём заезде.",ok:true,fb:"Worn — точное слово для износа; вежливое несогласие."},
{en:"You’re lying, the carpet was old!",ru:"Вы врёте, ковёр был старый!",ok:false,fb:"Обвинение во лжи сразу обостряет конфликт."},
{en:"The carpet was used already before me.",ru:"Ковёр был использованный уже до меня.",ok:false,fb:"Used — «подержанный», здесь лучше worn. И порядок слов."}]},
{npc:"I don’t remember it like that.",ru:"Я такого не помню."},
{me:[
{en:"Fortunately, the check-in inventory notes it, and I have photos dated the day I arrived.",ru:"К счастью, это отмечено в акте при заселении, и у меня есть фото с датой заезда.",ok:true,fb:"Check-in inventory — термин аренды; доказательства спокойным тоном."},
{en:"You have bad memory.",ru:"У вас плохая память.",ok:false,fb:"Переход на личности; и нужен артикль (a bad memory)."},
{en:"Maybe we could look at the inventory together?",ru:"Может, посмотрим акт вместе?",ok:true,fb:"Предложение совместно проверить факты — деэскалация."}]},
{npc:"Well, normal wear and tear is one thing, but there’s a stain.",ru:"Ну, нормальный износ — одно, но там пятно."},
{me:[
{en:"That’s fair. I’m happy to cover cleaning, but not a full replacement.",ru:"Справедливо. Готов оплатить чистку, но не полную замену.",ok:true,fb:"Компромисс: cover cleaning — «оплатить чистку»."},
{en:"Stain is not my problem.",ru:"Пятно — не моя проблема.",ok:false,fb:"Глухая позиция и без артикля."},
{en:"A stain? I clean it myself, no money.",ru:"Пятно? Почищу сам, без денег.",ok:false,fb:"Неверное время (I’ll clean) и грубое «no money»."}]},
{npc:"Cleaning would be around eighty pounds.",ru:"Чистка обойдётся около восьмидесяти фунтов."},
{me:[
{en:"That seems reasonable. Could you send me the invoice and return the rest by Friday?",ru:"Разумно. Пришлите счёт и верните остаток до пятницы?",ok:true,fb:"Конкретика и срок — закрепляет договорённость."},
{en:"OK, but I want receipt.",ru:"Ладно, но я хочу чек.",ok:false,fb:"Идея верная, но тон требовательный и пропущен артикль: a receipt."},
{en:"Fine, as long as it’s in writing.",ru:"Хорошо, при условии, что это будет в письменном виде.",ok:true,fb:"As long as — «при условии»; разумная осторожность."}]},
{npc:"Fair enough. I’ll email you today.",ru:"Справедливо. Напишу сегодня."}]},
{id:"d3-police",level:"c1",title:"Остановка дорожной полицией",sub:"Офицер останавливает вашу машину",partner:"Police officer",steps:[
{npc:"Good evening. Do you know why I pulled you over?",ru:"Добрый вечер. Знаете, почему я вас остановил?"},
{me:[
{en:"No, officer, I’m not sure. Was there a problem?",ru:"Нет, офицер, не уверен. Была какая-то проблема?",ok:true,fb:"Вежливо, без признания вины — разумная тактика."},
{en:"Because you have nothing to do?",ru:"Потому что вам нечем заняться?",ok:false,fb:"Сарказм с полицией — очень плохая идея."},
{en:"Yes, I was driving too fast, sorry, sorry, sorry.",ru:"Да, я ехал слишком быстро, простите, простите.",ok:false,fb:"Паническое самообвинение — лучше спокойно выслушать офицера."}]},
{npc:"You were doing fifty in a thirty zone.",ru:"Вы ехали пятьдесят в зоне тридцать."},
{me:[
{en:"I apologise, I must have missed the sign. I’m not from around here.",ru:"Прошу прощения, должно быть, пропустил знак. Я не местный.",ok:true,fb:"Must have missed — предположение о прошлом; спокойное объяснение."},
{en:"Impossible. My car can’t go so fast.",ru:"Невозможно. Моя машина не может так быстро.",ok:false,fb:"Неправдоподобное отрицание раздражает."},
{en:"Fifty? I drove forty maximum.",ru:"Пятьдесят? Я ехал максимум сорок.",ok:false,fb:"Спор с офицером на месте бесполезен; оспаривайте позже официально."}]},
{npc:"Licence and registration, please.",ru:"Права и регистрацию, пожалуйста."},
{me:[
{en:"Of course. My licence is in my wallet — is it okay if I reach for it?",ru:"Конечно. Права в кошельке — можно я достану?",ok:true,fb:"Предупредить о движении — важная норма при остановке."},
{en:"Here you are, officer.",ru:"Вот, пожалуйста, офицер.",ok:true,fb:"Просто и вежливо."},
{en:"Wait, wait, I search.",ru:"Подождите, подождите, я ищу.",ok:false,fb:"Грамматика (I’m looking for it) и суетливый тон."}]},
{npc:"I’m going to issue you a fixed penalty notice this time.",ru:"На этот раз я выпишу вам штраф."},
{me:[
{en:"Understood. Thank you, officer.",ru:"Понятно. Спасибо, офицер.",ok:true,fb:"Принять спокойно — лучший исход."},
{en:"Can we solve this another way? Maybe cash?",ru:"Можно решить иначе? Может, наличными?",ok:false,fb:"Предложение взятки — уголовное преступление."},
{en:"Could you tell me how I can pay it or contest it?",ru:"Подскажите, как оплатить или оспорить?",ok:true,fb:"Contest a fine — «оспорить штраф»; законный вопрос."}]},
{npc:"It’s all on the notice. Drive safely.",ru:"Всё указано в квитанции. Езжайте осторожно."}]},
{id:"d3-scope",level:"c1",title:"Расширение объёма работ",sub:"Клиент просит «маленькую доработку» бесплатно",partner:"Client",steps:[
{npc:"While you’re at it, could you just add a mobile version? Should be quick, right?",ru:"Раз уж вы этим занимаетесь, добавите мобильную версию? Это быстро, да?"},
{me:[
{en:"I’d love to help with that. It’s actually a fairly significant piece of work, though.",ru:"С радостью помогу. Хотя это на самом деле довольно серьёзный объём работы.",ok:true,fb:"Позитив + честное предупреждение — мягкий отказ от «быстро»."},
{en:"No, that is not in the contract.",ru:"Нет, этого нет в контракте.",ok:false,fb:"Правда, но слишком сухо — клиент почувствует отказ."},
{en:"Quick? Are you crazy?",ru:"Быстро? Вы с ума сошли?",ok:false,fb:"Грубо и непрофессионально."}]},
{npc:"Really? I thought it was just resizing things.",ru:"Правда? Я думал, это просто поменять размеры."},
{me:[
{en:"It’s a common assumption, but it usually means reworking the layout and testing on multiple devices.",ru:"Это частое предположение, но обычно это переработка макета и тестирование на разных устройствах.",ok:true,fb:"Не обвиняет клиента в незнании — common assumption."},
{en:"You don’t understand anything in development.",ru:"Вы ничего не понимаете в разработке.",ok:false,fb:"Унижает клиента."},
{en:"Resizing is only small part, there is much more.",ru:"Размеры — только маленькая часть, там гораздо больше.",ok:false,fb:"Артикль (a small part) и без конкретики."}]},
{npc:"So what are we looking at?",ru:"И о чём речь?"},
{me:[
{en:"Roughly two weeks. I can send you a change request with a quote.",ru:"Примерно две недели. Пришлю запрос на изменение со сметой.",ok:true,fb:"Change request, quote — профессиональная лексика управления объёмом."},
{en:"I’d suggest we finish the current scope first, then scope the mobile work separately.",ru:"Предлагаю сначала закончить текущий объём, потом отдельно оценить мобильную версию.",ok:true,fb:"Scope как глагол — «оценить объём»; разумная последовательность."},
{en:"I will make it for free, no problem.",ru:"Сделаю бесплатно, без проблем.",ok:false,fb:"Уступка ведёт к scope creep и убыткам."}]},
{npc:"Okay, send me the numbers.",ru:"Ладно, пришлите цифры."},
{me:[
{en:"Will do. I’ll have it over to you by tomorrow.",ru:"Сделаю. Пришлю к завтрашнему дню.",ok:true,fb:"Have it over to you — разговорно-деловое «прислать»."},
{en:"Okay, numbers will come.",ru:"Ладно, цифры придут.",ok:false,fb:"Безлично и неестественно."},
{en:"Great — and thanks for being flexible on this.",ru:"Отлично — спасибо за гибкость.",ok:true,fb:"Благодарность укрепляет отношения."}]},
{npc:"Thanks.",ru:"Спасибо."}]},
{id:"d3-apology",level:"c1",title:"Серьёзное извинение",sub:"Вы забыли важное событие друга",partner:"Friend",steps:[
{npc:"You didn’t come to my graduation. I saved you a seat.",ru:"Ты не пришёл на мой выпускной. Я держала тебе место."},
{me:[
{en:"I know, and I have no excuse. I’m truly sorry.",ru:"Знаю, и мне нет оправданий. Мне искренне жаль.",ok:true,fb:"Без оправданий — главное в серьёзном извинении."},
{en:"Sorry, but I was busy, you know how it is.",ru:"Извини, но я был занят, сама знаешь.",ok:false,fb:"«Sorry, but» обесценивает извинение."},
{en:"Sorry if you were upset.",ru:"Прости, если ты расстроилась.",ok:false,fb:"Non-apology: перекладывает ответственность на чувства другого."}]},
{npc:"It really hurt. I felt like I wasn’t a priority.",ru:"Мне было очень больно. Я почувствовала, что не важна."},
{me:[
{en:"That makes complete sense. I let you down on a day that mattered.",ru:"Это совершенно понятно. Я подвёл тебя в важный день.",ok:true,fb:"Let someone down — признание; validating feelings."},
{en:"Don’t exaggerate, it was just one day.",ru:"Не преувеличивай, это всего один день.",ok:false,fb:"Обесценивание чувств — разрушает извинение."},
{en:"You’re right to feel that way, and I hate that I made you feel it.",ru:"Ты имеешь право так чувствовать, и мне ужасно, что я тебя до этого довёл.",ok:true,fb:"Признание её права на чувства + сожаление."}]},
{npc:"So what happened?",ru:"Так что случилось?"},
{me:[
{en:"I mixed up the dates. That’s not an excuse — I should have double-checked.",ru:"Я перепутал даты. Это не оправдание — надо было перепроверить.",ok:true,fb:"Объяснение без перекладывания ответственности."},
{en:"My phone calendar did a mistake.",ru:"Мой календарь в телефоне сделал ошибку.",ok:false,fb:"Make a mistake, и винить технику — увиливание."},
{en:"It doesn’t matter what happened.",ru:"Неважно, что случилось.",ok:false,fb:"Отказ объяснить звучит пренебрежительно."}]},
{npc:"Okay. I appreciate you owning it.",ru:"Ладно. Ценю, что ты это признаёшь."},
{me:[
{en:"Let me make it up to you — dinner this weekend, my treat, and you tell me everything.",ru:"Дай загладить вину — ужин в выходные, я угощаю, и ты всё расскажешь.",ok:true,fb:"Make it up to someone — «загладить вину»."},
{en:"So we are okay now?",ru:"Так у нас теперь всё нормально?",ok:false,fb:"Торопить прощение — неуместно."},
{en:"I’ll do better, I promise. Can I see the photos?",ru:"Я исправлюсь, обещаю. Покажешь фото?",ok:true,fb:"Обещание + интерес к её событию."}]},
{npc:"Yeah. I’d like that.",ru:"Да. Мне бы этого хотелось."}]},
{id:"d3-upfb",level:"c1",title:"Фидбэк начальнику",sub:"Руководитель просит честно оценить его стиль",partner:"Manager",steps:[
{npc:"I’d genuinely like your feedback on how I’m doing as a manager. Be honest.",ru:"Мне правда интересен ваш отзыв о том, какой я руководитель. Честно."},
{me:[
{en:"I appreciate you asking. Overall it’s been positive, but there’s one thing I’d flag.",ru:"Ценю, что спрашиваете. В целом всё хорошо, но одну вещь я бы отметил.",ok:true,fb:"Мягкий вход и flag — уместно при фидбэке вверх."},
{en:"Honestly? You micromanage everyone and it’s terrible.",ru:"Честно? Вы всех микроменеджите, и это ужасно.",ok:false,fb:"Honesty ≠ резкость; terrible звучит как приговор."},
{en:"Everything is perfect, you are the best boss.",ru:"Всё идеально, вы лучший начальник.",ok:false,fb:"Лесть не отвечает на просьбу и не помогает."}]},
{npc:"Go on.",ru:"Продолжайте."},
{me:[
{en:"Sometimes decisions get made in one-to-ones and the rest of us only hear about them later.",ru:"Иногда решения принимаются на встречах один на один, а остальные узнают позже.",ok:true,fb:"Пассив gets made — фокус на проблеме, а не на человеке."},
{en:"You never tell us anything.",ru:"Вы нам никогда ничего не говорите.",ok:false,fb:"Never — обобщение, вызывает защитную реакцию."},
{en:"It would help if decisions were shared with the whole team at the same time.",ru:"Было бы полезно, если бы решения сообщались всей команде одновременно.",ok:true,fb:"It would help if — конструктивная формулировка через решение."}]},
{npc:"That’s useful. I hadn’t realised. Any suggestions?",ru:"Полезно. Я не осознавал. Есть предложения?"},
{me:[
{en:"Maybe a short weekly summary in the channel? It needn’t take long.",ru:"Может, короткая еженедельная сводка в канале? Это не займёт много времени.",ok:true,fb:"Needn’t — изящная модальность; предложение конкретное."},
{en:"You must write to us every day.",ru:"Вы должны писать нам каждый день.",ok:false,fb:"Must + every day — указание начальнику звучит неуместно."},
{en:"I suggest you to send a summary.",ru:"Предлагаю вам присылать сводку.",ok:false,fb:"Suggest не употребляется с you to: I suggest sending / I suggest (that) you send."}]},
{npc:"Great idea. Thank you for being candid.",ru:"Отличная идея. Спасибо за откровенность."},
{me:[
{en:"Thanks for being open to it — not every manager would ask.",ru:"Спасибо за открытость — не каждый руководитель спросил бы.",ok:true,fb:"Взаимная признательность завершает разговор на хорошей ноте."},
{en:"You’re welcome. I have more points if you want.",ru:"Пожалуйста. Если хотите, у меня ещё есть пункты.",ok:false,fb:"Звучит как угроза новой порцией критики."},
{en:"No problem, boss.",ru:"Без проблем, босс.",ok:false,fb:"Слишком фамильярно для серьёзного разговора."}]},
{npc:"I’ll start this week.",ru:"Начну на этой неделе."}]},
{id:"d3-aipanel",level:"c2",title:"Дискуссия об этике ИИ",sub:"Вы спорите с оппонентом на публичной панели",partner:"Panelist",steps:[
{npc:"Frankly, regulation will only stifle innovation. Let the market sort it out.",ru:"Откровенно говоря, регулирование лишь задушит инновации. Пусть рынок разберётся."},
{me:[
{en:"With respect, markets are notoriously poor at pricing in long-tail risks.",ru:"При всём уважении, рынки печально известны неумением закладывать в цену маловероятные риски.",ok:true,fb:"With respect + price in — точный экономический регистр."},
{en:"With all respect, you talk nonsense.",ru:"При всём уважении, вы несёте чепуху.",ok:false,fb:"«With all respect» перед оскорблением — клише, лишь усиливающее грубость."},
{en:"Markets are notoriously bad in counting long-tail risks.",ru:"Рынки печально известны плохим подсчётом маловероятных рисков.",ok:false,fb:"Коллокация: bad at, а риски prices in / accounts for, а не counts."}]},
{npc:"Such as?",ru:"Например?"},
{me:[
{en:"Think of how long it took for the social costs of social media to register, let alone be addressed.",ru:"Вспомните, сколько времени ушло, чтобы социальная цена соцсетей была осознана, не говоря уж об исправлении.",ok:true,fb:"Let alone — «не говоря уже о»; register — «быть замеченным»."},
{en:"Social media. Everybody knows it destroyed society.",ru:"Соцсети. Все знают, что они разрушили общество.",ok:false,fb:"Гипербола и «everybody knows» — слабая аргументация на панели."},
{en:"Social media, whose harms were obvious only after a decade, by which point it was too late.",ru:"Соцсети, вред которых стал очевиден лишь через десять лет, когда было уже поздно.",ok:true,fb:"By which point — сложная, но естественная связка."}]},
{npc:"But heavy-handed rules would hand the advantage to less scrupulous countries.",ru:"Но жёсткие правила отдадут преимущество менее щепетильным странам."},
{me:[
{en:"That’s a legitimate concern, but it argues for international coordination, not for doing nothing.",ru:"Опасение обоснованное, но это аргумент за международную координацию, а не за бездействие.",ok:true,fb:"Argues for — переворачивает довод оппонента; это сильный риторический ход."},
{en:"That’s a legit concern, but whatever.",ru:"Обоснованное опасение, но неважно.",ok:false,fb:"Legit и whatever — разговорный сленг, неуместный на панели."},
{en:"This is a fair concern, however it argues for coordination.",ru:"Это справедливое опасение, однако оно говорит в пользу координации.",ok:false,fb:"However нельзя соединять предложения запятой — нужна точка с запятой или but; звучит неуклюже."}]},
{npc:"So where would you draw the line?",ru:"Так где бы вы провели черту?"},
{me:[
{en:"I’d start with proportionate, risk-based rules — light-touch for most uses, stringent for high-stakes ones.",ru:"Я бы начал с соразмерных правил по уровню риска — мягких для большинства случаев, строгих для критичных.",ok:true,fb:"Light-touch / stringent / high-stakes — точная policy-лексика."},
{en:"I’d draw it where it’s needed.",ru:"Провёл бы там, где нужно.",ok:false,fb:"Уход от ответа — на панели это заметят."},
{en:"Anywhere really, as long as there is a line.",ru:"Где угодно, лишь бы черта была.",ok:false,fb:"Несерьёзно и обесценивает собственную позицию."}]},
{npc:"We may not agree, but that’s a coherent position.",ru:"Мы можем не соглашаться, но позиция последовательная."}]},
{id:"d3-banter",level:"c2",title:"Британская ирония",sub:"Друг-британец иронизирует над вашим ужином",partner:"British friend",steps:[
{npc:"Well, this is certainly… adventurous. Is the smoke alarm part of the ambience?",ru:"Что ж, это определённо… смело. Пожарная сигнализация — часть атмосферы?"},
{me:[
{en:"I prefer to think of it as dinner and a show.",ru:"Предпочитаю считать это ужином с шоу.",ok:true,fb:"Невозмутимое самоироничное парирование — в духе британского юмора."},
{en:"No, the alarm is because I burned the meat.",ru:"Нет, сигнализация из-за того, что я сжёг мясо.",ok:false,fb:"Буквальный ответ на иронию — юмор не считан."},
{en:"Are you saying my food is bad?",ru:"Ты говоришь, что моя еда плохая?",ok:false,fb:"Обидчивость ломает лёгкий тон banter."}]},
{npc:"Quite the show. Is the chicken meant to be this… structurally sound?",ru:"Ещё какое шоу. А курица задумана такой… конструктивно прочной?"},
{me:[
{en:"It’s load-bearing. I’m thinking of patenting it.",ru:"Она несущая. Думаю запатентовать.",ok:true,fb:"Подхватить метафору и довести до абсурда — высший пилотаж banter."},
{en:"It is a bit hard, yes. Sorry.",ru:"Да, она немного жестковата. Извини.",ok:false,fb:"Извинение выводит из игры — шутку надо было подхватить."},
{en:"Bold words from a man who once microwaved a boiled egg.",ru:"Смелые слова от человека, который однажды разогрел варёное яйцо в микроволновке.",ok:true,fb:"Bold words from… — идиоматичная ответная колкость."}]},
{npc:"Low blow. Entirely accurate, but low.",ru:"Удар ниже пояса. Абсолютно точный, но ниже пояса."},
{me:[
{en:"I learned from the best.",ru:"Учился у лучших.",ok:true,fb:"Лёгкое ироничное завершение раунда."},
{en:"Yes! I destroyed you!",ru:"Да! Я тебя уничтожил!",ok:false,fb:"Чрезмерное торжество — banter строится на преуменьшении."},
{en:"Sorry, I didn’t want to offend you.",ru:"Прости, не хотел тебя обидеть.",ok:false,fb:"Серьёзное извинение в шутливой перепалке — сбивает тон."}]},
{npc:"Shall we just order a pizza?",ru:"Может, просто закажем пиццу?"},
{me:[
{en:"I thought you’d never ask.",ru:"Я уж думал, ты не предложишь.",ok:true,fb:"Идиома с ироничной благодарностью."},
{en:"Yes, my cooking is not very good actually.",ru:"Да, вообще-то я не очень хорошо готовлю.",ok:false,fb:"Буквальное признание — не в стиле перепалки."},
{en:"Fine, but only because I’m feeling generous.",ru:"Ладно, но только потому что я сегодня щедрый.",ok:true,fb:"Притворное снисхождение — классическая ирония."}]},
{npc:"Generous. Of course.",ru:"Щедрый. Разумеется."}]},
{id:"d3-betrayal",level:"c2",title:"Извинение за предательство",sub:"Вы раскрыли секрет друга",partner:"Close friend",steps:[
{npc:"You told them. The one thing I asked you to keep to yourself.",ru:"Ты им рассказал. Единственное, о чём я просил держать при себе."},
{me:[
{en:"I did, and there’s no way to dress it up. I broke your trust.",ru:"Да, и это никак не приукрасить. Я предал твоё доверие.",ok:true,fb:"Dress something up — «приукрашивать»; полная ответственность."},
{en:"I only told one person, it’s not like I posted it online.",ru:"Я рассказал только одному, не в интернет же выложил.",ok:false,fb:"Минимизация — главная ошибка извинения."},
{en:"I’m sorry for what happened.",ru:"Мне жаль, что так случилось.",ok:false,fb:"Безличная формулировка уходит от ответственности — «случилось» само."}]},
{npc:"Why? I genuinely want to understand.",ru:"Почему? Я правда хочу понять."},
{me:[
{en:"I was trying to get them to cut you some slack — but that was my call to make, not yours, and it wasn’t mine to make.",ru:"Я хотел, чтобы они к тебе были снисходительнее — но это решение было не моим.",ok:false,fb:"Мысль верная, но фраза запуталась (my call… not mine). На C2 важна ясность."},
{en:"I thought it might help them understand you, but that wasn’t my decision to make.",ru:"Думал, это поможет им тебя понять, но это было не моё решение.",ok:true,fb:"Not my decision to make — признание границы без оправдания."},
{en:"Honestly, there’s no reason that would make it okay. I wasn’t thinking.",ru:"Честно, нет причины, которая бы это оправдала. Я не подумал.",ok:true,fb:"Честность без попытки оправдаться."}]},
{npc:"I don’t know if I can trust you again.",ru:"Не знаю, смогу ли тебе снова доверять."},
{me:[
{en:"I understand, and I won’t pressure you. I’d just like the chance to earn it back.",ru:"Понимаю и не буду давить. Хотел бы только шанс заслужить его снова.",ok:true,fb:"Earn trust back — естественная коллокация."},
{en:"Come on, we’ve been friends for ten years. Just forget it.",ru:"Да ладно, мы дружим десять лет. Просто забудь.",ok:false,fb:"Требование забыть обесценивает боль."},
{en:"You have to trust me, I promise it was the last time.",ru:"Ты должен мне доверять, обещаю, это было в последний раз.",ok:false,fb:"Have to — давление; ощущение, что «следующий раз» возможен."}]},
{npc:"I need some time.",ru:"Мне нужно время."},
{me:[
{en:"Of course. Take all the time you need. I’ll be here.",ru:"Конечно. Сколько угодно. Я рядом.",ok:true,fb:"Уважение к просьбе — единственный верный ответ."},
{en:"How much time? A week?",ru:"Сколько времени? Неделю?",ok:false,fb:"Торговаться о сроках прощения — бестактно."},
{en:"Fair. Whenever you’re ready to talk — or not — I’ll respect that.",ru:"Справедливо. Когда будешь готов поговорить — или не будешь — я это приму.",ok:true,fb:"Признание права на любой исход."}]},
{npc:"Thank you for not making excuses.",ru:"Спасибо, что не оправдываешься."}]},
{id:"d3-secondop",level:"c2",title:"Второе мнение врача",sub:"Вы обсуждаете с онкологом варианты лечения",partner:"Consultant",steps:[
{npc:"Your previous doctor recommended surgery. Having reviewed the scans, I’d lean towards active monitoring.",ru:"Предыдущий врач рекомендовал операцию. Изучив снимки, я бы склонялся к активному наблюдению."},
{me:[
{en:"That’s quite a divergence. Could you walk me through your reasoning?",ru:"Это серьёзное расхождение. Объясните, пожалуйста, ход ваших рассуждений?",ok:true,fb:"Divergence + walk me through — точный и вежливый запрос."},
{en:"So the other doctor was wrong?",ru:"Значит, другой врач ошибся?",ok:false,fb:"Сталкивает врачей; лучше спросить о логике."},
{en:"Why you think differently from him?",ru:"Почему вы думаете иначе, чем он?",ok:false,fb:"Ошибка в вопросе: Why do you think…; и звучит прямолинейно."}]},
{npc:"The tumour is small and slow-growing. Surgery carries risks that may outweigh the benefits at this stage.",ru:"Опухоль маленькая и медленно растёт. Риски операции на этой стадии могут перевесить пользу."},
{me:[
{en:"What would trigger a change of course — what would you be watching for?",ru:"Что стало бы поводом сменить тактику — за чем вы будете следить?",ok:true,fb:"Trigger a change of course — сильная формулировка."},
{en:"Outweigh in what sense? Are we talking complications, recovery time?",ru:"Перевесить в каком смысле? Речь об осложнениях, восстановлении?",ok:true,fb:"Уточнение сути рисков — грамотный вопрос пациента."},
{en:"So I can do nothing and forget about it?",ru:"Значит, можно ничего не делать и забыть?",ok:false,fb:"Неверно понимает активное наблюдение — это не «забыть»."}]},
{npc:"We’d scan every six months. Any significant growth and we’d reconsider surgery.",ru:"Снимки каждые полгода. При значительном росте вернёмся к вопросу операции."},
{me:[
{en:"And is there a window beyond which surgery becomes less effective?",ru:"А есть ли окно, после которого операция становится менее эффективной?",ok:true,fb:"Window — точное слово для критического периода."},
{en:"I’m afraid that waiting gives me more anxiety than the operation.",ru:"Боюсь, ожидание вызывает у меня больше тревоги, чем операция.",ok:true,fb:"Честно о психологическом аспекте — врачи это учитывают."},
{en:"I prefer that you cut it now and finish.",ru:"Предпочитаю, чтобы вы вырезали сейчас и закончили.",ok:false,fb:"Prefer that you cut — неуклюже; и решение без вопросов о рисках."}]},
{npc:"Both are valid choices. It’s your decision, and I’ll support either.",ru:"Оба варианта обоснованы. Решать вам, я поддержу любой."},
{me:[
{en:"Thank you. I’d like to sleep on it and discuss it with my family.",ru:"Спасибо. Хочу подумать до завтра и обсудить с семьёй.",ok:true,fb:"Sleep on it — идиома «отложить решение до утра»."},
{en:"Okay. Then you decide for me.",ru:"Ладно. Тогда решите за меня.",ok:false,fb:"Отказ от ответственности после того, как врач предоставил выбор."},
{en:"That’s reassuring. Could you put your recommendation in writing?",ru:"Это обнадёживает. Можете изложить рекомендацию письменно?",ok:true,fb:"Разумная просьба при втором мнении."}]},
{npc:"Of course. Take your time.",ru:"Конечно. Не торопитесь."}]},
{id:"d3-liability",level:"c2",title:"Ответственность в контракте",sub:"Юрист разбирает пункт об ограничении ответственности",partner:"Solicitor",steps:[
{npc:"Clause fourteen caps your liability at the contract value. That’s fairly standard.",ru:"Пункт четырнадцать ограничивает вашу ответственность суммой контракта. Это довольно стандартно."},
{me:[
{en:"Does that cap extend to data breaches, or are those carved out?",ru:"Распространяется ли лимит на утечки данных, или они исключены?",ok:true,fb:"Carve out — юридический жаргон «исключить из положения»."},
{en:"Okay, standard is good. Next.",ru:"Окей, стандарт — это хорошо. Дальше.",ok:false,fb:"Принимать на веру ключевой пункт — рискованно."},
{en:"Is the cap covering also data leaks?",ru:"Лимит покрывает также утечки данных?",ok:false,fb:"Неестественная грамматика; лучше Does the cap also cover…"}]},
{npc:"Good question — they’re carved out. Liability for breaches is uncapped.",ru:"Хороший вопрос — исключены. Ответственность за утечки не ограничена."},
{me:[
{en:"That’s a considerable exposure for a firm our size. Is that negotiable?",ru:"Это значительный риск для компании нашего размера. Это обсуждаемо?",ok:true,fb:"Exposure — термин для «подверженности риску»."},
{en:"Uncapped? That’s insane!",ru:"Без лимита? Это безумие!",ok:false,fb:"Эмоциональная реакция неуместна в консультации."},
{en:"Could we propose a separate, higher cap for breaches — say, three times the fees?",ru:"Можем предложить отдельный, более высокий лимит для утечек — скажем, втрое больше вознаграждения?",ok:true,fb:"Конкретное встречное предложение — лучшая тактика."}]},
{npc:"It’s worth trying. They may push back, though.",ru:"Стоит попробовать. Хотя они могут возражать."},
{me:[
{en:"Then we could offer enhanced security commitments as a quid pro quo.",ru:"Тогда можно предложить усиленные обязательства по безопасности в качестве встречной уступки.",ok:true,fb:"Quid pro quo — уместная латынь в юридическом контексте."},
{en:"If they push back, we push harder.",ru:"Если они давят, мы давим сильнее.",ok:false,fb:"Конфронтационная тактика без стратегии."},
{en:"If they refuse, what is our walk-away point in your view?",ru:"Если откажут, где, по-вашему, наша точка выхода?",ok:true,fb:"Walk-away point — переговорная терминология."}]},
{npc:"I’d say anything above five times fees is unacceptable.",ru:"Я бы сказал, всё выше пятикратного вознаграждения неприемлемо."},
{me:[
{en:"Agreed. Please draft a redline on that basis.",ru:"Согласен. Пожалуйста, подготовьте правки на этой основе.",ok:true,fb:"Redline — документ с отмеченными правками."},
{en:"Okay, write them something.",ru:"Ладно, напишите им что-нибудь.",ok:false,fb:"Размыто и небрежно для юридической работы."},
{en:"Agreed, and I suppose we must also check our insurance covers it, mustn’t we?",ru:"Согласен, и, полагаю, надо проверить, покрывает ли это страховка, не так ли?",ok:false,fb:"Tag-question здесь звучит неуверенно-просительно для клиента, дающего указания; лучше Let’s also check…"}]},
{npc:"I’ll have it to you by Thursday.",ru:"Пришлю к четвергу."}]},
{id:"d3-tribunal",level:"c2",title:"Официальный спор с арендодателем",sub:"Вы обсуждаете претензию через агентство",partner:"Letting agent",steps:[
{npc:"The landlord maintains that the damp is a result of your lifestyle — drying clothes indoors and so on.",ru:"Арендодатель утверждает, что сырость — следствие вашего образа жизни: сушка белья в квартире и так далее."},
{me:[
{en:"I’d dispute that. The surveyor’s report attributes it to a defective gutter.",ru:"Я бы это оспорил. В отчёте оценщика причиной указан неисправный водосток.",ok:true,fb:"Dispute, attribute to — точный формальный регистр."},
{en:"That’s rubbish. It’s his building, his problem.",ru:"Чепуха. Его дом — его проблема.",ok:false,fb:"Разговорный тон ослабляет позицию в формальном споре."},
{en:"I would argue against it because the report says about gutter.",ru:"Я бы поспорил, потому что отчёт говорит про водосток.",ok:false,fb:"Says about — ошибка: the report states / says that…"}]},
{npc:"He may commission his own survey.",ru:"Он может заказать собственную экспертизу."},
{me:[
{en:"He’s entitled to, of course. In the meantime, the mould is a health hazard and needs addressing.",ru:"Он имеет право, конечно. Тем временем плесень опасна для здоровья и требует устранения.",ok:true,fb:"Be entitled to; needs addressing — естественный формальный стиль."},
{en:"Okay, but until then I’m not paying rent.",ru:"Хорошо, но до тех пор я не плачу аренду.",ok:false,fb:"Самовольное удержание аренды может обернуться против вас юридически."},
{en:"Fine, but repairs can’t reasonably be postponed pending a second opinion.",ru:"Хорошо, но ремонт нельзя обоснованно откладывать до второго заключения.",ok:true,fb:"Pending — «в ожидании»; аргументированно."}]},
{npc:"What exactly are you asking for?",ru:"Чего именно вы требуете?"},
{me:[
{en:"Repair of the gutter within fourteen days, and a proportionate rent reduction for the affected period.",ru:"Ремонта водостока в течение 14 дней и соразмерного снижения аренды за этот период.",ok:true,fb:"Чёткие требования со сроком — сильная позиция."},
{en:"Just fix everything and give me money.",ru:"Просто почините всё и дайте денег.",ok:false,fb:"Расплывчато и грубо."},
{en:"I want that he repairs the gutter and returns me money.",ru:"Я хочу, чтобы он починил водосток и вернул мне деньги.",ok:false,fb:"Want that he — калька; I’d like him to…"}]},
{npc:"And if he declines?",ru:"А если он откажется?"},
{me:[
{en:"Then, regrettably, I’d have no option but to refer the matter to the local council.",ru:"Тогда, к сожалению, мне не останется ничего, кроме как передать дело в муниципалитет.",ok:true,fb:"Have no option but to + regrettably — вежливая, но твёрдая угроза."},
{en:"Then I will make his life hell.",ru:"Тогда я превращу его жизнь в ад.",ok:false,fb:"Угроза в формальном споре может быть использована против вас."},
{en:"I’d rather not speculate, but I’m aware of my options.",ru:"Не хотелось бы гадать, но я знаю свои варианты.",ok:true,fb:"Сдержанный намёк — дипломатично и весомо."}]},
{npc:"Understood. I’ll relay that to him today.",ru:"Понятно. Передам ему сегодня."}]},
{id:"d3-hostileqa",level:"c2",title:"Жёсткие вопросы инвестора",sub:"Скептичный инвестор атакует ваш питч",partner:"Investor",steps:[
{npc:"Your growth looks impressive, but isn’t it just paid acquisition? Strip that out and what’s left?",ru:"Рост впечатляет, но это не просто платное привлечение? Уберите его — что останется?"},
{me:[
{en:"Fair challenge. Roughly forty percent of new users come organically, and that share’s been rising.",ru:"Справедливый вопрос. Около сорока процентов пользователей приходят органически, и доля растёт.",ok:true,fb:"Fair challenge + цифра — уверенно и без обороны."},
{en:"No, you are not understanding our model.",ru:"Нет, вы не понимаете нашу модель.",ok:false,fb:"Ошибка (you don’t understand) и обвинение инвестора."},
{en:"Well, every company pays for growth at the beginning, it’s normal.",ru:"Ну, каждая компания платит за рост сначала, это нормально.",ok:false,fb:"Уклонение от вопроса; инвестор хочет данные."}]},
{npc:"Forty percent isn’t exactly a moat.",ru:"Сорок процентов — не то чтобы защитный ров."},
{me:[
{en:"Agreed, on its own it isn’t. The moat is our proprietary data, which compounds with every user.",ru:"Согласен, само по себе — нет. Наш ров — собственные данные, которые накапливают ценность с каждым пользователем.",ok:true,fb:"Compound — ключевой термин инвестиционной риторики."},
{en:"What do you mean, moat? We don’t have a castle.",ru:"Что значит ров? У нас нет замка.",ok:false,fb:"Непонимание стандартного инвест-термина (moat — конкурентное преимущество)."},
{en:"Granted, but retention tells a different story: sixty percent are still active after a year.",ru:"Допустим, но удержание говорит иное: 60% активны через год.",ok:true,fb:"Granted, but — элегантная уступка с контраргументом."}]},
{npc:"What happens when a big player copies you?",ru:"Что будет, когда крупный игрок вас скопирует?"},
{me:[
{en:"They might well try. But we’re eighteen months ahead, and incumbents rarely move fast in a niche this small.",ru:"Вполне могут попытаться. Но мы на полтора года впереди, а гиганты редко быстро двигаются в такой узкой нише.",ok:true,fb:"Might well, incumbents — точная лексика C2."},
{en:"They can’t, it’s impossible.",ru:"Не смогут, это невозможно.",ok:false,fb:"Наивная самоуверенность — красный флаг для инвестора."},
{en:"We will fight with them until the end.",ru:"Мы будем бороться с ними до конца.",ok:false,fb:"Пафос вместо стратегии; fight with — ещё и «ссориться с»."}]},
{npc:"Hm. You’ve answered better than most.",ru:"Хм. Вы ответили лучше большинства."},
{me:[
{en:"I appreciate the rigour. I’m happy to share the cohort data after the meeting.",ru:"Ценю вашу дотошность. С удовольствием пришлю когортные данные после встречи.",ok:true,fb:"Rigour + предложение данных — профессиональное завершение."},
{en:"Thanks, so will you invest?",ru:"Спасибо, так вы инвестируете?",ok:false,fb:"Преждевременный вопрос ставит инвестора в неловкое положение."},
{en:"Thank you — it’s the tough questions that make the business better.",ru:"Спасибо — именно жёсткие вопросы делают бизнес лучше.",ok:true,fb:"Cleft sentence it’s… that — изящно и искренне."}]},
{npc:"Send it over.",ru:"Присылайте."}]},
{id:"d3-band9",level:"c2",title:"IELTS на 9 баллов",sub:"Сложные абстрактные вопросы Part 3",partner:"Examiner",steps:[
{npc:"To what extent should governments be responsible for people’s health?",ru:"В какой мере правительства должны отвечать за здоровье людей?"},
{me:[
{en:"I’d say they have a duty to create the conditions for health, though individual choices obviously play their part.",ru:"Я бы сказал, у них есть обязанность создавать условия для здоровья, хотя личный выбор, очевидно, тоже играет роль.",ok:true,fb:"Hedging + уступка — образцовый ответ на «to what extent»."},
{en:"Completely. Government must do everything.",ru:"Полностью. Правительство должно делать всё.",ok:false,fb:"Категоричность без нюансов — низкий балл за развитие ответа."},
{en:"It’s a hot potato question, to be fair.",ru:"Это горячая картошка, справедливости ради.",ok:false,fb:"Hot potato — «щекотливая тема», но как прилагательное к question и без ответа звучит натянуто."}]},
{npc:"Could you give an example?",ru:"Можете привести пример?"},
{me:[
{en:"Take sugar taxes: they nudge behaviour without banning anything outright.",ru:"Возьмите налоги на сахар: они подталкивают поведение, ничего прямо не запрещая.",ok:true,fb:"Nudge, outright — продвинутая лексика."},
{en:"For example, a sugar tax, which has been shown to reduce consumption in several countries.",ru:"Например, налог на сахар, который снизил потребление в ряде стран.",ok:true,fb:"Пассив has been shown — академичный оттенок."},
{en:"Like, for instance, they make taxes for sugar.",ru:"Ну, например, они делают налоги на сахар.",ok:false,fb:"Like + for instance — повтор; make taxes — неверная коллокация (impose/introduce)."}]},
{npc:"Some argue that’s paternalistic. What’s your view?",ru:"Некоторые считают это патернализмом. Ваше мнение?"},
{me:[
{en:"There’s some truth in that, but I think the paternalism charge rings a little hollow when the costs fall on public healthcare.",ru:"Доля правды есть, но обвинение в патернализме звучит пустовато, когда расходы ложатся на здравоохранение.",ok:true,fb:"Ring hollow — идиома «звучать неубедительно»."},
{en:"Yes, it’s paternalistic, I agree with them.",ru:"Да, это патернализм, согласен с ними.",ok:false,fb:"Корректно, но без развития; на C2 нужен аргумент."},
{en:"I would not say that it is paternalism, it is more like care.",ru:"Я бы не сказал, что это патернализм, это больше как забота.",ok:false,fb:"Приемлемо по грамматике, но простовато; more like care звучит наивно для Band 9."}]},
{npc:"Thank you. That’s the end of the test.",ru:"Спасибо. Тест окончен."}]},
{id:"d3-grief",level:"c2",title:"Разговор о горе",sub:"Друг недавно потерял отца",partner:"Friend",steps:[
{npc:"Sorry, I’m not great company at the moment. Dad’s funeral was last week.",ru:"Прости, я сейчас не лучшая компания. Похороны отца были на прошлой неделе."},
{me:[
{en:"You don’t need to apologise. I’m just glad you came.",ru:"Не надо извиняться. Я просто рад, что ты пришёл.",ok:true,fb:"Снимает с человека обязанность «держаться»."},
{en:"Oh, I know exactly how you feel.",ru:"О, я точно знаю, что ты чувствуешь.",ok:false,fb:"Даже с похожим опытом, «exactly» звучит самонадеянно."},
{en:"He is in a better place now.",ru:"Он теперь в лучшем мире.",ok:false,fb:"Клише может задеть, особенно если вы не знаете взгляды человека."}]},
{npc:"Everyone keeps saying it gets easier. I’m not sure I want it to.",ru:"Все говорят, что станет легче. Не уверен, что хочу этого."},
{me:[
{en:"That makes sense — as if it getting easier would mean letting him go.",ru:"Понимаю — будто облегчение означало бы отпустить его.",ok:true,fb:"Тонкое отражение чувства — глубокая эмпатия."},
{en:"Don’t be silly, of course you want it.",ru:"Не глупи, конечно хочешь.",ok:false,fb:"Спорить с чувствами горюющего — бестактно."},
{en:"Maybe it doesn’t get easier so much as you learn to carry it differently.",ru:"Может, легче не становится — просто учишься нести это иначе.",ok:true,fb:"Not so much X as Y — изящная конструкция C2; мягкая мудрость."}]},
{npc:"Yeah. He’d have hated all the fuss, you know.",ru:"Да. Он бы терпеть не мог всей этой суеты."},
{me:[
{en:"Tell me about him. What was he like?",ru:"Расскажи о нём. Каким он был?",ok:true,fb:"Приглашение вспоминать — часто самое ценное."},
{en:"Anyway, let’s talk about something positive.",ru:"Ладно, давай о чём-то позитивном.",ok:false,fb:"Резкая смена темы показывает дискомфорт, а не поддержку."},
{en:"Sounds like he was a no-nonsense kind of man.",ru:"Похоже, он был человеком без лишних церемоний.",ok:true,fb:"No-nonsense — точная идиома, показывает внимание."}]},
{npc:"He was. Thanks for letting me ramble.",ru:"Был. Спасибо, что даёшь мне выговориться."},
{me:[
{en:"Ramble all you like. I mean it.",ru:"Выговаривайся сколько хочешь. Я серьёзно.",ok:true,fb:"Подхватить его слово — тёплая отзеркаливающая поддержка."},
{en:"No problem, it was interesting.",ru:"Без проблем, было интересно.",ok:false,fb:"Interesting звучит отстранённо, как о лекции."},
{en:"You weren’t rambling. And I’m around, whenever.",ru:"Ты не болтал. И я рядом, всегда.",ok:true,fb:"Мягко опровергает самокритику, предлагает присутствие."}]},
{npc:"Thanks, mate.",ru:"Спасибо, друг."}]},
{id:"d3-stepdown",level:"c2",title:"Уход из стартапа",sub:"Вы сообщаете сооснователю, что покидаете компанию",partner:"Co-founder",steps:[
{npc:"You sounded serious on the phone. What’s up?",ru:"По телефону ты звучал серьёзно. Что случилось?"},
{me:[
{en:"There’s no easy way to put this, so I’ll be straight with you: I’ve decided to step back from the company.",ru:"Это непросто сказать, поэтому скажу прямо: я решил отойти от компании.",ok:true,fb:"Step back — мягче, чем quit; прямота ценится между партнёрами."},
{en:"I am going out from the company.",ru:"Я выхожу из компании.",ok:false,fb:"Go out from — калька; правильно leave / step down / step back."},
{en:"I quit. Sorry, bro.",ru:"Я ухожу. Извини, бро.",ok:false,fb:"Слишком небрежно для решения такого масштаба."}]},
{npc:"Wow. I didn’t see that coming. Is it something I’ve done?",ru:"Ого. Не ожидал. Это из-за чего-то, что я сделал?"},
{me:[
{en:"Not at all. If anything, you’re the reason I’ve stayed this long. I’m just running on empty.",ru:"Вовсе нет. Скорее, ты причина, по которой я так долго оставался. Просто я выгорел.",ok:true,fb:"Running on empty — идиома «на последнем издыхании»; if anything — тонкая оговорка."},
{en:"Partly, yes, but let’s not talk about it.",ru:"Отчасти да, но давай не будем об этом.",ok:false,fb:"Намёк без объяснения оставит обиду и недосказанность."},
{en:"No, it’s on me. My priorities have shifted, and you deserve someone who’s all in.",ru:"Нет, дело во мне. Приоритеты сместились, а тебе нужен человек, вовлечённый полностью.",ok:true,fb:"It’s on me, all in — естественная лексика ответственности."}]},
{npc:"What about your equity? And the investors?",ru:"А твоя доля? И инвесторы?"},
{me:[
{en:"I’m open to whatever’s fair — I’d rather we sort it out amicably than lawyer up.",ru:"Я открыт к любому справедливому варианту — лучше договориться полюбовно, чем привлекать юристов.",ok:true,fb:"Amicably, lawyer up — точный регистр между партнёрами."},
{en:"My shares stay with me, it’s my right.",ru:"Мои акции остаются у меня, это моё право.",ok:false,fb:"Жёсткая позиция с порога делает разговор конфликтным."},
{en:"I’d propose a phased handover over three months so the investors aren’t blindsided.",ru:"Предлагаю поэтапную передачу дел за три месяца, чтобы инвесторы не были застигнуты врасплох.",ok:true,fb:"Blindside — «застать врасплох»; продуманный план."}]},
{npc:"I need to process this.",ru:"Мне нужно это переварить."},
{me:[
{en:"Of course. I’m not going anywhere until we’ve figured it out together.",ru:"Конечно. Я никуда не денусь, пока мы вместе всё не решим.",ok:true,fb:"Двусмысленность «not going anywhere» обыграна тепло."},
{en:"Okay, but I need answer until Monday.",ru:"Ладно, но мне нужен ответ до понедельника.",ok:false,fb:"Until vs by: by Monday; и давление неуместно."},
{en:"Take whatever time you need. This doesn’t change what we’ve built.",ru:"Сколько нужно. Это не отменяет того, что мы построили.",ok:true,fb:"Признание общей истории смягчает удар."}]},
{npc:"Thanks for telling me face to face.",ru:"Спасибо, что сказал лично."}]}
]);
