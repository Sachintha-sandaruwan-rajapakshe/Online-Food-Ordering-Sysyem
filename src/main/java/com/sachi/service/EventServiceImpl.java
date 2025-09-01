package com.sachi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.Event;
import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.repository.EventRepository;
import com.sachi.request.CreateEventRequest;
@Service
public class EventServiceImpl implements EventService{
	@Autowired
	private EventRepository eventRepository;

	@Override
	public Event createEventService(CreateEventRequest req, User user, Restaurent restaurent) throws Exception {
		Event event =new Event();
		event.setEventName(req.getEventName());
        event.setLocation(req.getLocation());
        event.setStartDate(req.getStartDate());
        event.setEndDate(req.getEndDate());
        event.setRestaurent(restaurent);
        event.setImages(req.getImages());
		
		return eventRepository.save(event);
	}

	@Override
	public List<Event> getEventsByRestaurant(Long restaurentId) throws Exception {
		
		return eventRepository.findByRestaurentId(restaurentId);
	}

	@Override
	public Event deleteRestaurantEvent(Long eventId) throws Exception {
	    Event event = eventRepository.findById(eventId)
	            .orElseThrow(() -> new Exception("Event not found with id " + eventId));

	    eventRepository.delete(event); // void method
	    return event; // delete කල Event object එක return කරනවා
	}


	
	
	

	

}
