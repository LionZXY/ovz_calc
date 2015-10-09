$(document).ready(function(){

    function calculate(operand){
        return operand
    }
    $(".graph").click(function(){
        var drawingCanvas = document.getElementById('graph');
        if(drawingCanvas && drawingCanvas.getContext) {
            var context = drawingCanvas.getContext('2d');
            context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
            context.font = "italic 10pt ISOCPEUR";

            //// ������ ���
            //context.beginPath();
            //context.moveTo(0, 100);
            //context.lineTo(500, 100);
            //context.stroke();

            // ������ ���������
            context.strokeStyle = "#000";
            context.fillStyle = "#ffff99";
            context.beginPath();
            context.rect(100, 100, 50, 50);
            context.closePath();
            context.stroke();
            context.fill();

            // ������ ���
            context.strokeStyle = "#000";
            context.fillStyle = "#999999";
            context.beginPath();
            context.rect(200, 100 + Number($('.Dmax').val()), 50, 50);
            context.closePath();
            context.stroke();
            context.fill();

            //������ ����� ES
            context.beginPath();
            context.moveTo(100 - 25, 100);
            context.lineTo(300, 100);
            context.fillStyle = "red";
            context.fillText("ES", 100 - 25, 100 - 2);
            context.stroke();

            //������ ����� EI
            context.beginPath();
            context.moveTo(100 - 25, 100 + 50);
            context.lineTo(300, 100 + 50);
            context.fillStyle = "red";
            context.fillText("EI", 100 - 25, 100 + 50 - 2);
            context.stroke();

            //������ ����� Em
            context.beginPath();
            context.moveTo(100 - 25, 100 + 50/2);
            context.lineTo(300, 100 + 50/2);
            context.fillStyle = "red";
            context.fillText("Em", 100 - 25, 100 + 50/2 - 2);
            context.stroke();

            //������ ����� es
            context.beginPath();
            context.moveTo(200 - 25, 100 + Number($('.Dmax').val()));
            context.lineTo(300, 100 + Number($('.Dmax').val()));
            context.fillStyle = "red";
            context.fillText("es", 200 - 25, 100 + Number($('.Dmax').val()) - 2);
            context.stroke();

            //������ ����� ei
            context.beginPath();
            context.moveTo(200 - 25, 100 + Number($('.Dmax').val()) + 50);
            context.lineTo(300, 100 + Number($('.Dmax').val()) + 50);
            context.fillStyle = "red";
            context.fillText("ei", 200 - 25, 100 + Number($('.Dmax').val()) + 50 - 2);
            context.stroke();

            //������ ����� em
            context.beginPath();
            context.moveTo(200 - 25, 100 + Number($('.Dmax').val()) + 50/2);
            context.lineTo(300, 100 + Number($('.Dmax').val()) + 50/2);
            context.fillStyle = "red";
            context.fillText("em", 200 - 25, 100 + Number($('.Dmax').val()) + 50/2 - 2);
            context.stroke();
        }
    });
});