const buttons = document.querySelectorAll(`[data-expand-button]`);
const articleBoxes = document.querySelectorAll('[data-expandable]');
const articleTexts = document.querySelectorAll('[data-expand-text]');

const checkOverflowing = function () {
	articleBoxes.forEach((box) => {
		if (box.classList.contains('expanded')) return;
		const text = box.querySelector('[data-expand-text]');
		const overflowing = text.scrollHeight > text.clientHeight;
		box.dataset.overflow = overflowing;
	});
};

const toggleText = function (e) {
	const btn = e.target.closest('[data-expand-button]');
	const expandableElem = btn.closest('[data-expandable]');
	expandableElem.classList.toggle('expanded');
	setBtnText(btn);
};

const setBtnText = function (btn) {
	const box = btn.closest('[data-expandable]');
	const expanded = box.classList.contains('expanded');
	btn.innerText = expanded ? 'Read less' : 'Read more';
};

checkOverflowing();
buttons.forEach((btn) => {
	btn.addEventListener('click', toggleText);
	setBtnText(btn);
});
