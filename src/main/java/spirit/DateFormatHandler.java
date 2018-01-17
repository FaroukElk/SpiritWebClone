package spirit;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.context.annotation.Configuration;

import ognl.ParseException;

@Configuration
public class DateFormatHandler {
	
	DateFormat frontend = new SimpleDateFormat("MM/dd/yyyy");
	DateFormat backend = new SimpleDateFormat("yyyy-MM-dd 00:mm:ss");
	
	public String queryFormat(String dateString) throws java.text.ParseException {
		
		Date date;
		date = frontend.parse(dateString);
		String backDate = backend.format(date);
		
		return backDate;
		
	}

	public String getDatePlus5(String dateString) throws java.text.ParseException {
		Calendar c = Calendar.getInstance();
		Date date;
		date = frontend.parse(dateString);
		c.setTime(date);
		c.add(Calendar.DAY_OF_MONTH, 5);
		date = c.getTime();
		
		String backDate = backend.format(date);
		
		return backDate;
	}
	
}
