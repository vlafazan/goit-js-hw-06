const images = [
    {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
    },
    {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
    },
];
console.log(images);


const galleryList = document.querySelector('ul')
console.log(galleryList);

const imagesEl = images.map(function ({ url, alt }) {
    return `<li><img src = '${url}' alt = '${alt}' width='320'></li>`;
    })
    .join("");
galleryList.insertAdjacentHTML('afterbegin', imagesEl);

document.body.style.margin = '0px';
galleryList.style.display = 'flex';
galleryList.style.alignItems = 'center';
galleryList.style.justifyContent = 'center';
galleryList.style.listStyle = 'none';