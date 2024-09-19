import '/Users/emilycheng/my-app/src/pages/gallery/gallery.css';
import Gallery from '/Users/emilycheng/my-app/src/pages/gallery/gallery.js'

const Boston = () => {
    const imageArray = [];

    for (var i = 1; i <= 1; i++) {
    imageArray.push(process.env.PUBLIC_URL + 'img/boston/boston' + i + '.jpg');
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Boston;