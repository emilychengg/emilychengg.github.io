import '/Users/emilycheng/my-app/src/pages/gallery/gallery.css';
import Gallery from '/Users/emilycheng/my-app/src/pages/gallery/gallery.js'

const China = () => {
    const imageArray = [];

    for (var i = 1; i <= 7; i++) {
        imageArray.push(process.env.PUBLIC_URL + 'img/china/china' + i + '.jpg');
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default China;