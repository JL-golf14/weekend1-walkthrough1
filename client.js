$(document).ready(function(){
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
       '<td><button class="deleteEmployeeButton">Delete ' + firstName + '</button></td>' +
       '</tr>'

 );
// monthly salary expenses
var newMonthlyExpenses = annualSalary / 12;
var previousSalaryTotal = $('#monthlyExpenses').text();
var totalMonthlyExpenses = parseFloat(previousSalaryTotal) + newMonthlyExpenses;
$('#monthlyExpenses').text(totalMonthlyExpenses);



  });

$('#employeeTableBody').on('click','.deleteEmployeeButton', function(){
console.log("button WAs Clicked");
$(this).parent().parent().remove();


});









});
