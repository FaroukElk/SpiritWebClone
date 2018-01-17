package spirit;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import javax.transaction.Transactional;

import spirit.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {
	
	
	public Flight findFlightById(int id);
	
	public Flight findFlightByDepartDate(Date departDate);
	
	@Query(value = "SELECT * FROM flights f WHERE f.location_from = :locationFrom AND f.location_to = :locationTo AND f.depart_date >= :departDate AND f.depart_date <= :departDatePlus5",
			nativeQuery = true)
	public List<Flight> findFlights(@Param("locationFrom")String locationFrom, @Param("locationTo")String locationTo, @Param("departDate") String departDate, @Param("departDatePlus5") String departDatePlus5);

	@Query(value = "SELECT * from reservations where confirm_code = :confirm_code", nativeQuery=true)
	public List<Flight> findFlightByConfirmCode(@Param("confirm_code") String confirmCode);

	@Modifying
	@Transactional
	@Query(value = "INSERT into reservations (flightID, confirm_code) values(:flightID, :confirmCode)", nativeQuery=true)
	public void insertFlightReservation(@Param("confirmCode") String confirmCode, @Param("flightID") int flightID);
}
