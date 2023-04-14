async function invertCSSColors(cssUrl) {
    const response = await fetch(cssUrl);
    const cssText = await response.text();
    console.log(cssText)

    const invertedCSS = cssText.replace(/#[a-f\d]{3,6}\b|rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)|rgba\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*\d*\.?\d+\)/gi, (match) => {
        if (match.startsWith('#')) {
            const hexValue = match.slice(1);
            console.log(match)
            const invertedHexValue = (0xFFFFFF - parseInt(hexValue, 16)).toString(16);
            console.log(`#${invertedHexValue.padStart(6, '0')}`)
            console.log('----HEX----')
            return `#${invertedHexValue.padStart(6, '0')}`;
        } else {
            const [r, g, b] = match.match(/\d+/g).map(Number);
            const invertedR = 255 - r;
            const invertedG = 255 - g;
            const invertedB = 255 - b;
            console.log(`rgb(${invertedR}, ${invertedG}, ${invertedB})`)
            return `rgb(${invertedR}, ${invertedG}, ${invertedB})`;
        }
    });

    const styleElement = document.createElement('style');
    styleElement.innerHTML = invertedCSS;
    document.head.appendChild(styleElement);
}

invertCSSColors(window.location.href).catch(r => console.log(r))