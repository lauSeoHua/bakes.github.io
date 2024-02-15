const API_HOST = `http://localhost:5000`;

//for moviename
$(document).ready(function(){
    axios
        .get(`${API_HOST}/movies`,{
        })
        .then(result => showmovies(result))
});

function showmovies(result){
    try{
        getimage1()
        getimage2()
        getimage3()
        getimage4()
        getimage5()
        getimage6()
        const strmovie1name= (Object.values(result)[0][0]);
        document.getElementById('movie1').innerHTML=Object.values(strmovie1name);
        const strmovie2name= (Object.values(result)[0][1]);
        document.getElementById('movie2').innerHTML=Object.values(strmovie2name);
        const strmovie3name= (Object.values(result)[0][2]);
        document.getElementById('movie3').innerHTML=Object.values(strmovie3name);
        const strmovie4name= (Object.values(result)[0][3]);
        document.getElementById('movie4').innerHTML=Object.values(strmovie4name);
        const strmovie5name= (Object.values(result)[0][4]);
        document.getElementById('movie5').innerHTML=Object.values(strmovie5name);
        const strmovie6name= (Object.values(result)[0][5]);
        document.getElementById('movie6').innerHTML=Object.values(strmovie6name);
    }
    catch(err){
        $("#movie1").html("undefined")
    }
};

//images
//image1
function getimage1(){
    axios
        .get(`${API_HOST}/getimages/1`,{
        })
        .then(image1 => displayimage1(image1))
    };

function displayimage1(image1){
    document.getElementById("movieimg1").src = "data:image/png;base64," + Object.values(image1)[0];
};
//image 2
function getimage2(){
    axios
        .get(`${API_HOST}/getimages/2`,{
        })
        .then(image2 => displayimage2(image2))
    };

function displayimage2(image2){
    document.getElementById("movieimg2").src = "data:image/png;base64," + Object.values(image2)[0];
};

//image 3
function getimage3(){
    axios
        .get(`${API_HOST}/getimages/3`,{
        })
        .then(image3 => displayimage3(image3))
    };

function displayimage3(image3){
    document.getElementById("movieimg3").src = "data:image/png;base64," + Object.values(image3)[0];
};
//image 4
function getimage4(){
    axios
        .get(`${API_HOST}/getimages/4`,{
        })
        .then(image4 => displayimage4(image4))
    };

function displayimage4(image4){
    document.getElementById("movieimg4").src = "data:image/png;base64," + Object.values(image4)[0];
};

//image 5
function getimage5(){
    axios
        .get(`${API_HOST}/getimages/5`,{
        })
        .then(image5 => displayimage5(image5))
    };

function displayimage5(image5){
    document.getElementById("movieimg5").src = "data:image/png;base64," + Object.values(image5)[0];
};
//image 6
function getimage6(){
    axios
        .get(`${API_HOST}/getimages/6`,{
        })
        .then(image6 => displayimage6(image6))
    };

function displayimage6(image6){
    document.getElementById("movieimg6").src = "data:image/png;base64," + Object.values(image6)[0];
};

//sort ascending 
document.getElementById('Ascending').addEventListener('click', sort_ascending )

function sort_ascending(){
    axios
        .get(`${API_HOST}/sortbydaterelease`,{
        })
        .then(result2 => showmoviesaftersorting(result2))
};

function showmoviesaftersorting(result2){
    try{
        document.getElementById("movieimg1").style.display="none"
        document.getElementById("movieimg2").style.display="none"
        document.getElementById("movieimg3").style.display="none"
        document.getElementById("movieimg4").style.display="none"
        document.getElementById("movieimg5").style.display="none"
        document.getElementById("movieimg6").style.display="none"
        const strmovie1name= (Object.values(result2)[0][0]);
        document.getElementById('movie1').innerHTML=Object.values(strmovie1name);
        const strmovie2name= (Object.values(result2)[0][1]);
        document.getElementById('movie2').innerHTML=Object.values(strmovie2name);
        const strmovie3name= (Object.values(result2)[0][2]);
        document.getElementById('movie3').innerHTML=Object.values(strmovie3name);
        const strmovie4name= (Object.values(result2)[0][3]);
        document.getElementById('movie4').innerHTML=Object.values(strmovie4name);
        const strmovie5name= (Object.values(result2)[0][4]);
        document.getElementById('movie5').innerHTML=Object.values(strmovie5name);
        const strmovie6name= (Object.values(result2)[0][5]);
        document.getElementById('movie6').innerHTML=Object.values(strmovie6name);
    }
    catch(err){
        $("#movie1").html("undefined")
    }
};

//sort descending
document.getElementById('Descending').addEventListener('click', sort_descending )

function sort_descending(){
    axios
        .get(`${API_HOST}/sortbydatereleasedescending`,{
        })
        .then(result => showmoviesaftersorting(result))
};

function showmoviesaftersorting(result){
    try{
        document.getElementById("movieimg1").style.display="none"
        document.getElementById("movieimg2").style.display="none"
        document.getElementById("movieimg3").style.display="none"
        document.getElementById("movieimg4").style.display="none"
        document.getElementById("movieimg5").style.display="none"
        document.getElementById("movieimg6").style.display="none"
        const strmovie1name= (Object.values(result)[0][0]);
        document.getElementById('movie1').innerHTML=Object.values(strmovie1name);
        const strmovie2name= (Object.values(result)[0][1]);
        document.getElementById('movie2').innerHTML=Object.values(strmovie2name);
        const strmovie3name= (Object.values(result)[0][2]);
        document.getElementById('movie3').innerHTML=Object.values(strmovie3name);
        const strmovie4name= (Object.values(result)[0][3]);
        document.getElementById('movie4').innerHTML=Object.values(strmovie4name);
        const strmovie5name= (Object.values(result)[0][4]);
        document.getElementById('movie5').innerHTML=Object.values(strmovie5name);
        const strmovie6name= (Object.values(result)[0][5]);
        document.getElementById('movie6').innerHTML=Object.values(strmovie6name);
    }
    catch(err){
        $("#movie1").html("undefined")
    }
};
//search

function search(){
    axios.get(`${API_HOST}/searchmovie`,{
        
        params:{
            name: document.querySelector('#xx').value
        }
    })
    .then(result => searchmovie(result))
    .catch(err => clear(err));
};

function clear(){
    document.getElementById("movieimg1").style.display="none"
    document.getElementById("movieimg2").style.display="none"
    document.getElementById("movieimg3").style.display="none"
    document.getElementById("movieimg4").style.display="none"
    document.getElementById("movieimg5").style.display="none"
    document.getElementById("movieimg6").style.display="none"
    document.getElementById("cardbody4").style.display="none"
    document.getElementById('cardcolor2').style.display="none";
    document.getElementById('cardcolor3').style.display="none";
    document.getElementById('cardcolor4').style.display="none";
    document.getElementById('cardcolor5').style.display="none";
    document.getElementById('cardcolor6').style.display="none";
}

function searchmovie(result){
    document.getElementById("movieimg1").style.display="none"
    document.getElementById("movieimg2").style.display="none"
    document.getElementById("movieimg3").style.display="none"
    document.getElementById("movieimg4").style.display="none"
    document.getElementById("movieimg5").style.display="none"
    document.getElementById("movieimg6").style.display="none"
    document.getElementById("cardbody4").style.display="none"
    //document.getElementById('cardcolor').style.display="none";
    //document.getElementById('homebg').style.display="none";
    document.getElementById('cardcolor2').style.display="none";
    document.getElementById('cardcolor3').style.display="none";
    document.getElementById('cardcolor4').style.display="none";
    document.getElementById('cardcolor5').style.display="none";
    document.getElementById('cardcolor6').style.display="none";
    try{
        if (Object.values(result)[0].length>0){
        document.getElementById('cardcolor').innerHTML = "<p>"+(JSON.stringify((Object.values(result)[0][0])["name"])).replace(/['"]+/g,'')+"</p>"
        document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][1])["name"])).replace(/['"]+/g,'')+"</p>"
        document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][2])["name"])).replace(/['"]+/g,'')+"</p>"
        document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][3])["name"])).replace(/['"]+/g,'')+"</p>"
        document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][4])["name"])).replace(/['"]+/g,'')+"</p>"
        document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][5])["name"])).replace(/['"]+/g,'')+"</p>"
        }
        else{

            document.getElementById('cardcolor').innerHTML = "No results found"
        }
    }
    catch(err) {
        return ;
      }
    }
document.getElementById('submit').addEventListener('onclick', search )
//filter romance
function Romance(){
    axios.get(`${API_HOST}/Genre/1`)
    .then(result => filterRomance(result))
    .catch(err => clear(err))
};

function filterRomance(result){
//     if (document.getElementById("Genre").selectedIndex = "0", (result.length>0)){
    clear()
    //document.getElementById('cardcolor').innerHTML+=JSON.stringify((Object.values((result))[0][0]["name"]))
    searchmovie(result)
    }

function Horror(){
        axios.get(`${API_HOST}/Genre/2`)
        .then(result => filterRomance(result))
        .catch(err => clear(err))
    };
    
function filterRomance(result){
    if (document.getElementById("Genre").selectedIndex = "0", (result.length>0)){
        clear()
        //document.getElementById('cardcolor').innerHTML+=JSON.stringify((Object.values((result))[0][0]["name"]))
        searchmovie(result)
        }
}
//     else{
//         clear()
//     }

// }
// if (document.getElementById('Genre').value== "Romance"){
// document.querySelector('.Genre').addEventListener('change', () => this.Romance())
// }
//delete

function removeMovie6() {
  axios
    .delete(`${API_HOST}/delete/Faraway Land`)
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

function showOutput(res){
    document.getElementById('cardcolor6').style.display="none";
    document.getElementById("movieimg6").style.display="none"
}

document.getElementById('Deleteno6').addEventListener('onclick', removeMovie6 )