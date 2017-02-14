$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();  //  Do not bring us to a new page   used in forms!!!
//  create an array of the inputs, the inputs are converted to objects
// objects have two properties name and value
// e.g. name:  'first name'   value:  "Jeremy"
    console.log('form values: ' , $(this).serializeArray());

    var submissionArray = $(this).serializeArray();        //  [{},{},{}]
    var newEmployeeObject = {};                // {firstName: "luke",  lastName: 'schlangen'}

    submissionArray.forEach(function(inputField){
      // first time newEmployeeObject is empty {}
      newEmployeeObject[inputField.name] = inputField.value;
      // newEmployeeObject.firstName = Luke;
      // newEmployeeObject is {firstName: "Luke"}
      // 2nd time through newEmployeeObject is {firstName: 'luke', lastName: 'schlangen'}

    });
    console.log("newEmployeeObject:", newEmployeeObject);
    
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
       '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + ' ">Delete ' + firstName + '</button></td>' +
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
var deletedEmployeeSalary = $(this).data('salary');
var deletedEmployeeExpenses = deletedEmployeeSalary / 12;
var previousMonthlyExpenses = $('#monthlyExpenses').text();
var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeExpenses;
$('#monthlyExpenses').text(newTotalMonthlyExpenses);
// deleting employee row from table    //  order matters
$(this).parent().parent().remove();


});
});
