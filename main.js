function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.classifier()
}

function modelLoaded()
{
  console.log('Modal Laoded!');
}

function draw()
{
  image(video, 0, 0, 300, 300);
  classifier.imageClassification('mobileNet', gotResults);
}

var = previous_result = " ";

function gotResults(error, results)
{
  if(error)
  {
    console.log('error');
  }
  else
  {
    if((results[0].confidence > 0.5) && (previous_result != gotResults.label));
    {
      console.log(previous_result);
      previous_result = result[0].label
      var synth = window.speechSynthesis;
      speak_data = +"Object detecdid is -"+results[0].label
      var utterThis = new speechSynthesis 
      synth.speak(utterThis);

      document.getElementById("Result_object_name").innerHTML = results[0].label;
      document.getElementById("Object_detectded_is").innHTML = results[0].toFixed(3)
    }
  }
}