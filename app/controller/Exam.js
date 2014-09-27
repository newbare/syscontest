Ext.define('SysContest.controller.Exam', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Exam'
    ],

    stores : [
       'SysContest.store.Exames'
    ],

    views : [
       'SysContest.view.exam.ExamesGrid',
       'SysContest.view.exam.ExamesForm'
    ],


    init : function (application) {
        this.control({
          'examesgrid' : {
             render : this.onGridRender,
             itemdblclick : this.onEditClick
          },
          'examesgrid button#addExam' : {
             click : this.onAddClick
          }
          
        });

    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.exam.ExamesForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Nova Prova');
    },

    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Prova - ' + record.get('idExam'));
        var form = win.down('form');
        form.loadRecord(record);
    }

});