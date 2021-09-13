function diamond(l, i = 1) {
    const
        STAR = '*',
        SPACE = ' ',
        LINE = SPACE.repeat((l - i) / 2) + STAR.repeat(i);

    console.log(LINE);
    if (i >= l) return;
    diamond(l, i + 2);
    console.log(LINE);
}

diamond(7);