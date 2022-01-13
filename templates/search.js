

<script>
dataJsoned = "{{posts}}"
newTemp = dataJsoned.replace(/"/g, '\'');
const jsondata = JSON.parse(dataJsoned.replace(/&quot;/g, '"'))
console.log(jsondata,"*******")


const searchText = document.getElementById('search')
const boxSearch  = document.getElementById('boxSearch')
console.log(searchText,"text")


searchText.addEventListener("keyup", myFunction);

function myFunction(e) {
    console.log(e,"event");
    console.log("keying");
    boxSearch.innerHTML = "";
    filteredArr = []
    console.log(e.target.value)

    filteredArr = jsondata.filter(info=>info['title'].includes(e.target.value))
    filteredArr.map(item=>{
        boxSearch.innerHTML +=`
        <div class="row" class="boxSearch">
        <h2>${item.title}</h2>
    </div>
        `
    })
    console.log(filteredArr,"resulted data")
}


const search2 = document.getElementById('search2')
const boxSearch2 = document.getElementById('boxSearch2')

search2.addEventListener("keyup", searchBackendAppend);



var timerid = setTimeout(() => {
            
            document.getElementById('spinner').style.display="none";
            
        }, 1000);   
function  searchBackendAppend(e) {

     
$.ajax({
    type : "POST",
    url : "/postJsonSearch",
    data : {'key':e.target.value},
    success: function(response){
    

        console.log(typeof(response),response)
        boxSearch2.innerHTML = ""
            for (let i = 0; i < response.length; i++) {
                
                boxSearch2.innerHTML += `<h2>
                        ${response[i].id} - ${response[i].title}
                </h2>

                `

            }


 

       
    },



})

}

</script>