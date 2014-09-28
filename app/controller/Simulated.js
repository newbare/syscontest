Ext.define('SysContest.controller.Simulated', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Question'
    ],

    stores : [
      'SysContest.store.Simulateds'
    ],

    views : [
       'SysContest.view.simulated.SimulatedWindow',
       'SysContest.view.simulated.SidePanel'
    ],

    init : function (application) {
        this.control({
          'simulatedwindow' : {
             render : this.onCreateSimulated,
          },
          'sidepanel button#createSimulated' : {
            click : this. onAddClick,
          } 
        });
    },

    onCreateSimulated : function (btn , e, eOpts){
      panel = Ext.ComponentQuery.query('simulatedpanel')[0];
      console.log(panel);
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

  },

  onCancelClick : function (btn, e, eOpts){
    var win = btn.up('window');
    win.close();
  },

  openForm : function (title) {
    var win = Ext.create('SysContest.view.simulated.SimulatedWindow');
    win.setTitle(title);
    return win;
  },

  onAddClick : function (btn , e, eOpts){
    this.openForm('Novo Simulado');
  },

  onCkechAnswers : function(btn , e, eOpts){
    //respostas do usuario
    var userResponse1 = $("input[name='1']:checked").val(),
      userResponse2 = $("input[name='2']:checked").val(),
      userResponse3 = $("input[name='3']:checked").val(),
      userResponse4 = $("input[name='4']:checked").val(),
      userResponse5 = $("input[name='5']:checked").val(),
      userResponse6 = $("input[name='6']:checked").val(),
      userResponse7 = $("input[name='7']:checked").val(),
      userResponse8 = $("input[name='8']:checked").val(),
      userResponse9 = $("input[name='9']:checked").val(),
      userResponse10 = $("input[name='10']:checked").val();

  //gabarito do simultado
  var elAnswer1 = Ext.get("R1").getHTML(),
      elAnswer2 = Ext.get("R2").getHTML(),
      elAnswer3 = Ext.get("R3").getHTML(),
      elAnswer4 = Ext.get("R4").getHTML(),
      elAnswer5 = Ext.get("R5").getHTML(),
      elAnswer6 = Ext.get("R6").getHTML(),
      elAnswer7 = Ext.get("R7").getHTML(),
      elAnswer8 = Ext.get("R8").getHTML(),
      elAnswer9 = Ext.get("R9").getHTML(),
      elAnswer10 = Ext.get("R10").getHTML();

    var score = 0;

    if (userResponse1 === elAnswer1){
       score++;
    }
    if (userResponse2 === elAnswer2){
       score++;
    }
    if (userResponse3 === elAnswer3){
       score++;
    }
    if (userResponse4 === elAnswer4){
       score++;
    }
    if (userResponse5 === elAnswer5){
       score++;
    }
    if (userResponse6 === elAnswer6){
       score++;
    }
    if (userResponse7 === elAnswer7){
       score++;
    }
    if (userResponse8 === elAnswer8){
       score++;
    }
    if (userResponse9 === elAnswer9){
       score++;
    }
    if (userResponse10 === elAnswer10){
       score++;
    }

    Ext.Msg.alert('Correção', 'Sua nota é ' + score + '!');
  }



});