/*
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
*/

// Prendo il container dal DOM 
const container = document.getElementById('container');

// Creo l'array di oggetti di post 
const posts = [
    {
        idNumber: 1,
        name: 'Phil Mangione',
        authorPicture: 'https://unsplash.it/300/300?image=15',
        date: '08-23-2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 80
    },
    {
        idNumber: 2,
        name: 'Sofia Perlari',
        authorPicture: 'https://unsplash.it/300/300?image=13',
        date: '08-11-2022',
        text: `It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the weatherman. It was going to rain, so he better get outside and prepare.`,
        image: 'https://unsplash.it/600/300?image=173',
        likes: 75
    },
    {
        idNumber: 3,
        name: 'Giancarlo Rossi',
        authorPicture: 'https://unsplash.it/300/300?image=10',
        date: '02-11-2021',
        text: `The coin hovered in the air, spinning over and over again. It reached its peak and began to descend. Both boys were pleading with it to land a certain way but the coin had already made up its mind on what it was going to do.`,
        image: 'https://unsplash.it/600/300?image=688',
        likes: 41
    },
    {
        idNumber: 4,
        name: 'Paolo Guida',
        authorPicture: 'https://unsplash.it/300/300?image=57',
        date: '02-15-2021',
        text: `There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.
        `,
        image: 'https://unsplash.it/600/300?image=700',
        likes: 258
    },
]

// Creo il ciclo per generare i post tramite l'array 
for (let i = 0; i < posts.length; i++){
    const currentPost =  posts[i];

    const card = 
    `
    <div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${currentPost.authorPicture}" alt="${currentPost.name}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author"> ${currentPost.name} </div>
          <div class="post-meta__time">${currentPost.date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${currentPost.text}
    </div>
    <div class="post__image">
      <img src="${currentPost.image}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-${currentPost.idNumber}" class="js-likes-counter">${currentPost.likes}</b> persone</div>
      </div>
    </div>
    `

    container.innerHTML += card;

}

// Prendo tutti i bottni 
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      button.classList.toggle('liked');

      const likeCounter = document.getElementById(`like-counter-${i+1}`);

      if (button.classList.contains('liked')) {
        likeCounter.innerText = ++posts[i].likes;
      } else {
        likeCounter.innerText = --posts[i].likes;
      }    
    

    });
  });
  
