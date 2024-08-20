let selectedElement = null;
let originalThemeContent = {
    "ControlForeground": "#121212",
    "TextDisabled": "#6e6e6e",
    "ControlDisabled": "#f1f1f1",
    "MeterBackground": "#242424",
    "SurfaceHighlight": "#bcbcbc",
    "SurfaceArea": "#6e6e6e",
    "Desktop": "#818181",
    "ViewCheckControlEnabledOn": "#ffb901",
    "ScrollbarInnerHandle": "#5b5b5b",
    "ScrollbarInnerTrack": "#00000000",
    "ScrollbarLCDHandle": "#4f4f4f",
    "ScrollbarLCDTrack": "#3d3d3d",
    "ScrollbarMixerShowOnScrollHandle": "#00000066",
    "DetailViewBackground": "#c6c6c6",
    "PreferencesTab": "#a5a5a5",
    "SelectionFrame": "#3d3d3d",
    "ControlBackground": "#cfcfcf",
    "ControlFillHandle": "#cfcfcf",
    "ChosenDefault": "#ffb901",
    "ChosenRecord": "#ff595f",
    "ChosenPreListen": "#1a7df1",
    "ImplicitArm": "#ff000064",
    "RangeDefault": "#00eeff",
    "RangeDisabled": "#f1f1f1",
    "RangeDisabledOff": "#636363",
    "LearnMidi": "#4034ef",
    "LearnKey": "#ff6400",
    "LearnMacro": "#00da48",
    "RangeEditField": "#00cadb",
    "RangeEditField2": "#f87680",
    "BipolReset": "#00eeff",
    "ChosenAlternative": "#00eeff",
    "ChosenAlert": "#ff7d43",
    "ChosenPlay": "#00faa3",
    "Clip1": "#8b7936",
    "Clip2": "#999565",
    "Clip3": "#b8ce93",
    "Clip4": "#afb95b",
    "Clip5": "#52ba46",
    "Clip6": "#81d24c",
    "Clip7": "#6baace",
    "Clip8": "#4881aa",
    "Clip9": "#954eb2",
    "Clip10": "#ff5f80",
    "Clip11": "#dc4848",
    "Clip12": "#d66b18",
    "Clip13": "#e0aa2a",
    "Clip14": "#ffec75",
    "Clip15": "#e7e6e6",
    "Clip16": "#a0a0a0",
    "ClipText": "#000000",
    "ClipBorder": "#000000",
    "SceneContrast": "#636363",
    "SelectionBackground": "#cdf8ff",
    "StandbySelectionBackground": "#abc6cb",
    "SelectionForeground": "#121212",
    "StandbySelectionForeground": "#121212",
    "SelectionBackgroundContrast": "#afcfd4",
    "SurfaceBackground": "#a5a5a5",
    "TakeLaneTrackHighlighted": "#bcbcbc",
    "TakeLaneTrackNotHighlighted": "#9c9c9c",
    "AutomationColor": "#ea3c3c",
    "AutomationGrid": "#121212",
    "LoopColor": "#3d3d3d",
    "OffGridLoopColor": "#24293364",
    "ArrangementRulerMarkings": "#3d3d3d",
    "DetailViewRulerMarkings": "#3d3d3d",
    "ShadowDark": "#12121254",
    "ShadowLight": "#8a8a8acc",
    "DisplayBackground": "#5b5b5b",
    "AbletonColor": "#00ff00",
    "WaveformColor": "#222222ef",
    "DimmedWaveformColor": "#5a5a5adf",
    "VelocityColor": "#e95449",
    "VelocitySelectedOrHovered": "#5b8cff",
    "NoteProbability": "#636363",
    "Alert": "#ff7d43",
    "ControlOnForeground": "#121212",
    "ControlOffForeground": "#121212",
    "ControlOnDisabledForeground": "#121212",
    "ControlOffDisabledForeground": "#6e6e6e",
    "ControlOnAlternativeForeground": "#121212",
    "ControlTextBack": "#dfdfdf",
    "ControlContrastFrame": "#4f4f4f",
    "ControlSelectionFrame": "#4f4f4f",
    "ControlContrastTransport": "#a5a5a5",
    "ViewControlOn": "#ffb901",
    "ViewControlOff": "#a5a5a5",
    "Progress": "#ffb901",
    "ProgressText": "#636363",
    "TransportProgress": "#ffb901",
    "ClipSlotButton": "#5b5b5b",
    "BrowserBar": "#a5a5a5",
    "BrowserBarOverlayHintTextColor": "#4f4f4f",
    "BrowserDisabledItem": "#4f4f4f",
    "BrowserSampleWaveform": "#6e6e6e",
    "AutomationDisabled": "#595959",
    "AutomationMouseOver": "#891a1c",
    "MidiNoteMaxVelocity": "#e95449",
    "RetroDisplayBackground": "#242424",
    "RetroDisplayBackgroundLine": "#5b5b5b",
    "RetroDisplayForeground": "#ffb901",
    "RetroDisplayForeground2": "#00eeff",
    "RetroDisplayForegroundDisabled": "#a5a5a5",
    "RetroDisplayGreen": "#ffb901",
    "RetroDisplayRed": "#00eeff",
    "RetroDisplayHandle1": "#ffb901",
    "RetroDisplayHandle2": "#f87680",
    "RetroDisplayScaleText": "#cfcfcf7f",
    "RetroDisplayTitle": "#cfcfcf",
    "ThresholdLineColor": "#00eeff",
    "GainReductionLineColor": "#ffb901",
    "InputCurveColor": "#bcbcbc54",
    "InputCurveOutlineColor": "#00000000",
    "OutputCurveColor": "#cecece3f",
    "OutputCurveOutlineColor": "#cfcfcf",
    "SpectrumDefaultColor": "#bcbcbc54",
    "SpectrumAlternativeColor": "#1a7df1",
    "SpectrumGridLines": "#a6a6a63f",
    "Operator1": "#e0d825",
    "Operator2": "#29d6cd",
    "Operator3": "#6571f6",
    "Operator4": "#f3751b",
    "DrumRackScroller1": "#898989",
    "DrumRackScroller2": "#6e6e6e",
    "FilledDrumRackPad": "#cfcfcf",
    "SurfaceAreaFocus": "#6e6e6e",
    "FreezeColor": "#4391e6",
    "GridLabel": "#3c3c3c7f",
    "GridLineBase": "#1010103f",
    "ArrangerGridTiles": "#0f0f0f11",
    "DetailGridTiles": "#0f0f0f11",
    "GridGuideline": "#121212",
    "OffGridGuideline": "#1313134f",
    "TreeColumnHeadBackground": "#bcbcbc",
    "TreeColumnHeadForeground": "#3d3d3d",
    "TreeColumnHeadSelected": "#cfcfcf",
    "TreeColumnHeadFocus": "#bcbcbc",
    "TreeColumnHeadControl": "#6e6e6e",
    "TreeRowCategoryForeground": "#4f4f4f",
    "TreeRowCategoryBackground": "#00000000",
    "BrowserTagBackground": "#bcbcbc",
    "SearchIndication": "#ffde72",
    "KeyZoneBackground": "#acf6b4",
    "KeyZoneCrossfadeRamp": "#28bd56",
    "VelocityZoneBackground": "#f5a7a3",
    "VelocityZoneCrossfadeRamp": "#e95449",
    "SelectorZoneBackground": "#bed6f4",
    "SelectorZoneCrossfadeRamp": "#2d66d2",
    "ViewCheckControlEnabledOff": "#242424",
    "ViewCheckControlDisabledOn": "#dfdfdf",
    "ViewCheckControlDisabledOff": "#6e6e6e",
    "DefaultBlendFactor": "0.7440000176",
    "IconBlendFactor": "0.7300000191",
    "ClipBlendFactor": "0.7149999738",
    "NoteBorderStandbyBlendFactor": "0.5360000134",
    "RetroDisplayBlendFactor": "1",
    "CheckControlNotCheckedBlendFactor": "0.5",
    "MixSurfaceAreaBlendFactor": "0.375",
    "TextFrameSegmentBlendFactor": "0.3210000098",
    "NoteDisabledSelectedBlendFactor": "0.5",
    "BackgroundClip": "#898989",
    "BackgroundClipFrame": "#6e6e6e",
    "WarperTimeBarRulerBackground": "#878787",
    "WarperTimeBarMarkerBackground": "#929292",
    "MinVelocityNoteBlendFactor": "0.2639999986",
    "StripedBackgroundShadeFactor": "0.8180000186",
    "NonEditableAutomationAlpha": "127",
    "DisabledContextMenuIconAlpha": "85",
    "ClipBorderAlpha": "112",
    "ScrollBarAlpha": "255",
    "ScrollBarOnHoverAlpha": "255",
    "ScrollBarBackgroundAlpha": "255",
    "InaudibleTakeLightness": "0.5",
    "InaudibleTakeSaturation": "0.5",
    "InaudibleTakeNameLightness": "0.75",
    "InaudibleTakeNameSaturation": "0.75",
    "AutomationLaneClipBodyLightness": "0.440000000000000002",
    "AutomationLaneClipBodySaturation": "0.660000000000000031",
    "AutomationLaneHeaderLightness": "0.440000000000000002",
    "AutomationLaneHeaderSaturation": "0.660000000000000031",
    "TakeLaneHeaderLightness": "0.5",
    "TakeLaneHeaderSaturation": "0.5",
    "TakeLaneHeaderNameLightness": "0.75",
    "TakeLaneHeaderNameSaturation": "0.622999999999999998",
    "AutomationLaneHeaderNameLightness": "0.75",
    "AutomationLaneHeaderNameSaturation": "0.622999999999999998",
    "ClipContrastColorAdjustment": "32",
    "SessionSlotOklabLCompensationFactor": "50",
    "BipolarPotiTriangle": "#242424",
    "Poti": "#242424",
    "DeactivatedPoti": "#6e6e6e",
    "PotiNeedle": "#242424",
    "DeactivatedPotiNeedle": "#6e6e6e",
    "PianoBlackKey": "#5a5a5a",
    "PianoWhiteKey": "#f1f1f1",
    "PianoKeySeparator": "#a5a5a5",
    "TransportOffBackground": "#a5a5a5",
    "TransportOffDisabledForeground": "#6e6e6e",
    "TransportOffForeground": "#121212",
    "TransportSelectionBackground": "#cfcfcf",
    "Modulation": "#008cad",
    "ModulationDisabled": "#87a9b5",
    "ModulationMouseOver": "#005f79",
    "AutomationTransformToolFrame": "#242424bf",
    "AutomationTransformToolFrameActive": "#242424",
    "AutomationTransformToolHandle": "#242424bf",
    "AutomationTransformToolHandleActive": "#242424",
    "MutedAuditionClip": "#9c9c9c",
    "LinkedTrackHover": "#b3d4e5",
    "ExpressionLaneHeaderHighlight": "#bcbcbc",
    "DeactivatedClipHeader": "#5b5b5bdf",
    "DeactivatedClipHeaderForeground": "#bcbcbc",
    "ScaleAwareness": "#be98ff",
    "StandardVuMeter": null,
    "OverloadVuMeter": null,
    "DisabledVuMeter": null,
    "HeadphonesVuMeter": null,
    "SendsOnlyVuMeter": null,
    "BipolarGainReductionVuMeter": null,
    "OrangeVuMeter": null,
    "MainViewFocusIndicator": "#3d3d3d",
    "MidiEditorBlackKeyBackground": "#22222226",
    "MidiEditorBackgroundWhiteKeySeparator": "#3d3d3d19",
    "RangeEditField3": "#f1ac00",
    "ScrollbarInnerHandleHover": "#4f4f4f",
    "ScrollbarInnerTrackHover": "#818181",
    "ScrollbarLCDHandleHover": "#5b5b5b",
    "ScrollbarLCDTrackHover": "#4f4f4f",
    "ScrollbarMixerShowOnScrollHandleHover": "#0000007f"
  }; // Object to store the original theme content

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
