(function () {

    $(document).ready(onDocumentReady);

    function onDocumentReady() {
	$('#commandZone .left').click(onCommandLeft);
	$('#commandZone .right').click(onCommandRight);
    }


    
    function onCommandLeft() {
	alert('left');
    }
    
    function onCommandRight() {
	alert('right');
    }
    
})();
