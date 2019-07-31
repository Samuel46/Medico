// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCYI9RMe8k7kSBPN3w21M9tBC6LNW2_REk",
  authDomain: "rynnnn-cf958.firebaseapp.com",
  databaseURL: "https://rynnnn-cf958.firebaseio.com",
  projectId: "rynnnn-cf958",
  storageBucket: "",
  messagingSenderId: "585137539639",
  appId: "1:585137539639:web:b80c2515df4912fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("New_user");


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);



function submitForm(e) {
  e.preventDefault();


  //   Get Values
  var applicant_name = getInputVal("applicant_name");
  var national_id = getInputVal("national_id");
  var gender = getInputVal("gender");
  var other_dep = getInputVal("other_dep");
  var mobile_no = getInputVal("mobile_no");
  var r_owner = getInputVal("r_owner");
  var r_tenant = getInputVal("r_tenant");
  var b_owner = getInputVal("b_owner");
  var b_tenant = getInputVal("b_tenant");



  // Save the application form
  saveMessage(applicant_name, national_id, gender, other_dep, mobile_no, r_owner, r_tenant, b_owner, b_tenant);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();


}





// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
//   Save message to firebase
function saveMessage(
  applicant_name,
  national_id,
  gender,
  other_dep,
  mobile_no,
  r_owner,
  r_tenant,
  b_owner,
  b_tenant

) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    applicant_name: applicant_name,
    national_id: national_id,
    gender: gender,
    other_dep: other_dep,
    mobile_no: mobile_no,
    r_owner: r_owner,
    r_tenant: r_tenant,
    b_owner: b_owner,
    b_tenant: b_tenant

  });
}
