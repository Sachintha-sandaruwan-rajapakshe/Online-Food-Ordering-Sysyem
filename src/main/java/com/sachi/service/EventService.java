package com.sachi.service;

import java.util.List;

import com.sachi.Model.Event;
import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.request.CreateEventRequest;

public interface EventService {
	
	public Event createEventService(CreateEventRequest req, User user, Restaurent restaurent)throws Exception;

	public List<Event> getEventsByRestaurant(Long restaurentId)throws Exception;

	public Event deleteRestaurantEvent(Long eventId)throws Exception;

	
	
}
