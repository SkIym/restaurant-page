import Prince from './prince-removebg-preview.png';


function homePage() {
  const container = document.createElement('div');

  const restoName = document.createElement("h1");
  restoName.textContent = "The Cat's Tail";
  container.appendChild(restoName);

  const restoHeadline = document.createElement('h3');
  restoHeadline.textContent = 'Wine, cards, and cats!';
  container.appendChild(restoHeadline);

  const restoInfo = document.createElement('p');
  restoInfo.textContent = "Located near the plaza of Mondstadt City";
  container.appendChild(restoInfo);

  const princeImg = new Image();
  princeImg.src = Prince;
  princeImg.id = 'head-cat'
  container.appendChild(princeImg);

  return container;
}

export default homePage;