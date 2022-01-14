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

  fnerr.textContent = ''
  lnerr.textContent = ''
  emailerr.textContent = ''
  pwerr.textContent = ''

  const empty = ' cannot be empty.'
  let valid = true

  if(!firstname.value) {
    fnerr.textContent = 'First Name ' + empty
    valid = false
  }
  if(!lastname.value) {
    lnerr.textContent = 'Last Name ' + empty
    valid = false
  }
  if(!email.value) {
    emailerr.textContent = 'Email address ' + empty
    valid = false
  } else if(!re.test(email.value)) { 
    emailerr.textContent = 'Looks like this is not an email.'
    valid = false
  }
  if(!password.value) {
    pwerr.textContent = 'Password ' + empty
    valid = false
  }

  if(valid) {
    // console.log('success')
    form.submit()
  }
  
}