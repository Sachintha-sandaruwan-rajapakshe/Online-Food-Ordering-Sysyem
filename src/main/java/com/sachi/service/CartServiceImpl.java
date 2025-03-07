package com.sachi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.Food;
import com.sachi.Model.User;
import com.sachi.repository.CartItemRepository;
import com.sachi.repository.CartRepository;
import com.sachi.request.AddCartItemRequest;

@Service
public class CartServiceImpl implements CartService{
	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private CartItemRepository cartItemRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private FoodService foodService;
	
	@Override
	public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
		User user = userService.findUserByJwtToken(jwt);
		Food food =foodService.findFoodById(req.getFoodId());
		Cart cart =cartRepository.findByCustomerId(user.getId());
		
		for(CartItem cartItem : cart.getItems()) {
			if(cartItem.getFood().equals(food)) {
				int newQuantity =cartItem.getQuantity()+req.getQuantity();
				return updateCartItem(cartItem.getId(),newQuantity);
				
			}
			
		}
		CartItem NewcartItem = new CartItem();
		NewcartItem.setFood(food);
		NewcartItem.setCart(cart);
		NewcartItem.setQuantity(req.getQuantity());
		NewcartItem.setTotalPrice(req.getQuantity()*food.getPrice());
		NewcartItem.setIngredients(req.getIngredients());
		
		CartItem saveCartItem = cartItemRepository.save(NewcartItem);
		cart.getItems().add(saveCartItem);
		
		return saveCartItem;
	}
	@Override
	public CartItem updateCartItem(Long cartItemId, int quantity) throws Exception {
		Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
		if(cartItemOptional.isEmpty()) {
			throw new Exception("Cart item not found.!");
		}
		CartItem cartItem =new CartItem();
		cartItem.setQuantity(quantity);
		cartItem.setTotalPrice(cartItem.getFood().getPrice()*quantity);
		return cartItemRepository.save(cartItem);
	}
	@Override
	public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {
		User user = userService.findUserByJwtToken(jwt);
		Cart cart =cartRepository.findByCustomerId(user.getId());
		Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
		if(cartItemOptional.isEmpty()) {
			throw new Exception("Cart item not found.!");
		}
		CartItem item =new CartItem();
		cart.getItems().remove(item);
		
		return cart;
	}
	@Override
	public Long calculateCartTotal(Cart cart) throws Exception {
		Long total=0L;
		
		for(CartItem cartItem:cart.getItems()) {
			total += cartItem.getFood().getPrice()*cartItem.getQuantity();
			
		}
		return total; 
	}
	@Override
	public Cart findCartById(Long id) throws Exception {
		Optional<Cart> optionalCart =cartRepository.findById(id);
		if(optionalCart.isEmpty()) {
			throw new Exception("cart not found with id"+ id);
		}
		return optionalCart.get();
	}
	@Override
	public Cart findCartByUserId(Long id) throws Exception {
		
		return cartRepository.findByCustomerId(id);
	}
	@Override
	public Cart clearCart(Long userId) throws Exception {
		Cart cart =findCartByUserId(userId);
		return cartRepository.save(cart);
	}

}
  