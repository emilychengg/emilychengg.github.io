import '/Users/emilycheng/my-app/src/pages/gallery/gallery.css';
import Gallery from '/Users/emilycheng/my-app/src/pages/gallery/gallery.js'

const Korea = () => {
    const imageArray = [];

    for (var i = 1; i <= 2; i++) {
        imageArray.push(process.env.PUBLIC_URL + 'img/korea/korea' + i + '.jpg');
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Korea;