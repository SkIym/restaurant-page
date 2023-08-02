import Mondstadt from './mondstadt.png';
import Exterior1 from './cats-tail-exterior.png';
import Exterior2 from './fischl-postwoman.jpg';


function contactPage() {
  const container = document.createElement('div');
  container.id = 'contact-container';
  
  const firstInfo = document.createElement('div');
  firstInfo.classList.add('contact-info');

  const mondstadt = new Image();
  mondstadt.src = Mondstadt;
  mondstadt.id = 'mond-top-view';

  const firstDeets = document.createElement('p');
  firstDeets.textContent = 'Find us in Mondstadt :3';

  firstInfo.appendChild(firstDeets);
  firstInfo.appendChild(mondstadt);
  container.appendChild(firstInfo);

  const secondInfo = document.createElement('div');
  secondInfo.classList.add('contact-info');

  const exterior = new Image();
  exterior.src = Exterior1;
  exterior.id = 'exterior';

  const secondDeets = document.createElement('p');
  secondDeets.textContent = 'Find this block, near the plaza!';

  secondInfo.appendChild(secondDeets);
  secondInfo.appendChild(exterior);
  container.appendChild(secondInfo);

  const thirdInfo = document.createElement('div');
  thirdInfo.classList.add('contact-info');

  const exteriorFischl = new Image();
  exteriorFischl.src = Exterior2;
  exteriorFischl.id = 'exterior-fischl';
  
  const thirdDeets = document.createElement('p');
  thirdDeets.textContent = 'Find our (temporary) mascot, Prinzessin der Verurteilung!';

  thirdInfo.appendChild(thirdDeets);
  thirdInfo.appendChild(exteriorFischl);
  container.appendChild(thirdInfo);

  return container;
}

export default contactPage;