const parser = new DOMParser();

async function initMap() {
 
  const { Map, Polyline } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new Map(document.getElementById("map"), {
    center: { lat: 28.7041, lng: 77.1025 },
    zoom: 6,
    mapId: "4504f8b37365c3d0",
  });
 
  const markerViewWithText = new AdvancedMarkerElement({
    map,
    position: { lat: 33.0308, lng: 74.9490 },
    title: "Vaishno Devi - The Holy Caves.",
  });
  
  const pinScaled = new PinElement({

  });
  const markerViewScaled = new AdvancedMarkerElement({
    map,
    position: { lat: 34.2157, lng: 75.5041 },
    content: pinScaled.element,
    title: "Amarnath Cave - A haven for pilgrims."
  });
 
  const pinBackground = new PinElement({
  
  });
  const markerViewBackground = new AdvancedMarkerElement({
    map,
    position: { lat: 29.9457, lng: 78.1642 },
    content: pinBackground.element,
    title: "Haridwar - Ganges' wave of religion and spirituality."
  });
 
  const pinBorder = new PinElement({
  
  });
  const markerViewBorder = new AdvancedMarkerElement({
    map,
    position: { lat: 30.9944, lng: 78.9412 },
    content: pinBorder.element,
    title: "Gangotri Glacier - Source of River Ganges."
  });
  
  const pinGlyph = new PinElement({
    
  });
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 25.3176, lng: 82.9739 },
    content: pinGlyph.element,
    title: "Varanasi - The Spiritual Capital."
  });
  
  const pinNoGlyph = new PinElement({  
  });
  const markerViewNoGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 24.6959, lng: 84.9914 },
    content: pinNoGlyph.element,
    title: "Bodh Gaya - Mahabodhi Tree & the land of Nirvana."
  });
 
  const polylineCoordinates = [
    { lat: 33.0308, lng: 74.9490 },
    { lat: 34.2157, lng: 75.5041 },
    { lat: 29.9457, lng: 78.1642 },
    { lat: 30.9944, lng: 78.9412 },
    { lat: 25.3176, lng: 82.9739 },
    { lat: 24.6959, lng: 84.9914 },
  ];

 
  const flightPath = new Polyline({
    path: polylineCoordinates,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 1.0,
    strokeWeight: 1.5,
  });

  flightPath.setMap(map);
}

initMap();

