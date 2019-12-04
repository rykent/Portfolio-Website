$(document).ready(function() {
$('a[href*=#]').each(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&amp;amp;&amp;amp; location.hostname == this.hostname
&amp;amp;&amp;amp; this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($target) {
var targetOffset = $target.offset().top;
$(this).click(function() {
$('html, body').animate({scrollTop: targetOffset}, 1000);
return false;
});
}
}
});

});