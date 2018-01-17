package spirit;

import java.util.Date;

public class Hotel {

	private String pickupLocation;
	private Date checkinDate;
	private Date checkoutDate;
	private int adults;
	private int children;
	
	public String getPickupLocation() {
		return pickupLocation;
	}
	
	public void setPickupLocation(String pickupLocation) {
		this.pickupLocation = pickupLocation;
	}
	
	public Date getCheckinDate() {
		return checkinDate;
	}
	
	public void setCheckinDate(Date checkinDate) {
		this.checkinDate = checkinDate;
	}
	
	public Date getCheckoutDate() {
		return checkoutDate;
	}
	
	public void setCheckoutDate(Date checkoutDate) {
		this.checkoutDate = checkoutDate;
	}
	
	
	public int getAdults() {
		return adults;
	}
	
	public void setAdults(int adults) {
		this.adults = adults;
	}
	
	public int getChildren() {
		return children;
	}
	
	public void setChildren(int children) {
		this.children = children;
	}
	
	
}
