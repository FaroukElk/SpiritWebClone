package spirit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import spirit.FlightRepository;
import spirit.DateFormatHandler;
import spirit.ConfirmCodeGenerator;


@Controller
@ComponentScan(value="spirit")
public class MainController {

	@Autowired
	private FlightRepository flightRepository;
	@Autowired
	private DateFormatHandler dateHandler;
	@Autowired
	private ConfirmCodeGenerator ccGen;
	
    @GetMapping("/index")
    public String homepage(Model model) {
    	model.addAttribute("flight", new Flight());
        return "index";
    }

    @RequestMapping(value = "/flight-search", method=RequestMethod.POST)
    public ModelAndView getFlights(@ModelAttribute Flight flight, @RequestParam(value="return-date", required=false) String returnDate) throws ParseException{
    	
    	String queryDepartDate = dateHandler.queryFormat(flight.getDepartDate());
    	String departDatePlus5 = dateHandler.getDatePlus5(flight.getDepartDate());

    	List<Flight> flightsTo = flightRepository.findFlights(flight.getLocationFrom(), flight.getLocationTo(), queryDepartDate, departDatePlus5);
    	System.out.println(flightsTo);
    	ModelAndView model = new ModelAndView();
    	model.setViewName("flight-search");
    	
    	model.addObject("flights", flightsTo);
    	model.addObject("datePlus5", departDatePlus5);
    	
    	if(!returnDate.equals("")) { //To do handle round trip flights
    		String queryReturnDate = dateHandler.queryFormat(returnDate);
    		String returnDatePlus5 = dateHandler.getDatePlus5(returnDate);
    	}
    	
    	return model;
    }
    
    @RequestMapping(value = "/flight-confirm", method=RequestMethod.GET)
    public ModelAndView showItinerary(@RequestParam("flightID") int flightID) {
    	Flight flight = flightRepository.findFlightById(flightID);
    	
    	String confirmCode = ccGen.getConfirmationCode();
    	while (flightRepository.findFlightByConfirmCode(confirmCode).size() != 0) {
    		confirmCode = ccGen.getConfirmationCode();
    	}
    	
    	flightRepository.insertFlightReservation(confirmCode, flightID);
    	
    	ModelAndView model = new ModelAndView();
    	model.setViewName("flight-confirm");
    	model.addObject("confirmCode", confirmCode);
    	model.addObject("flight", flight);
    	
    	return model;
    }
    
    
}