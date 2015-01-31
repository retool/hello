<r-stylesheet href="css/site.css"></r-stylesheet>
<div class="container">
  <h1 size="1">Retool</h1>
  <button class="btn" name="btnHello">Hello</button>
  <r-outlet name="main"></r-outlet>
</div>
==
class Site extends Template {
  btnHello_onclick(){
    var msg = Controllers.Hello.sayHello("Retool Developer");
    alert(msg);
  }
}