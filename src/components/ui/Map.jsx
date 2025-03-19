const Map = [
    {
        googleMap: (
            <iframe className="w-[85%] h-[75%]"
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_API_KEY}&q=place_id:ChIJ3RdS4fPJvJURhmJwk5B1_aI`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        )
    },
];

export default Map;
