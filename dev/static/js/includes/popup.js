import $ from 'jquery';

window.jQuery = $;
require('@fancyapps/fancybox');

const closeIcon = `
    <svg class="popup-form__close-icon"><use href="static/img/svg/symbol/sprite.svg#close"></use></svg>
`;

const successPopup = `
    <div class="success-popup form_theme_dark">
        <svg class="success-popup__check"><use href="static/img/svg/symbol/sprite.svg#success-check"></use></svg>
        <div class="form__title success-popup__title">Заявка отправлена</div>
        <div class="form__description success-popup__description">Наш менеджер свяжется с Вами в ближайшее время</div>
    </div>
`;

// remove me
$(document).on('submit', (e) => e.preventDefault());

const openPopup = (src) => {
    $.fancybox.open({
        src,
        type: 'inline',
        btnTpl: {
            close: `
                <button data-fancybox-close class="popup-form__close" title="{{CLOSE}}">
                    ${closeIcon}
                </button>
            `,
            smallBtn: `
                <button data-fancybox-close class="popup-form__close" title="{{CLOSE}}">
                    ${closeIcon}
                </button>
            `,
        },
    });
};

$(document).on('click', '[data-popup]', function () {
    const src = $(this).data('popup');
    openPopup(src);
});

$(document).on('submit', () => {
    $.fancybox.close();
    openPopup(successPopup);
});