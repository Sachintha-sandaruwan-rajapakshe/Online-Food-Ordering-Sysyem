package com.sachi.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.Address;
import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.Order;
import com.sachi.Model.OrderItem;
import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.repository.AddressRepository;
import com.sachi.repository.CartRepository;
import com.sachi.repository.OrderItemRepository;
import com.sachi.repository.OrderRepository;
import com.sachi.repository.UserRepository;
import com.sachi.request.OrderRequest;

@Service
public class OrderServiceImpl implements OrderService{
	
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private OrderItemRepository orderItemRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RestaurentService restaurentService;
	@Autowired
	private CartService cartService;
	
	

	@Override
	public Order createOrder(OrderRequest order, User user) throws Exception {
		Address shippAddress =order.getDeliveryAddress();
		Address saveAddress = addressRepository.save(shippAddress);
		
		if(!user.getAddresses().contains(saveAddress)) {
			user.getAddresses().add(saveAddress);
			userRepository.save(user);
		}
		Restaurent restaurent =restaurentService.findRestaurentById(order.getRestaurentId());
		Order newOrder = new Order();
		newOrder.setRestaurent(restaurent);
		newOrder.setDeliveryAddress(saveAddress);
		newOrder.setCustomer(user);
		newOrder.setOrderStatus("PENDING");
		newOrder.setCreatedAt(new Date(0));
		
		Cart cart = cartService.findCartById(user.getId());
		
		List<OrderItem> orderItems =new ArrayList<>();
		
		for(CartItem cartItem : cart.getItems()) {
			OrderItem orderItem = new OrderItem();
			orderItem.setFood(cartItem.getFood());
			orderItem.setIngredients(cartItem.getIngredients());
			orderItem.setQuantity(cartItem.getQuantity());
			orderItem.setTotalPrice(cartItem.getId());
			
			OrderItem saveOrderItem =orderItemRepository.save(orderItem);
			orderItems.add(saveOrderItem);
		}
		Long totalPrice =cartService.calculateCartTotal(cart);
		
		newOrder.setItem(orderItems);
		newOrder.setTotalPrice(totalPrice);
		Order saveOrder = orderRepository.save(newOrder);
		restaurent.getOrders().add(saveOrder);
		return newOrder;
	}

	@Override
	public Order updateOrder(Long orderId, String orderStatus) throws Exception {
		Order order =findOrderById(orderId);
		
		if(orderStatus.equals("OUT_FOR_DELIVERY")|| orderStatus.equals("DELIVERD")||orderStatus.equals("COMPLETED")||orderStatus.equals("PENDING")) {
			order.setOrderStatus(orderStatus);
			return orderRepository.save(order);
		}
		throw new  Exception("Select valid order status.!");
	}

	@Override
	public void cancelOrder(Long orderId) throws Exception {
		Order order =findOrderById(orderId);
		orderRepository.deleteById(orderId);
		
	}

	@Override
	public List<Order> getUsersOrder(Long userId) throws Exception {
		
		return orderRepository.findBycustomerId(userId);
	}

	@Override
	public List<Order> getRestaurentsOrder(Long restaurentId, String orderStatus) throws Exception {
	
		List<Order> orders =orderRepository.findByRestaurentId(restaurentId);
		if(orderStatus!= null) {
			orders =orders.stream().filter(order ->order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList()); 
		}
		return orders;
	}

	@Override
	public Order findOrderById(Long id) throws Exception {
		Optional<Order> optionalOrder =orderRepository.findById(id);
		if(optionalOrder.isEmpty()) {
			throw new Exception("Order not found.!");
		}
		return optionalOrder.get();
	}
	
	

}
