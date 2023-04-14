function invertColors() {
    const allElements = document.querySelectorAll('*');
    const colorProperties = ['color', 'background-color', 'border-color', 'outline-color', 'fill', 'stroke'];

    allElements.forEach((element) => {
        console.log(element)
        colorProperties.forEach((property) => {
            const style = window.getComputedStyle(element);
            const colorValue = style.getPropertyValue(property);
            if (colorValue.match(/^rgb/)) {
                const colorArray = colorValue.split(',');
                const red = parseInt(colorArray[0].replace(/[^0-9]/g, ''), 10);
                const green = parseInt(colorArray[1].replace(/[^0-9]/g, ''), 10);
                const blue = parseInt(colorArray[2].replace(/[^0-9]/g, ''), 10);
                const invertedRed = 255 - red;
                const invertedGreen = 255 - green;
                const invertedBlue = 255 - blue;
                const invertedColor = `rgba(${invertedRed}, ${invertedGreen}, ${invertedBlue})`;
                console.log(invertedColor)
                element.style.setProperty(property, invertedColor, style.getPropertyPriority(property));
            } else if (colorValue.match(/^#[0-9a-f]{3,6}$/i)) {
                const hex = colorValue.substring(1);
                const r = parseInt(hex.substring(0, 2), 16);
                const g = parseInt(hex.substring(2, 4), 16);
                const b = parseInt(hex.substring(4, 6), 16);
                const invertedRed = 255 - r;
                const invertedGreen = 255 - g;
                const invertedBlue = 255 - b;
                const invertedColor = `rgba(${invertedRed}, ${invertedGreen}, ${invertedBlue})`;
                console.log(invertedColor)
                element.style.setProperty(property, invertedColor, style.getPropertyPriority(property));
            }
        });
    });
}

invertColors()

//Works but does crazy shit :c