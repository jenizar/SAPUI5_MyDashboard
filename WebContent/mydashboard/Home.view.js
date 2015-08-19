   sap.ui.jsview("mydashboard.Home", {
 
          /** Specifies the Controller belonging to this View.
          * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
          * @memberOf mydashboard.Home
          */
          getControllerName : function() {
                   return "mydashboard.Home";
          },
 
          /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
          * Since the Controller is given to this method, its event handlers can be attached right away.
          * @memberOf mydashboard.Home
          */
          createContent : function(oController) {
 
                   var imageTitle = new sap.m.Image({src: "images/Home_Title.gif", width: "20em", height: "10em", layoutData: new sap.m.FlexItemData({growFactor: 1})});
 
                   var imageR1 = new sap.m.Image({src: "images/R1.gif", width: "6.66em", height: "10em", layoutData: new sap.m.FlexItemData({growFactor: 1}),
                             press: function(){
                                      app.to(page_R1, "flip");
                             }
                   });
 
                   var imageR2 = new sap.m.Image({src: "images/R2.gif", width: "6.66em", height: "10em", layoutData: new sap.m.FlexItemData({growFactor: 1}),
                             press: function(){
                                      app.to(page_R2, "flip");
                             }
                   });
 
                   var imageR3 = new sap.m.Image({src: "images/R3.gif", width: "6.66em", height: "10em", layoutData: new sap.m.FlexItemData({growFactor: 1}),
                             press: function(){
                                      app.to(page_R3, "flip");
                             }
                   });
                  
                   var hbox1 = new sap.m.HBox({
                             items: [imageTitle],
                             alignItems : sap.m.FlexAlignItems.Center
                   });
 
                   var hbox2 = new sap.m.HBox({
                             items: [imageR1, imageR2, imageR3],
                             alignItems : sap.m.FlexAlignItems.Center
                   });
 
                   var vbox1 = new sap.m.VBox({
                             items: [hbox1, hbox2],
                             alignItems : sap.m.FlexAlignItems.Center
                   });
 
                   return vbox1;
 
          }
 
});