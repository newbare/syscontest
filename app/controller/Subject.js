Ext.define('SysContest.controller.Subject', {
    extend: 'Ext.app.Controller',

    models : [
       'SysContest.model.Subject'
    ],

    stores : [
       'SysContest.store.Subjects'
    ],

    views : [
       'SysContest.view.subject.SubjectsGrid'
      // 'SysContest.view.institution.InstitutionsForm'
    ],

     init : function (application){
      this.control({
        'subjectsgrid' : {
           render : this.onGridRender,
          // itemdblclick : this.onEditClick
         }

      });
    },

    onGridRender : function (grid, eOpts){
      grid.getStore().load();
    }

});