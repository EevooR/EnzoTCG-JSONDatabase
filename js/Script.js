const cardZoomImg = document.querySelector('#BigCard');
const cardZoomArea = document.querySelector('#CardZoom');
const imgCardBig = document.querySelector('#zoomedInCard');
const interactUI = document.querySelector('#CardDisplay');
const cardList = document.querySelector('#Cardlist');
const orFullCards = async () => {
  const orresponse = await fetch('https://eevoor.github.io/EnzoTCG-JSONDatabase/json/ORfull.json');
  const ordata = await orresponse.json();

  return ordata;
};



window.onload = (event) => {
  orFullCards();
  try {
  ordata.forEach((i) => {
    console.log(i);
  });
} catch (error) {
  console.log(error);
}
};




function makebig(url) {
  try{
  urla = url;
  imgCardBig.src = urla;
  cardZoomArea.style.width = '45%';
  cardZoomImg.style.display = 'block';
  // cardZoomImg.style.backgroundSize = 'contain';
  // cardZoomImg.style.backgroundRepreat = 'no-repeat';
  cardList.width = "55%";

} catch(error) {
  console.log(error);
}
console.log(url);

}
