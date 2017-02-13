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

//clear out input boxes
$('.employeeFormInput').val('');

  });

$('#employeeTableBody').on('click','.deleteEmployeeButton', function(){
// console.log("button WAs Clicked");
//removing employee salary from table
var deletedEmployeeSalary = $(this).parent().prev().text();
var deletedEmployeeExpenses = deletedEmployeeSalary / 12;
var previousMonthlyExpenses = $('#monthlyExpenses').text();
var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeExpenses;
$('#monthlyExpenses').text(newTotalMonthlyExpenses);
// deleting employee row from table    //  order matters
$(this).parent().parent().remove();



});









});
