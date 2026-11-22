# Enrichment pass (Ascend English)
For each assigned data file english/data/<name>.js (format: english/data/SPEC.md; sents now look like
["She [works|is working] here.","Она работает здесь.","why...", ["alt translation"]] ) write english/patch/enrich-<name>.json:
{
 "<lessonId>": {
   "tags": ["articles"],            // 1-3 topic tags from the FIXED list below
   "extra": [ ["Sentence with ONE [gap].","Перевод.","Почему (рус., 1-2 предложения)"], ... ]  // 6-8 NEW sentences
 }
}
extra: new, natural American English sentences practicing exactly the lesson's grammar/vocabulary (different from existing
sents), 3-14 words, exactly one [bracketed] key word/phrase (use [a|b] only if both genuinely correct), accurate Russian, short why.
FIXED tag list: sounds, reading, to-be, pronouns, articles, plurals, demonstratives, there-is, have, present-simple,
present-continuous, past-simple, past-continuous, present-perfect, present-perfect-continuous, past-perfect, future,
future-perfect, modals, modals-past, conditionals, wish, passive, causative, reported-speech, relative-clauses,
gerund-infinitive, questions, question-tags, prepositions, quantifiers, comparatives, adjectives-adverbs, conjunctions,
linking-discourse, word-order, inversion, emphasis-cleft, participles, subjunctive-formal, nominalisation, hedging,
ellipsis-substitution, phrasal-verbs, collocations, idioms, word-formation, confusing-words, register, writing, speaking,
listening, vocabulary-topic, slang-colloquial, pragmatics, style-rhetoric, pronunciation.
Validate JSON parses; every lesson of the file present; each extra item has exactly one [ ]. Use unique temp file names
containing your file names. Do NOT edit data files. Report: files, lessons, extra count, problems.
