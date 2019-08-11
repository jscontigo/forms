1.crear una entrada HTML que le pregunte por su nombre. Una vez que introduzca su nombre, se envía al DOM como un h1 elemento.<BR>
2.ejemplo-sencilla: hay muchos medidas buscar su valore dentro de "#fname" en forms.html. Este tiempos, sigue el "e" pasado de handleChange(e). El "e" es el evento, siguelo en su Developer Tools -> Console -> e->target->childNodes[1].value<br>
  Event {isTrusted: true, type: "submit", target: form#f, currentTarget: form#f, eventPhase: 2, …}
bubbles: true
cancelBubble: false
cancelable: true
composed: false
currentTarget: null
defaultPrevented: true
eventPhase: 0
isTrusted: true
path: (5) [form#f, body, html, document, Window]
returnValue: false
srcElement: form#f
  <strong>target: form#f</strong>
0: input#fname
  <strong>1: input</strong>
acceptCharset: ""
accessKey: ""
action: "http://127.0.0.1:5500/form.html?fname=#"
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: id, 1: action, id: id, action: action, length: 2}
autocapitalize: ""
autocomplete: "on"
baseURI: "http://127.0.0.1:5500/form.html?fname=#"
childElementCount: 2
childNodes: NodeList(5)
0: text
<br>
  ...snip

<br>
type: "text"
useMap: ""
validationMessage: ""
validity: ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
<strong>value: "Larrah"</strong>
