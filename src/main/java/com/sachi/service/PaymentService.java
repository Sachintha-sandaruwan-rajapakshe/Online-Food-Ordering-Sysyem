package com.sachi.service;

import com.sachi.Model.Order;
import com.sachi.response.PaymentResponse;

public interface PaymentService {
	public PaymentResponse createPaymentLink(Order order);
}
