document.getElementById('btn-login').addEventListener('click',function(event){event.preventDefault();
    const phoneNumber = document.getElementById('phone').value;
    const pinNumber = document.getElementById('pin').value;
    if(phoneNumber === '01820037321' && pinNumber === '1234'){console.log('your are login');
     window.location.href = ('/home.html')
    }
    else{
        alert('WRONG PIN OR NUMBER')
    }
    
    
})