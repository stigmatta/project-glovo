let transport;

      let userName;
      let userEmail;
      let userPhone;
      let userCity;

      function validatorEmail(email)
      {
        let testemail=email.trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
        {
            let emailInput = document.getElementById('emailInput');
            emailInput.style.borderBottom = 'solid 3px red';
            return false; 
        }
        emailInput.style.borderBottom = 'solid 2px lightgray';
        return true;
      }

      function validatorPhone(phone)
      {
        for (let index = 0; index < phone.length; index++) {
          if(phone[index]>'9' || phone[index]<'0')
          {
            let phoneInput = document.getElementById('phoneInput');
            phoneInput.style.borderBottom = 'solid 3px red';
            return false;
          }
        }
        if(phone.length==13)
        {
          if(phone.substring(0,4)!='+380')
          {
            let phoneInput = document.getElementById('phoneInput');
            phoneInput.style.borderBottom = 'solid 3px red';
            return false;
          }
        }
        if(phone.length==12)
        {
          if(phone.substring(0,3)!='380')
          {
            let phoneInput = document.getElementById('phoneInput');
            phoneInput.style.borderBottom = 'solid 3px red';
            return false;
          }
        }
        if(phone.length==10)
        {
          if(phone[0]!='0')
          {
            let phoneInput = document.getElementById('phoneInput');
            phoneInput.style.borderBottom = 'solid 3px red';
            return false;
          }
        }
        if(phone.length!=13 && phone.length!=12 && phone.length!=10)
        {
          let phoneInput = document.getElementById('phoneInput');
          phoneInput.style.borderBottom = 'solid 3px red';
          return false;
        }
        phoneInput.style.borderBottom = 'solid 2px lightgray';
        return true;
        
      }
      function validatorName(name)
      {
        if(name.length==0)
          {
            let nameInput = document.getElementById('nameInput');
            nameInput.style.borderBottom = 'solid 3px red';
            return false;
          }
        for (let index = 0; index < name.length; index++) {
          if(name[index]<='9' && name[index]>='0')
          {
            let nameInput = document.getElementById('nameInput');
            nameInput.style.borderBottom = 'solid 3px red';
            return false;
          }
        }
        nameInput.style.borderBottom = 'solid 2px lightgray';
        return true;
      }
      function saveValue(value) {
        transport = value;
    }
      function validator(name,email,phone)
      {
        let check=0;
        check+=validatorEmail(email);
        check+=validatorName(name);
        check+=validatorPhone(phone);
        if(check==3)
          return true;
        return false;
      }

function saveUserData() {
            userName = document.getElementById("nameInput").value;
            userEmail = document.getElementById("emailInput").value;
            userPhone = document.getElementById("phoneInput").value;
            userCity=document.getElementById("citySelect").value;

            if(validator(userName,userEmail,userPhone))
            {
            let emailInput = document.getElementById('emailInput');
            emailInput.style.borderBottom = 'solid 2px lightgray';
            let phoneInput = document.getElementById('phoneInput');
            phoneInput.style.borderBottom = 'solid 2px lightgray';
            let nameInput = document.getElementById('nameInput');
            nameInput.style.borderBottom = 'solid 2px lightgray';
            console.log("Им'я: " + userName);
            console.log("Ел.пошта: " + userEmail);
            console.log("Мiсто: " + userCity);
            console.log("Номер телефону: " + userPhone);
            console.log("Транспорт: " + transport);
            let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
            myModal.show()
            }
            else
            {
              console.log("WRONG DATA!");
            }
            
        }