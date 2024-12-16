const iconButtons = document.querySelectorAll('.plus');
// const minusButtons = document.querySelectorAll('.minus');

iconButtons.forEach(item => {
  item.addEventListener('click', () => {
    const content = item.closest('.content');

    const text = content.querySelector('.qa-paragraph');

    if (text.style.display === 'block') {
      text.style.display = 'none';
    } else {
      text.style.display = 'block';
    }

    const minusButtons = document.querySelectorAll('.minus');
    item.classList.toggle(minusButtons);
  });
});


// const minusButtons = document.querySelectorAll('.minus');

// minusButtons.forEach(button => {
//   button.addEventListener;
// });

