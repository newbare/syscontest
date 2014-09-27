Ext.define('SysContest.controller.Question', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Question'
    ],

    stores : [
       'SysContest.store.Questions'
    ],

    views : [
       'SysContest.view.question.QuestionsGrid',
       'SysContest.view.question.QuestionsForm'
    ],

    init : function (application) {
        this.control({
          'questionsgrid' : {
             render : this.onGridRender,
             itemdblclick : this.onEditClick
          },
          'questionsgrid button#addQuestion' : {
             click : this.onAddClick
          },
          'questionsgrid button#deleteQuestion' : {
            click : this.onDeleteClick
          },
          'questionsform button#cancelQuestion' : {
            click : this.onCancelClick
          },
          'questionsform button#saveQuestion' : {
              click : this.onSaveClick
           }
        });
    },

   onGridRender : function (grid, eOpts){
      grid.getStore().load();
   },

   openForm : function (title) {
       var win = Ext.create('SysContest.view.question.QuestionsForm');
       win.setTitle(title);
       return win;
   },

   onAddClick : function (btn , e, eOpts){
      this.openForm('Nova Questão');
   },

   onEditClick : function (grid, record, item, index, e, eOpts){
      var win = this.openForm('Editar Questão - ' + record.get('idQuestion'));
      var form = win.down('form');
      form.loadRecord(record);
   },

   onDeleteClick : function (btn, e, eOpts){
      Ext.MessageBox.confirm('Atenção','Deseja remover essa Disciplina?', function(btnConfirm){
        if (btnConfirm == 'yes'){
           var grid = btn.up('grid'),
               records = grid.getSelectionModel().getSelection(),
               store = grid.getStore();
           store.remove(records);
           store.sync(); 
           Ext.MessageBox.alert('Mensagem','Registro deletado!');
        } 
      });
    },

  onCancelClick : function (btn, e, eOpts){
    var win = btn.up('window');
    var form = win.down('form');
    form.getForm().reset();
    win.close();
  },

  onSaveClick : function (btn, e, eOpts){
    var win = btn.up('window'),
        form = win.down('form'),
        values = form.getValues(),
        record = form.getRecord(),
        grid = Ext.ComponentQuery.query('questionsgrid')[0],
        store = grid.getStore();

        if (record){
          record.set(values);
        }else{
          var question = Ext.create('SysContest.model.Question',{
            idExam : values.idExam,
            statement : values.statement,
            answer : values.answer,
            optionA : values.optionA,
            optionB : values.optionB,
            optionC : values.optionC,
            optionD : values.optionD,
            optionE : values.optionE
          });
          store.insert(0,question);
        }
        store.sync();
        win.close();
  }

});