# unified_hyphen_js
rubygem 
https://github.com/ykyk1218/unified_hyphen

# Usage 

```
<!DOCTYPE html>
<html>
<head>
<meta name="robots" content="noindex,nofollow" />
<meta charset="UTF-8">
<title>This is Template</title>

<script src="./unified_hyphen.js"></script>
<script>
  window.onload = function() {
    var t = document.getElementById("sample").textContent;
    t = t.unify_ja_hyphen()
    alert(t);  //Hello World
  }
</script>
</head>
<body>
<p id="sample">HelloーWorld!</p>
</body>
</html>
```
