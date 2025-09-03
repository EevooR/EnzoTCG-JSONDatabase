const cardZoomImg = document.querySelector('#BigCard');
const cardZoomArea = document.querySelector('#CardZoom');
const imgCardBig = document.querySelector('#zoomedInCard');
const interactUI = document.querySelector('#CardDisplay');
const cardList = document.querySelector('#Cardlist');

// Corrected function declaration
const orFullCards = async () => {
  const orresponse = await fetch('https://eevoor.github.io/EnzoTCG-JSONDatabase/json/ORfull.json');
  const ordata = await orresponse.json();
  return ordata;
};

window.onload = async (event) => {
  try {

    const data = await orFullCards(); // await the async function

    Object.keys(data).forEach((key) => {
  console.log(key.name);
});


//     data.forEach((i) => {
//       console.log(i.allmightex.name);
//     });
  } catch (error) {
    console.log(error);
  }
};

function makebig(url) {
  try {
    imgCardBig.src = url;
    cardZoomArea.style.width = '45%';
    cardZoomImg.style.display = 'block';
    // cardZoomImg.style.backgroundSize = 'contain';
    // cardZoomImg.style.backgroundRepeat = 'no-repeat';
    cardList.style.width = "55%";
  } catch (error) {
    console.log(error);
  }

  console.log(url);
}
