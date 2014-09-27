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
   }

});