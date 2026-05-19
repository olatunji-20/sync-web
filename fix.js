const fs=require("fs");
const p="src/components/settings/SettingsSyncSection.vue";
let s=fs.readFileSync(p,"utf8");
s=s.replace('class="flex items-center justify-between gap-4 mb-6"','class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6"');
s=s.replace('class="flex items-center gap-2 shrink-0"','class="flex items-center gap-2 w-full sm:w-auto shrink-0"');
s=s.replace("<div>\n        <h2","<motion>\n        <h2").replace("<p class=\"text-sm text-stone-500 mt-0.5\">Control","</motion>\n      <motion class=\"min-w-0\">\n        <h2").replace("Control how your bookmarks sync across browsers.</p>\n      </motion>","Control how your bookmarks sync across browsers.</p>");
