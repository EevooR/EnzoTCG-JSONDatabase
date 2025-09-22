const cardZoomImg = document.querySelector('#BigCard');
const cardZoomArea = document.querySelector('#CardZoom');
const imgCardBig = document.querySelector('#zoomedInCard');
const interactUI = document.querySelector('#CardDisplay');
const cardList = document.querySelector('#Cardlist');
const htmlbody = document.querySelector('#body');

const cardName = document.querySelector('#cardName');
const cardArche = document.querySelector('#cardArche');
const cardElement = document.querySelector('#cardElement');
const cardHP = document.querySelector('#cardHP');
const cardAbility = document.querySelector('#cardAbility');

const cardAttack1name = document.querySelector('#cardAttack1name');
const cardAttack1Element = document.querySelector('#cardAttack1Element');
const cardAttack1Damage = document.querySelector('#cardAttack1Damage');
const cardAttack1Description = document.querySelector('#cardAttack1Description');

const cardAttack2name = document.querySelector('#cardAttack2name');
const cardAttack2Element = document.querySelector('#cardAttack2Element');
const cardAttack2Damage = document.querySelector('#cardAttack2Damage');
const cardAttack2Description = document.querySelector('#cardAttack2Description');

const cardSeries = document.querySelector('#cardSeries');
const cardCopyright = document.querySelector('#cardCopyright');
const cardRCost = document.querySelector('#cardRCost');


const elements = [
  "Biological",
  "Digital",
  "Earth",
  "Electricity",
  "Fire",
  "Frost",
  "Negative",
  "Omni",
  "Positive",
  "Time",
  "Water",
  "Wind",
  null
];

const arches = [
  "Character",
  "Enhanced Character",
  "Setting",
  "Item",
  "Summon",
  "Duo"
];

const backers = [
  "ORbackground",
  "TTbackground",
  "HYbackground",
  "ColorArt",
  "FullArt"
];


// Corrected function declaration
const orFullCards = async () => {
  const orresponse = await fetch('https://eevoor.github.io/EnzoTCG-JSONDatabase/json/ORfull.json');
  // const orresponse = await fetch('ORfull.lnk');
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
      if (item[key].archetype == "Item") {
        console.log(`${key}: ${item[key].name}`);
        if (elements.includes(item[key].attack1.element)) {} else {
          alert(item[key].attack1.element + "Is not valid in" + item[key].indexname + "At1 element")
        }
        if (elements.includes(item[key].attack1.element2)) {} else {
          alert(item[key].attack1.element2 + "Is not valid in" + item[key].indexname + "At1 element2")
        }
        if (elements.includes(item[key].attack2.element)) {} else {
          alert(item[key].attack2.element + "Is not valid in" + item[key].indexname + "At2 element1")
        }
        if (elements.includes(item[key].attack2.element2)) {} else {
          alert(item[key].attack2.element2 + "Is not valid in" + item[key].indexname + "At2 element2")
        }
        if (arches.includes(item[key].archetype)) {} else {
          alert(item[key].archetype + "Is not valid in" + item[key].indexname + "archetype")
        }
        if (backers.includes(item[key].background)) {} else {
          alert(item[key].background + "Is not valid in" + item[key].indexname + "background")
        }}
      if (["Character","Enhanced Character"].includes(item[key].archetype) {
        console.log(`${key}: ${item[key].name}`);
        if (elements.includes(item[key].element)) {} else {
          alert(item[key].element + "Is not valid in" + item[key].indexname + "element")
        }
        if (elements.includes(item[key].attack1.element)) {} else {
          alert(item[key].attack1.element + "Is not valid in" + item[key].indexname + "At1 element")
        }
        if (elements.includes(item[key].attack1.element2)) {} else {
          alert(item[key].attack1.element2 + "Is not valid in" + item[key].indexname + "At1 element2")
        }
        if (elements.includes(item[key].attack2.element)) {} else {
          alert(item[key].attack2.element + "Is not valid in" + item[key].indexname + "At2 element1")
        }
        if (elements.includes(item[key].attack2.element2)) {} else {
          alert(item[key].attack2.element2 + "Is not valid in" + item[key].indexname + "At2 element2")
        }
        if (arches.includes(item[key].archetype)) {} else {
          alert(item[key].archetype + "Is not valid in" + item[key].indexname + "archetype")
        }
        if (backers.includes(item[key].background)) {} else {
          alert(item[key].background + "Is not valid in" + item[key].indexname + "background")
        }
      }
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
        if (item[key].archetype !== "Item") {
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
    }
  });


  } catch (error) {
    console.log(error);
  }
};
async function filterex(trFa) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);


      data.forEach(item => {
    for (const key in item) {
      if (item[key] && item[key].name !== undefined) {
            if (item[key].archetype !== "Item") {
        console.log(`${key}: ${item[key].ex}`);
        if (item[key].ex == trFa) {
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
    }
  });


  } catch (error) {
    console.log(error);
  }
};
async function filterarche(archet) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].archetype}`);
      if (item[key].archetype == archet) {
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
async function filterrar(rarity) {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);
    if (rarity !== "Common") {
      if (rarity == "Rare") {
        data.forEach(item => {
          for (const key in item) {
            if (item[key] && item[key].name !== undefined) {
              console.log(`${key}: ${item[key].background}`);
              if (["FullArt","ColorArt"].includes(item[key].background)) {
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
      } else {
        data.forEach(item => {
          for (const key in item) {
            if (item[key] && item[key].name !== undefined) {
              console.log(`${key}: ${item[key].background}`);
              if (item[key].background == rarity) {
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
      }

} else {
  data.forEach(item => {
for (const key in item) {
if (item[key] && item[key].name !== undefined) {
  console.log(`${key}: ${item[key].background}`);
  if (["FullArt","ColorArt"].includes(item[key].background)) {
  } else {
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
}
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
async function filterarcheall() {
  try {
    cardList.innerHTML = "";
    const data = await orFullCards(); // await the async function
    console.log(data);

    data.forEach(item => {
  for (const key in item) {
    if (item[key] && item[key].name !== undefined) {
      console.log(`${key}: ${item[key].archetype}`);
      if (["Character", "Enhanced Character"].includes(item[key].archetype)) {
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
        if (item[key].archetype == "Item") {
          cardAttack1Element.innerHTML = "";
          cardAttack2Element.innerHTML = "";
          cardElement.innerHTML = "";
          cardZoomImg.style.background = "var(--item)";
          htmlbody.style.background = "var(--item)";

          cardName.innerHTML = item[key].name;
          cardArche.innerHTML = item[key].archetype;
          cardAbility.innerHTML = item[key].ability;

          cardAttack1name.innerHTML = item[key].attack1.name;
          fillelement(item[key].attack1.cost, item[key].attack1.element, cardAttack1Element)
          fillelement(item[key].attack1.cost2, item[key].attack1.element2, cardAttack1Element)
          cardAttack1Damage.innerHTML = item[key].attack1.damage;
          cardAttack1Description.innerHTML = item[key].attack1.description;

          cardAttack2name.innerHTML = item[key].attack2.name;
          fillelement(item[key].attack2.cost, item[key].attack2.element, cardAttack2Element)
          fillelement(item[key].attack2.cost2, item[key].attack2.element2, cardAttack2Element)
          cardAttack2Damage.innerHTML = item[key].attack2.damage;
          cardAttack2Description.innerHTML = item[key].attack2.description;

          cardSeries.innerHTML = item[key].series;
          cardCopyright.innerHTML = item[key].copyright;

          interactUI.style.background = "var(--iu" + item[key].background + ")";

          console.log(item[key].name);
          console.log(item[key].archetype);
          console.log(item[key].ability);
          console.log(item[key].attack1.name);
          console.log(item[key].attack1.element);
          console.log(item[key].attack1.damage);
          console.log(item[key].attack1.description);
          console.log(item[key].attack2.name);
          console.log(item[key].attack2.element);
          console.log(item[key].attack2.damage);
          console.log(item[key].attack2.description);
          console.log(item[key].series);
          console.log(item[key].copyright);
        }
        if (["Character", "Enhanced Character"].includes(item[key].archetype)) {
          cardAttack1Element.innerHTML = "";
          cardAttack2Element.innerHTML = "";
          cardElement.innerHTML = "";
          cardZoomImg.style.background = "var(--" + item[key].element + "m)";
          htmlbody.style.background = "var(--" + item[key].element + "s)";

          cardName.innerHTML = item[key].name;
          cardArche.innerHTML = item[key].archetype;
          fillelement(1, item[key].element, cardElement)
          cardHP.innerHTML = item[key].hitpoints;
          cardAbility.innerHTML = item[key].ability;

          cardAttack1name.innerHTML = item[key].attack1.name;
          fillelement(item[key].attack1.cost, item[key].attack1.element, cardAttack1Element)
          fillelement(item[key].attack1.cost2, item[key].attack1.element2, cardAttack1Element)
          cardAttack1Damage.innerHTML = item[key].attack1.damage;
          cardAttack1Description.innerHTML = item[key].attack1.description;

          cardAttack2name.innerHTML = item[key].attack2.name;
          fillelement(item[key].attack2.cost, item[key].attack2.element, cardAttack2Element)
          fillelement(item[key].attack2.cost2, item[key].attack2.element2, cardAttack2Element)
          cardAttack2Damage.innerHTML = item[key].attack2.damage;
          cardAttack2Description.innerHTML = item[key].attack2.description;

          cardSeries.innerHTML = item[key].series;
          cardCopyright.innerHTML = item[key].copyright;
          cardRCost.innerHTML = item[key].rcost;

          interactUI.style.background = "var(--iu" + item[key].background + ")";

          console.log(item[key].name);
          console.log(item[key].archetype);
          console.log(item[key].element);
          console.log(item[key].hitpoints);
          console.log(item[key].ability);
          console.log(item[key].attack1.name);
          console.log(item[key].attack1.element);
          console.log(item[key].attack1.damage);
          console.log(item[key].attack1.description);
          console.log(item[key].attack2.name);
          console.log(item[key].attack2.element);
          console.log(item[key].attack2.damage);
          console.log(item[key].attack2.description);
          console.log(item[key].series);
          console.log(item[key].copyright);
          console.log(item[key].rcost);
        }



      }
    }
  }
});

  } catch (error) {
    console.log(error);
  }

  console.log(url);
}

function fillelement(numLoops, element, location){
  for (let i = 0; i < numLoops; i++) {
    const newelem = document.createElement('img');
    newelem.classList.add('elementalCost');
    location.appendChild(newelem);
    newelem.title = element;
    newelem.src = "../Assets/Elements/" + element + ".png"
  }
}
