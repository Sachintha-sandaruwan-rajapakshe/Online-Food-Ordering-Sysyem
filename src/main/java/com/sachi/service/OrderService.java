package com.sachi.service;

import java.util.List;

import com.sachi.Model.Order;
import com.sachi.Model.User;
import com.sachi.request.OrderRequest;

public interface OrderService {
	
	public Order createOrder(OrderRequest order,User user) throws Exception;
	
	public Order updateOrder(Long orderId,String orderStatus)throws Exception;
	
	public void cancelOrder(Long orderId)throws Exception;
	
	public List<Order> getUsersOrder(Long userId)throws Exception;
	
	public List<Order>getRestaurentsOrder(Long restaurentId,String orderStatus)throws Exception;
	
	public Order findOrderById(Long id)throws Exception;

}
