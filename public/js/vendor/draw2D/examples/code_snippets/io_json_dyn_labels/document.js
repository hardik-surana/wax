
// the document to load....in this case a simple JSON Object
// You can create the canvas content via "native" API calls or with a
// JSON, XML,...document.
//
var jsonDocument =
    [
    {
        "type": "example.LabeledEnd",
        "id": "ebfb35bb-5767-8155-c804-14bda7759dc2",
        "x": 312,
        "y": 154,
        "width": 50,
        "height": 50,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_shape_node_End",
        "ports": [
            {
                "type": "draw2d.InputPort",
                "id": "2fd4e14e-0248-b419-ce31-8d63f0da322d",
                "width": 10,
                "height": 10,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_InputPort",
                "bgColor": "#4F6870",
                "color": "#1B1B1B",
                "stroke": 1,
                "dasharray": null,
                "maxFanOut": 9007199254740991,
                "name": "input0",
                "port": "draw2d.InputPort",
                "locator": "draw2d.layout.locator.InputPortLocator"
            }
        ],
        "bgColor": "#4D90FE",
        "color": "#000000",
        "stroke": 1,
        "radius": 2,
        "dasharray": null,
        "labels": [
            {
                "type": "draw2d.shape.basic.Label",
                "id": "5c6234b7-4475-22cb-e278-1df506c1e9fe",
                "x": 62,
                "y": 26,
                "width": 83.921875,
                "height": 21,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_basic_Label",
                "ports": [],
                "bgColor": "none",
                "color": "#1B1B1B",
                "stroke": 1,
                "radius": 0,
                "dasharray": null,
                "text": "Draggable Label",
                "outlineStroke": 0,
                "outlineColor": "none",
                "fontSize": 14,
                "fontColor": "#080808",
                "fontFamily": null,
                "locator": "draw2d.layout.locator.DraggableLocator",
                "editor": "draw2d.ui.LabelInplaceEditor"
            },
            {
                "type": "draw2d.shape.basic.Label",
                "id": "db69a8ab-a63b-f4f3-c025-5fae6b370790",
                "x": -5.7578125,
                "y": -23,
                "width": 67.25,
                "height": 21,
                "alpha": 1,
                "angle": 0,
                "userData": {},
                "cssClass": "draw2d_shape_basic_Label",
                "ports": [],
                "bgColor": "none",
                "color": "#1B1B1B",
                "stroke": 1,
                "radius": 0,
                "dasharray": null,
                "text": "My top Label",
                "outlineStroke": 0,
                "outlineColor": "none",
                "fontSize": 9,
                "fontColor": "#080808",
                "fontFamily": null,
                "locator": "draw2d.layout.locator.TopLocator",
                "editor": "draw2d.ui.LabelInplaceEditor"
            }
        ]
    },
    {
        "type": "draw2d.shape.note.PostIt",
        "id": "b491c199-b76b-8cd3-78bb-11e6c46f72a3",
        "x": 20,
        "y": 20,
        "width": 263.21875,
        "height": 59,
        "alpha": 1,
        "angle": 0,
        "userData": {},
        "cssClass": "draw2d_shape_note_PostIt",
        "ports": [],
        "bgColor": "#5B5B5B",
        "color": "#FFFFFF",
        "stroke": 1,
        "radius": 5,
        "dasharray": null,
        "text": "Purpose of this is example is to show how to handle dynamic labels.\n\n - labels can be changed by double click.\n - on label can be moved via Drag&Drop.",
        "outlineStroke": 0,
        "outlineColor": "none",
        "fontSize": 14,
        "fontColor": "#FFFFFF",
        "fontFamily": null
    }
    ];
