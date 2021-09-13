function diamond(l, i = 1) {
    //Nodefinējam constantes
    const
        STAR = '*',
        SPACE = ' ',
        LINE = SPACE.repeat((l - i) / 2) + STAR.repeat(i); // Noradam cik rezies atkārtot formulu, i ir 7

    //printējam consolē līnijas, kas ir padotais strings kurš tika definēts kā formula
    console.log(LINE);
    // pārvaude lai printētu apakšu
    if (i >= l) return;
    //izsaucam function atkal ar + 2 lai printētu vairāk zvaigznītes
    diamond(l, i + 2);
    console.log(LINE);
}
//Izsaucam funkciju daimonds
diamond(7);
