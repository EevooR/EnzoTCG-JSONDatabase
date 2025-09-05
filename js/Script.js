const cardZoomImg = document.querySelector('#BigCard');
const cardZoomArea = document.querySelector('#CardZoom');
const imgCardBig = document.querySelector('#zoomedInCard');
const interactUI = document.querySelector('#CardDisplay');
const cardList = document.querySelector('#Cardlist');

const cardName = document.querySelector('#cardName');
const cardArche = document.querySelector('#cardArche');
const cardElement = document.querySelector('#cardElement');
const cardHP = document.querySelector('#cardHP');
const cardAbility = document.querySelector('#cardAbility');

const cardAttack1name = document.querySelector('#cardAttack1name');
const cardAttack1Element = document.querySelector('#cardAttack1Element');
const cardAttack1Cost = document.querySelector('#cardAttack1Cost');
const cardAttack1Damage = document.querySelector('#cardAttack1Damage');
const cardAttack1Description = document.querySelector('#cardAttack1Description');

const cardAttack2name = document.querySelector('#cardAttack2name');
const cardAttack2Element = document.querySelector('#cardAttack2Element');
const cardAttack2Cost = document.querySelector('#cardAttack2Cost');
const cardAttack2Damage = document.querySelector('#cardAttack2Damage');
const cardAttack2Description = document.querySelector('#cardAttack2Description');

const cardSeries = document.querySelector('#cardSeries');
const cardCopyright = document.querySelector('#cardCopyright');
const cardRCost = document.querySelector('#cardRCost');





// Corrected function declaration
const orFullCards = async () => {
  const orresponse = await fetch('https://eevoor.github.io/EnzoTCG-JSONDatabase/json/ORfull.json');
  const ordata = await orresponse.json();
  return ordata;
};

window.onload = async (event) => {
  try {

    const data = await orFullCards(); // await the async function
    console.log(data);
//     Object.keys(data).forEach((key) => {
//   console.log(key);
// });

    //
    // data.forEach((i) => {
    //   console.log(i[key].name);
    // });

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].name}`);
      const newCard = document.createElement('div');
      newCard.classList.add('Card');
      cardList.appendChild(newCard);
      newCard.title = item[key].indexname;
      newCard.style.background = "url('" + item[key].image + "')";
      newCard.style.backgroundSize = "contain";
      newCard.style.backgroundRepeat = "no-repeat";
      newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
    }
  }
});

  } catch (error) {
    console.log(error);
  }
};
function hidezoom() {
  cardZoomArea.style.width = '0px';
  // cardZoomImg.style.display = 'none';
  // cardZoomImg.style.backgroundSize = 'contain';
  // cardZoomImg.style.backgroundRepeat = 'no-repeat';
  cardList.style.width = "100%";
};

async function filtertype(type) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].element}`);
      if (item[key].element == type) {
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
      }

    }
  }
});

  } catch (error) {
    console.log(error);
  }
};

async function resetfilters() {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].element}`);
        const newCard = document.createElement('div');
        newCard.classList.add('Card');
        cardList.appendChild(newCard);
        newCard.title = item[key].indexname;
        newCard.style.background = "url('" + item[key].image + "')";
        newCard.style.backgroundSize = "contain";
        newCard.style.backgroundRepeat = "no-repeat";
        newCard.setAttribute('onclick', 'makebig("' + item[key].image + '", "' + item[key].indexname + '")');
    }
  }
});

  } catch (error) {
    console.log(error);
  }
};

async function makebig(url, indexnamelocal) {
  try {
    imgCardBig.src = url;
    cardZoomArea.style.width = '30%';
    cardZoomImg.style.display = 'block';
    // cardZoomImg.style.backgroundSize = 'contain';
    // cardZoomImg.style.backgroundRepeat = 'no-repeat';
    cardList.style.width = "55%";

    const data = await orFullCards();

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(indexnamelocal);
      if (item[key] && item[key].indexname == indexnamelocal) {

        cardName.innerHTML = item[key].name;
        cardArche.innerHTML = item[key].archetype;
        cardElement.innerHTML = item[key].element;
        cardHP.innerHTML = item[key].hitpoints;
        cardAbility.innerHTML = item[key].ability;

        cardAttack1name.innerHTML = item[key].attack1.name;
        cardAttack1Element.innerHTML = item[key].attack1.element;
        cardAttack1Cost.innerHTML = item[key].attack1.cost;
        cardAttack1Damage.innerHTML = item[key].attack1.damage;
        cardAttack1Description.innerHTML = item[key].attack1.description;

        cardAttack2name.innerHTML = item[key].attack2.name;
        cardAttack2Element.innerHTML = item[key].attack2.element;
        cardAttack2Cost.innerHTML = item[key].attack2.cost;
        cardAttack2Damage.innerHTML = item[key].attack2.damage;
        cardAttack2Description.innerHTML = item[key].attack2.description;

        cardSeries.innerHTML = item[key].series;
        cardCopyright.innerHTML = item[key].copyright;
        cardRCost.innerHTML = item[key].rcost;

        console.log(item[key].name);
        console.log(item[key].archetype);
        console.log(item[key].element);
        console.log(item[key].hitpoints);
        console.log(item[key].ability);
        console.log(item[key].attack1.name);
        console.log(item[key].attack1.element);
        console.log(item[key].attack1.cost);
        console.log(item[key].attack1.damage);
        console.log(item[key].attack1.description);
        console.log(item[key].attack2.name);
        console.log(item[key].attack2.element);
        console.log(item[key].attack2.cost);
        console.log(item[key].attack2.damage);
        console.log(item[key].attack2.description);
        console.log(item[key].series);
        console.log(item[key].copyright);
        console.log(item[key].rcost);



      }
    }
  }
});

  } catch (error) {
    console.log(error);
  }

  console.log(url);
}
