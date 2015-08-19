sap.ui.controller("mydashboard.R1", {
 
          getMyModel: function(a1,a2,a3) {
                   var data = [ {
                             type : "New",
                             tickets : a1
                   }, {
                             type : "Assigned",
                             tickets : a2
                   }, {
                             type : "WIP",
                             tickets : a3
                   } ];
 
                   var model = new sap.ui.model.json.JSONModel();
                   model.setData(data);
 
                   return model;
          },
 
          createMyChart: function(id, title, model) {
 
                   var oChart = new sap.makit.Chart({
                             width : "100%",
                             height: "79%",
                             type : sap.makit.ChartType.Column,
                             showRangeSelector : false,
                             showTotalValue : true,
                             valueAxis: new sap.makit.ValueAxis({}),
                             categoryAxis: new sap.makit.CategoryAxis({}),
                             category : new sap.makit.Category({
                                      column : "type"
                             }),
                             values : [new sap.makit.Value({
                                      expression : "tickets",
                                      format : "number"
                             })]
                   });
                   oChart.addColumn(new sap.makit.Column({name:"type", value:"{type}"}));
                   oChart.addColumn(new sap.makit.Column({name:"tickets", value:"{tickets}", type:"number"}));
                   oChart.setModel(model);
                   oChart.bindRows("/");
 
                   return oChart;
 
          }
  });