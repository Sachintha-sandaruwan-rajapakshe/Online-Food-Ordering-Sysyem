package com.sachi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Order;
import com.sachi.Model.User;
import com.sachi.service.OrderService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("/api/admin")
public class AdminOrderController {
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/order/restaurent/{id}")
	public ResponseEntity<List<Order>> getOrderHistory(@PathVariable Long id,@RequestHeader("Authorization")String jwt,@RequestParam(required = false) String orderStatus ) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		List<Order> order =orderService.getRestaurentsOrder(id, orderStatus);
		return new ResponseEntity<List<Order>>(order,HttpStatus.OK);
		
	}
	
	@PutMapping("/order/{orderId}/{orderStatus}")
	public ResponseEntity<Order> updateOrderStatus(@PathVariable Long orderId,@PathVariable String orderStatus, @RequestHeader("Authorization")String jwt) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		Order order =orderService.updateOrder(orderId, orderStatus);
		return new ResponseEntity<Order>(order,HttpStatus.OK);
		
	}

}
