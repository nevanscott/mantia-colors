function range(start, end, step=1) {
    return (new Array((end - start) / step + 1)).fill(undefined).map((_, i) => i * step + start);
}

export const hues = range(0, 355, 5);

export const saturations = [12,25,38,50,62,75,88,100];

export const brightnesses = [12,25,38,50,62,75,88,100].reverse();
