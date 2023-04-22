// window.addEventListener('load',()=>{
//     const form =document.querySelector('main');
//     const name=document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//     const linked=document.querySelector('#lin').value;
//     const image = document.querySelector('#image').value;
//     const gender=document.querySelector('#opt1').value;
//     const content=document.querySelector('content');

//     form.addEventListener('submit',(e)=>{
//         e.preventDefault();

//         const task = input.value;

//         if(!task){
//             alert("ENTER ALL FIELD");
//             return;
//         }
//         content.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Linked In: ${linked}</p><p>Gender: ${gender}`
//     })

// })

const form = document.getElementById("myForm");
form.addEventListener("submit", showDetails);
window.addEventListener("load", getDetails);

function showDetails(event) {
  event.preventDefault(); // prevent form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const details = document.getElementById("details");
  const newDetails = document.createElement("div");
  newDetails.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p>`;
  details.appendChild(newDetails);
  saveDetails(name, email, phone); // save form details
  form.reset(); // reset form fields
}

function saveDetails(name, email, phone) {
  const details = localStorage.getItem("formDetails");
  if (details) {
    const parsedDetails = JSON.parse(details);
    parsedDetails.push({ name, email, phone });
    localStorage.setItem("formDetails", JSON.stringify(parsedDetails));
  } else {
    const newDetails = [{ name, email, phone }];
    localStorage.setItem("formDetails", JSON.stringify(newDetails));
  }
}

function getDetails() {
  const details = localStorage.getItem("formDetails");
  if (details) {
    const parsedDetails = JSON.parse(details);
    for (const detail of parsedDetails) {
      const newDetails = document.createElement("div");
      newDetails.innerHTML = `<p>Name: ${detail.name}</p><p>Email: ${detail.email}</p><p>Phone: ${detail.phone}</p>`;
      document.getElementById("details").appendChild(newDetails);
    }
  }
}
