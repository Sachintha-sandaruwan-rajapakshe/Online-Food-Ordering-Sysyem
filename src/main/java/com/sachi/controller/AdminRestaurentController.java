package com.sachi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.request.CreateRestaurentRequest;
import com.sachi.response.MessageResponse;
import com.sachi.service.RestaurentService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("/api/admin/restaurents")
public class AdminRestaurentController {
	
	@Autowired
	private RestaurentService restaurentService;
	@Autowired
	private UserService userService;
	
	@PostMapping()
	public ResponseEntity<Restaurent>createRestaurent(@RequestBody CreateRestaurentRequest req,@RequestHeader("Authorization") String jwt) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		Restaurent restaurent = restaurentService.createRestaurent(req, user);
		return new ResponseEntity<Restaurent>(restaurent,HttpStatus.CREATED);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Restaurent>updateRestaurent(@RequestBody CreateRestaurentRequest req,@RequestHeader("Authorization") String jwt,@PathVariable long id) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		Restaurent restaurent = restaurentService.updateRestaurent(id,req);
		return new ResponseEntity<Restaurent>(restaurent,HttpStatus.OK);
		
	}
	

	@DeleteMapping("/{id}")
	public ResponseEntity<MessageResponse>deleteRestaurent(@RequestHeader("Authorization") String jwt,@PathVariable long id) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		restaurentService.deleteRestaurent(id);
		MessageResponse res =new MessageResponse();
		res.setMessage("Restaurent deleted sucessfully.!");
		return new ResponseEntity<MessageResponse>(res,HttpStatus.OK);
		
	}
	
	@PutMapping("/{id}/status")
	public ResponseEntity<Restaurent>updateRestaurentStatus(@RequestHeader("Authorization") String jwt,@PathVariable long id) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		Restaurent restaurent=restaurentService.updateRestaurentStatus(id);
		
		return new ResponseEntity<Restaurent>(restaurent,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/user")
	public ResponseEntity<Restaurent>findRestaurentByUserId(@RequestHeader("Authorization") String jwt) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		Restaurent restaurent=restaurentService.findRestaurentByUserId(user.getId());
		
		return new ResponseEntity<Restaurent>(restaurent,HttpStatus.OK);
		
	}



}
