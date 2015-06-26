<script>
var reassignJob = document.querySelectorAll('.ctReassign');
   for (var i = 0; i < reassignJob.length; i++) {
   reassignJob[i].addEventListener('click', function(event) {
    event.preventDefault();
         document.getElementById("progressBar").style.display = 'initial';
         document.getElementById("caspioform").style.display = 'none';
       setTimeout('document.forms["caspioform"].submit()' , 1000);

     });
   }

</script>


var completeJob = document.querySelectorAll('.ctComplete');

 for (var i = 0; i < completeJob.length; i++) {
   completeJob[i].addEventListener('click', function(event) {
       event.preventDefault();

       var choice = confirm(this.getAttribute('data-confirm'));

       if (choice == true) {
           document.getElementById("progressBar").style.display = 'initial';
           document.getElementById("caspioform").style.display = 'none';
           setTimeout('document.forms["caspioform"].submit()',1000);
       }
       else {
           document.getElementById('EditRecordFinishedJob').checked = false;
       }
   });
 }
