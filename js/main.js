var input = "";
        $(document).ready(function () {
            $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b0,#dot,#mult,#divid,#mod,#subt,#brak,#braket,#plus,#power").click(function () {
                input += $(this).text();
                $("#out").val(input);
            });
            $("#equal").click(function () {
                var total = eval(input);
                $("#out").val(input);
                input = total;
            });
            $("#bd").click(function () {//clear last
                input = input.slice(0,-1);
                $("#out").val(input);
            });
            $("#bc").click(function () {//clear all
                input = '';
                $("#out").val(input);
            });
        });