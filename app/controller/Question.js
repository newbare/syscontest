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
    }

});