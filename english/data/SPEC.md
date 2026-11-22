# Content format (Ascend English course)

Each data file is plain JS, loaded via <script>. It must call:

addUnits("<level>", [ unit, unit, ... ]);

level ids: "start" (sounds/reading), "a1","a2","b1","b2","c1","c2".
Files: data/<level>-<n>.js (e.g. a1-1.js, a1-2.js). Units are appended in file order.

unit = { id:"a1u3", title:"Russian title", lessons:[lesson,...] }

lesson = {
  id: "a1u3l2",                 // unique, level+unit+lesson
  title: "Present Simple: утверждение",   // short, Russian or English term
  sub: "I work, she works",     // one-line hint
  theory: `HTML`,               // teacher-quality explanation IN RUSSIAN, thorough, examples.
     // allowed: <h3> <p> <b> <i> <ul><li> <ol> <table><tr><th><td>
     // <div class="tip">совет/ловушка</div>
     // <div class="ex"><b>English sentence</b><i>перевод</i></div>  (examples; tapping plays audio)
     // Use backticks; escape any backtick inside. American English spelling and usage.
  words: [ ["en word or phrase", "перевод", "IPA without slashes (optional)"], ... ],  // 6-12 items, new vocabulary of lesson
  sents: [ ["She [works] in an office.", "Она работает в офисе."], ... ],
     // 6-10 natural sentences. Exactly ONE [bracketed] key word/phrase per sentence = gap for fill-in.
     // Sentence length 3-14 words. Bracket target should test the lesson's grammar/vocab.
  quiz: [ ["Question (Russian or English)", "correct", "wrong1", "wrong2", "wrong3", "Пояснение на русском"], ... ],
     // 3-6 multiple-choice items testing the rule, plausible distractors (3 wrong, the 4th wrong optional).
  text: { en: "Reading/listening passage", ru: "перевод" }   // OPTIONAL; recommended in B1+ (80-200 words), A2 short.
}

Rules:
- Valid JS. Test with: node -e "global.addUnits=(l,u)=>console.log(l,u.length,u.reduce((a,x)=>a+x.lessons.length,0));require('./data/FILE.js')"
- No duplicate lesson ids. Real, correct English (American). Russian explanations like a great teacher: why, when, contrasts with Russian, typical mistakes of Russian speakers.
- No childish tone. Adult learner (21), goals: travel, work, relocation, exams, games/films.
