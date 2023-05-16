//Initial References
let result = document.getElementById("result");
let searchBtn = document.getElementById
("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let userInp = document.getElementById("user-inp").value;

fetch(url + "burger")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let myMeal = data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
    })