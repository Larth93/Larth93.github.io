# Vocabulary trainer content (Ascend English, ~15,000 words total across agents)

Goal: the ~15,000 most useful American English lemmas a learner needs to reach C2 / near-native reading
(general + work + academic + colloquial/idiomatic, incl. common phrasal verbs, but NOT proper nouns, NOT rare
technical jargon, NOT obscure archaic words). You cover ONLY words starting with your assigned letter range.
Target count for your range is given in the task — reach it (±10%).

File: english/vocab/v-<range>.js (name given in task). Content exactly:
addVocab([
 ["word","перевод (1-3 главных значения через запятую)","b1","Example sentence in natural American English.","Перевод примера."],
 ...
]);
- field 3 = CEFR band: a1,a2,b1,b2,c1,c2 (honest estimate of when a learner needs it; most rare words are c1/c2).
- Phrasal verbs / fixed phrases allowed as entries under the first word's letter (e.g. "give up" under g).
- Order entries by frequency (most common first), NOT alphabetically.
- Example: 5-14 words, shows typical usage/collocation. Russian translations natural and accurate.
- JS strings in double quotes; never put a raw " inside strings (use ’ for apostrophes in English? NO — apostrophes ' are fine inside double-quoted strings; for quotes inside text use «» in Russian and avoid them in English).
- Unique words only, no duplicates.
Write in several chunks if needed (append with multiple addVocab([...]); calls in the same file).
Validate: node -e "let n=0,s=new Set();global.addVocab=a=>a.forEach(x=>{n++;if(x.length!==5)throw x;s.add(x[0].toLowerCase())});require('./english/vocab/FILE.js');console.log(n,s.size)"
Use your own uniquely named temp files only (scratch files must include your range name). Report: file, count, problems.
