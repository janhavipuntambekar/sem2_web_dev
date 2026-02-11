const inputEle = document.querySelector("input");
const button = document.querySelector("#search");

//*******************************************SELECTING ELEMENTS FOR UPDATION*************************************************
const tempEl = document.querySelector(".temperature");
const locationEl = document.querySelector(".location");
const conditionEl = document.querySelector(".condition");
const iconEl = document.querySelector(".icon img");
const timeEl = document.querySelector(".time");
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");

button.addEventListener("click", async () => {
  const location = inputEle.value.trim();
//   console.log(`Location=${location}`);

  //***************************************CONDITION FOR EMPTY SEARCH**************************************************
  if(!location){
    alert("Enter a location");
    return
  }

  //******************************************************CALL THE API******************************************************
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=00a041d6e08e442680a53237263001&q=${location},IN&aqi=no`,
  );

  //************************************IF ANY GIBBERISH OR WRONG LOCATION INPUT*******************************************
  if(!response.ok){
    alert("Location not found");
    return;
  }

  const data = await response.json();
  console.log(data);


  //*******************************************************UPDATE THE DOM****************************************************
  tempEl.innerText = data.current.temp_c + "°C";
  locationEl.innerText = data.location.name;
  conditionEl.innerText = data.current.condition.text;
  iconEl.src = `https:${data.current.condition.icon}`;
  const date = new Date(data.location.localtime);
  timeEl.innerText = date.toTimeString().slice(0, 5);
  dayEl.innerText = date.toLocaleDateString("en-US", { weekday: "long" });
  dateEl.innerText = date.toLocaleDateString();


  //*******************************************INPUT BOX WILL BE BLANK FOR NEXT INPUT****************************************
  inputEle.value = "";
});
inputEle.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    button.click(); // triggers the SAME logic as search button
  }
});
