sap.ui.jsview("mydashboard.R3", {
 
          /** Specifies the Controller belonging to this View.
          * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
          * @memberOf mydashboard.R3
          */
          getControllerName : function() {
                   return "mydashboard.R3";
          },
 
          /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
          * Since the Controller is given to this method, its event handlers can be attached right away.
          * @memberOf mydashboard.R3
          */
          createContent : function(oController) {
 
 
                   var rPage = new sap.m.Page({
                             title: "Report R3",
                             showNavButton: true,
                             navButtonTap: function()
                             {
                                      app.to(page_Home);
                             }});
 
                   var myModel = oController.getMyModel(2,3,14);
                   var myChart = oController.createMyChart("R3Chart", "R3 Chart", myModel);
 
                   rPage.addContent(myChart);
 
                   return rPage;
 
          }
 
  });
 