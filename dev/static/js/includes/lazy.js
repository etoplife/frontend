const lazyImageClassName = 'lazy-image';
const lazyImageReadyClassName = 'lazy-image_ready';

const loadImage = (src, func) => {
	const img = new Image();
	img.onload = func;
	img.src = src;
};

const loadLazyImage = (image, func) => {
	const img = image;
	loadImage(image.dataset.src, () => {
		img.src = image.dataset.src;
		img.classList.add(lazyImageReadyClassName);
		func();
	});
};

const imageObserver = new IntersectionObserver((entries, imgObserver) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const lazyImage = entry.target;
			loadLazyImage(lazyImage, () => imgObserver.unobserve(lazyImage));
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const images = document.querySelectorAll(`img.${lazyImageClassName}:not([src])`);

	images.forEach(function (v) {
		imageObserver.observe(v);
	});
});
