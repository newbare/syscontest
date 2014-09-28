Ext.define('SysContest.controller.Simulated', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Question'
    ],

    stores : [
      'SysContest.store.Simulateds'
    ],

    views : [
       'SysContest.view.simulated.SimulatedPanel'
    ],

    init : function (application) {
        this.control({
          'simulatedpanel' : {
             render : this.onGridRender,
          }
        });
    },

    onGridRender : function (panel, eOpts){
      //panel = Ext.ComponentQuery.query('simulatedpanel')[0],
      var store = Ext.create('SysContest.store.Simulateds');

      store.on('load', function(s){

      var tpl = Ext.create('Ext.XTemplate',
        '<div id="myForm">',
        '<tpl for=".">',
        '<p><strong>{data.statement} </strong></p>',
        '<p><input type="radio" name="{[xindex]}" value="A"> {data.optionA} </p>',
        '<p><input type="radio" name="{[xindex]}" value="B"> {data.optionB} </p>',
        '<p><input type="radio" name="{[xindex]}" value="C"> {data.optionC} </p>',
        '<p><input type="radio" name="{[xindex]}" value="D"> {data.optionD} </p>',
            '<tpl if="data.optionE !== \'\'">',
                    '<p><input type="radio" name="{[xindex]}"  value="E" /> {data.optionE} </p>',
              '</tpl>',
        '<p id="R{[xindex]}">{data.answer}</p>',
        '</tpl>',
        '</div>'
      );

      tpl.overwrite(panel.body, s.data.items);
  
      $('#R1').hide();
      $('#R2').hide();
      $('#R3').hide();
      $('#R4').hide();
      $('#R5').hide();
      $('#R6').hide();
      $('#R7').hide();
      $('#R8').hide();
      $('#R9').hide();
      $('#R10').hide();

    });

  }

});