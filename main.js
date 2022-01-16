const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector('form')
form.addEventListener('submit', claimTrial)

function claimTrial(e) {
  e.preventDefault()
  const firstname = document.querySelector('#first-name')
  const lastname = document.querySelector('#last-name')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')

  const fnerr = document.querySelector('.first-name')
  const lnerr = document.querySelector('.last-name')
  const emailerr = document.querySelector('.email')
  const pwerr = document.querySelector('.password')

  const ifn = document.querySelector('.i-fn')
  const iln = document.querySelector('.i-ln')
  const iemail = document.querySelector('.i-email')
  const ipass = document.querySelector('.i-pass')

  // reset text
  fnerr.textContent = ''
  lnerr.textContent = ''
  emailerr.textContent = ''
  pwerr.textContent = ''

  
  // remove red border
  firstname.classList.remove('red-b')
  lastname.classList.remove('red-b')
  email.classList.remove('red-b')
  password.classList.remove('red-b')

  // error icon
  ifn.style.setProperty('display', 'none', 'important')
  iln.style.setProperty('display', 'none', 'important')
  iemail.style.setProperty('display', 'none', 'important')
  ipass.style.setProperty('display', 'none', 'important')

  console.log(iln, ifn.style.visiblity)

  const empty = ' cannot be empty.'
  // form valid flag
  let valid = true
  
  if(!firstname.value) {
    fnerr.textContent = 'First Name ' + empty
    firstname.classList.add('red-b')
    ifn.style.setProperty('display', 'inline-block', 'important')
    valid = false
  }
  if(!lastname.value) {
    lnerr.textContent = 'Last Name ' + empty
    lastname.classList.add('red-b')
    iln.style.setProperty('display', 'inline-block', 'important')
    valid = false
  }
  if(!email.value) {
    emailerr.textContent = 'Email address ' + empty
    email.classList.add('red-b')
    iemail.style.setProperty('display', 'inline-block', 'important')
    valid = false
  } else if(!re.test(email.value)) { 
    emailerr.textContent = 'Looks like this is not an email.'
    email.classList.add('red-b')
    iemail.style.setProperty('display', 'inline-block', 'important')
    valid = false
  }
  if(!password.value) {
    pwerr.textContent = 'Password ' + empty
    password.classList.add('red-b')
    ipass.style.setProperty('display', 'inline-block', 'important')
    valid = false
  }

  if(valid) {
    form.submit()
  }
  
}