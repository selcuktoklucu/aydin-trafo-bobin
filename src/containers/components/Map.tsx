
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = (props: any) => {
    const [center, setCenter] = useState({lat: 39.98902860303093, lng: 32.750475149376975 });
const myStyle = {
    border:0
    } as React.CSSProperties;


    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.05427872197143!2d32.7501537032726!3d39.98904483595042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34988f451b257%3A0x7d53b4cc18739607!2zMznCsDU5JzIwLjUiTiAzMsKwNDUnMDEuOCJF!5e0!3m2!1sen!2sus!4v1608968149484!5m2!1sen!2sus&z=15" width="800" height="350" style={myStyle} aria-hidden="false"></iframe>
    )
}

export default Map;