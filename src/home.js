import Prince from './prince-removebg-preview.png';


function homePage() {
  const containerHeigher = document.createElement('div');
  containerHeigher.style.display = 'flex';
  containerHeigher.id = 'home-container-up';

  const container = document.createElement('div');
  container.id = 'home-container';

  const restoName = document.createElement("h1");
  restoName.textContent = "The Cat's Tail";
  restoName.id = 'resto-name';
  restoName.style.fontSize = "4rem";
  restoName.style.textShadow = "0 3px 4px rgba(0, 0, 0, 0.2)";
  restoName.style.marginBottom = '1rem';
  restoName.style.marginTop = '6rem';
  container.appendChild(restoName);

  const restoHeadline = document.createElement('p');
  restoHeadline.textContent = 'Wine, cards, and cats!';
  restoHeadline.style.margin = '0';
  container.appendChild(restoHeadline);

  const princeImg = new Image();
  princeImg.src = Prince;
  princeImg.id = 'head-cat'

  containerHeigher.appendChild(container)
  containerHeigher.appendChild(princeImg);
  return containerHeigher;
}

export default homePage;