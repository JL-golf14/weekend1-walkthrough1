$(document).ready(function)(){
  $('#submitNewEmployee').on('click', function(){
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var annualSalary = $('#annualSalary').val();

   $('#employeeTableBody').append(


     '<tr>' +
       '<td>'+ firstName + '</td>' +
       '<td>'+ lastName + '</td>' +
       '<td>'+ idNumber + '</td>' +
       '<td>' + jobTitle + '</td>' +
       '<td>' + annualSalary + '</td>' +
       '</tr>'






   );


  });
});
