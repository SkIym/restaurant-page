import adeptusTempt from './adeptus-temptation.png';

function menuPage() {
  const container = document.createElement('div');
  container.id = "menu-container";

  const dishes = ["Adeptus Temptation", "Pile 'Em Up", 'Almond Tofu', 'Candied Ajilekh Nut', 'Sakura Shrimp Crackers']
  
  for (let i=0; i < 5; i++){

    // Div for a dish
    const dishContainer = document.createElement('div');
    dishContainer.classList.add("dish-container");

    // Div for this dish' image
    const dishImageContainer = document.createElement('div');
    const dishImage = new Image();
    dishImage.src = adeptusTempt;
    dishImage.classList.add('dish-image');
    dishImageContainer.appendChild(dishImage);
    dishContainer.appendChild(dishImageContainer)

    // Div for this dish'details
    const dishDetailsContainer = document.createElement('div');
    dishDetailsContainer.classList.add("dish-details");

    const dishName = document.createElement('h3');
    dishName.textContent = `${dishes[i]}`;
    
    const dishDesc = document.createElement('p');
    dishDesc.textContent = 'In hac habitasse platea dictumst. Sed id arcu faucibus, suscipit enim sed, feugiat nulla. Donec suscipit eget lorem in porttitor. Praesent ac congue metus. Donec semper ante non metus feugiat.'

    dishDetailsContainer.appendChild(dishName);
    dishDetailsContainer.appendChild(dishDesc);
    dishContainer.appendChild(dishDetailsContainer);


    container.appendChild(dishContainer)
  }
  
  return container;

}

export default menuPage;