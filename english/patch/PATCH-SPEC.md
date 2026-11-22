# Review & explanation pass (Ascend English)

Content files: english/data/*.js (format: english/data/SPEC.md). Each lesson has
sents: [["She [works] in an office.", "Она работает в офисе."], ...] and quiz items.

YOUR JOB for each assigned file, for EVERY lesson:
1. PROOFREAD: fix wrong English (American), wrong Russian translations, wrong quiz answers,
   factual errors in theory. Make such fixes DIRECTLY in the data file with the Edit tool (small exact edits).
2. Write a patch file english/patch/<same-name>.json :
{
  "<lessonId>": {
    "why": ["...", "...", ...],      // REQUIRED, one per sentence in sents (same order, same length).
         // Russian, 1-2 short sentences: WHY the bracketed form is correct here (rule + clue in sentence).
         // e.g. "Present Simple: she + глагол с -s, потому что речь о регулярном действии (работа)."
    "gap":  { "2": "works|is working" },   // OPTIONAL: sentence index -> ALL acceptable fillers for the gap,
         // first = the original. Add ONLY if another filler is genuinely correct in this sentence.
         // Better: if the gap is ambiguous, prefer fixing the sentence itself in the data file.
    "alts": { "0": ["She works at an office."] }, // OPTIONAL: other natural full English translations of the Russian
         // that a learner might write (contractions are auto-accepted, don't list them). 0-3 per sentence.
    "qwhy": ["...", ...]   // OPTIONAL: per quiz item, short Russian reason why EACH wrong option is wrong,
         // format "wrong1 — потому что ...; wrong2 — ...". Same order as quiz.
  }
}
3. Validate: node -e "JSON.parse(require('fs').readFileSync('english/patch/FILE.json','utf8'))"
   and the data file still loads: node -e "global.addUnits=()=>{};require('./english/data/FILE.js')"
   and why.length === sents.length for every lesson (write a tiny node check).
Rules: explanations must be accurate, concise, teacher-quality, for an adult Russian speaker.
Report back only: files done, number of lessons, number of content fixes made (with 3-5 examples), problems.
