Ext.define('SysContest.controller.DisciplineQuestion', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.DisciplineQuestion'
    ],

    stores : [
       'SysContest.store.DisciplinesQuestions'
    ],

    views : [
       'SysContest.view.dxq.DXQGrid',
       'SysContest.view.dxq.DXQWindow',
       'SysContest.view.simulated.SidePanel',
       'SysContest.view.dxq.DXQForm'
    ],

    init : function (application) {
        this.control({
          'dxqwindow' : {
             render : this.onGridRender,
          },
          'dxqgrid' : {
            itemdblclick : this.onEditClick
          },
          'sidepanel button#createDXQ' : {
            click : this.onOpenClick,
          },
          'dxqwindow button#cancelDXQ' : {
            click : this.onCloseWin
          },
          'dxqwindow button#addDXQ' : {
            click : this.onAddClick
          },
          'dxqwindow button#deleteDXQ' : {
            click : this.onDeleteClick
          },
          'dxqform button#cancelDXQ' : {
            click : this.onCancelClick
          },
          'dxqform button#saveDXQ' : {
            click : this.onSaveClick
          } 
        });
    },

    onGridRender : function (window, eOpts){
      var grid = window.down('grid');
      grid.getStore().load();
    },

    onOpenClick : function (btn , e, eOpts){
      var win = Ext.create('SysContest.view.dxq.DXQWindow');
      return win;
    },

    onCloseWin : function (btn, e, eOpts){
      var win = btn.up('window');
      win.close();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.dxq.DXQForm');
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
          grid = Ext.ComponentQuery.query('dxqgrid')[0],
          store = grid.getStore();

          if (record){
            record.set(values);
          }else{
            var dxq = Ext.create('SysContest.model.DisciplineQuestion',{
              idDiscipline : values.idDiscipline,
              idQuestion : values.idQuestion
             });
            store.insert(0,dxq);
          }
          store.sync();
          win.close();
    }

});
