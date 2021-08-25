const dfMessenger = document.querySelector('df-messenger');
dfMessenger.addEventListener('df-messenger-loaded', function (event) {
	const styleEle = document.querySelector('df-messenger')
		.shadowRoot
		.querySelector('df-messenger-chat')
		.shadowRoot
		.querySelector('df-message-list')
		.shadowRoot
		.querySelector('style')

	styleEle.innerText = styleEle.innerText.replace(`font-family: 'Roboto', sans-serif`, `font-family: monospace`)
	styleEle.innerText += '\n#messageList .message {\n\twhite-space: pre-wrap;\n}'

	const containerStyle = document.querySelector('df-messenger')
		.shadowRoot
		.querySelector('df-messenger-chat')
		.shadowRoot
		.querySelector('style')
	containerStyle.innerText = containerStyle.innerText.replace('370px', '90vw')
});
