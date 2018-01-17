package spirit;
import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;
import java.time.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name="flights")
public class Flight{
	
	@Id
	private int id;

	private String locationFrom;
	
	private String locationTo;
	
	private String departDate;
	
	private BigDecimal ticketPrice;
	
	@Column(name="arrival")
	private LocalTime arrivalTime;

	public int getId() {
		return id;
	}
	public String getLocationFrom(){
		return locationFrom;
	}
	
	public void setLocationFrom(String location){
		this.locationFrom = location;
	}
	
	public String getLocationTo() {
		return locationTo;
	}
	
	public void setLocationTo(String location) {
		this.locationTo = location;
	}
	public String getDepartDate(){
		return departDate;
	}
	
	public void setDepartDate(String departDate){
		this.departDate = departDate;
	}
	
	public BigDecimal getTicketPrice() {
		return ticketPrice;
	}
	
	public void setTicketPrice(BigDecimal ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
	
	
	public LocalTime getArrivalTime() {
		return arrivalTime;
	}
	
	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	
}