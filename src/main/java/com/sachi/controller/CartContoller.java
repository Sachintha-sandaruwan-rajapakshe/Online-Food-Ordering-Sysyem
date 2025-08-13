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

import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.User;
import com.sachi.request.AddCartItemRequest;
import com.sachi.request.UpdateCartItemRequest;
import com.sachi.service.CartService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("/api")
public class CartContoller {
	
	@Autowired
	private  UserService userService;
	@Autowired
	private CartService cartService;
	
	@PostMapping("/cart/add")
	public ResponseEntity<CartItem> addItemToCart(@RequestBody AddCartItemRequest req,@RequestHeader("Authorization")String jwt ) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		CartItem item = cartService.addItemToCart(req, jwt);
		return new ResponseEntity<CartItem>(item,HttpStatus.OK);
		
	}
	
	@PutMapping("/cart-item/update")
	public ResponseEntity<CartItem> updateCartItemQuantity(@RequestBody UpdateCartItemRequest  req,@RequestHeader("Authorization")String jwt ) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		CartItem item = cartService.updateCartItem(req.getCartItemId(), req.getQuantity());
		return new ResponseEntity<CartItem>(item,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/cart-item/{id}/remove")
	public ResponseEntity<Cart> removeCartItem(@PathVariable Long id,@RequestHeader("Authorization")String jwt ) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		Cart item = cartService.removeItemFromCart(id, jwt);
		return new ResponseEntity<Cart>(item,HttpStatus.OK);
		
	}
	@PutMapping("/cart/clear")
	public ResponseEntity<Cart> clearCart(@RequestHeader("Authorization")String jwt ) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		Cart item = cartService.clearCart(user.getId());
		return new ResponseEntity<Cart>(item,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/cart")
	public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization")String jwt ) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		Cart item = cartService.findCartByUserId(user.getId());
		return new ResponseEntity<Cart>(item,HttpStatus.OK);
		
	}

}
