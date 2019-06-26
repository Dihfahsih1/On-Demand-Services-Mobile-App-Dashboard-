
//This shows and hides the payout div
function showPayoutOptions() {
    var x = document.getElementById("payoutMethod");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  //This shows and hides the account status div
function showAccountManagement() {
    var x = document.getElementById("accountStatusDiv");
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }


  //This shows all the payment methods
  function showPaymentMethods(){
       // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
  }



  //pay driver
  function payDriver(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('Drivers').child(key)
    var payamount=document.getElementById('payoutamount').value

     bodabodaRef.once('value',function(snapshot){
         var object=snapshot.val()
         var currentwallet=object.walletBalance

         //getting the new balance
         var newBalance=currentwallet-payamount
         console.log(newBalance)

         bodabodaRef.update({walletBalance:newBalance})
         .then(function(){
            window.location.reload()
            alert('New Wallet Balance is: '+newBalance)
         }).catch(function(){
             alert('Transaction failed.')
         })

    })

  }








//approve boda agent
function approveBodaAgent(key){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child('BodaBodaAgents').child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }

//approve driver
function approveDriver(key){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Drivers').child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }


 //approve delivery Agent
function approveDeliveryAgent(key){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child('DeliveryAgents').child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }



 //approve carrental Agent
 function approveCarRentalAgent(key){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child('CarRentalAgents').child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }


 //approve cleaning agent
 function approveCleaningAgent(key){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child('CleaningAgents').child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }

 //approve doctor
 function approveDoctor(key){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Doctors').child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }

 //approve electrician
 function approveElectrician(key){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Electricians').child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }

 //approving rest of the services
 function approveRest(key,serviceAgent){
    var database=firebase.database()
    console.log(key)
    var bodabodaRef=database.ref('Users').child(serviceAgent).child(key)
    var status='approved'
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
        
    })
 
 }



 
 //deactivate boda agent
 function deactivateBodaAgent(key){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('BodaBodaAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }



 //deactivate driver
 function deactivateDriver(key){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Drivers').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }


 //deactivate delivery agent
 function deactivateDeliveryAgent(key){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('DeliveryAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }



  //deactivate carrental agent
  function deactivateCarRentalAgent(key){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('CarRentalAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }

 //deactivate cleaning agent
 function deactivateCleaningAgent(key){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('CleaningAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }


 //deactivate doctor
 function deactivateDoctor(key){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Doctors').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }

 //deactivate electrician
 function deactivateElectrician(key){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Electricians').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }

 //deactivate rest of the services
 function deactivateRest(key,serviceAgent){
    var database=firebase.database()
    var status='deactivated'
    console.log(key)
    var bodabodaRef=database.ref('Users').child(serviceAgent).child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){ 
    }) 
 }


 


 //reject boda agent
 function rejectBodaAgent(key){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('BodaBodaAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }



  //reject driver
  function rejectDriver(key){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Drivers').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }



   //reject delivert Agent
   function rejectDeliveryAgent(key){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('DeliveryAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }


   //reject carrental Agent
   function rejectCarRentalAgent(key){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('CarRentalAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }



 //reject cleaning agent
 function rejectCleaningAgent(key){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('CleaningAgents').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }


 //reject doctor
 function rejectDoctor(key){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Doctors').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }

 //reject electrician
 function rejectElectrician(key){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child('Electricians').child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }

 //reject the rest of the services
 function rejectRest(key,serviceAgent){
    var database=firebase.database()
    var status='rejected'
    console.log(key)
    var bodabodaRef=database.ref('Users').child(serviceAgent).child(key)
    bodabodaRef.update({accountStatus:status})
    .then(function(){
        window.location.reload()
    }).catch(function(){
    })  
 }


 //getting the boda rating
 function GetBodaRating(key){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child('BodaBodaAgents').child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })
     
 }




 //getting the driver rating
 function GetDriverRating(key){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child('Drivers').child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })
     
 }



 //getting the delivery agent rating
 function GetDeliveryRating(key){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child('DeliveryAgents').child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })
     
 }


 //get the carrental agent rating
 function GetCarRentalAgentRating(key){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child('CarRentalAgents').child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })

 }

 //get cleaning agent rating
 function GetCleaningAgentRating(key){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child('CleaningAgents').child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })

 }

//get doctors rating
function GetDoctorRating(key){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child('Doctors').child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })

 }

 //get electrician rating
 function GetElectricianRating(key){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child('Electricians').child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })

 }

//get the rest of the services rating
function GetAgentRating(key,agentService){
    var database=firebase.database()
    var bodabodaratingRef=database.ref('Users').child(agentService).child(key).child('rating')

    bodabodaratingRef.once('value',function(snapshot){
        var sum=0;
         var ratingobjects=snapshot.val()
           //getting keys
           var  keys=Object.keys(ratingobjects)

           var size=keys.length
           console.log(size)

           keys.forEach(function(rate){ 
               sum+=ratingobjects[rate]
        })

        var ratingAverage=sum/size
        console.log(ratingAverage)
        document.getElementById('rating').innerHTML=ratingAverage.toFixed(2)
    })

 }




//Get the rider and the customer of the trip
 function getBodaRideCustomerandRider(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('BodaBodaAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Rider Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Rider Tel: '+riderObject.phone
        document.getElementById('riderHelment').innerHTML='Rider Helment No: '+riderObject.helMentNo
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

//Get the driver and the customer of the Trip
function getTaxiRideCustomerandDriver(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('Drivers').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Driver Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Driver Tel: '+riderObject.phone
        document.getElementById('riderHelment').innerHTML='Number Plate: '+riderObject.numberPlate
        document.getElementById('carType').innerHTML='Car Type: '+riderObject.carType
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
        
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }





 //Get the delivery agent and the customer of the Trip
function getDeliveryCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('DeliveryAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
        
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

 //get carrental agent and customer of the service
 function getCarRentalCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('CarRentalAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
        
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

 //get cleaning agent and customer of the service
 function getCleaningCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('CleaningAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
        
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

//get doctor and customer of the service
function getDoctorCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('Doctors').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
        
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })
 }

 //get Electrician customer and agent
 function getElectricianCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('Electricians').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

 //get fumigation customer and agent
 function getFumigationCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('FumigationAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

 //get gas customer and agent
 function getGasCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('GasAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

 //get massage customer and agent
 function getMassageCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('MassageAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

 //get plumbing customer and agent
 function getPlumbingCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('PlumbingAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }

 //get salon customer and agent 
 function getSalonCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('SalonAgents').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }


 //get mechanic customer and agent
 function getMechanicCustomerandAgent(customerkey,riderkey){
    var database=firebase.database()
    var bodabodaRef=database.ref('Users').child('Mechanics').child(riderkey)
    bodabodaRef.once('value',function(snapshot){
        var riderObject=snapshot.val()
        document.getElementById('riderName').innerHTML='Agent Name: '+riderObject.userName
        document.getElementById('riderPhone').innerHTML='Agent Tel: '+riderObject.phone
        document.getElementById('riderImage').setAttribute('src',riderObject.profilePic)
    })

    var customerRef=database.ref('Users').child('Customers').child(customerkey)
    customerRef.once('value',function(snapshot){
        var customerObject=snapshot.val()
        document.getElementById('customerPhone').innerHTML='Customer Phone: '+customerObject.phone

    })

 }





 //view bodaboda current Trip
 function viewBodaTrip(key){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child('BodaBodaAgents').child(key).child('BodabodacustomerRequest')

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
        
         document.getElementById('destination').innerHTML='Destination: '+tripobject.destination
         document.getElementById('pickup').innerHTML='Pickup: '+tripobject.pickuplocation
         document.getElementById('paymentMode').innerHTML='PaymentMode: '+tripobject.paymentMode

         console.log(tripobject.destination)
         console.log(tripobject.pickuplocation)
         console.log(tripobject.paymentMode)

        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
            console.log(customerObject.phone)

        })
         
      })
     
 }


//view the driver current trip details
function viewDriverTrip(key){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child('Drivers').child(key).child('TaxicustomerRequest')

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
        
         document.getElementById('destination').innerHTML='Destination: '+tripobject.destination
         document.getElementById('pickup').innerHTML='Pickup: '+tripobject.pickuplocation
         document.getElementById('paymentMode').innerHTML='PaymentMode: '+tripobject.paymentMode

         console.log(tripobject.destination)
         console.log(tripobject.pickuplocation)
         console.log(tripobject.paymentMode)

        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
            console.log(customerObject.phone)
        })
         
      })
     
 }

//view the deliveryagent current trip details
function viewDeliveryTrip(key){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child('DeliveryAgents').child(key).child('deliverycustomerRequest')

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
        
         document.getElementById('destination').innerHTML='Destination: '+tripobject.destination
         document.getElementById('pickup').innerHTML='Pickup: '+tripobject.pickuplocation
         
        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
        })
         
      })
     
 }

//view carrental service
function viewCarRentalService(key){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child('CarRentalAgents').child(key).child('carRentalcustomerRequest')

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
         document.getElementById('destination').innerHTML='Service Area: '+tripobject.servicePoint
         
        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
        })
         
      })
     
 }

 //view cleaning service
 function viewCleaningService(key){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child('CleaningAgents').child(key).child('cleaningcustomerRequest')

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
         document.getElementById('destination').innerHTML='Service Area: '+tripobject.servicePoint
         
        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
        })
         
      })
     
 }


 //view doctor service
 function viewDoctorService(key){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child('Doctors').child(key).child('doctorcustomerRequest')

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
         document.getElementById('destination').innerHTML='Service Area: '+tripobject.servicePoint
         
        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
        })
         
      })
     
 }

 //view electrician service
 function viewElectricianService(key){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child('Electricians').child(key).child('electriciancustomerRequest')

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
         document.getElementById('destination').innerHTML='Service Area: '+tripobject.servicePoint
         
        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
        })
         
      })
     
 }

 //view all other agent services
 function viewAgentService(key,agentService,requestService){
    var database=firebase.database()
    console.log(key)
    var bodabodacustomerRef=database.ref('Users').child(agentService).child(key).child(requestService)

    bodabodacustomerRef.once('value',function(snapshot){
        var name = snapshot.val();
         var tripobject=snapshot.val()
         document.getElementById('destination').innerHTML='Service Area: '+tripobject.servicePoint
         
        var customerRef=database.ref('Users').child('Customers').child(tripobject.customerRideId)

        customerRef.once('value',function(snapshot){
            var customerObject=snapshot.val()
            document.getElementById('customer').innerHTML='Customer: '+customerObject.phone
        })
         
      })
     
 }





//variable map to be used globally by all methods
 var map;

//Initialising a map in the onlines bodas page 
 function initMap() {
    
    var options={
        center: {lat: 0.3476, lng: 32.5825},
        zoom: 9
    }
//new map initialisation
 map = new google.maps.Map(document.getElementById('map'), options);

 
 }


//this method handles the viewing of a boda agent online
 function viewBodaLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('bodaBodasAvailable').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Rider Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }

//this method enables us to view the driver online
function viewDriverLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('driversAvailable').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Driver Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }


 //view delivery agent online location 
 function viewdeliveryAgentLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('deliveryAgentsAvailable').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Agent Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }




 //view carrental agent online location 
 function viewcarrentalAgentLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('carRentalAgentsAvailable').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Agent Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }


 //view cleaning agents online location
 function viewcleaningAgentLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('cleaningAgentsAvailable').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Agent Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }

//view doctor location
function viewdoctorLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('DoctorsAvailable').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Doctor Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }

//view electrician location
function viewelectricianLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('electriciansAvailable').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Agent Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }

//view all agents location
function viewAgentLocation(key,serviceAgent){

    var database=firebase.database()
    var bodabodaRef=database.ref(serviceAgent).child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Agent Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }




//this handles the viewing of the current location of ongoing boda boda trip
 function viewBodaTripLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('bodaBodasWorking').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Trip Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }


//view driver trip location
function viewDriverTripLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('driversWorking').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Trip Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })
}


//view delivery Trip location
function viewDeliveryTripLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('deliveryAgentsWorking').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Trip Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })
}


//view carrental service location
function viewCarrentalServiceLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('carRentalAgentsWorking').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Service Area',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })
}

//view cleaning service location
function viewCleaningServiceLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('cleaningAgentsWorking').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Service Area',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })
}


//view doctor service location
function viewDoctorServiceLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('DoctorsWorking').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Service Area',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })
}


//view electrician service location
function viewElectricianServiceLocation(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('electriciansWorking').child(key).child('l')
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()
       var  keys=Object.keys(locationObject).sort()
       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);
                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Service Area',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })
}

//view fumigation agents service locations
function viewAgentServiceLocation(key,agentService){
    var database=firebase.database()
    var bodabodaRef=database.ref(agentService).child(key).child('l')
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()
       var  keys=Object.keys(locationObject).sort()
       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);
                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Service Area',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })
}






 //handling the view for the boda request location
 function viewBodaClientLocation(key){

    var database=firebase.database()
    var bodabodaRef=database.ref('BodabodacustomerRequest').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }



  //handling the view for the taxi request location
  function viewTaxiClientLocation(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('TaxicustomerRequest').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }


   //handling the view for the delivery request location
   function viewDeliveryClientLocation(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('deliverycustomerRequest').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }


 //view carrental clients location
 function viewCarRentalClientLocation(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('carRentalcustomerRequest').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }


 //view cleaning client location
 function viewCleaningClientLocation(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('cleaningcustomerRequest').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)

       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }

//view doctor client location
function viewDoctorClientLocation(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('doctorcustomerRequest').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)
       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }

 //view electrician client location

 function viewElectricianClientLocation(key){
    var database=firebase.database()
    var bodabodaRef=database.ref('electriciancustomerRequest').child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)
       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }

 //view all other clients locations
 function viewClientLocation(key,serviceRequest){
    var database=firebase.database()
    var bodabodaRef=database.ref(serviceRequest).child(key).child('l')
    
    bodabodaRef.once('value',function(snapshot){
       // console.log(snapshot.val())
       var locationObject=snapshot.val()

       var  keys=Object.keys(locationObject).sort()

       var latitude=locationObject[keys[0]]
       var longitude=locationObject[keys[1]]
       console.log(latitude)
       console.log(longitude)
       var options={
        center: {lat: latitude, lng: longitude},
        zoom: 18
        }

       //get the map
       map = new google.maps.Map(document.getElementById('map'), options);

                //add sample marker to the map
        var marker=new google.maps.Marker({
            position:{lat: latitude, lng: longitude},
            map:map,
            label:'Client Location',
            center:{lat: latitude, lng: longitude},
            zoom:12
        });
    })

 }





