package com.sachi.request;

import com.sachi.Model.Address;

public class OrderRequest {
	private Long restaurentId;
	private Address deliveryAddress;
	
	
	public Long getRestaurentId() {
		return restaurentId;
	}
	public void setRestaurentId(Long restaurentId) {
		this.restaurentId = restaurentId;
	}
	public Address getDeliveryAddress() {
		return deliveryAddress;
	}
	public void setDeliveryAddress(Address deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}
	
	

}
