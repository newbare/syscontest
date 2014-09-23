Ext.define('SysContest.controller.Main', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Institution'
    ],

    stores : [
       'SysContest.store.Institutions'
    ],

    views : [
       'SysContest.view.institution.InstitutionsGrid',
       'SysContest.view.institution.InstitutionsForm'
    ],

    init : function (application){
      this.control({
        'institutionsgrid' : {
           render : this.onGridRender,
           itemdblclick : this.onEditClick
        },
        'institutionsgrid button#addInstitution' : {
          click : this.onAddClick
        }


      });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    },

    openForm : function (title) {
       var win = Ext.create('SysContest.view.institution.InstitutionsForm');
       win.setTitle(title);
       return win;
    },

    onAddClick : function (btn , e, eOpts){
      this.openForm('Nova Instituição');
    },


    onEditClick : function (grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Instituição - ' + record.get('name'));
        var form = win.down('form');
        form.loadRecord(record);
    }

});
