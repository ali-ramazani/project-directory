const generateMildColors = (count: number): string[] => {
  const baseColors = [
    "#FFB6C1",
    "#FAFAD2",
    "#E6E6FA",
    "#D3D3D3",
    "#AFEEEE",
    "#B0E0E6",
    "#F0E68C",
    "#F5DEB3",
    "#FFE4E1",
    "#ADD8E6",
  ];

  const mixWithWhite = (color: string, mixFactor: number): string => {
    const c = parseInt(color.slice(1), 16);
    const r = ((c >> 16) & 255) * mixFactor + 255 * (1 - mixFactor);
    const g = ((c >> 8) & 255) * mixFactor + 255 * (1 - mixFactor);
    const b = (c & 255) * mixFactor + 255 * (1 - mixFactor);
    return (
      "#" +
      ((Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b))
        .toString(16)
        .padStart(6, "0")
    );
  };

  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    const baseColor = baseColors[i % baseColors.length];
    const mixFactor = 0.5 + (i % 5) * 0.1;
    const mildColor = mixWithWhite(baseColor, mixFactor);
    colors.push(mildColor);
  }

  return colors;
};

export default generateMildColors;
