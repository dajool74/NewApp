
var Devices = [
   {name:'a1', userId:'', MesaId:1},{name:'a2', userId:'', MesaId:2},{name:'a3', userId:'', MesaId:3}{name:'a4', userId:'', MesaId:4},{name:'a5', userId:'', MesaId:5}           ]
 ;     
        
var Actions = {
       getOrderbyDevice:['/device?device_id=', 'GET'], 
       insertOrder:['/order/new_order', 'POST'], 
       closeOrder:['/order/close_order', 'POST'],
       addOrder:['/order/order_add', 'POST'],
       transfOrder:['/order/transf_order', 'POST'],
       getOrder:['/order/?_id=', 'GET']
};

var Fetcher = {
       postAjax:function(){
              
       },
       getAjax:function(){
              
       }
}


var Model = {
       getAllDevices:function(){
              return Devices;
       },
       getOrder:function(){
              //var url = Actions.
       }
       
}
App = {
       init:function(){
               alert('init start');
               var devices = Model.getAllDevices();
               for (var i = 0; i>devices.length; i++){
                      var Id = device[i].name;
                      var userId = device[i].userId;
                      var mesaId = device[i].MesaId;
               }
            },
       allDevices:function(){
              return Model.getAllDevices();
       }
      }
      
View = {
       init:function(){
              this.el = $('#ul_Devices');
              this.render();
       },
       render:function(){
              var elemt;
              var devices = App.AllDevices();
              for (i = 0; i < devices.length; i++) {
                     elemt = document.createElement('li');
                     elemt.Id = device[i].name;
                     this.el.appendChild(elemt);
       }
}
