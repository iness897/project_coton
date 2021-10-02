    const popup = document.querySelector('.chat-popup');
    const commentBtn = document.querySelector('.comment-btn');
    const submitBtn = document.querySelector('.submit');
    const chatArea = document.querySelector('.chat-area');
    const inputElm = document.querySelector('input');
	
	const emojiBtn = document.querySelector('#emoji-btn');
	const picker = new EmojiButton();

// ********* EMOJI ************

window.addEventListener('DOMContentLoaded', () =>{

	picker.on('emoji', emoji =>{
		document.querySelector('input').value += emoji;
	});

	emojiBtn.addEventListener('click', () =>{
		picker.togglePicker(emojiBtn);
	
	});
});


// ******** BUTTON TOGGLER *********

commentBtn.addEventListener('click', () =>{
	popup.classList.toggle('show');
})


// *********** SEND MESSAGE **************

submitBtn.addEventListener('click', ()=>{
	let userInput = inputElm.value;
	let temp = `<div class="out-msg">
            <span class="my-msg">${userInput}</span>
            <img src="img/femme.jpeg" class="avatar">
	            </div>`;

	chatArea.insertAdjacentHTML("beforeend", temp);
	inputElm.value = ""; 

})
