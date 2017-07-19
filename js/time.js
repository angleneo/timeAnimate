 $(function(){
 	timerun();
 })
function timerun(){
	setInterval(function(){
		getCookie();
		function getCookie(){
		var date = new Date(),
			year=date.getFullYear(),
			month=date.getMonth()+1,
			day=date.getDate(),
			hour=date.getHours(),
			min= date.getMinutes(),
			sec=date.getSeconds();
		initDate(year,month,day,hour,min,sec);
		setInterval(function(){
	    	hour++;
	    	if(hour>23){
	    		hour=0;
	    		day++;
	    		if(day>31){
	    			day=1;
	    			month++;
	    		}
	    	}
	    	initDate(year,month,day,hour,min,sec);
	    },3600000);
	}
	function initDate(year,month,day,hour,min,sec){
		$('.time-box').attr({'data-year':year,'data-month':month,'data-day':day,'data-hour':hour,'data-min':min,'data-sec':sec});
        year="'"+year+"'";
        var year1=parseInt(year.charAt(1)),
            year2=parseInt(year.charAt(2)),
            year3=parseInt(year.charAt(3)),
            year4=parseInt(year.charAt(4));
        time(year1,$('.time-year01'));
        time(year2,$('.time-year02'));
        time(year3,$('.time-year03'));
        time(year4,$('.time-year04'));
        var month1=parseInt(month/10),
            month2=month%10;
        time(month1,$('.time-month01'));
        time(month2,$('.time-month02'));
        var day1=parseInt(day/10),
            day2=day%10;
        time(day1,$('.time-day01'));
        time(day2,$('.time-day02'));
        var hour1=parseInt(hour/10),
            hour2=hour%10;
        time(hour1,$('.time-hour01'));
        time(hour2,$('.time-hour02'));
         var min1=parseInt(min/10),
            min2=min%10;
        time(min1,$('.time-minute01'));
        time(min2,$('.time-minute02'));
         var sec1=parseInt(sec/10),
            sec2=sec%10;
        time(sec1,$('.time-second01'));
        time(sec2,$('.time-second02'));
        function time(number,obj){
            obj.animate({'background-position-y':-number*46+'px'},1000);
        }
	}
	},1000)
};