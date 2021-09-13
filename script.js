function diamond(l, i = 1) {
    //Nodefinējam constantes
    const
        ZVAIGZNE = '*',
        ATSTARPE = ' ',
        LINIJA = ATSTARPE.repeat((l - i) / 2) + ZVAIGZNE.repeat(i); // Noradam cik rezies atkārtot formulu, i ir 7

    //printējam consolē līnijas, kas ir padotais strings kurš tika definēts kā formula
    console.log(LINIJA);
    // pārvaude lai printētu apakšas līniju
    if (i >= l) return;
    //izsaucam function atkal ar + 2 lai printētu pārējās zvaigznītes
    diamond(l, i + 2);
    console.log(LINIJA);
}
//Izsaucam funkciju diamond ar argumentu 7
diamond(7);
