
window.onload = function() {
  let loginpage = document.getElementById("loginpage");
loginpage.style.display="block";


            }



            function itgloginprem() {
                event.preventDefault(); // prevent form from submitting automatically

                var email = document.getElementById("id").value;
                let value = email;
                var password = document.getElementById("pass").value;
                let val = email;
                // make API request to fetch user data
                fetch('https://trendingdecors.in/api/itgprem/')
                  .then(response => response.json())
                  .then(data => {
                    var authenticated = false;
                    for (var i = 0; i < data.length; i++) {
                      if (data[i].mailid === email && data[i].password === password) {
                        authenticated = true;
                        break;
                      }
                    }
                    if (authenticated) {
                      alert('Login successful!');
                      let loginpage = document.getElementById("loginpage");
                    loginpage.style.display="none";
                    let username = document.getElementById("username");
                    document.getElementById("username").innerHTML =email;

                     var myStylesheet = document.getElementById("myStylesheet");
                     myStylesheet.disabled = true;


                    } else {
                      alert('Invalid email or password. Please try again.');
                    }
                  })
                  .catch(error => console.error('Error fetching data from API:', error));
              }
