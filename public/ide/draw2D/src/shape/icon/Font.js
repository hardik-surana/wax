
/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/

/**
 * @class draw2d.shape.icon.Font

 * See the example:
 *
 *     @example preview small frame
 *     
 *     var icon =  new draw2d.shape.icon.Font();
 *     
 *     canvas.add(icon,50,10);
 *     
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Font = draw2d.shape.icon.Icon.extend({
    NAME : "draw2d.shape.icon.Font",

    /**
     * 
     * @constructor
     * Creates a new icon element which are not assigned to any canvas.
     * 
     * @param {Object} attr the configuration of the shape
     */
    init: function(attr, setter, getter ) {
      this._super($.extend({width:50,height:50},attr), setter, getter);
    },

    /**
     * @private
     * @returns
     */
    createSet: function() {
        return this.canvas.paper.path("M22.255,19.327l-1.017,0.131c-0.609,0.081-1.067,0.208-1.375,0.382c-0.521,0.293-0.779,0.76-0.779,1.398c0,0.484,0.178,0.867,0.532,1.146c0.354,0.28,0.774,0.421,1.262,0.421c0.593,0,1.164-0.138,1.72-0.412c0.938-0.453,1.4-1.188,1.4-2.229v-1.354c-0.205,0.131-0.469,0.229-0.792,0.328C22.883,19.229,22.564,19.29,22.255,19.327zM8.036,18.273h4.309l-2.113-6.063L8.036,18.273zM28.167,7.75H3.168c-0.552,0-1,0.448-1,1v16.583c0,0.553,0.448,1,1,1h24.999c0.554,0,1-0.447,1-1V8.75C29.167,8.198,28.721,7.75,28.167,7.75zM14.305,23.896l-1.433-4.109H7.488L6,23.896H4.094L9.262,10.17h2.099l4.981,13.727H14.305L14.305,23.896zM26.792,23.943c-0.263,0.074-0.461,0.121-0.599,0.141c-0.137,0.02-0.323,0.027-0.562,0.027c-0.579,0-0.999-0.204-1.261-0.615c-0.138-0.219-0.231-0.525-0.29-0.926c-0.344,0.449-0.834,0.839-1.477,1.169c-0.646,0.329-1.354,0.493-2.121,0.493c-0.928,0-1.688-0.28-2.273-0.844c-0.589-0.562-0.884-1.271-0.884-2.113c0-0.928,0.29-1.646,0.868-2.155c0.578-0.511,1.34-0.824,2.279-0.942l2.682-0.336c0.388-0.05,0.646-0.211,0.775-0.484c0.063-0.146,0.104-0.354,0.104-0.646c0-0.575-0.203-0.993-0.604-1.252c-0.408-0.26-0.99-0.389-1.748-0.389c-0.877,0-1.5,0.238-1.865,0.713c-0.205,0.263-0.34,0.654-0.399,1.174H17.85c0.031-1.237,0.438-2.097,1.199-2.582c0.77-0.484,1.659-0.726,2.674-0.726c1.176,0,2.131,0.225,2.864,0.673c0.729,0.448,1.093,1.146,1.093,2.093v5.766c0,0.176,0.035,0.313,0.106,0.422c0.071,0.104,0.223,0.156,0.452,0.156c0.076,0,0.16-0.005,0.254-0.015c0.093-0.011,0.191-0.021,0.299-0.041L26.792,23.943L26.792,23.943z");
    }
});

