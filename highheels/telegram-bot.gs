/**
 * Приём заявок с сайта → Telegram + Google-таблица.
 * Токен НЕ пишется в код: Настройки проекта → Свойства скрипта → BOT_TOKEN.
 * 1) Напиши боту /start (или добавь его в группу и напиши там что-нибудь).
 * 2) Запусти функцию setup() — она найдёт чат и сохранит CHAT_ID.
 * 3) Начать развертывание → Веб-приложение → Доступ: «Все». Скопируй URL.
 */

function setup() {
  const p = PropertiesService.getScriptProperties();
  const token = p.getProperty('BOT_TOKEN');
  if (!token) throw new Error('Добавь свойство BOT_TOKEN в настройках проекта');
  const res = JSON.parse(UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/getUpdates').getContentText());
  const upd = (res.result || []).reverse().find(u => (u.message || u.my_chat_member));
  if (!upd) throw new Error('Бот не видит сообщений. Напиши ему /start и запусти setup() ещё раз');
  const chat = (upd.message || upd.my_chat_member).chat;
  p.setProperty('CHAT_ID', String(chat.id));
  send_('✅ Бот подключён. Сюда будут приходить заявки на мастер-класс High Heels.');
  Logger.log('CHAT_ID = ' + chat.id + ' (' + (chat.title || chat.first_name) + ')');
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.website) return out_({ ok: true });            // ловушка для ботов
    const clean = s => String(s || '').slice(0, 500).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
    if (!clean(d.name) || String(d.phone || '').replace(/\D/g, '').length < 10) return out_({ ok: false });

    const lines = [
      '💃 <b>Новая заявка — High Heels, 29 ноября</b>',
      '',
      '<b>Имя:</b> ' + clean(d.name),
      '<b>Телефон:</b> ' + clean(d.phone),
      d.nick ? '<b>Ник:</b> ' + clean(d.nick) : '',
      '<b>Опыт:</b> ' + clean(d.level),
      d.comment ? '<b>Комментарий:</b> ' + clean(d.comment) : ''
    ].filter(Boolean);
    send_(lines.join('\n'));
    log_(d);
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

function send_(text) {
  const p = PropertiesService.getScriptProperties();
  UrlFetchApp.fetch('https://api.telegram.org/bot' + p.getProperty('BOT_TOKEN') + '/sendMessage', {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: p.getProperty('CHAT_ID'), text: text, parse_mode: 'HTML' })
  });
}

function log_(d) {
  const p = PropertiesService.getScriptProperties();
  let id = p.getProperty('SHEET_ID'), ss;
  if (id) ss = SpreadsheetApp.openById(id);
  else {
    ss = SpreadsheetApp.create('Заявки High Heels 29.11');
    ss.getSheets()[0].appendRow(['Дата', 'Имя', 'Телефон', 'Ник', 'Опыт', 'Комментарий']);
    p.setProperty('SHEET_ID', ss.getId());
  }
  ss.getSheets()[0].appendRow([new Date(), d.name, d.phone, d.nick || '', d.level, d.comment || '']);
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
