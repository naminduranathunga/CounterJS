# CounterJS
Simple Count Up animation library from Javascript 

## Usage
Import the JavaScript file.

```javascript
<script src="/js/path/counter.js"></script>
```

```html
<div> 
  <span id="">1500</span><span id="">+</span>
</div>
```
After loading the webpage,
```javascript
const demoElement = document.getElementById('demo-count');
const duration = 2000; //2s

const demo = new Counter(demoElement, duration);
```

To initiate the countdown, simply call "start()" function.
```javascript
demo.start();
```
