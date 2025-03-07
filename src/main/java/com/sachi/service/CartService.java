package com.sachi.service;

import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.request.AddCartItemRequest;

public interface CartService {
	
	public CartItem addItemToCart(AddCartItemRequest req,String jwt)throws Exception;
	
	public CartItem updateCartItem(Long cartItemId,int quantity)throws Exception;
	
	public Cart removeItemFromCart(Long cartItemId,String jwt)throws Exception;
	
	public Long calculateCartTotal(Cart cart)throws Exception;
	
	public Cart findCartById(Long id)throws Exception;
	
	public Cart findCartByUserId(Long id)throws Exception;
	
	public Cart clearCart(Long userId)throws Exception;
	
	
	

}
