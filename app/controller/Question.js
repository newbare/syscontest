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
       //'SysContest.view.discipline.DisciplinesForm'
    ],

    init : function (application) {
        this.control({
          'questionsgrid' : {
             render : this.onGridRender,
            //itemdblclick : this.onEditClick
          }
        });
    }

});