const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map, Polyline } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new Map(document.getElementById("map"), {
    center: { lat: 32.7266, lng: 74.8570 },
    zoom: 6,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const markerViewWithText = new AdvancedMarkerElement({
    map,
    position: { lat: 33.0308, lng: 74.9490 },
    title: "Vaishno Devi - The Holy Caves. Best Time: Throughout the year.",
  });
  // Adjust the scale.
  const pinScaled = new PinElement({

  });
  const markerViewScaled = new AdvancedMarkerElement({
    map,
    position: { lat: 34.2157, lng: 75.5041 },
    content: pinScaled.element,
    title: "Amarnath Cave - A haven for pilgrims."
  });
  // Change the background color.
  const pinBackground = new PinElement({
  
  });
  const markerViewBackground = new AdvancedMarkerElement({
    map,
    position: { lat: 29.9457, lng: 78.1642 },
    content: pinBackground.element,
    title: "Haridwar - Ganges' wave of religion and spirituality. Best Time: Throughout the year. "
  });
  // Change the border color.
  const pinBorder = new PinElement({
  
  });
  const markerViewBorder = new AdvancedMarkerElement({
    map,
    position: { lat: 30.9944, lng: 78.9412 },
    content: pinBorder.element,
    title: "Gangotri Glacier - Source of River Ganges."
  });
  // Change the glyph color.
  const pinGlyph = new PinElement({
    
  });
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 25.3176, lng: 82.9739 },
    content: pinGlyph.element,
    title: "Varanasi - The Spiritual Capital."
  });
  // Hide the glyph.
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

  // Create a polyline and set its path
  const flightPath = new Polyline({
    path: polylineCoordinates,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 1.0,
    strokeWeight: 1,
  });

  flightPath.setMap(map);
}

initMap();

