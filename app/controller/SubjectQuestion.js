Ext.define('SysContest.controller.SubjectQuestion', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.SubjectQuestion'
    ],

    stores : [
       'SysContest.store.SubjectsQuestions'
    ],

    views : [
       'SysContest.view.sxq.SXQGrid',
       'SysContest.view.sxq.SXQWindow',
       'SysContest.view.simulated.SidePanel',
       'SysContest.view.sxq.SXQForm'
    ],

    init : function (application) {
        this.control({
          'sxqwindow' : {
             render : this.onGridRender,
          },
          'sxqgrid' : {
            itemdblclick : this.onEditClick
          },
          'sidepanel button#createSXQ' : {
            click : this.onOpenClick,
          },
          'sxqwindow button#cancelSXQ' : {
            click : this.onCloseWin
          },
          'sxqwindow button#addSXQ' : {
            click : this.onAddClick
          },
          'sxqwindow button#deleteSXQ' : {
            click : this.onDeleteClick
          },
          'sxqform button#cancelSXQ' : {
            click : this.onCancelClick
          },
          'sxqform button#saveSXQ' : {
            click : this.onSaveClick
          } 
        });
    },

    onGridRender : function (window, eOpts){
      var grid = window.down('grid');
      grid.getStore().load();
    },

    onOpenClick : function (btn , e, eOpts){
      var win = Ext.create('SysContest.view.sxq.SXQWindow');
      return win;
    },

    onCloseWin : function (btn, e, eOpts){
      var win = btn.up('window');
      win.close();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.sxq.SXQForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Classificador');
    },

    onCancelClick : function (btn, e, eOpts){
      var win = btn.up('window');
      var form = win.down('form');
      form.getForm().reset();
      win.close();
    },

    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Relação');
        var form = win.down('form');
        form.loadRecord(record);
    },

    onDeleteClick : function (btn, e, eOpts){
      Ext.MessageBox.confirm('Atenção','Deseja remover essa Relação?', function(btnConfirm){
        if (btnConfirm == 'yes'){
           var grid = btn.up('grid'),
               records = grid.getSelectionModel().getSelection(),
               store = grid.getStore();
           store.remove(records);
           store.sync(); 
           Ext.MessageBox.alert('Mensagem','Relação removida!');
        } 
      });
    },

    onSaveClick : function (btn, e, eOpts){
      var win = btn.up('window'),
          form = win.down('form'),
          values = form.getValues(),
          record = form.getRecord(),
          grid = Ext.ComponentQuery.query('sxqgrid')[0],
          store = grid.getStore();

          if (record){
            record.set(values);
          }else{
            var sxq = Ext.create('SysContest.model.SubjectQuestion',{
              idSubject : values.idDiscipline,
              idQuestion : values.idQuestion
             });
            store.insert(0,sxq);
          }
          store.sync();
          win.close();
    }

});
