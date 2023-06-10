// getting all the elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

const linkPageMap = new Map([
    ["diabeties", "diabeties.html"],
    ["tyroid", "heart.html"], // TODO: Fill in the thyroid page html file name for Kanchan 
    ["depression", ""],
    ["anxiety", ""],
    ["astma", "astma.html"],
    ["blood pressure", ""]
]);

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value;  //user enter data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            // filtering array value and user char to lowercase and  return ony those word/sentcence which strt with user jhbgj
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); // show auto completebox
        showSuggestion(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            // on clicking attribute in li tag
            allList[i].setAttribute("onclick", "select(this)");

        }

    }
    else {
        searchWrapper.classList.remove("active"); // hide auto complete box 
    }

}
function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item in text field
    searchWrapper.classList.remove("active");
    window.location.href = linkPageMap.get(inputBox.value);

}
function showSuggestion(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }
    else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}