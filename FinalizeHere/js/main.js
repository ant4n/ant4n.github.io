let selectedElement = null;
let originalThemeContent = {}; // Object to store the original theme content

// Function to handle the selection of an SVG element
function selectElement(element) {
    const id = element.id;
    selectedElements = document.querySelectorAll(`#${id}`);
    
    document.getElementById('selectedElementName').innerText = id;

    const enableAlpha = element.classList.contains('allow-alpha');

    // Retrieve fill color and opacity
    let fillColor = element.getAttribute('fill');
    let fillOpacity = element.getAttribute('fill-opacity') || 1; // Default to 1 if not set

    // Convert opacity to a 2-digit hexadecimal value
    let opacityHex = Math.round(fillOpacity * 255).toString(16).padStart(2, '0');

    // Combine fill color and opacity into Hex8 format
    let combinedColor = fillColor + opacityHex;

    document.getElementById('colorPicker').style.display = 'block';

    // Reinitialize the color picker with or without alpha based on the class
    $("#colorPicker").spectrum("destroy"); // Destroy the previous instance
    $("#colorPicker").spectrum({
        color: combinedColor,  // Set the color with alpha
        preferredFormat: "hex",
        showAlpha: enableAlpha,  // Enable transparency slider
        showInitial: true,
        showInput: true,
        clickoutFiresChange: true,
        showButtons: false,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 5,
        palette: [ ],
        localStorageKey: "spectrum.homepage",
        replacerClassName: 'colorPickStyle',
        move: function(color) {
            const hexColor = color.toHexString();
            selectedElements.forEach(el => {
                el.setAttribute('fill', hexColor);

                if (enableAlpha) {
                    const alpha = color.getAlpha();
                    el.setAttribute('fill-opacity', alpha);
                }
            });
        },
        change: function(color) {
            const hexColor = color.toHexString();
            selectedElements.forEach(el => {
                el.setAttribute('fill', hexColor);

                if (enableAlpha) {
                    const alpha = color.getAlpha();
                    el.setAttribute('fill-opacity', alpha);
                }
            });
        }
    });

    // Set the color picker to the combined color
    $("#colorPicker").spectrum("set", combinedColor);
}


// Function to add event listeners to SVG elements
function addEventListenersToSVGElements(svg) {
    svg.querySelectorAll('.svg-child').forEach(element => {
        element.addEventListener('click', function(evt) {
            evt.stopPropagation(); // Prevent event from bubbling up
            selectElement(element);
        });
    });
}

// Function to convert the color to HEX8 format
function getHexColor(element) {
    const color = element.getAttribute('fill');
    const opacity = element.getAttribute('fill-opacity');

    if (!color) {
        return "#000000"; // Default to black if no color is set
    }

    if (opacity === null || opacity === "1") {
        // No opacity or full opacity (1) - return the 6-digit hex
        return color.length === 7 ? color : color.slice(0, 7); // #RRGGBB
    } else {
        // Convert to 8-digit hex if opacity is set
        const alpha = Math.round(parseFloat(opacity) * 255).toString(16).padStart(2, '0'); // Convert opacity to hex
        return color.length === 7 ? `${color}${alpha}` : color; // #RRGGBBAA
    }
}

// Function to parse and store the original theme content from the imported file
function parseAskFile(content) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, 'application/xml');

    // Clear the original content object
    originalThemeContent = {};

    // Find all elements with a "Value" attribute inside <Theme>
    const themeElements = xmlDoc.querySelectorAll('Theme > *');

    themeElements.forEach(el => {
        const id = el.tagName;
        const colorValue = el.getAttribute('Value');

        // Store the original value
        originalThemeContent[id] = colorValue;

        // Find all corresponding SVG elements by ID and update their attributes
        const svgElements = document.querySelectorAll(`#${id}`);
        svgElements.forEach(svgElement => {
            if (colorValue.length === 7) {
                // Standard hex without alpha (#RRGGBB)
                svgElement.setAttribute('fill', colorValue);
                svgElement.removeAttribute('fill-opacity'); // Remove opacity if it's standard hex
            } else if (colorValue.length === 9) {
                // Hex with alpha (#RRGGBBAA)
                const fillColor = colorValue.slice(0, 7);
                const fillOpacityHex = colorValue.slice(7, 9);
                const fillOpacity = parseInt(fillOpacityHex, 16) / 255;

                svgElement.setAttribute('fill', fillColor);
                svgElement.setAttribute('fill-opacity', fillOpacity.toString());
            }
        });
    });
}


// Function to generate the theme file
function generateThemeFile() {
    let themeContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    themeContent += '<Ableton MajorVersion="5" MinorVersion="12.0_12049" SchemaChangeCount="3" Creator="Ableton Live 12.0d1" Revision="">\n';
    themeContent += '\t<Theme>\n';

    // Update the stored content with new values from the SVGs
    document.querySelectorAll('.svg-child').forEach(element => {
        const id = element.id;
        const color = getHexColor(element);

        // Update the value in the originalThemeContent
        originalThemeContent[id] = color;
    });

    // Generate the theme file content based on the updated originalThemeContent
    for (const [id, value] of Object.entries(originalThemeContent)) {
        themeContent += `\t\t<${id} Value="${value}" />\n`;
    }

    themeContent += '\t</Theme>\n';
    themeContent += '</Ableton>';

    // Create a blob from the text content
    const blob = new Blob([themeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a link element and simulate a click to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CustomTheme.ask'; // Save as .ask file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    
}

// Setup event listeners and color picker on document ready
$(document).ready(function(){
    // Add event listeners to all SVG elements
    document.querySelectorAll('svg').forEach(svg => {
        addEventListenersToSVGElements(svg);
    });

    // Setup the generate button to create the theme file
    document.getElementById('generateButton').addEventListener('click', generateThemeFile);

    // Setup the import button to import a theme file
    document.getElementById('importButton').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

    // Handle file import and parsing
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            parseAskFile(fileContent);
        };
        reader.readAsText(file);
    });

    document.getElementById("toggleButton").addEventListener("click", function() {
        var img = document.getElementById("contextualPic");
        if (img.style.display === "none") {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
});
