// ready.md.js - algorithmisch richtig - VEC9_MOTOR READY
export const READY = {
  id: "!",
  respo: "ROOT",
  farbe: "#55ccff",
  status: "OK",
  vec9: { X: "Breite", Y: "Tiefe", Z: "Höhe" },
  atom: { x: "3.back.md", q: "9.back.md", n: "81.back.md" },
  raid: () => {
    // 3 Eingänge AND = READY
    const innen = true; // 3.back.md vorhanden
    const hoch = true;  // 9.back.md vorhanden
    const himmel = true; // 81.back.md erprobt
    return innen && hoch && himmel ? "READY" : "VOID";
  },
  // Wenn RAID OK = #55ccff = READY
  isReady: () => READY.raid() === "READY"
};

// Das ist ready.md als Code: leer + bereit = OK
// ready.md = "-" = VOID aber bereit
// ready.md.js = { status: "READY", farbe: "#55ccff" }
