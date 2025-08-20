package com.sachi.service;

import com.sachi.Model.Order;
import com.sachi.response.PaymentResponse;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        System.out.println("Stripe API Key: " + stripeApiKey); // Debug
    }

    @Override
    public PaymentResponse createPaymentLink(Order order) {
        try {
            // Set API key before creating session
            Stripe.apiKey = stripeApiKey;

            // Checkout Session parameters
            SessionCreateParams params =
                    SessionCreateParams.builder()
                            .setMode(SessionCreateParams.Mode.PAYMENT)
                            .setSuccessUrl("http://localhost:3000/payment/success/" + order.getId())
                            .setCancelUrl("http://localhost:3000/payment/cancel")
                            .addLineItem(
                                    SessionCreateParams.LineItem.builder()
                                            .setQuantity(1L)
                                            .setPriceData(
                                                    SessionCreateParams.LineItem.PriceData.builder()
                                                            .setCurrency("usd")
                                                            .setUnitAmount((long) (order.getTotalPrice() * 100)) // cents
                                                            .setProductData(
                                                                    SessionCreateParams.LineItem.PriceData.ProductData
                                                                            .builder()
                                                                            .setName("~ Sachi Food Restaurant ~")
                                                                            .build()
                                                            )
                                                            .build()
                                            )
                                            .build()
                            )
                            .build();

            Session session = Session.create(params);

            // Response object
            PaymentResponse response = new PaymentResponse();
            response.setPayment_url(session.getUrl());
            response.setSessionId(session.getId());
            return response;

        } catch (StripeException e) {
            e.printStackTrace(); // show real error in console
            throw new RuntimeException("Error creating payment link: " + e.getMessage(), e);
        }
    }
}
