import { sampleElement } from "./sampleElement";

let brightness = 100,
    contrast = 100,
    grayscale = 0,
    invert = 0,
    saturate = 100,
    sepia = 0,
    hueRotate = 0,
    temperature = 0,
    opacity = 100,
    blur = 0,
    rotate = 0,
    flipHorizontal = 1,
    flipVertical = 1,
    border = 0,
    lineBorder = 'solid',
    color = '#222222';
    
const createEditMainContainer = () => {
  const main = sampleElement('main', ['main', 'disabled']);

  return {
    main
  }
}

const createEditHeader = () => {
  const header = sampleElement('header', ['edit-header']);
  const wrapper = sampleElement('div', ['edit-header__wrapper']);
  const title = sampleElement('h1', ['edit-header__title'], 'Редактор зображення');
  const dowbloadBtn = sampleElement('button', ['edit-header__button-download', 'disabled'], 'Завантажити');
  const fileWrapper = sampleElement('div', ['edit-header-file']);
  const input = sampleElement('input', ['edit-header-file__input']);
  const label = sampleElement('label', ['edit-header-file__label']);
  const icon = `<i class='bx bx-image'></i>`;

  input.type = 'file', input.id = 'edit-header-file';
  label.setAttribute('for', 'edit-header-file');

  label.innerHTML = icon;
  fileWrapper.append(input, label);
  wrapper.append(dowbloadBtn, title);
  header.append(fileWrapper, wrapper);

  return {
    header,
    input,
    label,
    dowbloadBtn,
    fileWrapper
  }
}

const createEditSidebarLeft = () => {
  const sidebar = sampleElement('div', ['edit-sidebar-left']);
  
  const objectElement = [
    { 
      icon: '<i class="bx bxs-palette"></i>',
      name: 'brightness',
    },
    { 
      icon: '<i class="bx bxs-adjust-alt"></i>',
      name: 'contrast',
    },
    { 
      icon: '<i class="bx bxs-brush"></i>',
      name: 'grayscale',
    },
    {
      icon: '<i class="bx bxs-droplet-half"></i>',
      name: 'invert'
    },
    {
      icon: '<i class="fa fa-solid fa-swatchbook"></i>',
      name: 'hue-rotate'
    },
    {
      icon: ' <i class="fa fa-solid fa-crutch"></i>',
      name: 'temperature',
    },
    {
      icon: '<i class="fa fa-solid fa-eye-dropper"></i>',
      name: 'saturate',
    },
    {
      icon: '<i class="bx bxs-color"></i>',
      name: 'sepia',
    },
    {
      icon: '<i class="bx bxs-tone"></i>',
      name: 'opacity',
    },
    {
      icon: '<i class="bx bxs-low-vision"></i>',
      name: 'blur',
    }
  ];

  sidebar.innerHTML = objectElement.map((element) => (
    `<button class="edit-sidebar-left__item" id="${element.name}">
      ${element.icon}
      <span class="edit-sidebar-left__text">${element.name}</span>
    </button>`
  )).join('');

  return {
    sidebar
  }
}

const createEditSidebarRight = () => {
  const sidebar = sampleElement('div', ['edit-sidebar-right']);
  
  const objectElement = [
    {
      icon: '<i class="bx bx-horizontal-left"></i>',
      name: 'rotate-right',
    },
    {
      icon: '<i class="bx bx-horizontal-right"></i>',
      name: 'rotate-left'
    },
    {
      icon: '<i class="bx bx-vertical-top"></i>',
      name: 'reflect-vertical'
    },
    {
      icon: '<i class="bx bx-vertical-top"></i>',
      name: 'reflect-horizontal'
    },
    {
      icon: '<i class="bx bxs-objects-horizontal-right"></i>',
      name: 'border'
    },
    {
      icon: '<i class="bx bx-fullscreen"></i>',
      name: 'line-border'
    }
  ];

  sidebar.innerHTML = objectElement.map((element) => (
    `<button class="edit-sidebar-right__item" id="${element.name}">
      ${element.icon}
    </button>`
  )).join('');

  return {
    sidebar
  }
}

const createEditContent = () => {
  const content = sampleElement('div', ['edit-content']);
  const preview = sampleElement('div', ['edit-wrapper-preview']);
  const slider = sampleElement('div', ['edit-slider']);
  const sliderContainer = sampleElement('div', ['edit-slider-container']);
  const sliderName = sampleElement('span', ['edit-slider-container__name']);
  const sliderValue = sampleElement('span', ['edit-slider-container__value']);
  const sliderInput = sampleElement('input', ['edit-slider__input']);
  const resetButton = sampleElement('button', ['edit-reset-button'], 'Скинути');

  sliderInput.type = 'range', sliderInput.max = '200';

  preview.innerHTML = `
    <div class="edit-preview">
      <div class="plug">Завантажте зображення</div>
    </div>
  `;

  sliderContainer.append(sliderName, sliderValue);
  slider.append(sliderContainer, sliderInput);
  content.append(preview, slider, resetButton);

  return {
    content
  }
}

const loadingPreview = (event) => {
  const main = document.querySelector('main');
  const preview = document.querySelector('.edit-preview');
  const download = document.querySelector('.edit-header__button-download');
  const file = event.target.files[0]; 

  const updatePreview = `
    <img src="">
    <div class="temperature"></div>
  `;
  
  const loadingUrl = () => {
    download.classList.remove('disabled');
    
    preview.innerHTML = updatePreview;
    
    if (!file) return
    document.querySelector('.edit-preview img').src = URL.createObjectURL(file);
    main.classList.remove('disabled');
    main.classList.add('animation');
    download.classList.remove('disabled');
  }
  loadingUrl();
  
}

const focusItemFilter = (event) => {
  const preview = document.querySelector('.edit-wrapper-preview');
  const slider = document.querySelector('.edit-slider');
  const input = document.querySelector('.edit-slider__input');
  const name = document.querySelector('.edit-slider-container__name');
  const value = document.querySelector('.edit-slider-container__value');
  const currentTarget = event.target;
  const idItem = currentTarget.id;
  name.innerText = idItem;
  
  slider.classList.add('active');
  document.querySelector('.edit-sidebar-left__item.active')?.classList.remove('active');
  currentTarget.classList.add('active');
  
  if (slider.className === 'edit-slider active') preview.style.height = '400px';

  if (idItem === 'brightness') {
    input.max = 200;
    input.value = brightness;
    value.innerText = `${brightness}%`;
  } else if (idItem === 'contrast') {
    input.max = 200;
    input.value = contrast;
    value.innerText = `${contrast}%`;
  } else if (idItem === 'grayscale') {
    input.max = 100;
    input.value = grayscale;
    value.innerText = `${grayscale}%`;
  } else if (idItem === 'invert') {
    input.max = 100;
    input.value = invert;
    value.innerText = `${invert}%`;
  } else if (idItem === 'hue-rotate') {
    input.max = 320;
    input.value = hueRotate;
    value.innerText = `${hueRotate}%`;
  } else if (idItem === 'temperature') {
    input.min = -100, input.max = 100, input.value = 0;
    input.value = temperature;
    value.innerText = `${temperature}`;
  } else if (idItem === 'saturate') {
    input.max = 100;
    input.value = saturate;
    value.innerText = `${saturate}%`;
  } else if (idItem === 'sepia') {
    input.max = 100;
    input.value = sepia;
    value.innerText = `${sepia}%`;
  } else if (idItem === 'opacity') {
    input.max = 100;
    input.value = opacity;
    value.innerText = `${opacity}%`;
  } else if (idItem === 'blur') {
    input.max = 20;
    input.value = blur;
    value.innerText = `${blur}%`;
  }

  if (idItem !== 'temperature') {
    input.min = 0;
  }

  updateValueInput();
  input.addEventListener('input', updateValueInput);
  applyFiltersImage();
}

const focusItemStyles = (event) => {
  const resetButton = document.querySelector('.edit-reset-button');
  const downloadButton = document.querySelector('.edit-header__button-download');
  const slider = document.querySelector('.edit-slider.active');
  const preview = document.querySelector('.edit-wrapper-preview');
  const currentTarget = event.target;
  const idItem = currentTarget.id;

  resetButton.classList.add('active');

  if (slider) {
    slider.classList.remove('active');
    preview.style.height = '440px';
  }

  if (idItem === 'rotate-right') {
    rotate -= 90;
    if (rotate < -360) rotate = 0;
  } else if (idItem === 'rotate-left') {
    rotate += 90;
    if (rotate > 360) rotate = 0;
  } else if (idItem === 'reflect-vertical') {
    flipHorizontal = flipHorizontal === 1 ? -1 : 1;
  } else if (idItem === 'reflect-horizontal') {
    flipVertical = flipVertical === -1 ? 1 : -1;
  } else if (idItem === 'border') {
    border += 3;
    if (border > 12) border = 0;
  } else if (idItem === 'line-border') {
    if (lineBorder === 'solid') {
      lineBorder = 'dashed';
    } else if (lineBorder === 'dashed') {
      lineBorder = 'dotted';
    } else if (lineBorder === 'dotted') {
      lineBorder = 'solid';
    }
  }
  
  applyFiltersImage();
  resetButton.addEventListener('click', resetStyles);
  downloadButton.addEventListener('click', saveImage);
}

const updateValueInput = () => {
  const input = document.querySelector('.edit-slider__input');
  const value = document.querySelector('.edit-slider-container__value');
  const idItem = document.querySelector('.edit-sidebar-left__item.active').id;
  const resetButton = document.querySelector('.edit-reset-button');
  const downloadButton = document.querySelector('.edit-header__button-download');

  resetButton.classList.add('active');

  if (idItem === 'brightness') {
    brightness = input.value;
  } else if (idItem === 'contrast') {
    contrast = input.value;
  } else if (idItem === 'grayscale') {
    grayscale = input.value;
  } else if (idItem === 'invert') {
    invert = input.value;
  } else if (idItem === 'hue-rotate') {
    hueRotate = input.value;
  } else if (idItem === 'temperature') {
    temperature = input.value;
  } else if (idItem === 'saturate') {
    saturate = input.value;
  } else if (idItem === 'sepia') {
    sepia = input.value;
  } else if (idItem === 'opacity') {
    opacity = input.value;
  } else if (idItem === 'blur') {
    blur = input.value;
  }

  value.innerText = `${input.value}%`;
  applyFiltersImage();
  resetButton.addEventListener('click', resetStyles);
  downloadButton.addEventListener('click', saveImage);
}

const applyFiltersImage = () => {
  const image = document.querySelector('.edit-preview img');
  const temperatureStyle = document.querySelector('.temperature');

  image.style.filter = `
    brightness(${brightness}%)
    contrast(${contrast}%)
    grayscale(${grayscale}%)
    invert(${invert}%)
    hue-rotate(${hueRotate}deg)
    saturate(${saturate}%)
    sepia(${sepia}%)
    opacity(${opacity}%)
    blur(${blur}px)
  `;
  image.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
  image.style.border = `${border}px ${lineBorder} #22222280`;
  if (temperature < 0) {
    temperatureStyle.style.background = 'rgba(0, 0, 255,' + Math.abs(temperature) / 400 + ')';
  } else {
    temperatureStyle.style.background = 'rgba(255, 68, 0,' + Math .abs(temperature) / 400 +')';
  }
}

const resetStyles = () => {
  const item = document.querySelector('.edit-sidebar-left__item.active');
  const reset = document.querySelector('.edit-reset-button');
  reset.classList.remove('active');
  
  brightness = 100,
  contrast = 100,
  grayscale = 0,
  invert = 0,
  saturate = 100,
  sepia = 0,
  hueRotate = 0,
  temperature = 0,
  opacity = 100,
  blur = 0,
  rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1,
  border = 0,
  lineBorder = 'solid';

  item.click();

  applyFiltersImage();
}

const saveImage = () => {
  const image = document.querySelector('.edit-preview img');
  const canvas = sampleElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${invert}%)
                hue-rotate(${hueRotate}deg) saturate(${saturate}%) sepia(${sepia}%) opacity(${opacity}%) blur(${blur}px)`;
  
  ctx.translate(canvas.width / 2, canvas.height / 2);
  if (rotate !== 0) ctx.rotate(rotate * Math.PI / 180);
  if (lineBorder === 'dashed') ctx.setLineDash([20, 10]);
  if (lineBorder === 'dotted') ctx.setLineDash([5]);
  ctx.scale(flipHorizontal, flipVertical);
  ctx.drawImage(image, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

  if (temperature < 0) {
    ctx.fillStyle = 'rgba(0, 0, 255,' + Math.abs(temperature) / 400 + ')';
  } else {
    ctx.fillStyle = 'rgba(255, 68, 0,' + Math .abs(temperature) / 400 +')';
  }
  ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

  ctx.lineWidth = border;
  ctx.strokeStyle = color;
  ctx.strokeRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);  

  const link = sampleElement('a');

  link.download = '../img/filters-image.webp';
  link.href = canvas.toDataURL();
  link.click();
}

export function appEdit(select) {
  const appEditMain = createEditMainContainer();
  const appEditHeader = createEditHeader();
  const appEditSidebarLeft = createEditSidebarLeft();
  const appEditSidebarRight = createEditSidebarRight();
  const appEditContent = createEditContent();
  const edit = sampleElement('div', ['edit']);
  
  edit.append(appEditHeader.header, appEditMain.main);
  appEditMain.main.append(appEditSidebarLeft.sidebar, appEditContent.content, appEditSidebarRight.sidebar);
  select.append(edit);

  appEditHeader.input.addEventListener('change', loadingPreview);
  appEditSidebarLeft.sidebar.addEventListener('click', focusItemFilter);
  appEditSidebarRight.sidebar.addEventListener('click', focusItemStyles);
}