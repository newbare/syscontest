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
            click : this.onAddClick,
          },
          'simulatedwindow button#cancelSimulated' : {
            click : this.onCancelClick
          }, 
          'simulatedwindow button#checkSimulated' : {
            click : this.onCkechAnswers
          } 

        });
    },

    onCreateSimulated : function (btn , e, eOpts){
      panel = Ext.ComponentQuery.query('simulatedpanel')[0];
    
      var store = Ext.create('SysContest.store.Simulateds');
      
      store.on('load', function(s){

      var tpl = Ext.create('Ext.XTemplate',
        '<div id="myForm">',
        '<tpl for=".">',
        '<div id="Q{[xindex]}">',
        '<h4><strong>{data.statement} </strong></h4>',
        '<p><input type="radio" name="{[xindex]}" value="A"> {data.optionA} </p>',
        '<p><input type="radio" name="{[xindex]}" value="B"> {data.optionB} </p>',
        '<p><input type="radio" name="{[xindex]}" value="C"> {data.optionC} </p>',
        '<p><input type="radio" name="{[xindex]}" value="D"> {data.optionD} </p>',
            '<tpl if="data.optionE !== \'\'">',
                    '<p><input type="radio" name="{[xindex]}"  value="E" /> {data.optionE} </p>',
              '</tpl>',
        '<p id="R{[xindex]}">{data.answer}</p>',
        '</div>',
        '</tpl>',
        '</div>'
      );

      tpl.overwrite(panel.body, s.data.items);
         
      for (var i=1; i<=10; i++){
         $('#R'+i).hide();
         Ext.get("Q"+i).addCls(['alert-message', 'alert-message-info']);
      }
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

  validate : function ( answers ){
    for (var i=0; i < answers.length ; i++){
     if(answers[i] === undefined || answers[i] === '' || answers[i] === null){
       return false;
     }
    }
    return true;
  },

  computeScore : function (answers, uAnswers ){
   score = 0;
   for (var i = 0; i < answers.length; i++){
     if (answers[i] === uAnswers[i]){
       score++;
       this.markLayoutAcept(i+1);
     }
     else {
       this.markLayoutReject(i+1);
     }
   }
   return score;
  },

  markLayoutAcept : function (index){
    Ext.get("Q"+index).removeCls(['alert-message', 'alert-message-info']);
    Ext.get("Q"+index).addCls(['alert-message', 'alert-message-success']);
  },

  markLayoutReject : function (index){
    Ext.get("Q"+index).removeCls(['alert-message', 'alert-message-info']);
    Ext.get("Q"+index).addCls(['alert-message', 'alert-message-danger']);
  },

  getUserAnswers : function (){
    var answers = [];
    for (var i=1; i <= 10; i++){
      answers.push($("input[name='"+ i +"']:checked").val());
    } 
    return answers;
  },

  getSimulatedAnswers : function (){
    simulatedAnswers = [];
    for (var i=1; i <= 10; i++){
      simulatedAnswers.push(Ext.get("R"+i).getHTML());      
    }
    return simulatedAnswers;
  },

  onCkechAnswers : function(btn , e, eOpts){
    var userAnswers = this.getUserAnswers(),
        answers = this.getSimulatedAnswers(),
        score = 0;

    if (this.validate(userAnswers)){
      score = this.computeScore(answers, userAnswers);
      Ext.Msg.alert('Correção', 'Sua nota é ' + score + '!');
    }
    else {
     Ext.Msg.show({
        title:'Simulado Validação',
        msg: 'Você deve precisa marcar as 10 questões!',
        icon: Ext.Msg.WARNING
      });
    } 
  }

});