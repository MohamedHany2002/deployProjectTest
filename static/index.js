
const spinner = document.getElementById("spinner-box")
const data_box = document.getElementById("data-box")


// uploading data 

// console.log("hello ")

// dataJsoned = "{{posts}}"
// newTemp = dataJsoned.replace(/"/g, '\'');
// const data = JSON.parse(newTemp)
// console.log(data)


$.ajax({
    type : "GET",
    url : "/postJson",
    success: function(response){
    
        var timerid = setTimeout(() => {
            spinner.style.display="none";
            
        }, 1000);
            for (let i = 0; i < response.length; i++) {

                data_box.innerHTML += `<h2>
                        ${response[i].id} - ${response[i].title}
                </h2>
                <p>
                    ${response[i].body}
                </p>
                `

            }


 

       
    },
    complete: function() {
       
    }



})