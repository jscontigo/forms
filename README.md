1.crear una entrada HTML que le pregunte por su nombre. Una vez que introduzca su nombre, se envía al DOM como un h1 elemento.<BR>
2.ejemplo-sencilla: hay muchos medidas buscar su valore dentro de "#fname" en forms.html. Este tiempos, sigue el "e" pasado de handleChange(e). El "e" es el evento, siguelo en su Developer Tools -> Console -> e->target->childNodes[1].value<br>
  Event {isTrusted: true, type: "submit", target: form#f, currentTarget: form#f, eventPhase: 2, …}<br>
bubbles: true<br>
cancelBubble: false<br>
cancelable: true<br>
composed: false<br>
currentTarget: null
defaultPrevented: true<br>
eventPhase: 0<br>
isTrusted: true<br>
path: (5) [form#f, body, html, document, Window]<br>
returnValue: false<br>
srcElement: form#f<br>
  <strong>target: form#f</strong><br>
0: input#fname<br>
  <strong>1: input</strong><br>

childElementCount: 2
  <br><strong>childNodes: NodeList(5)</strong><br>
0: text<br>
 1: input#fname<br>
<br>
  ...snip

<br>
type: "text"
useMap: ""
validationMessage: ""
validity: ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
<strong>value: "Larrah"</strong>
