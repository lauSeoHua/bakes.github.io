const API_HOST = `http://localhost:5000`;

const api = {
    getmovies: function () {
        return axios.get(`${API_HOST}/movies`).then(function (response) {
            return response;
        });
    },
    searchmovies:function(input1){
        return axios.get(`${API_HOST}/searchmovie?name=${input1}`).then(function (response){
            return response;
        });
    },
    
}
document.addEventListener('DOMContentLoaded', function () {
    
        api.getmovies()
            .then(function (result) {
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
            })
            .catch(function (error) {
                console.error(error); // For debugging
                
            });
    
        const submit = document.getElementById('submit');
                submit.addEventListener('click', function () {
                    const input1=document.querySelector('#xx').value;
                    api.searchmovies(input1)
                    .then(function(result){
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
                        if (Object.values(result)[0].length>0){
                            document.getElementById('cardcolor').innerHTML = "<p>"+(JSON.stringify((Object.values(result)[0][0])["name"])).replace(/['"]+/g,'')+"</p>"
                            document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][1])["name"])).replace(/['"]+/g,'')+"</p>"
                            document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][2])["name"])).replace(/['"]+/g,'')+"</p>"
                            document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][3])["name"])).replace(/['"]+/g,'')+"</p>"
                            document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][4])["name"])).replace(/['"]+/g,'')+"</p>"
                            document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][5])["name"])).replace(/['"]+/g,'')+"</p>"
                            }
                    })
                })
});


// //for moviename
// $(document).ready(function(){
//     axios
//         .get(`${API_HOST}/movies`,{
//         })
//         .then(result => showmovies(result))
// });

// function showmovies(result){
//     try{
//         getimage1()
//         getimage2()
//         getimage3()
//         getimage4()
//         getimage5()
//         getimage6()
//         const strmovie1name= (Object.values(result)[0][0]);
//         document.getElementById('movie1').innerHTML=Object.values(strmovie1name);
//         const strmovie2name= (Object.values(result)[0][1]);
//         document.getElementById('movie2').innerHTML=Object.values(strmovie2name);
//         const strmovie3name= (Object.values(result)[0][2]);
//         document.getElementById('movie3').innerHTML=Object.values(strmovie3name);
//         const strmovie4name= (Object.values(result)[0][3]);
//         document.getElementById('movie4').innerHTML=Object.values(strmovie4name);
//         const strmovie5name= (Object.values(result)[0][4]);
//         document.getElementById('movie5').innerHTML=Object.values(strmovie5name);
//         const strmovie6name= (Object.values(result)[0][5]);
//         document.getElementById('movie6').innerHTML=Object.values(strmovie6name);
//     }
//     catch(err){
//         $("#movie1").html("undefined")
//     }
// };

// //images
// //image1
// function getimage1(){
//     axios
//         .get(`${API_HOST}/getimages/6`,{
//         })
//         .then(image1 => displayimage1(image1))
//     };

// function displayimage1(image1){
//     document.getElementById("movieimg1").src = "data:image/png;base64," + Object.values(image1)[0];
// };
// //image 2
// function getimage2(){
//     axios
//         .get(`${API_HOST}/getimages/7`,{
//         })
//         .then(image2 => displayimage2(image2))
//     };

// function displayimage2(image2){
//     document.getElementById("movieimg2").src = "data:image/png;base64," + Object.values(image2)[0];
// };

// //image 3
// function getimage3(){
//     axios
//         .get(`${API_HOST}/getimages/8`,{
//         })
//         .then(image3 => displayimage3(image3))
//     };

// function displayimage3(image3){
//     document.getElementById("movieimg3").src = "data:image/png;base64," + Object.values(image3)[0];
// };
// //image 4
// function getimage4(){
//     axios
//         .get(`${API_HOST}/getimages/9`,{
//         })
//         .then(image4 => displayimage4(image4))
//     };

// function displayimage4(image4){
//     document.getElementById("movieimg4").src = "data:image/png;base64," + Object.values(image4)[0];
// };

// //image 5
// function getimage5(){
//     axios
//         .get(`${API_HOST}/getimages/10`,{
//         })
//         .then(image5 => displayimage5(image5))
//     };

// function displayimage5(image5){
//     document.getElementById("movieimg5").src = "data:image/png;base64," + Object.values(image5)[0];
// };
// //image 6
// function getimage6(){
//     axios
//         .get(`${API_HOST}/getimages/11`,{
//         })
//         .then(image6 => displayimage6(image6))
//     };

// function displayimage6(image6){
//     document.getElementById("movieimg6").src = "data:image/png;base64," + Object.values(image6)[0];
// };

// //sort ascending 
// document.getElementById('Ascending').addEventListener('click', sort_ascending )

// function sort_ascending(){
//     axios
//         .get(`${API_HOST}/sortbydaterelease`,{
//         })
//         .then(result2 => showmoviesaftersorting(result2))
// };
// //sort descending
// document.getElementById('Descending').addEventListener('click', sort_descending )

// function sort_descending(){
//     axios
//         .get(`${API_HOST}/sortbydatereleasedescending`,{
//         })
//         .then(result3 => showmoviesaftersorting(result3))
// };

// function showmoviesaftersorting(result){
//     try{
//         document.getElementById("movieimg1").style.display="none"
//         document.getElementById("movieimg2").style.display="none"
//         document.getElementById("movieimg3").style.display="none"
//         document.getElementById("movieimg4").style.display="none"
//         document.getElementById("movieimg5").style.display="none"
//         document.getElementById("movieimg6").style.display="none"
//         const strmovie1name= (Object.values(result)[0][0]);
//         document.getElementById('cardcolor').innerHTML=Object.values(strmovie1name);
//         const strmovie2name= (Object.values(result)[0][1]);
//         document.getElementById('cardcolor2').innerHTML=Object.values(strmovie2name);
//         const strmovie3name= (Object.values(result)[0][2]);
//         document.getElementById('cardcolor3').innerHTML=Object.values(strmovie3name);
//         const strmovie4name= (Object.values(result)[0][3]);
//         document.getElementById('cardcolor4').innerHTML=Object.values(strmovie4name);
//         const strmovie5name= (Object.values(result)[0][4]);
//         document.getElementById('cardcolor5').innerHTML=Object.values(strmovie5name);
//         const strmovie6name= (Object.values(result)[0][5]);
//         document.getElementById('cardcolor6').innerHTML=Object.values(strmovie6name);
//     }
//     catch(err){
//         $("#movie1").html("undefined")
//     }
// };
// //search

// function search(){
//     axios.get(`${API_HOST}/searchmovie`,{
        
//         params:{
//             name: document.querySelector('#xx').value
//         }
//     })
//     .then(result => searchmovie(result))
//     .catch(err => clear(err));
// };

// function clear(){
//     document.getElementById("movieimg1").style.display="none"
//     document.getElementById("movieimg2").style.display="none"
//     document.getElementById("movieimg3").style.display="none"
//     document.getElementById("movieimg4").style.display="none"
//     document.getElementById("movieimg5").style.display="none"
//     document.getElementById("movieimg6").style.display="none"
//     document.getElementById("cardbody4").style.display="none"
//     document.getElementById('cardcolor2').style.display="none";
//     document.getElementById('cardcolor3').style.display="none";
//     document.getElementById('cardcolor4').style.display="none";
//     document.getElementById('cardcolor5').style.display="none";
//     document.getElementById('cardcolor6').style.display="none";
// }

// function searchmovie(result){
//     document.getElementById("movieimg1").style.display="none"
//     document.getElementById("movieimg2").style.display="none"
//     document.getElementById("movieimg3").style.display="none"
//     document.getElementById("movieimg4").style.display="none"
//     document.getElementById("movieimg5").style.display="none"
//     document.getElementById("movieimg6").style.display="none"
//     document.getElementById("cardbody4").style.display="none"
//     //document.getElementById('cardcolor').style.display="none";
//     //document.getElementById('homebg').style.display="none";
//     document.getElementById('cardcolor2').style.display="none";
//     document.getElementById('cardcolor3').style.display="none";
//     document.getElementById('cardcolor4').style.display="none";
//     document.getElementById('cardcolor5').style.display="none";
//     document.getElementById('cardcolor6').style.display="none";
//     try{
//         if (Object.values(result)[0].length>0){
//         document.getElementById('cardcolor').innerHTML = "<p>"+(JSON.stringify((Object.values(result)[0][0])["name"])).replace(/['"]+/g,'')+"</p>"
//         document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][1])["name"])).replace(/['"]+/g,'')+"</p>"
//         document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][2])["name"])).replace(/['"]+/g,'')+"</p>"
//         document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][3])["name"])).replace(/['"]+/g,'')+"</p>"
//         document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][4])["name"])).replace(/['"]+/g,'')+"</p>"
//         document.getElementById('cardcolor').innerHTML += "<p>"+(JSON.stringify((Object.values(result)[0][5])["name"])).replace(/['"]+/g,'')+"</p>"
//         }
//         else{

//             document.getElementById('cardcolor').innerHTML = "No results found"
//         }
//     }
//     catch(err) {
//         return ;
//       }
//     }
// function FilterGenre(){
//     var Genreselected=document.getElementById("Genre");
//     var Genrevalue=Genreselected.value
//     if (Genrevalue=="Romance"){
//         Romance()
//     }
//     else if (Genrevalue=="Horror"){
//         Horror()
//     }
//     else if (Genrevalue=="Fantasy"){
//         Fantasy()
//     }
//     else{
//         location.reload()
//     }
    
// }
// //filter romance
// function Romance(){
//     axios.get(`${API_HOST}/Genre/1`)
//     .then(result => filterRomance(result))
//     .catch(err => clear(err))
// };

// function filterRomance(result){
// //     if (document.getElementById("Genre").selectedIndex = "0", (result.length>0)){
//     clear()
//     //document.getElementById('cardcolor').innerHTML+=JSON.stringify((Object.values((result))[0][0]["name"]))
//     searchmovie(result)
//     }
// //filter horror
// function Horror(){
//         axios.get(`${API_HOST}/Genre/2`)
//         .then(result => filterHorror(result))
//         .catch(err => clear(err))
//     };
    
// function filterHorror(result){
//     //     if (document.getElementById("Genre").selectedIndex = "0", (result.length>0)){
//         clear()
//         //document.getElementById('cardcolor').innerHTML+=JSON.stringify((Object.values((result))[0][0]["name"]))
//         searchmovie(result)
//         }
// //filter fantasy
// function Fantasy(){
//     axios.get(`${API_HOST}/Genre/3`)
//     .then(result => filterFantasy(result))
//     .catch(err => clear(err))
// };

// function filterFantasy(result){
// //     if (document.getElementById("Genre").selectedIndex = "0", (result.length>0)){
//     clear()
//     //document.getElementById('cardcolor').innerHTML+=JSON.stringify((Object.values((result))[0][0]["name"]))
//     searchmovie(result)
//     }    

// // var chosengenre=document.getElementById("Genre")
// // document.querySelector('.Genre').addEventListener('change', () => Romance())

// //delete movie6(movieid 11): Faraway land
// function deletemovie11(){
//     axios.delete(`${API_HOST}/delete/11`,{
        
//     })
//     .then(result => deletemovieid11(result))
//     .catch(err => console.error(err))
// };

// function deletemovieid11(result){
//     document.getElementById("cardcolor6").style.display="none"
// }
// //delete movie5(movieid 10): Four season
// function deletemovie10(){
//     axios.delete(`${API_HOST}/delete/10`,{
        
//     })
//     .then(result => deletemovieid10(result))
//     .catch(err => console.error(err))
// };

// function deletemovieid10(result){
//     document.getElementById("cardcolor5").style.display="none"
// }

// //delete movie4(movieid 9): Deep Ocean
// function deletemovie9(){
//     axios.delete(`${API_HOST}/delete/9`,{
        
//     })
//     .then(result => deletemovieid9(result))
//     .catch(err => console.error(err))
// };

// function deletemovieid9(result){
//     document.getElementById("cardcolor4").style.display="none"
// }

// //change movie 1's genre
// function change(){
//     if ($('#genre').val()==='1'){
//         changetogenre1()
//     }
//     else if ($('#genre').val()==='2'){
//         changetogenre2()
//     }
//     else if ($('#genre').val()==='3'){
//         changetogenre3()
//     }
// }

// function changetogenre1(){
//     axios.put(`${API_HOST}/updategenre/6/1`,{
//     })
//     .then(alert('success'))

// };

// function changetogenre2(){
//     axios.put(`${API_HOST}/updategenre/6/2`,{     
//     })
//     .then(alert('success'))

// };

// function changetogenre3(){
//     axios.put(`${API_HOST}/updategenre/6/3`,{     
//     })
//     .then(alert('success'))

// };

// //change movie 2's genre 
// function change2(){
//     if ($('#genre2').val()==='1'){
//         changemovie2togenre1()
//     }
//     else if ($('#genre2').val()==='2'){
//         changemovie2togenre2()
//     }
//     else if ($('#genre2').val()==='3'){
//         changemovie2togenre3()
//     }
// }

// function changemovie2togenre1(){
//     axios.put(`${API_HOST}/updategenre/7/1`,{
//     })
//     .then(alert('success'))

// };

// function changemovie2togenre2(){
//     axios.put(`${API_HOST}/updategenre/7/2`,{     
//     })
//     .then(alert('success'))

// };

// function changemovie2togenre3(){
//     axios.put(`${API_HOST}/updategenre/7/3`,{     
//     })
//     .then(alert('success'))

// };

// //change movie 3's genre 
// function change3(){
//     if ($('#genre3').val()==='1'){
//         changemovie3togenre1()
//     }
//     else if ($('#genre3').val()==='2'){
//         changemovie3togenre2()
//     }
//     else if ($('#genre3').val()==='3'){
//         changemovie3togenre3()
//     }
// }

// function changemovie3togenre1(){
//     axios.put(`${API_HOST}/updategenre/8/1`,{
//     })
//     .then(alert('success'))

// };

// function changemovie3togenre2(){
//     axios.put(`${API_HOST}/updategenre/8/2`,{     
//     })
//     .then(alert('success'))

// };

// function changemovie3togenre3(){
//     axios.put(`${API_HOST}/updategenre/8/3`,{     
//     })
//     .then(alert('success'))

// };
// //movie1details
// function getgenre(genreid){
//     if (genreid=="1"){
//         return "Romance"
//     }
//     else if (genreid=="2"){
//         return "Horror"
//     }
//     else if (genreid=="3"){
//         return "Fantasy"
//     }
// }
// function hellomovie1(result,index){
//     // document.getElementById('Movie1Details-popup2').innerHTML="<p>"+
//     // JSON.stringify(((Object.values(result)[0])[0]["description"])).replace(/['"]+/g,'')+
//     // "</p>"+JSON.stringify(((Object.values(result)[0])[0]["releasedate"])).replace(/['"]+/g,'')+
//     // "</p>"+getgenre(JSON.stringify(((Object.values(result)[0])[0]["genreid"])))
//     document.getElementById('movie1').innerHTML="<p>"+"Name: "+
//     JSON.stringify(((Object.values(result)[0])[index]["name"])).replace(/['"]+/g,'')+"</p>"+"Description: "+
//     JSON.stringify(((Object.values(result)[0])[index]["description"])).replace(/['"]+/g,'')+
//     "</p>"+"Date of Release: "+JSON.stringify(((Object.values(result)[0])[index]["releasedate"])).replace(/['"]+/g,'')+
//     "</p>"+"Genre: "+getgenre(JSON.stringify(((Object.values(result)[0])[index]["genreid"])));
//     document.getElementById('movie1').style.fontSize="small";
// }
// function getmovie1details(){

//     axios
//         .get(`${API_HOST}/getdetails`)
//         .then(
//             result => hellomovie1(result,0)
//         )
// };
// $(function(){
//     $(document).ready(function(){
//         $("#Movie1Details").on("mouseover",getmovie1details)              
//     });  
// });

// function hellomovie2(result,index){
//     // document.getElementById('Movie1Details-popup2').innerHTML="<p>"+
//     // JSON.stringify(((Object.values(result)[0])[0]["description"])).replace(/['"]+/g,'')+
//     // "</p>"+JSON.stringify(((Object.values(result)[0])[0]["releasedate"])).replace(/['"]+/g,'')+
//     // "</p>"+getgenre(JSON.stringify(((Object.values(result)[0])[0]["genreid"])))
//     document.getElementById('movie2').innerHTML="<p>"+"Name: "+
//     JSON.stringify(((Object.values(result)[0])[index]["name"])).replace(/['"]+/g,'')+"</p>"+"Description: "+
//     JSON.stringify(((Object.values(result)[0])[index]["description"])).replace(/['"]+/g,'')+
//     "</p>"+"Date of Release: "+JSON.stringify(((Object.values(result)[0])[index]["releasedate"])).replace(/['"]+/g,'')+
//     "</p>"+"Genre: "+getgenre(JSON.stringify(((Object.values(result)[0])[index]["genreid"])));
//     document.getElementById('movie2').style.fontSize="small";
// }
// function getmovie2details(){

//     axios
//         .get(`${API_HOST}/getdetails`)
//         .then(
//             result => hellomovie2(result,1)
//         )
// };
// $(function(){
//     $(document).ready(function(){
//         $("#Movie2Details").on("mouseover",getmovie2details)              
//     });  
// });

// function hellomovie3(result,index){
//     // document.getElementById('Movie1Details-popup2').innerHTML="<p>"+
//     // JSON.stringify(((Object.values(result)[0])[0]["description"])).replace(/['"]+/g,'')+
//     // "</p>"+JSON.stringify(((Object.values(result)[0])[0]["releasedate"])).replace(/['"]+/g,'')+
//     // "</p>"+getgenre(JSON.stringify(((Object.values(result)[0])[0]["genreid"])))
//     document.getElementById('movie3').innerHTML="<p>"+"Name: "+
//     JSON.stringify(((Object.values(result)[0])[index]["name"])).replace(/['"]+/g,'')+"</p>"+"Description: "+
//     JSON.stringify(((Object.values(result)[0])[index]["description"])).replace(/['"]+/g,'')+
//     "</p>"+"Date of Release: "+JSON.stringify(((Object.values(result)[0])[index]["releasedate"])).replace(/['"]+/g,'')+
//     "</p>"+"Genre: "+getgenre(JSON.stringify(((Object.values(result)[0])[index]["genreid"])));
//     document.getElementById('movie3').style.fontSize="small";
// }
// function getmovie3details(){

//     axios
//         .get(`${API_HOST}/getdetails`)
//         .then(
//             result => hellomovie3(result,2)
//         )
// };
// $(function(){
//     $(document).ready(function(){
//         $("#Movie3Details").on("mouseover",getmovie3details)              
//     });  
// });

// function hellomovie4(result,index){
//     // document.getElementById('Movie1Details-popup2').innerHTML="<p>"+
//     // JSON.stringify(((Object.values(result)[0])[0]["description"])).replace(/['"]+/g,'')+
//     // "</p>"+JSON.stringify(((Object.values(result)[0])[0]["releasedate"])).replace(/['"]+/g,'')+
//     // "</p>"+getgenre(JSON.stringify(((Object.values(result)[0])[0]["genreid"])))
//     document.getElementById('movie4').innerHTML="<p>"+"Name: "+
//     JSON.stringify(((Object.values(result)[0])[index]["name"])).replace(/['"]+/g,'')+"</p>"+"Description: "+
//     JSON.stringify(((Object.values(result)[0])[index]["description"])).replace(/['"]+/g,'')+
//     "</p>"+"Date of Release: "+JSON.stringify(((Object.values(result)[0])[index]["releasedate"])).replace(/['"]+/g,'')+
//     "</p>"+"Genre: "+getgenre(JSON.stringify(((Object.values(result)[0])[index]["genreid"])));
//     document.getElementById('movie4').style.fontSize="small";
// }
// function getmovie4details(){

//     axios
//         .get(`${API_HOST}/getdetails`)
//         .then(
//             result => hellomovie4(result,3)
//         )
// };
// $(function(){
//     $(document).ready(function(){
//         $("#Movie4Details").on("mouseover",getmovie4details)              
//     });  
// });

// function hellomovie5(result,index){
//     // document.getElementById('Movie1Details-popup2').innerHTML="<p>"+
//     // JSON.stringify(((Object.values(result)[0])[0]["description"])).replace(/['"]+/g,'')+
//     // "</p>"+JSON.stringify(((Object.values(result)[0])[0]["releasedate"])).replace(/['"]+/g,'')+
//     // "</p>"+getgenre(JSON.stringify(((Object.values(result)[0])[0]["genreid"])))
//     document.getElementById('movie5').innerHTML="<p>"+"Name: "+
//     JSON.stringify(((Object.values(result)[0])[index]["name"])).replace(/['"]+/g,'')+"</p>"+"Description: "+
//     JSON.stringify(((Object.values(result)[0])[index]["description"])).replace(/['"]+/g,'')+
//     "</p>"+"Date of Release: "+JSON.stringify(((Object.values(result)[0])[index]["releasedate"])).replace(/['"]+/g,'')+
//     "</p>"+"Genre: "+getgenre(JSON.stringify(((Object.values(result)[0])[index]["genreid"])));
//     document.getElementById('movie5').style.fontSize="small";
// }
// function getmovie5details(){

//     axios
//         .get(`${API_HOST}/getdetails`)
//         .then(
//             result => hellomovie5(result,4)
//         )
// };
// $(function(){
//     $(document).ready(function(){
//         $("#Movie5Details").on("mouseover",getmovie5details)              
//     });  
// });

// function hellomovie6(result,index){
//     // document.getElementById('Movie1Details-popup2').innerHTML="<p>"+
//     // JSON.stringify(((Object.values(result)[0])[0]["description"])).replace(/['"]+/g,'')+
//     // "</p>"+JSON.stringify(((Object.values(result)[0])[0]["releasedate"])).replace(/['"]+/g,'')+
//     // "</p>"+getgenre(JSON.stringify(((Object.values(result)[0])[0]["genreid"])))
//     document.getElementById('movie6').innerHTML="<p>"+"Name: "+
//     JSON.stringify(((Object.values(result)[0])[index]["name"])).replace(/['"]+/g,'')+"</p>"+"Description: "+
//     JSON.stringify(((Object.values(result)[0])[index]["description"])).replace(/['"]+/g,'')+
//     "</p>"+"Date of Release: "+JSON.stringify(((Object.values(result)[0])[index]["releasedate"])).replace(/['"]+/g,'')+
//     "</p>"+"Genre: "+getgenre(JSON.stringify(((Object.values(result)[0])[index]["genreid"])));
//     document.getElementById('movie6').style.fontSize="small";
// }
// function getmovie6details(){

//     axios
//         .get(`${API_HOST}/getdetails`)
//         .then(
//             result => hellomovie6(result,5)
//         )
// };
// $(function(){
//     $(document).ready(function(){
//         $("#Movie6Details").on("mouseover",getmovie6details)              
//     });  
// });