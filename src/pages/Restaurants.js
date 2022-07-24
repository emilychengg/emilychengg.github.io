import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./Restaurants.css"

const containerStyle = {
    width: '100vw',
    height: '100vh'
  };

const center = {
    lat: 42.359331586138204, 
    lng: -71.09311744384267,
};

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    componentDidMount() {
        document.title = "Emily Cheng > Restaurants"
    }

    render() {
        return(
            <div id="restaurant">
                <div id="restaurant-text">
                    <p className = "res"> Welcome to my food-dedicated page where I leave reviews and comments of most places that I have dined at! For live updates of where I am eating, check out <a href="https://www.instagram.com/coasttocoasteatz/">@coasttocoasteatz</a> on Instagram.</p>
                </div>
                <LoadScript googleMapsApiKey="U_API_KEY">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
                        {/* {Object.values(goodRestaurants).map((restaurantList, index) => (<RestaurantMarker restaurantList={restaurantList} isBad={false}/>))}
                        {Object.values(badPoopData).map((poopList, index) => (<PoopMarker poopList={poopList} isBad={true}/>))} */}
                    </GoogleMap>
                </LoadScript>
            </div>
        )
    }
}

export default Restaurants; 