{/* <script> */}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzfNIEFdpB3RRX727Egq84a8InvUi4bj2srunwq8mMxPdWDcULq4DCfXWZzQWvZu-DI/exec'
  const form = document.forms['submit-to-google-sheet'];
  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
// </script>