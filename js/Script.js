const cardZoomImg = document.querySelector('#BigCard');
const cardZoomArea = document.querySelector('#CardZoom');
const imgCardBig = document.querySelector('#zoomedInCard');
const interactUI = document.querySelector('#CardDisplay');
const cardList = document.querySelector('#Cardlist');




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
