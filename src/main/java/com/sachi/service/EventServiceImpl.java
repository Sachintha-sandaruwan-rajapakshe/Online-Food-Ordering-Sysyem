package com.sachi.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
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

	@Override
	public List<Event> getEventsByAllRestaurant() throws Exception {
		return eventRepository.findAll();
	}
	
	// ---------------- Automatic Delete Scheduler ----------------
    @Scheduled(cron = "0 0 0 * * ?") // මැධ්‍යම රාත්‍රියේ (12AM) දවස්කට එක වතාවක් run වෙයි
    public void removeExpiredEvents() {
        LocalDate today = LocalDate.now();
        List<Event> expiredEvents = eventRepository.findByEndDateBefore(today);

        if (!expiredEvents.isEmpty()) {
            eventRepository.deleteAll(expiredEvents);
            System.out.println("Expired events removed: " + expiredEvents.size());
        }
    }
	

	
	
	

	

}
