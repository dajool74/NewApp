
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
       init:function(method, url, data){
          if(method == 'GET'){
             this.getAjax(url, data);
          }
          else{this.post.Ajax(Url, data)}
       }
       postAjax:function(url, data){
              
       },
       getAjax:function(url, data){
              
       }
}


var Model = {
       getAllDevices:function(){
              return Devices;
       },
       scanDevice:function(_id){
          var devices, device;
          devices = getAllDevices();
          for (i = 0; i < devices.length; i++) {
             if(_id == devices[i].name){
                device = device[i];
                break;   
            }
         return device;
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
       getDeviceId:function(_id){
          device = Model.scanDevices(_id)
          return device;
       }
       getOrderByDevice:function(_id){
          var model_device = this.getDeviceId(_id);
          var url_data = Actions.getOrderByDevice();
          Fetcher.init(url_data[0], url_data[1], _id)
          
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
