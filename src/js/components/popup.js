Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

Fancybox.bind('[data-fancybox="single"]', {
    groupAttr: false,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    groupAll: true,
    Thumbs: {
        type: "classic",
    },
});