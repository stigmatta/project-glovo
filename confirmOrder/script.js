/**
//  * 
 */
// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.createElement("button");

//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(
//     locationButton
//   );
//   locationButton.addEventListener("click", () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }

// window.initMap = initMap;
document.addEventListener("DOMContentLoaded", function() {
  const storedOrderData = localStorage.getItem('orderData');

  if (storedOrderData) {
      const orderData = JSON.parse(storedOrderData);
      
      document.querySelector("#cafeNameHead").textContent = orderData.cafeName;
      document.querySelector("#cafeNameProducts").textContent = orderData.cafeName;
      document.querySelector("#productQ").textContent = orderData.cafeOrderAmount;
      document.querySelector("#productList").innerHTML = orderData.cafeOrderList; 
      document.querySelector("#pure-products-sum").textContent = orderData.cafeOrderPrice;

      let priceNumeric = parseFloat(orderData.cafeOrderPrice.replace(',', '.'));
      let serviceSum = priceNumeric * 0.05;
      let deliverySum = parseInt(document.querySelector("#delivery-sum").textContent); 
      let overall = priceNumeric + serviceSum + deliverySum;
      
      document.querySelector("#service-sum").textContent = serviceSum.toFixed(2).replace('.', ',') + " ₴";
      document.querySelector("#overall").textContent = overall.toFixed(2).replace('.', ',') + " ₴";
  } 
});
document.getElementById("cutlerySwitch").addEventListener("change", function() {
  let cutleryText = document.getElementById("cutleryText");
  let cutlerySwitch = document.getElementById("cutlerySwitch");

  if (cutlerySwitch.checked) {
      cutleryText.innerText = "Ми попросимо ресторан додати столові прибори до цього замовлення.";
  } else {
      cutleryText.innerText = "Допоможіть нам мінімізувати відходи. Просіть столові прибори лише тоді, коли вони необхідні.";
  }
});
document.addEventListener("DOMContentLoaded", function() {
  let promoInput = document.getElementById("floatingPromo");
  let submitButton = document.getElementById("submitPromo");
  let errorPromo = document.getElementById("errorPromo");

  promoInput.addEventListener("input", function() {
    let trimmedValue = promoInput.value.trim();

      submitButton.style.display = trimmedValue !== "" ? "block" : "none";
      errorPromo.style.display = "none";
  });

  submitButton.addEventListener("click", function() {
      let trimmedValue = promoInput.value.trim();

      if (trimmedValue === "") {
          errorPromo.style.display = "none";
      } else {
          errorPromo.style.display = "block";
      }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  let myButton = document.getElementById("submit");
  
  myButton.addEventListener("click", function() {
    setTimeout(function() {
      window.location.href = "../index.html";
  }, 3000);
      
  });
});
function validateStreet(street)
{
  let streetBorder=document.getElementById("streetInput");

  if(street.length==0)
  {
    streetBorder.style.borderBottom ="3px solid red"
    return false;
  }
  for (let index = 0; index < street.length; index++) {
    if(street[index]>='a' && street[index]<='z')
    {
    }
    else if(street[index]>='A' && street[index]<='Z')
    {

    }
    else if(street[index]==' ' || street[index]=='`')
    {

    }
    else
    {
      streetBorder.style.borderBottom ="3px solid red"
      return false;
    }
  }
  streetBorder.style.borderBottom ="1px solid lightgray"
  return true;
}
function validateApps(app)
{
  let appBorder=document.getElementById("appartmentInput");
  if(app.length==0)
  {
    appBorder.style.borderBottom ="3px solid red"
    return false;
  }
  for (let index = 0; index < app.length; index++) {
    if(app[index]>'9' || app[index]<'0')
    {
      appBorder.style.borderBottom ="3px solid red"
      return false;
    }
  }
  appBorder.style.borderBottom ="1px solid lightgray"
  return true;
}
function validateAdress(app,street,house)
{
  let summ=0;
  summ+=validateApps(app);
  summ+=validateStreet(street);
  if(house.length==0)
  {
    let houseBorder=document.getElementById("houseInput");
    houseBorder.style.borderBottom ="3px solid red"
  }
  else
  {
    let houseBorder=document.getElementById("houseInput");
    houseBorder.style.borderBottom ="1px solid lightgray";
    summ+=1;
  }
  if(summ!=3)
  {
    return false;
  }
  return true;
}

 function saveAddress() {
  let street = document.getElementById("streetInput").value;
  let house = document.getElementById("houseInput").value;
  let app = document.getElementById("appartmentInput").value;
  let select = document.getElementById("adressInput");
  if(validateAdress(app,street,house))
  {
        
        let newOption = document.createElement("option");
        newOption.value = "4";
        newOption.text = street + ", " + house + ", " + app;
        select.appendChild(newOption);
        $('#adressModal').modal('hide');
  }
  else
  {

  }
}

function validateNumber(number)
{
  let numberBorder=document.getElementById("numberInput");
  if(number.length<19)
  {
    numberBorder.style.borderBottom ="3px solid red"
    return false;
  }
  numberBorder.style.borderBottom ="1px solid lightgray"
  return true;
}
function validateDate(date)
{
  let dateBorder=document.getElementById("dateInput");
  let year=date.slice(-2);
  if(year<24)
  {
    dateBorder.style.borderBottom ="3px solid red"
    return false;
  }
  else if(date.length<5)
  {
    dateBorder.style.borderBottom ="3px solid red"
    return false;
  }
  dateBorder.style.borderBottom ="1px solid lightgray";
  return true;
}
function validateCVV(cvv)
{
  let cvvBorder=document.getElementById("cvvInput");
  if(cvv.length<3)
  {
    cvvBorder.style.borderBottom ="3px solid red";
    return false;
  }
  cvvBorder.style.borderBottom ="1px solid lightgray";
  return true;
}
function validateCard(number,date,cvv)
{
  let summ=0;
  summ+=validateNumber(number);
  summ+=validateDate(date);
  summ+=validateCVV(cvv);
  if(summ!=3)
  {
    return false;
  }
  return true;
}
function saveCard() {
  let number = document.getElementById("numberInput").value;
  let date = document.getElementById("dateInput").value;
  let cvv = document.getElementById("cvvInput").value;
  let select = document.getElementById("cardInput");
  if(validateCard(number,date,cvv))
  {
    let last4 = number.slice(-4);
    let newOption = document.createElement("option");
    newOption.value = "4";
    newOption.text = "Картка, що закінчується на " + last4;
    select.appendChild(newOption);
    $('#cardModal').modal('hide');
  }
  else
  {

  }
}
document.addEventListener("DOMContentLoaded", function() {
  function allowOnlyDigits(inputElement) {
      inputElement.addEventListener("input", function() {
          inputElement.value = inputElement.value.replace(/\D/g, '');
      });
  }
  function addSpacesToCardNumber(inputElement) {
      inputElement.addEventListener("input", function() {
        let trimmedValue = inputElement.value.replace(/\s/g, '');
          trimmedValue = trimmedValue.replace(/\D/g, '');
          let formattedValue = '';
          for (let i = 0; i < trimmedValue.length; i++) {
              if (i > 0 && i % 4 === 0) {
                  formattedValue += ' ';
              }
              formattedValue += trimmedValue.charAt(i);
          }
          inputElement.value = formattedValue;
      });
  }
  function addSlashToDate(inputElement) {
      inputElement.addEventListener("input", function() {
        let trimmedValue = inputElement.value.replace(/\D/g, '');
          if (trimmedValue.length >= 2) {
              inputElement.value = trimmedValue.substring(0, 2) + '/' + trimmedValue.substring(2);
          }
      });
  }
  let numberInput = document.getElementById("numberInput");
  let dateInput = document.getElementById("dateInput");
  let cvvInput = document.getElementById("cvvInput");

  allowOnlyDigits(numberInput);
  addSpacesToCardNumber(numberInput);

  allowOnlyDigits(dateInput);
  addSlashToDate(dateInput);

  allowOnlyDigits(cvvInput);
});
document.getElementById("addAddressButton").addEventListener("click", saveAddress);
document.getElementById("addCardButton").addEventListener("click", saveCard);
