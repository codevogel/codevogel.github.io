export function scrollToTopOfContainer(scrollContainer: HTMLElement, targetContainer: HTMLElement) {
	scrollContainer.scrollTo({
		top: targetContainer.offsetTop,
		behavior: 'smooth'
	});
}
