package com.sachi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Event;
import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.request.CreateEventRequest;
import com.sachi.service.EventService;
import com.sachi.service.RestaurentService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("/api")
public class EventController {
	@Autowired
	private UserService userService;
	
	@Autowired	
	private RestaurentService restaurentService;
	@Autowired
	private EventService eventService;
	
	@PostMapping("/admin/event/{restaurentId}")
	public ResponseEntity<Event>createEvent(
			@PathVariable Long restaurentId,
			@RequestHeader("Authorization")String jwt,
			@RequestBody CreateEventRequest req) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		Restaurent restaurent =restaurentService.findRestaurentById(restaurentId);
		Event event = eventService.createEventService(req, user, restaurent);
		
	return new ResponseEntity<>(event,HttpStatus.CREATED);
	}
	
	@GetMapping("/event/{restaurentId}")
	public ResponseEntity<List<Event>> getEventsByRestaurantId(
	        @PathVariable Long restaurentId,
	        @RequestHeader("Authorization") String jwt) throws Exception {

	    User user = userService.findUserByJwtToken(jwt);
	    List<Event> events = eventService.getEventsByRestaurant(restaurentId);

	    return new ResponseEntity<>(events, HttpStatus.OK);
	}
	
	@DeleteMapping("/event/delete/{eventId}")
	public ResponseEntity<Event>deleteEvent(
			@PathVariable Long eventId,
	        @RequestHeader("Authorization") String jwt)throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Event events = eventService.deleteRestaurantEvent(eventId);
		return new ResponseEntity<>(events,HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
}
